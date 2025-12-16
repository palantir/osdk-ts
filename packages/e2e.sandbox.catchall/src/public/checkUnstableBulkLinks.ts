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

import type {
  ObjectIdentifiers,
  ObjectOrInterfaceDefinition,
  Osdk,
} from "@osdk/api";
import { __EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks } from "@osdk/api/unstable";
import {
  Employee,
  Venture,
  WeatherStation,
} from "@osdk/e2e.generated.catchall";
import { client } from "../client.js";
import { logger } from "../logger.js";

const locatorString = <Q extends ObjectOrInterfaceDefinition>(
  { $apiName, $primaryKey }: ObjectIdentifiers<Q>,
) => `${$apiName}:${$primaryKey}`;

const objectIdentifier = <Q extends ObjectOrInterfaceDefinition>(
  { $apiName, $primaryKey }: Osdk.Instance<Q>,
): ObjectIdentifiers<Q> => ({ $apiName, $primaryKey });

const fetchAll = async <T>(
  objectSet: { asyncIter: () => AsyncIterableIterator<T> },
) => {
  const result = [];
  for await (const obj of objectSet.asyncIter()) result.push(obj);
  return result;
};

export const buildGraph = async (): Promise<void> => {
  const venturesObjectSet = client(Venture);

  // Fetch objects
  const allVentures = new Map(
    (await fetchAll(venturesObjectSet)).map(
      venture => [objectIdentifier(venture), venture],
    ),
  );
  const allLinkedEmployees = new Map((await fetchAll(
    venturesObjectSet.pivotTo("employees"),
  )).map(employee => [objectIdentifier(employee), employee]));

  // Fetch links and build graph
  const ventureToEmployees = new Map<
    Osdk.Instance<Venture>,
    Osdk.Instance<Employee>[]
  >();

  for await (
    const { source, target, linkType } of venturesObjectSet
      .experimental_asyncIterLinks([
        "employees",
      ])
  ) {
    const sourceVenture = allVentures.get(source)!;
    const targetEmployee = allLinkedEmployees.get(target)!;
    if (!ventureToEmployees.has(sourceVenture)) {
      ventureToEmployees.set(sourceVenture, []);
    }
    ventureToEmployees.get(sourceVenture)!.push(targetEmployee);
  }

  // Display graph
  for (const venture of allVentures.values()) {
    console.log(
      `Venture ${venture.$title} has `,
      ventureToEmployees.has(venture)
        ? `employees ${
          ventureToEmployees.get(venture)!.map(venture => venture.$title).join(
            ", ",
          )
        }`
        : "no ventures.",
    );
  }
};

export const checkAsyncIterLinks = async (): Promise<void> => {
  // one link
  for await (
    const { source, target, linkType } of client(Venture)
      .experimental_asyncIterLinks([
        "employees",
      ])
  ) {
    console.log(
      `${locatorString(source)} ---(${linkType})--> ${locatorString(target)}`,
    );
  }

  // multiple links
  for await (
    const { source, target, linkType } of client(Employee)
      .experimental_asyncIterLinks([
        "ventures",
        "peeps",
      ])
  ) {
    console.log(
      `${locatorString(source)} ---(${linkType})--> ${locatorString(target)}`,
    );
  }
};

// This is the old experimental bulk links feature.
export async function checkUnstableBulkLinks(): Promise<void> {
  // Test one to many
  const stations = await client(WeatherStation).fetchPage();
  for await (
    const {
      object,
      linkApiName,
      otherObjectApiName,
      otherObjectPk,
    } of client(__EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks).getBulkLinks(
      stations.data,
      [
        "boundariesUsState",
      ],
    )
  ) {
    logger.info(
      `Found link ${object.$objectType}:${object.$primaryKey} <- (${linkApiName}) -> ${otherObjectApiName}:${otherObjectPk}`,
    );
  }

  const { data: employees } = await client(Employee).fetchPage({
    $pageSize: 100,
  });

  // test many to many
  logger.debug("Fetching the bulk links");

  for await (
    const {
      object,
      linkApiName,
      otherObjectApiName,
      otherObjectPk,
    } of client(__EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks).getBulkLinks(
      employees,
      [
        "ventures",
        "amishsSyncGroup",
      ],
    )
  ) {
    logger.info(
      `Found link ${object.$objectType}:${object.$primaryKey} <- (${linkApiName}) -> ${otherObjectApiName}:${otherObjectPk}`,
    );
  }
}

void checkUnstableBulkLinks();
void checkAsyncIterLinks();
void buildGraph();
