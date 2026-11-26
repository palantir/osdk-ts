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

// Generated from OmniAPI IR; do not edit.

import { z } from "zod/v4";

import * as core from "./core.js";
import * as filesystem from "./filesystem.js";

export type OrchestrationAbortOnFailureDefinition = boolean;

export const OrchestrationAbortOnFailureDefinitionSchema: z.ZodType<OrchestrationAbortOnFailureDefinition> =
  z.lazy(() => z.boolean());

export type OrchestrationActionDefinition = {
  target: OrchestrationBuildTargetDefinition;
  branchName?: core.CoreBranchNameDefinition | undefined;
  fallbackBranches?: OrchestrationFallbackBranchesDefinition | undefined;
  forceBuild?: OrchestrationForceBuildDefinition | undefined;
  retryCount?: OrchestrationRetryCountDefinition | undefined;
  retryBackoffDuration?:
    | OrchestrationRetryBackoffDurationDefinition
    | undefined;
  abortOnFailure?: OrchestrationAbortOnFailureDefinition | undefined;
  notificationsEnabled?:
    | OrchestrationNotificationsEnabledDefinition
    | undefined;
};

export const OrchestrationActionDefinitionSchema: z.ZodType<OrchestrationActionDefinition> =
  z.lazy(() =>
    z.strictObject({
      target: z.lazy(() => OrchestrationBuildTargetDefinitionSchema),
      branchName: z.lazy(() => core.CoreBranchNameDefinitionSchema).optional(),
      fallbackBranches: z
        .lazy(() => OrchestrationFallbackBranchesDefinitionSchema)
        .optional(),
      forceBuild: z
        .lazy(() => OrchestrationForceBuildDefinitionSchema)
        .optional(),
      retryCount: z
        .lazy(() => OrchestrationRetryCountDefinitionSchema)
        .optional(),
      retryBackoffDuration: z
        .lazy(() => OrchestrationRetryBackoffDurationDefinitionSchema)
        .optional(),
      abortOnFailure: z
        .lazy(() => OrchestrationAbortOnFailureDefinitionSchema)
        .optional(),
      notificationsEnabled: z
        .lazy(() => OrchestrationNotificationsEnabledDefinitionSchema)
        .optional(),
    }),
  );

export type OrchestrationAndTriggerDefinition = {
  triggers: Array<OrchestrationTriggerDefinition>;
};

export const OrchestrationAndTriggerDefinitionSchema: z.ZodType<OrchestrationAndTriggerDefinition> =
  z.lazy(() =>
    z.strictObject({
      triggers: z.array(z.lazy(() => OrchestrationTriggerDefinitionSchema)),
    }),
  );

export type OrchestrationBuildTargetDefinition =
  | { type: "manual"; targets: Array<OrchestrationBuildableLocator> }
  | {
      type: "upstream";
      targets: Array<OrchestrationBuildableLocator>;
      ignored?: Array<OrchestrationBuildableLocator> | undefined;
    }
  | {
      type: "connecting";
      inputs: Array<OrchestrationBuildableLocator>;
      targets: Array<OrchestrationBuildableLocator>;
      ignored?: Array<OrchestrationBuildableLocator> | undefined;
    };

export const OrchestrationBuildTargetDefinitionSchema: z.ZodType<OrchestrationBuildTargetDefinition> =
  z.lazy(() =>
    z.discriminatedUnion("type", [
      z.strictObject({
        type: z.literal("manual"),
        targets: z.array(z.lazy(() => OrchestrationBuildableLocatorSchema)),
      }),
      z.strictObject({
        type: z.literal("upstream"),
        targets: z.array(z.lazy(() => OrchestrationBuildableLocatorSchema)),
        ignored: z
          .array(z.lazy(() => OrchestrationBuildableLocatorSchema))
          .optional(),
      }),
      z.strictObject({
        type: z.literal("connecting"),
        inputs: z.array(z.lazy(() => OrchestrationBuildableLocatorSchema)),
        targets: z.array(z.lazy(() => OrchestrationBuildableLocatorSchema)),
        ignored: z
          .array(z.lazy(() => OrchestrationBuildableLocatorSchema))
          .optional(),
      }),
    ]),
  );

export type OrchestrationBuildableLocator = core.CoreResourceLocator;

export const OrchestrationBuildableLocatorSchema: z.ZodType<OrchestrationBuildableLocator> =
  z.lazy(() => core.CoreResourceLocatorSchema);

export type OrchestrationConnectingTargetDefinition = {
  inputs: Array<OrchestrationBuildableLocator>;
  targets: Array<OrchestrationBuildableLocator>;
  ignored?: Array<OrchestrationBuildableLocator> | undefined;
};

