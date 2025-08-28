/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import React, { useEffect, useRef } from "react";

export const EntrypointIframe: React.FC<{ src: string }> = ({ src }) => {
  // We expect the widget to not load properly as we don't provide the proper runtime.
  // These errors are not useful to the user as we just put this iframe on the page to
  // trigger vite to load the entrypoints.
  const iframeRef = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    if (iframeRef.current?.contentWindow != null) {
      const iframeWindow = iframeRef.current.contentWindow as Window & {
        console: Console;
      };
      iframeWindow.console.log = () => {};
      iframeWindow.console.warn = () => {};
      iframeWindow.console.error = () => {};
      iframeWindow.onerror = () => {
        return true;
      };
    }
  }, []);
  return <iframe ref={iframeRef} src={src} />;
};
