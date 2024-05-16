import { Double, MetricValue } from '../Aggregations.js';

import { MultipleAggregatableProperty as OG_MultipleAggregatableProperty } from '@osdk/legacy-client';

/** @deprecated submodule imports arent public api **/
export const MultipleAggregatableProperty = OG_MultipleAggregatableProperty;

/** @deprecated submodule imports arent public api **/
export type MultipleAggregatableProperty<TResult extends MetricValue = Double> =
  OG_MultipleAggregatableProperty<TResult>;
