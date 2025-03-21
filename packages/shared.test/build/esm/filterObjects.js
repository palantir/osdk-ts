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

export function subSelectPropertiesUrl(object, url) {
  const properties = new Set(url.searchParams.getAll("select"));
  if (properties.size === 0) {
    return object;
  }
  const result = Object.entries(object).reduce((acc, [key, value]) => {
    if (properties.has(key)) {
      acc[key] = value;
    } else if (key === "__primaryKey") {
      acc.__primaryKey = value;
    } else if (key === "__apiName") {
      acc.__apiName = value;
    }
    return acc;
  }, {});
  return result;
}
export function subSelectProperties(objects, urlOrProperties, includeCount, excludeRid) {
  let properties;
  if (Array.isArray(urlOrProperties)) {
    properties = new Set(urlOrProperties);
  } else {
    properties = new Set(urlOrProperties.searchParams.getAll("select"));
  }
  const result = objects.data.map(object => {
    // This is set when an object had an interface that was marked to return all properties
    if (object.$propsToReturn) {
      return {
        __apiName: object.__apiName,
        __primaryKey: object.__primaryKey,
        __title: object.__title,
        ...object.$propsToReturn,
        ...(excludeRid ? {} : {
          __rid: object.__rid
        })
      };
    }

    // no subselect provided, just handle the rid.
    if (properties.size === 0) {
      return excludeRid ? removeRid(object) : object;
    }

    // do subselect
    properties.add("__primaryKey");
    properties.add("__apiName");
    properties.add("__title");
    if (!excludeRid) properties.add("__rid");
    return Object.entries(object).reduce((acc, [key, value]) => {
      if (properties.has(key)) {
        acc[key] = value;
      }
      return acc;
    }, {});
  });
  const ret = {
    nextPageToken: objects.nextPageToken,
    data: result,
    totalCount: objects.totalCount
  };
  return ret;
}
function removeRid(object) {
  const {
    __rid,
    ...rest
  } = object;
  return rest;
}
//# sourceMappingURL=filterObjects.js.map