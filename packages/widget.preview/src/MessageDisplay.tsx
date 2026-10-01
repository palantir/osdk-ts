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

// cspell:ignore ellipsize

import { Classes, Icon, Popover, Text, type IconName } from "@blueprintjs/core";
import type {
  HostMessage,
  ParameterConfig,
  WidgetConfig,
  WidgetMessage,
} from "@osdk/widget.api";
import classNames from "classnames";
import * as React from "react";

import type {
  MessageLogEntry,
  PreviewConfig,
  PreviewEvent,
  PreviewMessage,
  PreviewParameter,
} from "./config.js";
import {
  usePreviewPresentation,
  type PreviewPresentation,
} from "./PreviewProvider.js";

const css = {
  details: "osdk-widget-preview-details",
  dot: "osdk-widget-preview-dot",
  event: "osdk-widget-preview-event",
  eventBody: "osdk-widget-preview-event-body",
  eventHeader: "osdk-widget-preview-event-header",
  header: "osdk-widget-preview-header",
  inline: "osdk-widget-preview-inline",
  last: "osdk-widget-preview-last",
  message: "osdk-widget-preview-message",
  messageBody: "osdk-widget-preview-message-body",
  messageCard: "osdk-widget-preview-message-card",
  messageType: "osdk-widget-preview-message-type",
  noUpdates: "osdk-widget-preview-no-updates",
  parameterName: "osdk-widget-preview-parameter-name",
  parameterUpdate: "osdk-widget-preview-parameter-update",
  parameterValue: "osdk-widget-preview-parameter-value",
  ready: "osdk-widget-preview-ready",
  time: "osdk-widget-preview-time",
};
/** @public */
export interface MessageDisplayProps {
  entry: MessageLogEntry;
  config: Pick<PreviewConfig, "parameters"> & {
    events: readonly Pick<PreviewEvent, "id" | "displayName">[];
  };
  isLast: boolean;
  renderParameterIcon?: (parameter: PreviewParameter) => React.ReactNode;
  /**
   * Used to display a smaller inline version of the display
   *
   * @defaultValue false
   */
  inline?: boolean;
}

/** @public */
export function MessageDisplay({
  entry,
  config,
  isLast,
  inline = false,
  renderParameterIcon,
}: MessageDisplayProps): React.ReactElement {
  const presentation = usePreviewPresentation();
  return (
    <div className={classNames(css.message, { [css.last]: isLast })}>
      <div className={classNames(css.details, { [css.inline]: inline })}>
        <div className={css.header}>
          <div
            className={classNames(css.dot, {
              [css.ready]: entry.message.type === "widget.ready",
            })}
          >
            <Icon icon={getMessageIcon(entry.message)} size={16} />
          </div>

          <div className={css.messageType}>
            {getMessageType(entry.message, presentation)}
          </div>
          <div className={css.time}>
            {presentation.formatDate(entry.timestamp, "time")}
          </div>
        </div>
        <div className={classNames(css.messageBody, { [css.inline]: inline })}>
          {getMessageBody(entry.message, config, inline, renderParameterIcon)}
        </div>
      </div>
    </div>
  );
}

interface BaseDisplayProps {
  renderParameterIcon?: MessageDisplayProps["renderParameterIcon"];
  config: Pick<PreviewConfig, "parameters"> & {
    events: readonly Pick<PreviewEvent, "id" | "displayName">[];
  };
  inline?: boolean;
}

interface ParameterUpdateItem {
  paramId: string;
  value: unknown;
}

function ParameterUpdateRow({
  paramId,
  value,
  config,
  renderParameterIcon,
}: ParameterUpdateItem & BaseDisplayProps) {
  const presentation = usePreviewPresentation();
  const paramDef = config.parameters.find((def) => def.id === paramId);
  return (
    <div key={paramId} className={css.parameterUpdate}>
      <div className={css.parameterName}>
        {paramDef != null && renderParameterIcon?.(paramDef)}
        {paramDef?.displayName ?? presentation.strings.unknownParameter}
      </div>
      <div className={css.parameterValue}>{JSON.stringify(value)}</div>
    </div>
  );
}

interface ParameterEventUpdateDisplayProps extends BaseDisplayProps {
  updates: ParameterUpdateItem[];
  displayName?: string;
}

function ParameterEventUpdateDisplay({
  updates,
  config,
  inline,
  displayName,
  renderParameterIcon,
}: ParameterEventUpdateDisplayProps) {
  const presentation = usePreviewPresentation();
  const hasUpdates = updates.length > 0;
  const body = (
    <div className={css.eventBody}>
      {updates.map((update) => (
        <ParameterUpdateRow
          key={update.paramId}
          {...update}
          config={config}
          renderParameterIcon={renderParameterIcon}
        />
      ))}
    </div>
  );

  return hasUpdates ? (
    <div className={classNames(Classes.ELEVATION_0, css.event)}>
      {displayName && (
        <Popover
          disabled={!inline}
          content={body}
          interactionKind="hover"
          shouldReturnFocusOnClose={false}
        >
          <div
            className={classNames(
              css.eventHeader,
              inline && Classes.TOOLTIP_INDICATOR,
            )}
          >
            {displayName}
          </div>
        </Popover>
      )}
      {(!inline || displayName == null) && body}
    </div>
  ) : (
    <div className={css.noUpdates}>
      {presentation.strings.noParameterUpdates}
    </div>
  );
}

