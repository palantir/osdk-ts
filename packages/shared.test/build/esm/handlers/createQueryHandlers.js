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

import { OntologiesV2 } from "../mock/index.js";
export const createQueryHandlers = (baseUrl, fauxFoundry) => [
/**
 * Execute Queries
 */
OntologiesV2.Queries.execute(baseUrl, async ({
  request,
  params: {
    ontologyApiName,
    queryApiName
  }
}) => {
  const queryImpl = fauxFoundry.getOntology(ontologyApiName).getQueryImpl(queryApiName);
  return queryImpl(await request.json(), fauxFoundry.getDataStore(ontologyApiName));
})];
//# sourceMappingURL=createQueryHandlers.js.map