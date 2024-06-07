/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { RequestHandler } from "msw";
import { http, HttpResponse } from "msw";

export const multipassServerHandlers: Array<RequestHandler> = [
  http.post(
    "https://stack.palantir.com/multipass/api/oauth2/token",
    async (req) => {
      const body = await req.request.text();
      const parsedBody = new URLSearchParams(body);
      const parsedBodyArray = Array.from(parsedBody.entries());

      if (
        parsedBody.get("grant_type") === "client_credentials"
        && parsedBody.get("client_id") === "myClientId"
        && parsedBody.get("client_secret") === "myClientSecret"
        && parsedBody.get("scopes")?.includes("offline_access")
        && parsedBodyArray.length === 4
      ) {
        return HttpResponse.json({
          access_token: "myAccessToken",
          token_type: "bearer",
          refresh_token: "myRefreshToken",
          expires_in: 3600,
        });
      }

      if (
        parsedBody.get("client_id") === "myClientId"
        && parsedBody.get("grant_type") === "authorization_code"
        && parsedBody.get("code") === "callBackCode"
        && parsedBody.get("redirect_uri") === "localhost"
        && parsedBody.get("code_verifier") === "01020304"
        && parsedBodyArray.length === 5
      ) {
        return HttpResponse.json({
          access_token: "myAccessToken",
          token_type: "bearer",
          refresh_token: "myRefreshToken",
          expires_in: 3600,
        });
      }

      if (
        parsedBody.get("client_id") === "myClientId"
        && parsedBody.get("grant_type") === "refresh_token"
        && parsedBody.get("refresh_token") === "myRefreshToken"
        && parsedBodyArray.length === 3
      ) {
        return HttpResponse.json(
          {
            access_token: "refreshedAccessToken",
            token_type: "bearer",
            refresh_token: "refreshedRefreshToken",
            expires_in: 3600,
          },
        );
      }

      return HttpResponse.json(
        { message: "Invalid request body" },
        { status: 400 },
      );
    },
  ),

  http.post(
    "https://stack.palantir.com/multipass/api/oauth2/revoke_token",
    async (req) => {
      const body = await req.request.text();
      const parsedBody = new URLSearchParams(body);
      const parsedBodyArray = Array.from(parsedBody.entries());
      if (
        parsedBodyArray.length === 3
        && parsedBody.get("client_id") === "myClientId"
        && parsedBody.get("client_secret") === "myClientSecret"
        && parsedBody.get("token") === "myAccessToken"
      ) {
        return HttpResponse.json({});
      }

      if (
        parsedBodyArray.length === 2
        && parsedBody.get("client_id") === "myClientId"
        && parsedBody.get("token") === "myAccessToken"
      ) {
        return HttpResponse.json({});
      }

      return HttpResponse.json(
        { message: "Invalid request body" },
        { status: 400 },
      );
    },
  ),
];
