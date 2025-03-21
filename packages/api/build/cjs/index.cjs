'use strict';

// src/aggregate/WhereClause.ts
var DistanceUnitMapping = {
  "centimeter": "CENTIMETERS",
  "centimeters": "CENTIMETERS",
  "cm": "CENTIMETERS",
  "meter": "METERS",
  "meters": "METERS",
  "m": "METERS",
  "kilometer": "KILOMETERS",
  "kilometers": "KILOMETERS",
  "km": "KILOMETERS",
  "inch": "INCHES",
  "inches": "INCHES",
  "foot": "FEET",
  "feet": "FEET",
  "yard": "YARDS",
  "yards": "YARDS",
  "mile": "MILES",
  "miles": "MILES",
  "nautical_mile": "NAUTICAL_MILES",
  "nauticalMile": "NAUTICAL_MILES",
  "nautical miles": "NAUTICAL_MILES"
};

// src/mapping/DurationMapping.ts
var TimeDurationMapping = {
  "sec": "SECONDS",
  "seconds": "SECONDS",
  "min": "MINUTES",
  "minute": "MINUTES",
  "minutes": "MINUTES",
  "hr": "HOURS",
  "hrs": "HOURS",
  "hour": "HOURS",
  "hours": "HOURS",
  "day": "DAYS",
  "days": "DAYS",
  "wk": "WEEKS",
  "week": "WEEKS",
  "weeks": "WEEKS",
  "mos": "MONTHS",
  "month": "MONTHS",
  "months": "MONTHS",
  "yr": "YEARS",
  "year": "YEARS",
  "years": "YEARS"
};

// src/groupby/GroupByClause.ts
var DurationMapping = {
  ...TimeDurationMapping,
  "quarter": "QUARTERS",
  "quarters": "QUARTERS"
};

// src/object/Result.ts
function isOk(a) {
  return "value" in a;
}

// src/timeseries/timeseries.ts
var TimeseriesDurationMapping = {
  "ms": "MILLISECONDS",
  "milliseconds": "MILLISECONDS",
  ...TimeDurationMapping
};

exports.DistanceUnitMapping = DistanceUnitMapping;
exports.DurationMapping = DurationMapping;
exports.TimeseriesDurationMapping = TimeseriesDurationMapping;
exports.isOk = isOk;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map