import type {
  TimeSeriesIterator as OG_TimeSeriesIterator,
  TimeSeriesTerminalOperations as OG_TimeSeriesTerminalOperations,
} from '@osdk/legacy-client';

/** @deprecated submodule imports arent public api **/
export type TimeSeriesTerminalOperations<T extends number | string> = OG_TimeSeriesTerminalOperations<T>;

/** @deprecated submodule imports arent public api **/
export type TimeSeriesIterator<T extends number | string> = OG_TimeSeriesIterator<T>;
