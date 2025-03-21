'use strict';

// src/PalantirApiError.ts
var PalantirApiError = class extends Error {
  constructor(message, errorName, errorCode, statusCode, errorInstanceId, parameters) {
    super(message);
    this.message = message;
    this.errorName = errorName;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.errorInstanceId = errorInstanceId;
    this.parameters = parameters;
  }
};

// src/UnknownError.ts
var UnknownError = class extends PalantirApiError {
  constructor(message, errorName, originalError, statusCode) {
    super(message, errorName, undefined, statusCode);
    this.originalError = originalError;
  }
};

exports.PalantirApiError = PalantirApiError;
exports.UnknownError = UnknownError;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map