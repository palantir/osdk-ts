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

import { describe, expect, it } from "vitest";
import { filterObjects } from "./filterObjects.js";

describe(filterObjects, () => {
  const object1 = {
    __apiName: "test-obj",
    __primaryKey: "1",
    name: "abc",
    age: 25,
    tags: ["red", "blue"],
    description: "hello world example",
  };

  const object2 = {
    __apiName: "test-obj",
    __primaryKey: "3",
    name: "cba abc",
    age: 30,
    tags: ["green"],
    description: "foo bar baz",
  };

  const object3 = {
    __apiName: "test-obj",
    __primaryKey: "2",
    name: "abcdef",
    age: 25,
    tags: ["red", "green"],
    nickname: "red green",
    description: "hi there friend",
  };

  const object4 = {
    __apiName: "test-obj",
    __primaryKey: "4",
    name: "aba aaa",
    age: 40,
    tags: [],
    nickname: null,
    description: "world hello example",
  };

  const objects = [object1, object2, object3, object4];

  it("properly handles startsWith", () =>
    expect(filterObjects(objects, {
      type: "startsWith",
      field: "description",
      value: "hello wor",
    })).toEqual([object1]));

  it("startsWith with single term prefix", () =>
    expect(filterObjects(objects, {
      type: "startsWith",
      field: "description",
      value: "hel",
    })).toEqual([object1, object4]));

  it("startsWith returns empty for non-string fields", () =>
    expect(filterObjects(objects, {
      type: "startsWith",
      field: "age",
      value: "25",
    })).toEqual([]));

  it("properly handles eq", () =>
    expect(filterObjects(objects, {
      type: "eq",
      field: "age",
      value: 25,
    })).toEqual([object1, object3]));

  it("properly handles gt", () =>
    expect(filterObjects(objects, {
      type: "gt",
      field: "age",
      value: 25,
    })).toEqual([object2, object4]));

  it("properly handles lt", () =>
    expect(filterObjects(objects, {
      type: "lt",
      field: "age",
      value: 30,
    })).toEqual([object1, object3]));

  it("properly handles gte", () =>
    expect(filterObjects(objects, {
      type: "gte",
      field: "age",
      value: 30,
    })).toEqual([object2, object4]));

  it("properly handles lte", () =>
    expect(filterObjects(objects, {
      type: "lte",
      field: "age",
      value: 25,
    })).toEqual([object1, object3]));

  it("properly handles in", () =>
    expect(filterObjects(objects, {
      type: "in",
      field: "age",
      value: [25, 40],
    })).toEqual([object1, object3, object4]));

  it("properly handles contains for array fields", () =>
    expect(filterObjects(objects, {
      type: "contains",
      field: "tags",
      value: "red",
    })).toEqual([object1, object3]));

  it("contains returns empty for non-array fields", () =>
    expect(filterObjects(objects, {
      type: "contains",
      field: "name",
      value: "a",
    })).toEqual([]));

  it("properly handles and", () =>
    expect(filterObjects(objects, {
      type: "and",
      value: [
        { type: "eq", field: "age", value: 25 },
        { type: "startsWith", field: "name", value: "abc" },
      ],
    })).toEqual([object1, object3]));

  it("properly handles or", () =>
    expect(filterObjects(objects, {
      type: "or",
      value: [
        { type: "eq", field: "age", value: 40 },
        { type: "eq", field: "name", value: "abc" },
      ],
    })).toEqual([object4, object1]));

  it("properly handles not", () =>
    expect(filterObjects(objects, {
      type: "not",
      value: { type: "eq", field: "age", value: 25 },
    })).toEqual([object2, object4]));

  it("properly handles isNull with value true", () =>
    expect(filterObjects(objects, {
      type: "isNull",
      field: "nickname",
      value: true,
    })).toEqual([object1, object2, object4]));

  it("properly handles isNull with value false", () =>
    expect(filterObjects(objects, {
      type: "isNull",
      field: "nickname",
      value: false,
    })).toEqual([object3]));

  it("properly handles containsAnyTerm", () =>
    expect(filterObjects(objects, {
      type: "containsAnyTerm",
      field: "description",
      value: "hello foo",
    })).toEqual([object1, object2, object4]));

  it("containsAnyTerm is case insensitive", () =>
    expect(filterObjects(objects, {
      type: "containsAnyTerm",
      field: "description",
      value: "HELLO",
    })).toEqual([object1, object4]));

  it("containsAnyTerm returns empty for non-string fields", () =>
    expect(filterObjects(objects, {
      type: "containsAnyTerm",
      field: "age",
      value: "25",
    })).toEqual([]));

  it("properly handles containsAllTerms", () =>
    expect(filterObjects(objects, {
      type: "containsAllTerms",
      field: "description",
      value: "hello world",
    })).toEqual([object1, object4]));

  it("containsAllTerms is case insensitive", () =>
    expect(filterObjects(objects, {
      type: "containsAllTerms",
      field: "description",
      value: "HELLO WORLD",
    })).toEqual([object1, object4]));

  it("containsAllTerms returns empty for non-string fields", () =>
    expect(filterObjects(objects, {
      type: "containsAllTerms",
      field: "age",
      value: "25",
    })).toEqual([]));

  it("properly handles containsAllTermsInOrder", () =>
    expect(filterObjects(objects, {
      type: "containsAllTermsInOrder",
      field: "description",
      value: "hello world",
    })).toEqual([object1]));

  it("containsAllTermsInOrder returns empty for non-string fields", () =>
    expect(filterObjects(objects, {
      type: "containsAllTermsInOrder",
      field: "age",
      value: "25",
    })).toEqual([]));

  it("properly handles containsAllTermsInOrderPrefixLastTerm", () =>
    expect(filterObjects(objects, {
      type: "containsAllTermsInOrderPrefixLastTerm",
      field: "description",
      value: "hello wor",
    })).toEqual([object1]));

  it("containsAllTermsInOrderPrefixLastTerm with single term prefix", () =>
    expect(filterObjects(objects, {
      type: "containsAllTermsInOrderPrefixLastTerm",
      field: "description",
      value: "hel",
    })).toEqual([object1, object4]));

  it("containsAllTermsInOrderPrefixLastTerm returns empty for non-string fields", () =>
    expect(filterObjects(objects, {
      type: "containsAllTermsInOrderPrefixLastTerm",
      field: "age",
      value: "25",
    })).toEqual([]));

  it("throws for propertyIdentifier usage", () =>
    expect(() =>
      filterObjects(objects, {
        type: "eq",
        propertyIdentifier: { type: "property", apiName: "someId" },
        value: 25,
      })
    ).toThrow("propertyIdentifier not supported"));
});
