'use strict';

var chunk2N32USW5_cjs = require('./chunk-2N32USW5.cjs');
var React = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function OsdkProvider({
  children,
  client
}) {
  return /* @__PURE__ */ React__default.default.createElement(chunk2N32USW5_cjs.OsdkContext.Provider, {
    value: {
      client
    }
  }, children);
}

Object.defineProperty(exports, "useOsdkClient", {
  enumerable: true,
  get: function () { return chunk2N32USW5_cjs.useOsdkClient; }
});
exports.OsdkProvider = OsdkProvider;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map