export const OrchestrationConnectingTargetDefinitionSchema: z.ZodType<OrchestrationConnectingTargetDefinition> =
  z.lazy(() =>
    z.strictObject({
      inputs: z.array(z.lazy(() => OrchestrationBuildableLocatorSchema)),
      targets: z.array(z.lazy(() => OrchestrationBuildableLocatorSchema)),
      ignored: z
        .array(z.lazy(() => OrchestrationBuildableLocatorSchema))
        .optional(),
    }),
  );

export type OrchestrationCronExpressionDefinition = string;

export const OrchestrationCronExpressionDefinitionSchema: z.ZodType<OrchestrationCronExpressionDefinition> =
  z.lazy(() => z.string());

export type OrchestrationDatasetUpdatedTriggerDefinition = {
  dataset: core.CoreDatasetLocator;
  branchName?: core.CoreBranchNameDefinition | undefined;
};

export const OrchestrationDatasetUpdatedTriggerDefinitionSchema: z.ZodType<OrchestrationDatasetUpdatedTriggerDefinition> =
  z.lazy(() =>
    z.strictObject({
      dataset: z.lazy(() => core.CoreDatasetLocatorSchema),
      branchName: z.lazy(() => core.CoreBranchNameDefinitionSchema).optional(),
    }),
  );

export type OrchestrationFallbackBranchesDefinition =
  Array<core.CoreBranchNameDefinition>;

export const OrchestrationFallbackBranchesDefinitionSchema: z.ZodType<OrchestrationFallbackBranchesDefinition> =
  z.lazy(() => z.array(z.lazy(() => core.CoreBranchNameDefinitionSchema)));

export type OrchestrationForceBuildDefinition = boolean;

export const OrchestrationForceBuildDefinitionSchema: z.ZodType<OrchestrationForceBuildDefinition> =
  z.lazy(() => z.boolean());

export type OrchestrationJobSucceededTriggerDefinition = {
  dataset: core.CoreDatasetLocator;
  branchName?: core.CoreBranchNameDefinition | undefined;
};

export const OrchestrationJobSucceededTriggerDefinitionSchema: z.ZodType<OrchestrationJobSucceededTriggerDefinition> =
  z.lazy(() =>
    z.strictObject({
      dataset: z.lazy(() => core.CoreDatasetLocatorSchema),
      branchName: z.lazy(() => core.CoreBranchNameDefinitionSchema).optional(),
    }),
  );

export type OrchestrationManualTargetDefinition = {
  targets: Array<OrchestrationBuildableLocator>;
};

export const OrchestrationManualTargetDefinitionSchema: z.ZodType<OrchestrationManualTargetDefinition> =
  z.lazy(() =>
    z.strictObject({
      targets: z.array(z.lazy(() => OrchestrationBuildableLocatorSchema)),
    }),
  );

export type OrchestrationManualTriggerDefinition = {};

export const OrchestrationManualTriggerDefinitionSchema: z.ZodType<OrchestrationManualTriggerDefinition> =
  z.lazy(() => z.strictObject({}));

export type OrchestrationMediaSetUpdatedTriggerDefinition = {
  mediaSetRid: core.CoreMediaSetRidDefinition;
  branchName?: core.CoreBranchNameDefinition | undefined;
};

export const OrchestrationMediaSetUpdatedTriggerDefinitionSchema: z.ZodType<OrchestrationMediaSetUpdatedTriggerDefinition> =
  z.lazy(() =>
    z.strictObject({
      mediaSetRid: z.lazy(() => core.CoreMediaSetRidDefinitionSchema),
      branchName: z.lazy(() => core.CoreBranchNameDefinitionSchema).optional(),
    }),
  );

export type OrchestrationNewLogicTriggerDefinition = {
  branchName?: core.CoreBranchNameDefinition | undefined;
  dataset: core.CoreDatasetLocator;
};

export const OrchestrationNewLogicTriggerDefinitionSchema: z.ZodType<OrchestrationNewLogicTriggerDefinition> =
  z.lazy(() =>
    z.strictObject({
      branchName: z.lazy(() => core.CoreBranchNameDefinitionSchema).optional(),
      dataset: z.lazy(() => core.CoreDatasetLocatorSchema),
    }),
  );

export type OrchestrationNotificationsEnabledDefinition = boolean;

export const OrchestrationNotificationsEnabledDefinitionSchema: z.ZodType<OrchestrationNotificationsEnabledDefinition> =
  z.lazy(() => z.boolean());

export type OrchestrationOrTriggerDefinition = {
  triggers: Array<OrchestrationTriggerDefinition>;
};

export const OrchestrationOrTriggerDefinitionSchema: z.ZodType<OrchestrationOrTriggerDefinition> =
  z.lazy(() =>
    z.strictObject({
      triggers: z.array(z.lazy(() => OrchestrationTriggerDefinitionSchema)),
    }),
  );

