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

import { outdent } from "outdent";

export const loadObjectPageGuide = outdent`
    import { {{objectType}} } from "{{{packageName}}}";
    import { isOk, Osdk, PageResult, Result } from "@osdk/client";
    const firstPage: Result<PageResult<Osdk.Instance<{{objectType}}>>>
        = await client({{objectType}}).fetchPageWithErrors({ $pageSize: 30 });
    if (isOk(firstPage)) {
        const secondPage: Result<PageResult<Osdk.Instance<{{objectType}}, never, "{{titleProperty}}">>>
        // You can also down select properties to only get the properties you need from the object
        = await client({{objectType}}).fetchPageWithErrors({ $select: ["{{titleProperty}}"], $pageSize: 30, $nextPageToken: firstPage.value.nextPageToken });
        const objects = isOk(secondPage) ? [...firstPage.value.data, ...secondPage.value.data] : firstPage.value.data;
        const object = objects[0];
    }
    // To fetch a page without a result wrapper, use fetchPage with a try/catch instead
    try {
        const firstPage: PageResult<Osdk.Instance<{{objectType}}>>
            = await client({{objectType}}).fetchPage({ $pageSize: 30 });
        const secondPage: PageResult<Osdk.Instance<{{objectType}}>>
        = await client({{objectType}}).fetchPage({ $pageSize: 30, $nextPageToken: firstPage.nextPageToken });
        const objects = [...firstPage.data, ...secondPage.data];
        const object = objects[0];
    }
    catch (e) {
        console.error(e);
    }
`;