interface EventDisplayProps {
  renderParameterIcon?: MessageDisplayProps["renderParameterIcon"];
  payload: WidgetMessage.Payload.EmitEvent<WidgetConfig<ParameterConfig>>;
  config: Pick<PreviewConfig, "parameters"> & {
    events: readonly Pick<PreviewEvent, "id" | "displayName">[];
  };
  inline: boolean;
}

function EventDisplay({
  payload,
  config,
  inline,
  renderParameterIcon,
}: EventDisplayProps) {
  const presentation = usePreviewPresentation();
  const eventDef = config.events.find((def) => def.id === payload.eventId);
  const updates = Object.entries(payload.parameterUpdates).map(
    ([paramId, value]) => ({ paramId, value }),
  );
  return (
    <ParameterEventUpdateDisplay
      updates={updates}
      renderParameterIcon={renderParameterIcon}
      config={config}
      inline={inline}
      displayName={eventDef?.displayName ?? presentation.strings.unknownEvent}
    />
  );
}

interface ParameterUpdateProps {
  renderParameterIcon?: MessageDisplayProps["renderParameterIcon"];
  payload: HostMessage.Payload.UpdateParameters<WidgetConfig<ParameterConfig>>;
  config: Pick<PreviewConfig, "parameters"> & {
    events: readonly Pick<PreviewEvent, "id" | "displayName">[];
  };
}

function ParameterUpdateDisplay({
  payload,
  config,
  renderParameterIcon,
}: ParameterUpdateProps) {
  const updates = Object.entries(payload.parameters).map(
    ([paramId, value]) => ({
      paramId,
      value: value.value.value,
    }),
  );
  return (
    <ParameterEventUpdateDisplay
      updates={updates}
      config={config}
      renderParameterIcon={renderParameterIcon}
    />
  );
}

interface GenericPayloadDisplayProps {
  payload: string;
}

function GenericPayloadDisplay({ payload }: GenericPayloadDisplayProps) {
  const presentation = usePreviewPresentation();
  return (
    <div className={classNames(Classes.ELEVATION_0, css.messageCard)}>
      <span> {presentation.strings.payload}</span>
      <Text ellipsize={true} title={payload}>
        {payload}
      </Text>
    </div>
  );
}

function getMessageType(
  message: PreviewMessage,
  presentation: PreviewPresentation,
) {
  switch (message.type) {
    case "widget.emit-event":
      return presentation.strings.eventEmittedMessage;
    case "widget.ready":
      return presentation.strings.widgetReadyMessage;
    case "widget.reload":
      return presentation.strings.widgetReloadMessage;
    case "widget.resize":
      return presentation.strings.widgetResizedMessage;
    case "host.update-parameters":
      return presentation.strings.parameterUpdated;
    case "custom-error":
      return presentation.strings.invalidEvent;
    default:
      return "";
  }
}

function getMessageBody(
  message: PreviewMessage,
  config: Pick<PreviewConfig, "parameters"> & {
    events: readonly Pick<PreviewEvent, "id" | "displayName">[];
  },
  inline: boolean,
  renderParameterIcon: MessageDisplayProps["renderParameterIcon"],
) {
  switch (message.type) {
    case "widget.emit-event":
      return (
        <EventDisplay
          payload={message.payload}
          config={config}
          inline={inline}
          renderParameterIcon={renderParameterIcon}
        />
      );
    case "host.update-parameters":
      if (inline) {
        return null;
      }
      return (
        <ParameterUpdateDisplay
          payload={message.payload}
          config={config}
          renderParameterIcon={renderParameterIcon}
        />
      );
    case "widget.ready":
      return null;
    case "widget.reload":
      if (inline) {
        return null;
      }
      return (
        <GenericPayloadDisplay payload={JSON.stringify(message.payload)} />
      );
    case "widget.resize":
      if (inline) {
        return null;
      }
      return (
        <GenericPayloadDisplay payload={JSON.stringify(message.payload)} />
      );
    case "custom-error":
      if (inline) {
        return null;
      }
      return (
        <GenericPayloadDisplay
          payload={JSON.stringify(message.payload.error)}
        />
      );
    default:
      return null;
  }
}

function getMessageIcon(message: PreviewMessage): IconName {
  switch (message.type) {
    case "widget.ready":
      return "small-tick";
    case "widget.reload":
      return "refresh";
    case "widget.resize":
      return "zoom-to-fit";
    case "host.update-parameters":
      return "input";
    case "widget.emit-event":
      return "output";
    case "custom-error":
      return "error";
    default:
      return "exchange";
  }
}