export type OrchestrationProjectScopeDefinition = {
  projects: Array<filesystem.FilesystemProjectLocator>;
};

export const OrchestrationProjectScopeDefinitionSchema: z.ZodType<OrchestrationProjectScopeDefinition> =
  z.lazy(() =>
    z.strictObject({
      projects: z.array(
        z.lazy(() => filesystem.FilesystemProjectLocatorSchema),
      ),
    }),
  );

export type OrchestrationRetryBackoffDurationDefinition =
  core.CoreDurationDefinition;

export const OrchestrationRetryBackoffDurationDefinitionSchema: z.ZodType<OrchestrationRetryBackoffDurationDefinition> =
  z.lazy(() => core.CoreDurationDefinitionSchema);

export type OrchestrationRetryCountDefinition = number;

export const OrchestrationRetryCountDefinitionSchema: z.ZodType<OrchestrationRetryCountDefinition> =
  z.lazy(() => z.int32());

export type OrchestrationScheduleDefinition = {
  displayName?: string | undefined;
  description?: string | undefined;
  paused?: OrchestrationSchedulePausedDefinition | undefined;
  trigger?: OrchestrationTriggerDefinition | undefined;
  action: OrchestrationActionDefinition;
  scopeMode?: OrchestrationScopeModeDefinition | undefined;
  id: string;
  apiName?: string | undefined;
};

export const OrchestrationScheduleDefinitionSchema: z.ZodType<OrchestrationScheduleDefinition> =
  z.lazy(() =>
    z.strictObject({
      displayName: z.string().optional(),
      description: z.string().optional(),
      paused: z
        .lazy(() => OrchestrationSchedulePausedDefinitionSchema)
        .optional(),
      trigger: z.lazy(() => OrchestrationTriggerDefinitionSchema).optional(),
      action: z.lazy(() => OrchestrationActionDefinitionSchema),
      scopeMode: z
        .lazy(() => OrchestrationScopeModeDefinitionSchema)
        .optional(),
      id: z.string(),
      apiName: z.string().optional(),
    }),
  );

export type OrchestrationScheduleFailedTriggerDefinition = {
  schedule: core.CoreScheduleLocator;
};

export const OrchestrationScheduleFailedTriggerDefinitionSchema: z.ZodType<OrchestrationScheduleFailedTriggerDefinition> =
  z.lazy(() =>
    z.strictObject({ schedule: z.lazy(() => core.CoreScheduleLocatorSchema) }),
  );

export type OrchestrationSchedulePausedDefinition = boolean;

export const OrchestrationSchedulePausedDefinitionSchema: z.ZodType<OrchestrationSchedulePausedDefinition> =
  z.lazy(() => z.boolean());

export type OrchestrationScheduleSucceededTriggerDefinition = {
  schedule: core.CoreScheduleLocator;
};

export const OrchestrationScheduleSucceededTriggerDefinitionSchema: z.ZodType<OrchestrationScheduleSucceededTriggerDefinition> =
  z.lazy(() =>
    z.strictObject({ schedule: z.lazy(() => core.CoreScheduleLocatorSchema) }),
  );

export type OrchestrationScopeModeDefinition =
  | { type: "user" }
  | { type: "project"; projects: Array<filesystem.FilesystemProjectLocator> };

export const OrchestrationScopeModeDefinitionSchema: z.ZodType<OrchestrationScopeModeDefinition> =
  z.lazy(() =>
    z.discriminatedUnion("type", [
      z.strictObject({ type: z.literal("user") }),
      z.strictObject({
        type: z.literal("project"),
        projects: z.array(
          z.lazy(() => filesystem.FilesystemProjectLocatorSchema),
        ),
      }),
    ]),
  );

export type OrchestrationTableUpdatedTriggerDefinition = {
  tableRid: core.CoreTableRidDefinition;
  branchName?: core.CoreBranchNameDefinition | undefined;
};

export const OrchestrationTableUpdatedTriggerDefinitionSchema: z.ZodType<OrchestrationTableUpdatedTriggerDefinition> =
  z.lazy(() =>
    z.strictObject({
      tableRid: z.lazy(() => core.CoreTableRidDefinitionSchema),
      branchName: z.lazy(() => core.CoreBranchNameDefinitionSchema).optional(),
    }),
  );

export type OrchestrationTimeTriggerDefinition = {
  cronExpression: OrchestrationCronExpressionDefinition;
  timeZone?: core.CoreZoneIdDefinition | undefined;
};

export const OrchestrationTimeTriggerDefinitionSchema: z.ZodType<OrchestrationTimeTriggerDefinition> =
  z.lazy(() =>
    z.strictObject({
      cronExpression: z.lazy(() => OrchestrationCronExpressionDefinitionSchema),
      timeZone: z.lazy(() => core.CoreZoneIdDefinitionSchema).optional(),
    }),
  );

