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

import invariant from "tiny-invariant";
import type * as ir from "../ir/index.js";
import { quoteMimeTypeOrEmpty } from "../quoteMimeTypeOrEmpty.js";
import { addAll } from "../util/addAll.js";
import { groupByAsObject } from "../util/groupByAsObject.js";
import type { Component } from "./Component.js";
import type { Model } from "./Model.js";
import { OptionalType } from "./OptionalType.js";
import type { Type } from "./Type.js";

export class StaticOperation {
  model: Model;
  name: string;
  httpMethod: ir.HttpMethod;
  path: string;
  documentation: ir.Documentation | undefined;
  auth: ir.Auth;

  constructor(
    public spec: ir.StaticOperation,
    model: Model,
  ) {
    this.model = model;
    this.name = spec.name;
    this.httpMethod = spec.httpMethod;
    this.path = spec.path;
    this.documentation = spec.documentation;
    this.auth = spec.auth;
  }

  get referencedComponents(): Set<Component> {
    const ret = new Set<Component>();
    if (typeof this.responseType !== "string") {
      addAll(ret, this.responseType.referencedComponents);
    }
    if (typeof this.requestType !== "string") {
      addAll(ret, this.requestType.referencedComponents);
    }
    addAll(ret, this.parameters.flatMap(p => p.type.referencedComponents));
    return ret;
  }

  get responseMimeType(): string {
    const { body } = this.spec.response;
    if (body.type === "ok") {
      const { responseType } = body.ok;
      if (responseType.type === "binary") {
        return quoteMimeTypeOrEmpty(responseType.binary.mediaType);
      }

      let { mediaType } = responseType.type === "component"
        ? responseType.component
        : responseType;

      return quoteMimeTypeOrEmpty(mediaType);
    } else {
      return "";
    }
  }

  get responseType(): Type | "unknown" | "void" {
    const { body } = this.spec.response;
    if (body.type === "ok") {
      const { responseType, required } = body.ok;
      if (responseType.type === "binary") {
        return "unknown"; // FIXME
      }

      let { type: { type: irType } } = responseType.type === "component"
        ? responseType.component
        : responseType;

      const type = this.model.getType(irType);
      return required ? type : new OptionalType(type);
    } else {
      return "void";
    }
  }

  get requestBodyInfo(): { type: Type | undefined; mimeType: string } {
    const requestType = this.spec.requestBody?.body.requestType;
    const mimeType = requestType == null
      ? ""
      : requestType.type === "component"
      ? quoteMimeTypeOrEmpty(requestType.component.mediaType)
      : quoteMimeTypeOrEmpty(requestType.binary.mediaType);

    const type = requestType?.type === "component"
      ? this.model.getType(requestType.component.type.type)
      : undefined;

    return { mimeType, type };
  }

  get requestMimeType(): string {
    const requestType = this.spec.requestBody?.body.requestType;
    const mimeType = requestType == null
      ? ""
      : requestType.type === "component"
      ? quoteMimeTypeOrEmpty(requestType.component.mediaType)
      : quoteMimeTypeOrEmpty(requestType.binary.mediaType);

    return mimeType;
  }

  get requestType(): Type | "unknown" {
    const requestType = this.spec.requestBody?.body.requestType;

    const type = requestType?.type === "component"
      ? this.model.getType(requestType.component.type.type)
      : "unknown"; // FIXME

    return type;
  }

  get parametersByType(): Record<
    "PATH" | "QUERY" | "HEADER",
    | { name: string; type: Type; kind: "PATH" | "QUERY" | "HEADER" }[]
    | undefined
  > {
    return groupByAsObject(this.parameters, "kind");
  }

  get parameters(): Array<
    { name: string; type: Type; kind: "PATH" | "QUERY" | "HEADER" }
  > {
    type Params = Array<
      { name: string; type: Type; kind: "PATH" | "QUERY" | "HEADER" }
    >;

    const ret: Params = [];

    for (
      const { name, type: { type: dataType }, inputType } of this.spec
        .parameters
    ) {
      invariant(
        inputType === "PATH" || inputType === "QUERY" || inputType === "HEADER",
        `Only PATH and QUERY params are supported, not ${inputType}`,
      );

      ret.push({
        name,
        type: this.model.getType(dataType),
        kind: inputType,
      });
    }
    return ret;
  }
}
