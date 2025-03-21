'use strict';

var widget_client_unstable = require('@osdk/widget.client.unstable');
var React2 = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React2__default = /*#__PURE__*/_interopDefault(React2);

// src/client.tsx
var FoundryWidgetContext = /* @__PURE__ */ React2__default.default.createContext({
  emitEvent: () => {
  },
  createOntologyClient: () => {
    throw new Error("createOntologyClient is not implemented in this context");
  },
  hostEventTarget: new widget_client_unstable.FoundryHostEventTarget(),
  asyncParameterValues: {},
  parameters: {
    state: "not-started",
    values: {}
  }
});
function useFoundryWidgetContext() {
  return React2.useContext(FoundryWidgetContext);
}
(function(_useFoundryWidgetContext) {
  function withTypes() {
    return () => {
      return useFoundryWidgetContext();
    };
  }
  _useFoundryWidgetContext.withTypes = withTypes;
})(useFoundryWidgetContext);

// src/utils/initializeParameters.ts
function initializeParameters(config, initialLoadingState) {
  return Object.fromEntries(Object.entries(config.parameters).map(([key, parameterConfig]) => [key, {
    type: parameterConfig.type,
    value: {
      type: initialLoadingState
    }
  }]));
}

// src/client.tsx
var FoundryWidget = ({
  children,
  config,
  initialValues
}) => {
  const client = React2.useMemo(() => widget_client_unstable.createFoundryWidgetClient(), []);
  const [asyncParameterValues, setAsyncParameterValues] = React2__default.default.useState(initialValues ?? initializeParameters(config, "not-started"));
  const [allParameterValues, setAllParameterValues] = React2__default.default.useState({
    type: "not-started"
  });
  React2.useEffect(() => {
    client.subscribe();
    client.hostEventTarget.addEventListener("host.update-parameters", (payload) => {
      setAsyncParameterValues((currentParameters) => ({
        ...currentParameters,
        ...payload.detail.parameters
      }));
      setAllParameterValues((currentParameters) => {
        let aggregatedLoadedState = "loaded";
        let firstError;
        const newParameterValues = {};
        for (const key in payload.detail.parameters) {
          const value = payload.detail.parameters[key].value;
          if (value.type === "failed") {
            aggregatedLoadedState = "failed";
            firstError = firstError ?? value.error;
            newParameterValues[key] = value.value;
            continue;
          }
          if (value.type === "loading" && aggregatedLoadedState !== "failed") {
            aggregatedLoadedState = "loading";
            continue;
          }
          if (value.type === "reloading" && aggregatedLoadedState !== "failed" && aggregatedLoadedState !== "loading") {
            aggregatedLoadedState = "reloading";
            newParameterValues[key] = value.value;
            continue;
          }
          if (value.type === "not-started" && aggregatedLoadedState !== "failed" && aggregatedLoadedState !== "loading" && aggregatedLoadedState !== "reloading") {
            aggregatedLoadedState = "not-started";
          }
          if (value.type === "loaded") {
            newParameterValues[key] = value.value;
          }
        }
        const currentParameterValue = currentParameters.type !== "not-started" && currentParameters.type !== "loading" ? currentParameters.value : {};
        if (aggregatedLoadedState !== "not-started" && aggregatedLoadedState !== "loading") {
          const updatedValue = {
            ...currentParameterValue,
            ...newParameterValues
          };
          return aggregatedLoadedState === "failed" ? {
            type: aggregatedLoadedState,
            value: updatedValue,
            error: firstError ?? new Error("Failed to load parameters")
          } : {
            type: aggregatedLoadedState,
            value: updatedValue
          };
        } else {
          return {
            type: aggregatedLoadedState
          };
        }
      });
    });
    client.ready();
    return () => {
      client.unsubscribe();
    };
  }, []);
  return /* @__PURE__ */ React2__default.default.createElement(FoundryWidgetContext.Provider, {
    value: {
      emitEvent: client.emitEvent,
      createOntologyClient: client.createOntologyClient,
      hostEventTarget: client.hostEventTarget,
      asyncParameterValues,
      parameters: {
        values: allParameterValues.value ?? {},
        state: allParameterValues.type
      }
      // Unfortunately the context is statically defined so we can't use the generic type, hence the cast
    }
  }, children);
};

exports.FoundryWidget = FoundryWidget;
exports.useFoundryWidgetContext = useFoundryWidgetContext;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map