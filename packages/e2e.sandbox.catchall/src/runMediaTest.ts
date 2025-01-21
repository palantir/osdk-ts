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

import { createMediaUpload } from "@osdk/client";
import { $Actions, MnayanOsdkMediaObject } from "@osdk/e2e.generated.catchall";
import { client } from "./client.js";
import * as testImg from "./images/todo.png";

export async function runMediaTest(): Promise<void> {
  const result = await client(MnayanOsdkMediaObject).fetchOne(
    "7c2aa4e0-9cd6-48c1-9d09-653249feb4e7",
  );

  console.log("Object id:", result?.id);
  console.log("Object Media reference:", result?.mediaReference);

  const mediaMetadata = await result.mediaReference?.fetchMetadata();
  const response = await result.mediaReference?.fetchContents().then(
    response => {
      if (!response.ok) {
        console.log("Error fetching data");
      } else {
        const mimeType = response.headers.get("Content-Type");
        console.log("Data mimetype:", mimeType);
      }
    },
  );

  const img = await fetch("./images/todo.png").then(response =>
    response.blob()
  );

  const mediaUpload = createMediaUpload({
    data: img,
    fileName: "test.png",
    objectTypeApiName: MnayanOsdkMediaObject.apiName,
    propertyApiName: "mediaReference",
  });
  console.log("Img:", mediaUpload);
  // await client($Actions.createMediaObject).applyAction({
  //   path: "test",
  //   media_reference: mediaUpload,
  // });

  console.log(mediaMetadata);
}
