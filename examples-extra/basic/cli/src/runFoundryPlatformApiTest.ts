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

import * as Foundry from "@osdk/foundry";
import { Models } from "@osdk/internal.foundry";
import { client } from "./client.js";
import { logger } from "./logger.js";

export async function runFoundryPlatformApiTest() {
  const myUser = await Foundry.Security.Users.getCurrentUser(
    client,
    { preview: true },
  );
  logger.info(myUser, "Loaded user");
  console.log("User", myUser!.email);

  const models = await Models.LanguageModels.listLanguageModels(client);
  logger.info({
    models: models.data.map(m => `'${m.apiName}' in ${m.source}`),
  }, "Loaded models");
}
