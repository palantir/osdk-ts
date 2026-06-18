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

// Version-internal browser deep imports, contained here so a pin bump fails in
// one place (browserOtel.test.ts smoke-imports them). The browser builds post
// via `fetch` keepalive; nodenext ignores the packages' `browser` field. The
// exact 0.218.0 pin is load-bearing.
export { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http/build/src/platform/browser/index.js";
export { BatchLogRecordProcessor } from "@opentelemetry/sdk-logs/build/src/platform/browser/index.js";
