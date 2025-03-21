'use strict';

// src/config.ts
function defineConfig(c) {
  return c;
}

// src/manifest.ts
var MANIFEST_FILE_LOCATION = ".palantir/widgets.config.json";

// src/messages/hostMessages.ts
exports.HostMessage = void 0;
(function(_HostMessage) {
  _HostMessage.Version = "1.0.0";
})(exports.HostMessage || (exports.HostMessage = {}));
function isHostParametersUpdatedMessage(event) {
  return event.type === "host.update-parameters";
}
function _unstable_isHostFetchResponseSuccessMessage(event) {
  return event.type === "host._unstable.fetch-response-success";
}
function _unstable_isHostFetchResponseFailedMessage(event) {
  return event.type === "host._unstable.fetch-response-failed";
}
function visitHostMessage(message, visitor) {
  const {
    type,
    payload
  } = message;
  const handler = visitor[type];
  if (handler) {
    handler(payload);
  } else {
    visitor._unknown(type);
  }
}

// src/messages/widgetMessages.ts
function isWidgetReadyMessage(event) {
  return event.type === "widget.ready";
}
function isWidgetEmitEventMessage(event) {
  return event.type === "widget.emit-event";
}
function _unstable_isWidgetFetchMessage(event) {
  return event.type === "widget._unstable.fetch-request";
}
function visitWidgetMessage(message, visitor) {
  const {
    type,
    payload
  } = message;
  const handler = visitor[type];
  if (handler) {
    handler(payload);
  } else {
    visitor._unknown(type);
  }
}

// src/metaTags.ts
var META_TAG_HOST_ORIGIN = "x-palantir-widgets-host-origin";

exports.MANIFEST_FILE_LOCATION = MANIFEST_FILE_LOCATION;
exports.META_TAG_HOST_ORIGIN = META_TAG_HOST_ORIGIN;
exports._unstable_isHostFetchResponseFailedMessage = _unstable_isHostFetchResponseFailedMessage;
exports._unstable_isHostFetchResponseSuccessMessage = _unstable_isHostFetchResponseSuccessMessage;
exports._unstable_isWidgetFetchMessage = _unstable_isWidgetFetchMessage;
exports.defineConfig = defineConfig;
exports.isHostParametersUpdatedMessage = isHostParametersUpdatedMessage;
exports.isWidgetEmitEventMessage = isWidgetEmitEventMessage;
exports.isWidgetReadyMessage = isWidgetReadyMessage;
exports.visitHostMessage = visitHostMessage;
exports.visitWidgetMessage = visitWidgetMessage;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map