export type OrchestrationTriggerDefinition =
  | { type: "and"; triggers: Array<OrchestrationTriggerDefinition> }
  | { type: "or"; triggers: Array<OrchestrationTriggerDefinition> }
  | {
      type: "time";
      cronExpression: OrchestrationCronExpressionDefinition;
      timeZone?: core.CoreZoneIdDefinition | undefined;
    }
  | { type: "manual" }
  | {
      type: "datasetUpdated";
      dataset: core.CoreDatasetLocator;
      branchName?: core.CoreBranchNameDefinition | undefined;
    }
  | {
      type: "newLogic";
      branchName?: core.CoreBranchNameDefinition | undefined;
      dataset: core.CoreDatasetLocator;
    }
  | {
      type: "jobSucceeded";
      dataset: core.CoreDatasetLocator;
      branchName?: core.CoreBranchNameDefinition | undefined;
    }
  | { type: "scheduleSucceeded"; schedule: core.CoreScheduleLocator }
  | { type: "scheduleFailed"; schedule: core.CoreScheduleLocator }
  | {
      type: "mediaSetUpdated";
      mediaSetRid: core.CoreMediaSetRidDefinition;
      branchName?: core.CoreBranchNameDefinition | undefined;
    }
  | {
      type: "tableUpdated";
      tableRid: core.CoreTableRidDefinition;
      branchName?: core.CoreBranchNameDefinition | undefined;
    };

export const OrchestrationTriggerDefinitionSchema: z.ZodType<OrchestrationTriggerDefinition> =
  z.lazy(() =>
    z.discriminatedUnion("type", [
      z.strictObject({
        type: z.literal("and"),
        triggers: z.array(z.lazy(() => OrchestrationTriggerDefinitionSchema)),
      }),
      z.strictObject({
        type: z.literal("or"),
        triggers: z.array(z.lazy(() => OrchestrationTriggerDefinitionSchema)),
      }),
      z.strictObject({
        type: z.literal("time"),
        cronExpression: z.lazy(
          () => OrchestrationCronExpressionDefinitionSchema,
        ),
        timeZone: z.lazy(() => core.CoreZoneIdDefinitionSchema).optional(),
      }),
      z.strictObject({ type: z.literal("manual") }),
      z.strictObject({
        type: z.literal("datasetUpdated"),
        dataset: z.lazy(() => core.CoreDatasetLocatorSchema),
        branchName: z
          .lazy(() => core.CoreBranchNameDefinitionSchema)
          .optional(),
      }),
      z.strictObject({
        type: z.literal("newLogic"),
        branchName: z
          .lazy(() => core.CoreBranchNameDefinitionSchema)
          .optional(),
        dataset: z.lazy(() => core.CoreDatasetLocatorSchema),
      }),
      z.strictObject({
        type: z.literal("jobSucceeded"),
        dataset: z.lazy(() => core.CoreDatasetLocatorSchema),
        branchName: z
          .lazy(() => core.CoreBranchNameDefinitionSchema)
          .optional(),
      }),
      z.strictObject({
        type: z.literal("scheduleSucceeded"),
        schedule: z.lazy(() => core.CoreScheduleLocatorSchema),
      }),
      z.strictObject({
        type: z.literal("scheduleFailed"),
        schedule: z.lazy(() => core.CoreScheduleLocatorSchema),
      }),
      z.strictObject({
        type: z.literal("mediaSetUpdated"),
        mediaSetRid: z.lazy(() => core.CoreMediaSetRidDefinitionSchema),
        branchName: z
          .lazy(() => core.CoreBranchNameDefinitionSchema)
          .optional(),
      }),
      z.strictObject({
        type: z.literal("tableUpdated"),
        tableRid: z.lazy(() => core.CoreTableRidDefinitionSchema),
        branchName: z
          .lazy(() => core.CoreBranchNameDefinitionSchema)
          .optional(),
      }),
    ]),
  );

export type OrchestrationUpstreamTargetDefinition = {
  targets: Array<OrchestrationBuildableLocator>;
  ignored?: Array<OrchestrationBuildableLocator> | undefined;
};

export const OrchestrationUpstreamTargetDefinitionSchema: z.ZodType<OrchestrationUpstreamTargetDefinition> =
  z.lazy(() =>
    z.strictObject({
      targets: z.array(z.lazy(() => OrchestrationBuildableLocatorSchema)),
      ignored: z
        .array(z.lazy(() => OrchestrationBuildableLocatorSchema))
        .optional(),
    }),
  );

export type OrchestrationUserScopeDefinition = {};

export const OrchestrationUserScopeDefinitionSchema: z.ZodType<OrchestrationUserScopeDefinition> =
  z.lazy(() => z.strictObject({}));
