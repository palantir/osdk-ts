/**
* Method to be used to provide final value for standard deviation or variance.
* Use POPULATION when you have the entire set of data to work with OR
* Use SAMPLE when you have an incomplete set of data (with at least 2 values) to work with.
* An in depth explanation here: https://en.wikipedia.org/wiki/Bessel%27s_correction
*/
export type LinkedDispersionMetricMethod = "POPULATION" | "SAMPLE";
