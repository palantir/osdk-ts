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

export const successTemplate = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Authentication Successful</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        background: #000000;
      }
      .container {
        text-align: center;
        padding: 3rem;
        background: #1a1a1a;
        border-radius: 0.5rem;
        border: 1px solid #2d2d2d;
        max-width: 500px;
      }
      h1 {
        color: #ffffff;
        margin: 0 0 1rem 0;
        font-size: 1.75rem;
        font-weight: 600;
      }
      p {
        color: #a0a0a0;
        font-size: 1rem;
        margin: 0;
        line-height: 1.6;
      }
      .icon {
        font-size: 3rem;
        margin-bottom: 1.5rem;
        color: #00d4aa;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="icon">✓</div>
      <h1>Authentication Successful</h1>
      <p>You can now close this tab and return to the terminal.</p>
    </div>
  </body>
</html>
`;
