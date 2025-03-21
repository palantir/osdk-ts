'use strict';

var React = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

// src/useOsdkClient.ts
function fakeClientFn(..._args) {
  throw new Error("This is not a real client. Did you forget to <OsdkContext.Provider>?");
}
var fakeClient = Object.assign(fakeClientFn, {
  fetchMetadata: fakeClientFn
});
var OsdkContext = /* @__PURE__ */ React__default.default.createContext({
  client: fakeClient
});

// src/useOsdkClient.ts
function useOsdkClient() {
  return React__default.default.useContext(OsdkContext).client;
}

exports.OsdkContext = OsdkContext;
exports.useOsdkClient = useOsdkClient;
//# sourceMappingURL=chunk-2N32USW5.cjs.map
//# sourceMappingURL=chunk-2N32USW5.cjs.map