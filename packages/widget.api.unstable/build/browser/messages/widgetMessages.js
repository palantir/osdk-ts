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
// Interfaces and type guards for messages passed from the widget to the host Foundry UI
export let WidgetMessage;
export function isWidgetReadyMessage(event) {
  return event.type === "widget.ready";
}
export function isWidgetEmitEventMessage(event) {
  return event.type === "widget.emit-event";
}
export function _unstable_isWidgetFetchMessage(event) {
  return event.type === "widget._unstable.fetch-request";
}
export function visitWidgetMessage(message, visitor) {
  const {
    type,
    payload
  } = message;
  const handler = visitor[type];
  if (handler) {
    // Typescript creates an & of the parameters instead of a union
    handler(payload);
  } else {
    visitor._unknown(type);
  }
}
//# sourceMappingURL=widgetMessages.js.map