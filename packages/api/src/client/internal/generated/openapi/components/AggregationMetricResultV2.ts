export interface AggregationMetricResultV2 {
    name: string;
    /**
     * The value of the metric. This will be a double in the case of
     * a numeric metric, or a date string in the case of a date metric.
     *
     */
    value?: any;
}
