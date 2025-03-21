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

import React from "react";
import { useOsdkClient } from "./useOsdkClient.js";
export function useOsdkMetadata(type) {
  const client = useOsdkClient();
  const [metadata, setMetadata] = React.useState(undefined);
  if (!metadata) {
    client.fetchMetadata(type).then(fetchedMetadata => {
      setMetadata(fetchedMetadata);
    }).catch(error => {
      // eslint-disable-next-line no-console
      console.error("Failed to fetch metadata", error);
    });
    return {
      loading: true
    };
  }
  return {
    loading: false,
    metadata
  };
}
//# sourceMappingURL=useOsdkMetadata.js.map