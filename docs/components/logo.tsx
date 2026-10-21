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
export function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="size-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M12 2.75 20.25 7.5v9L12 21.25 3.75 16.5v-9L12 2.75Z" />
        <path d="M12 21.25V12m0 0 8.25-4.5M12 12 3.75 7.5" />
      </svg>
      <span className="font-semibold tracking-tight">OSDK</span>
      <span className="rounded-md border px-1.5 py-0.5 font-mono text-[0.6875rem] font-medium text-fd-muted-foreground">
        TypeScript
      </span>
    </span>
  );
}
