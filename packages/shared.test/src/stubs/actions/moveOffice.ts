/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { FauxActionImpl, TypeHelpers as TH } from "@osdk/faux";
import type { MoveOffice } from "../actionTypes.js";
import { officeObjectType } from "../objectTypeV2.js";

export const moveOfficeImpl: FauxActionImpl<typeof MoveOffice> = (
  batch,
  payload,
  ctx,
): void => {
  // we are only setting capacity because we don't have a way to go from address
  // to gps coord
  batch.modifyObject(
    officeObjectType.apiName,
    payload.parameters.officeId as string,
    {
      capacity: payload.parameters.newCapacity as number,
    } satisfies Partial<TH.JustProps<typeof officeObjectType>>,
  );
};
