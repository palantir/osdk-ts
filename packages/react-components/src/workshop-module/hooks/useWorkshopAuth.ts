/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useCallback, useEffect, useRef, useState } from "react";

export type AuthStatus =
  | "checking"
  | "ready"
  | "required"
  | "signingIn"
  | "unavailable";
type SessionStatus = "available" | "required" | "unknown";

interface AuthPopup {
  window: Window;
  users: number;
}

const authPopups = new Map<string, AuthPopup>();

function acquireAuthPopup(origin: string) {
  let popup = authPopups.get(origin);
  if (popup == null || popup.window.closed) {
    const authWindow = window.open(
      "about:blank",
      "_blank",
      "popup,width=850,height=600",
    );
    if (authWindow == null) return undefined;

    try {
      // Remove access to the embedding app before navigating, keeping our handle for cleanup.
      authWindow.opener = null;
      authWindow.location.href = new URL(
        "/workspace/auth-redirect",
        origin,
      ).href;
    } catch (error) {
      authWindow.close();
      throw error;
    }
    popup = { window: authWindow, users: 0 };
    authPopups.set(origin, popup);
  }

  const sharedPopup = popup;
  sharedPopup.users++;
  return {
    window: sharedPopup.window,
    release: () => {
      sharedPopup.users--;
      if (sharedPopup.users === 0) {
        if (authPopups.get(origin) === sharedPopup) authPopups.delete(origin);
        if (!sharedPopup.window.closed) sharedPopup.window.close();
      }
    },
  };
}

export function useWorkshopAuth(url: string | undefined): {
  status: AuthStatus;
  signIn: () => void;
} {
  const [state, setState] = useState<{ url?: string; status: AuthStatus }>({
    status: "checking",
  });
  const popupRef = useRef<ReturnType<typeof acquireAuthPopup>>(undefined);
  const requestRef = useRef<AbortController | undefined>(undefined);

  const setStatus = useCallback(
    (status: AuthStatus) => {
      setState({ url, status });
    },
    [url],
  );

  const stopSignIn = useCallback(() => {
    requestRef.current?.abort();
    requestRef.current = undefined;
    popupRef.current?.release();
    popupRef.current = undefined;
  }, []);

  const checkSession = useCallback(async (): Promise<
    SessionStatus | undefined
  > => {
    if (url == null) return;

    const controller = new AbortController();
    requestRef.current = controller;
    const timeout = setTimeout(() => controller.abort(), 5000);
    let result: SessionStatus = "unknown";
    try {
      // Workshop uses browser cookies, not the embedding app's OAuth token.
      const response = await fetch(url, {
        method: "HEAD",
        credentials: "include",
        redirect: "manual",
        cache: "no-store",
        signal: controller.signal,
      });
      if (response.type === "opaqueredirect" || response.status === 401) {
        result = "required";
      } else if (response.ok) {
        result = "available";
      }
    } catch {
      // CORS, network errors, or unsupported HEAD requests must not prevent embedding.
    } finally {
      clearTimeout(timeout);
    }

    if (requestRef.current !== controller) return;
    requestRef.current = undefined;
    return result;
  }, [url]);

  const signIn = useCallback(() => {
    if (url == null) return;

    if (popupRef.current != null && !popupRef.current.window.closed) {
      popupRef.current.window.focus();
      return;
    }
    stopSignIn();
    try {
      popupRef.current = acquireAuthPopup(new URL(url).origin);
    } catch {
      // Sandboxed hosts can reject opening windows instead of returning null.
    }
    setStatus(popupRef.current == null ? "required" : "signingIn");
  }, [url, stopSignIn, setStatus]);

  const checkSignInCompleted = useCallback(async () => {
    const popup = popupRef.current;
    // A slow session check must finish before the next poll starts.
    if (popup == null || requestRef.current != null) return;

    const result = await checkSession();
    if (result == null || popupRef.current !== popup) return;

    if (result === "available") {
      stopSignIn();
      setStatus("ready");
    } else if (popup.window.closed) {
      stopSignIn();
      // Closing or losing the popup handle does not establish a browser session.
      setStatus(result === "required" ? "unavailable" : "ready");
    }
  }, [checkSession, stopSignIn, setStatus]);

  const status = state.url === url ? state.status : "checking";

  useEffect(() => {
    if (status !== "signingIn") return;

    const timer = setInterval(() => void checkSignInCompleted(), 1000);
    return () => clearInterval(timer);
  }, [status, checkSignInCompleted]);

  useEffect(() => {
    if (url == null) return;

    let active = true;
    setStatus("checking");
    void checkSession().then((result) => {
      if (!active || result == null) return;
      if (result === "required") signIn();
      else setStatus("ready");
    });

    return () => {
      active = false;
      stopSignIn();
    };
  }, [url, checkSession, signIn, setStatus, stopSignIn]);

  return { status, signIn };
}
