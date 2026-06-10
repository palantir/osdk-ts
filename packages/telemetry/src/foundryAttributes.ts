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

// === UPSTREAM CONTRACT (STUB) ===========================================
// Foundry Telemetry Service (FTS) reads these specific LogRecord attribute
// keys rather than the stock OTLP `body`/`attributes` layout. The wire keys
// below are the seam against which this package is built today; when the FTS
// OTLP ingest contract is finalized, only these constants need reconciling.
// ========================================================================

/** Record attribute key carrying the human-readable log message. */
export const LOG_MESSAGE = "message";

/**
 * Record attribute key carrying the structured fields (the caller's context
 * plus any serialized error) as a nested map.
 */
export const LOG_TAGS = "tags";

/**
 * Record attribute key carrying an externally supplied trace id. Populated by
 * the trace-id seam (OTEL-3); absent by default.
 */
export const TRACE_ID = "traceId";

/**
 * Record attribute key carrying the source location of a logged error, which
 * FTS surfaces as `originatingCode`. Populated only on `error` logs, from the
 * top frame of the error's already-captured stack; the info/warn/debug path is
 * never stack-walked, matching how mature loggers (bunyan, log4js) leave
 * per-log source capture off by default because the stack walk is slow.
 */
export const ORIGINATING_CODE = "originatingCode";
