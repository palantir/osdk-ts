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

// `Person`, with its `sendEmail` action type constraint being phased in to required.
import { defineInterface } from "../../../api/defineInterface.js";
import { defineInterfaceActionTypeConstraint } from "../../../api/defineInterfaceActionTypeConstraint.js";

const person = defineInterface({
  apiName: "Person",
  displayName: "Person",
  properties: {
    firstName: { type: "string" },
  },
  schemaMigrations: {
    transitions: [
      {
        id: "requireSendEmail",
        title: "Require send email",
        gracePeriod: { type: "afterInstall", days: 30 },
        instructions: [
          {
            type: "addRequiredActionTypeConstraint",
            actionTypeConstraint: "sendEmail",
          },
        ],
      },
    ],
  },
});

defineInterfaceActionTypeConstraint({
  interfaceType: person,
  apiName: "sendEmail",
  displayName: "Send email",
  description: "Sends the person an email",
  requireImplementation: false,
  parameters: [],
});
