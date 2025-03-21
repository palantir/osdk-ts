'use strict';

var widget_api_unstable = require('@osdk/widget.api.unstable');
var client = require('@osdk/client');
var invariant = require('tiny-invariant');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var invariant__default = /*#__PURE__*/_interopDefault(invariant);

// src/index.ts

// src/host.ts
var FoundryHostEventTarget = class extends EventTarget {
  addEventListener(type, callback, options) {
    super.addEventListener(type, callback, options);
  }
  removeEventListener(type, callback, options) {
    super.removeEventListener(type, callback, options);
  }
  dispatchEventMessage(type, payload) {
    this.dispatchEvent(new CustomEvent(type, {
      detail: payload
    }));
  }
};

// src/request.ts
function serializeRequest(id, input, init) {
  if (typeof input !== "string") {
    throw new Error("Only string input URLs are supported");
  }
  const body = init?.body;
  if (body !== undefined && typeof body !== "string") {
    throw new Error("Only string request body values are supported");
  }
  return {
    id,
    url: input,
    method: init?.method ?? "GET",
    headers: [...new Headers(init?.headers ?? {}).entries()],
    body
  };
}
function deserializeResponse(response) {
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: new Headers(response.headers)
  });
}

// src/client.ts
function createFoundryWidgetClient() {
  !window.top ? process.env.NODE_ENV !== "production" ? invariant__default.default(false, "[FoundryWidgetClient] Must be run in an iframe") : invariant__default.default(false) : undefined;
  const parentWindow = window.top;
  const metaTag = document.querySelector(`meta[name="${widget_api_unstable.META_TAG_HOST_ORIGIN}"]`);
  !metaTag ? process.env.NODE_ENV !== "production" ? invariant__default.default(false, "[FoundryWidgetClient] Missing host origin meta tag " + widget_api_unstable.META_TAG_HOST_ORIGIN) : invariant__default.default(false) : undefined;
  const hostOrigin = metaTag.getAttribute("content");
  !hostOrigin ? process.env.NODE_ENV !== "production" ? invariant__default.default(false, "[FoundryWidgetClient] Missing host origin meta tag content") : invariant__default.default(false) : undefined;
  const hostEventTarget = new FoundryHostEventTarget();
  const listenForHostMessages = (event) => {
    widget_api_unstable.visitHostMessage(event.data, {
      "host.update-parameters": (payload) => {
        hostEventTarget.dispatchEventMessage("host.update-parameters", payload);
      },
      "host._unstable.fetch-response-success": (payload) => {
        hostEventTarget.dispatchEventMessage("host._unstable.fetch-response-success", payload);
      },
      "host._unstable.fetch-response-failed": (payload) => {
        hostEventTarget.dispatchEventMessage("host._unstable.fetch-response-failed", payload);
      },
      _unknown: () => {
      }
    });
  };
  const sendMessageToHost = (message) => {
    parentWindow.postMessage(message, hostOrigin);
  };
  const fetchProxy = async (input, init) => {
    const requestId = Math.random().toString(36).substring(7);
    return new Promise((resolve, reject) => {
      function handleMessage(event) {
        const {
          data
        } = event;
        widget_api_unstable.visitHostMessage(event.data, {
          "host.update-parameters": () => {
          },
          "host._unstable.fetch-response-success": (payload) => {
            if (payload.id === requestId) {
              window.removeEventListener("message", handleMessage);
              resolve(deserializeResponse(payload));
            }
          },
          "host._unstable.fetch-response-failed": (payload) => {
            if (payload.id === requestId) {
              window.removeEventListener("message", handleMessage);
              reject(new Error(data.error));
            }
          },
          _unknown: () => {
          }
        });
      }
      window.addEventListener("message", handleMessage);
      sendMessageToHost({
        type: "widget._unstable.fetch-request",
        payload: serializeRequest(requestId, input, init)
      });
    });
  };
  return {
    hostEventTarget,
    createOntologyClient: (ontologyRid) => {
      return client.createClient(
        hostOrigin,
        ontologyRid,
        // Temporary while we don't have a server-side proxying requests from within the frame
        () => Promise.resolve("unused_token"),
        undefined,
        fetchProxy
      );
    },
    ready: () => {
      sendMessageToHost({
        type: "widget.ready",
        payload: {
          apiVersion: widget_api_unstable.HostMessage.Version
        }
      });
    },
    emitEvent: (eventId, payload) => {
      sendMessageToHost({
        type: "widget.emit-event",
        payload: {
          eventId,
          ...payload
        }
      });
    },
    sendMessage: sendMessageToHost,
    subscribe: () => {
      window.addEventListener("message", (event) => {
        if (event.origin !== hostOrigin) {
          return;
        }
        listenForHostMessages(event);
      });
    },
    unsubscribe: () => {
      window.removeEventListener("message", listenForHostMessages);
    }
  };
}

Object.defineProperty(exports, "HostMessage", {
  enumerable: true,
  get: function () { return widget_api_unstable.HostMessage; }
});
Object.defineProperty(exports, "defineConfig", {
  enumerable: true,
  get: function () { return widget_api_unstable.defineConfig; }
});
Object.defineProperty(exports, "isHostParametersUpdatedMessage", {
  enumerable: true,
  get: function () { return widget_api_unstable.isHostParametersUpdatedMessage; }
});
exports.FoundryHostEventTarget = FoundryHostEventTarget;
exports.createFoundryWidgetClient = createFoundryWidgetClient;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map