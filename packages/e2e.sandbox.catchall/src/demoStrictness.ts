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

import { BoundariesUsState } from "@osdk/e2e.generated.catchall";
import { expectType } from "ts-expect";
import { client } from "./client.js";

export async function demoStrictnessObject(): Promise<void> {
  const { data: defaultResults } = await client(BoundariesUsState)
    .fetchPage();
  expectType<string>(defaultResults[0].usState);

  // const { data: dropResults } = await client(BoundariesUsState)
  //   .fetchPage({ $__EXPERIMENTAL_strictNonNull: "drop" });
  // expectType<string>(dropResults[0].usState);

  // const { data: notStrictResults } = await client(BoundariesUsState)
  //   .fetchPage({ $__EXPERIMENTAL_strictNonNull: false });
  // expectType<string | undefined>(notStrictResults[0].usState);

  // const { data: throwResults } = await client(BoundariesUsState)
  //   .fetchPage({ $__EXPERIMENTAL_strictNonNull: "throw" });
  // expectType<string>(throwResults[0].usState);

  // const { data: fooDataNotStrict } = await client(FooInterface)
  //   .fetchPage({ $__EXPERIMENTAL_strictNonNull: false });

  // const employeeNotStrict = fooDataNotStrict[0].$as(Employee);
}

export async function demoStrictnessInterface(): Promise<void> {
  // const { data: fooDataNotStrict } = await client(FooInterface)
  //   .fetchPage({ $__EXPERIMENTAL_strictNonNull: false });

  // const employeeNotStrict = fooDataNotStrict[0].$as(Employee);
  // expectType<
  //   Osdk<
  //     Employee,
  //     "$notStrict" | "firstName" | "email"
  //   >
  // >(employeeNotStrict);
}
