import { TimeSeries as OG_TimeSeries } from '@osdk/legacy-client';

/** @deprecated submodule imports aren't public api **/
export type TimeSeries<T extends number | string> = OG_TimeSeries<T>;
