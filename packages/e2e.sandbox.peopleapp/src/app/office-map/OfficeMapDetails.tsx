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

import { useOsdkObject } from "@osdk/react";

import { Office } from "../../generatedNoCheck2/index.js";

export function OfficeMapDetails({
  officeKey,
}: {
  officeKey: string;
}): React.JSX.Element {
  const { object: office, isLoading, error } = useOsdkObject(Office, officeKey);

  return (
    <article>
      <h4>{office?.name ?? officeKey}</h4>
      <p>Office ID: {officeKey}</p>
      {isLoading && <output>Refreshing office details…</output>}
      {error != null && (
        <p role="alert">Unable to load office details: {error.message}</p>
      )}
      {office != null && (
        <p>
          {office.location == null
            ? "No location is recorded for this office."
            : "Location available on the map."}
        </p>
      )}
    </article>
  );
}
