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
      <svg aria-hidden viewBox="0 0 24 24" className="size-6" fill="none">
        <rect width="24" height="24" rx="2" fill="#304139" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 15.5V19L6 21L18 14V10L6.00001 3L3.00001 5V8.5L9 12L3 15.5ZM5.00001 7.4L13 12L5 16.6L5 18.0147L6 18.7L16 13V11L6 5.3L5.00001 6V7.4Z"
          fill="#5BEAAA"
        />
        <rect
          x="18"
          y="18"
          width="2"
          height="2"
          stroke="#5BEAAA"
          strokeWidth={2}
        />
      </svg>
      <span className="font-semibold tracking-tight">OSDK</span>
      <span className="rounded-md border px-1.5 py-0.5 font-mono text-[0.6875rem] font-medium text-fd-muted-foreground">
        TypeScript
      </span>
    </span>
  );
}
