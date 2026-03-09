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

import type { ActionDefinition, ActionMetadata } from "@osdk/api";
import React from "react";
import type { ActionFormProps } from "./ActionFormApi.js";
import { useActionMetadata } from "./useActionMetadata.js";

export function ActionForm<T, Q extends ActionDefinition<T>>({
  actionDefinition,
  ...props
}: ActionFormProps<Q>): React.ReactElement {
  const { isLoading, metadata, error } = useActionMetadata(actionDefinition);

  return (
    <div>
      <h3>{props.formTitle ?? metadata?.displayName ?? metadata?.apiName}</h3>
      {error != null && <div>Failed to load action metadata: {error}</div>}
      {isLoading && <div>Loading...</div>}
      {metadata != null && <ActionFormFields metadata={metadata} />}
    </div>
  );
}

interface ActionFormFieldsProps {
  metadata: ActionMetadata;
}

function ActionFormFields({
  metadata,
}: ActionFormFieldsProps): React.ReactElement {
  return (
    <form>
      {Object.entries(metadata.parameters).map(([key, param]) => (
        <ActionFormField key={key} paramKey={key} param={param} />
      ))}
    </form>
  );
}

interface ActionFormFieldProps {
  paramKey: string;
  param: ActionMetadata.Parameter;
}

function ActionFormField({
  paramKey,
  param,
}: ActionFormFieldProps): React.ReactElement {
  const paramType = typeof param.type === "string"
    ? param.type
    : param.type.type;
  const isRequired = param.nullable === false;

  return (
    <div>
      <label>
        {paramKey}
        {isRequired && " *"}
      </label>
      {param.description != null && <span>{param.description}</span>}
      <div>{paramType}</div>
    </div>
  );
}
