import { Double, MetricValue } from '../Aggregations';
import { MultipleAggregatableProperty as OG_MultipleAggregatableProperty } from '@osdk/legacy-client';
/** @deprecated submodule imports arent public api **/
export declare const MultipleAggregatableProperty: <T extends import("@osdk/legacy-client").MetricValue>(propertyApiName: string, propertyType: import("@osdk/legacy-client").MetricValueType) => OG_MultipleAggregatableProperty<T>;
/** @deprecated submodule imports arent public api **/
export type MultipleAggregatableProperty<TResult extends MetricValue = Double> = OG_MultipleAggregatableProperty<TResult>;
