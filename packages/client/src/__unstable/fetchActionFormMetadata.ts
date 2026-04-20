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

import type {
  ActionTypeMetadata,
  ActionTypeRichTextComponent as UnstableRichTextComponent,
  FormContent as UnstableFormContent,
  Section as UnstableSection,
} from "@osdk/client.unstable";
import { loadActionTypes } from "@osdk/client.unstable";
import { additionalContext, type Client } from "../Client.js";
import { makeConjureContext } from "../ontology/makeConjureContext.js";

// ---------------------------------------------------------------------------
// Public types — slim mirrors of the client.unstable types.
// These are the only types exported to consumers.
// ---------------------------------------------------------------------------

export interface ActionFormRichTextComponent_message {
  type: "message";
  message: string;
}

export interface ActionFormRichTextComponent_parameter {
  type: "parameter";
  parameter: string;
}

export interface ActionFormRichTextComponent_parameterProperty {
  type: "parameterProperty";
  parameterProperty: {
    parameterId: string;
    propertyTypeId: string;
  };
}

export type ActionFormRichTextComponent =
  | ActionFormRichTextComponent_message
  | ActionFormRichTextComponent_parameter
  | ActionFormRichTextComponent_parameterProperty;

export type ActionFormContentItem =
  | { type: "parameterId"; parameterId: string }
  | { type: "sectionId"; sectionId: string };

export type ActionFormSectionStyle = "box" | "minimal";

export interface ActionFormSectionDisplayMetadata {
  collapsedByDefault: boolean;
  columnCount: number;
  description: string;
  displayName: string;
  showTitleBar: boolean;
  style?: ActionFormSectionStyle | undefined;
}

export interface ActionFormSection {
  content: Array<{ type: "parameterId"; parameterId: string }>;
  displayMetadata: ActionFormSectionDisplayMetadata;
  id: string;
  rid: string;
}

export type ActionFormButtonIntent =
  | "PRIMARY"
  | "SUCCESS"
  | "WARNING"
  | "DANGER";

export interface ActionFormButtonDisplayMetadata {
  intent: ActionFormButtonIntent;
  text: string;
}

export interface ActionFormMetadata {
  formContentOrdering: Array<ActionFormContentItem>;
  parameterOrdering: Array<string>;
  sections: Record<string, ActionFormSection>;
  applyingMessage: Array<ActionFormRichTextComponent>;
  applyingMessageEnabled: boolean;
  successMessage: Array<ActionFormRichTextComponent>;
  successMessageEnabled: boolean;
  submitButtonDisplayMetadata?: ActionFormButtonDisplayMetadata | undefined;
  undoButtonConfiguration?: boolean | undefined;
}

// ---------------------------------------------------------------------------
// Conversion helpers
// ---------------------------------------------------------------------------

function convertRichTextComponent(
  component: UnstableRichTextComponent,
): ActionFormRichTextComponent {
  switch (component.type) {
    case "message":
      return { type: "message", message: component.message };
    case "parameter":
      return { type: "parameter", parameter: component.parameter };
    case "parameterProperty":
      return {
        type: "parameterProperty",
        parameterProperty: {
          parameterId: component.parameterProperty.parameterId,
          propertyTypeId: component.parameterProperty.propertyTypeId,
        },
      };
    default:
      // Handle unknown variants gracefully — the backend may add new types
      return { type: "message", message: "" };
  }
}

function convertFormContentItem(
  item: UnstableFormContent,
): ActionFormContentItem | undefined {
  switch (item.type) {
    case "parameterId":
      return { type: "parameterId", parameterId: item.parameterId };
    case "sectionId":
      return { type: "sectionId", sectionId: item.sectionId };
    default:
      // Skip unknown variants — the backend may add new types
      return undefined;
  }
}

function convertSectionStyle(
  style: UnstableSection["displayMetadata"]["style"],
): ActionFormSectionStyle | undefined {
  if (style == null) {
    return undefined;
  }
  switch (style.type) {
    case "box":
      return "box";
    case "minimal":
      return "minimal";
    default:
      return undefined;
  }
}

function convertSection(section: UnstableSection): ActionFormSection {
  return {
    content: section.content.map((c) => ({
      type: "parameterId" as const,
      parameterId: c.parameterId,
    })),
    displayMetadata: {
      collapsedByDefault: section.displayMetadata.collapsedByDefault,
      columnCount: section.displayMetadata.columnCount,
      description: section.displayMetadata.description,
      displayName: section.displayMetadata.displayName,
      showTitleBar: section.displayMetadata.showTitleBar,
      style: convertSectionStyle(section.displayMetadata.style),
    },
    id: section.id,
    rid: section.rid,
  };
}

function convertActionTypeMetadata(
  metadata: ActionTypeMetadata,
): ActionFormMetadata {
  const { displayMetadata } = metadata;

  return {
    formContentOrdering: metadata.formContentOrdering
      .map(convertFormContentItem)
      .filter((item): item is ActionFormContentItem => item != null),
    parameterOrdering: [...metadata.parameterOrdering],
    sections: Object.fromEntries(
      Object.entries(metadata.sections).map(
        ([key, section]) => [key, convertSection(section)],
      ),
    ),
    applyingMessage: displayMetadata.applyingMessage.map(
      convertRichTextComponent,
    ),
    applyingMessageEnabled: displayMetadata.applyingMessageEnabled,
    successMessage: displayMetadata.successMessage.map(
      convertRichTextComponent,
    ),
    successMessageEnabled: displayMetadata.successMessageEnabled,
    submitButtonDisplayMetadata:
      displayMetadata.submitButtonDisplayMetadata != null
        ? {
          intent: displayMetadata.submitButtonDisplayMetadata.intent,
          text: displayMetadata.submitButtonDisplayMetadata.text,
        }
        : undefined,
    undoButtonConfiguration: displayMetadata.undoButtonConfiguration
      ?? undefined,
  };
}

// ---------------------------------------------------------------------------
// Public fetch function
// ---------------------------------------------------------------------------

/**
 * Fetches rich action form metadata (sections, ordering, display messages)
 * from the ontology-metadata internal API.
 *
 * This is a temporary bridge until these fields are available through the
 * public Foundry API. Use `client.fetchMetadata(actionDefinition)` first
 * to obtain the action RID.
 *
 * @internal
 */
export async function fetchActionFormMetadata(
  client: Client,
  actionRid: string,
): Promise<ActionFormMetadata> {
  const minimalClient = client[additionalContext];
  const ctx = makeConjureContext(minimalClient, "ontology-metadata/api");

  const response = await loadActionTypes(ctx, undefined, {
    actionTypes: [actionRid],
  });

  const actionType = response.actionTypes[actionRid];
  if (actionType == null) {
    throw new Error(
      `Action type not found for RID: ${actionRid}`,
    );
  }

  return convertActionTypeMetadata(actionType.metadata);
}
