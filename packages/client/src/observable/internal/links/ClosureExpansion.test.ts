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

import type { LinkHopDescriptor, ObjectRef } from "@osdk/api";
import { objectRefKey, ObjectRefMap } from "@osdk/api";
import { describe, expect, it, vi } from "vitest";
import type { ExpandedChild, ExpansionContext } from "./ClosureExpansion.js";
import { ClientDrivenBfsExpansion } from "./ClosureExpansion.js";

interface TestInstance {
  $objectType: string;
  $primaryKey: string | number;
  name: string;
}

function ref(type: string, pk: string | number): ObjectRef {
  return { $objectType: type, $primaryKey: pk };
}

function child(type: string, pk: string | number): ExpandedChild<TestInstance> {
  return {
    ref: ref(type, pk),
    instance: { $objectType: type, $primaryKey: pk, name: `${type}-${pk}` },
  };
}

const hop: LinkHopDescriptor = {
  sourceTypeApiName: "Node",
  linkApiName: "children",
  targetTypeApiName: "Node",
  multiplicity: true,
  sourceIsInterface: false,
};

describe("ClientDrivenBfsExpansion", () => {
  it("expands one level, grouping children by parent", async () => {
    const a = ref("Node", "a");
    const b = ref("Node", "b");

    const resolveLink = vi.fn().mockResolvedValue({
      concreteLinkApiName: "children",
      targetType: "Node",
      multiplicity: true,
    });

    const childrenOf = new Map<string, Array<ExpandedChild<TestInstance>>>([
      [objectRefKey(a), [child("Node", "a1"), child("Node", "a2")]],
      [objectRefKey(b), [child("Node", "b1")]],
    ]);

    const fetchLinks = vi.fn().mockImplementation(
      (
        _concreteType: string,
        _concreteLinkApiName: string,
        sources: ReadonlyArray<ObjectRef>,
      ) => {
        const result = new ObjectRefMap<
          ReadonlyArray<ExpandedChild<TestInstance>>
        >();
        for (const source of sources) {
          result.set(source, childrenOf.get(objectRefKey(source)) ?? []);
        }
        return Promise.resolve(result);
      },
    );

    const recordError = vi.fn();
    const ctx: ExpansionContext<TestInstance> = {
      resolveLink,
      fetchLinks,
      recordError,
    };

    const expansion = new ClientDrivenBfsExpansion<TestInstance>();
    const result = await expansion.expandLevel([a, b], hop, ctx);

    expect(result.get(a)?.map((c) => c.ref.$primaryKey)).toEqual(["a1", "a2"]);
    expect(result.get(b)?.map((c) => c.ref.$primaryKey)).toEqual(["b1"]);
    expect(recordError).not.toHaveBeenCalled();
    // single concrete type => one batched fetch
    expect(fetchLinks).toHaveBeenCalledTimes(1);
  });

  it("skips and records concrete types that cannot resolve the link", async () => {
    const dog = ref("Dog", "d1");
    const rock = ref("Rock", "r1");

    const resolveLink = vi.fn().mockImplementation(
      (concreteType: string) => {
        if (concreteType === "Rock") {
          return Promise.reject(
            new Error("Rock does not implement interface link children"),
          );
        }
        return Promise.resolve({
          concreteLinkApiName: "children",
          targetType: "Dog",
          multiplicity: true,
        });
      },
    );

    const fetchLinks = vi.fn().mockImplementation(
      (
        _concreteType: string,
        _concreteLinkApiName: string,
        sources: ReadonlyArray<ObjectRef>,
      ) => {
        const out = new ObjectRefMap<
          ReadonlyArray<ExpandedChild<TestInstance>>
        >();
        for (const source of sources) {
          out.set(source, [child("Dog", "pup")]);
        }
        return Promise.resolve(out);
      },
    );

    const recordError = vi.fn();
    const ctx: ExpansionContext<TestInstance> = {
      resolveLink,
      fetchLinks,
      recordError,
    };

    const expansion = new ClientDrivenBfsExpansion<TestInstance>();
    const result = await expansion.expandLevel([dog, rock], hop, ctx);

    expect(result.get(dog)?.map((c) => c.ref.$primaryKey)).toEqual(["pup"]);
    expect(result.has(rock)).toBe(false);
    expect(recordError).toHaveBeenCalledTimes(1);
    // only the resolvable concrete type triggers a fetch
    expect(fetchLinks).toHaveBeenCalledTimes(1);
  });

  it("fetches by the resolved concrete link name, never the interface link name", async () => {
    const team = ref("Team", "t1");

    // An interface-typed hop: the link is declared on an interface, and the
    // concrete type resolves it to a different concrete link apiName.
    const interfaceHop: LinkHopDescriptor = {
      sourceTypeApiName: "HasMembers",
      linkApiName: "members",
      targetTypeApiName: "Person",
      multiplicity: true,
      sourceIsInterface: true,
    };

    const resolveLink = vi.fn().mockResolvedValue({
      concreteLinkApiName: "teamMembers",
      targetType: "Person",
      multiplicity: true,
    });

    const fetchLinks = vi.fn().mockImplementation(
      (
        _concreteType: string,
        _concreteLinkApiName: string,
        sources: ReadonlyArray<ObjectRef>,
      ) => {
        const out = new ObjectRefMap<
          ReadonlyArray<ExpandedChild<TestInstance>>
        >();
        for (const source of sources) {
          out.set(source, [child("Person", "p1")]);
        }
        return Promise.resolve(out);
      },
    );

    const recordError = vi.fn();
    const ctx: ExpansionContext<TestInstance> = {
      resolveLink,
      fetchLinks,
      recordError,
    };

    const expansion = new ClientDrivenBfsExpansion<TestInstance>();
    const result = await expansion.expandLevel([team], interfaceHop, ctx);

    // resolveLink is asked about the concrete type using the interface link name
    expect(resolveLink).toHaveBeenCalledWith("Team", "members");

    // the fetch must use the resolved concrete link name
    expect(fetchLinks).toHaveBeenCalledTimes(1);
    expect(fetchLinks).toHaveBeenCalledWith(
      "Team",
      "teamMembers",
      [team],
    );

    // the interface link name must NEVER reach the concrete fetch
    for (const call of fetchLinks.mock.calls) {
      expect(call[1]).not.toBe("members");
    }

    expect(result.get(team)?.map((c) => c.ref.$primaryKey)).toEqual(["p1"]);
    expect(recordError).not.toHaveBeenCalled();
  });
});
