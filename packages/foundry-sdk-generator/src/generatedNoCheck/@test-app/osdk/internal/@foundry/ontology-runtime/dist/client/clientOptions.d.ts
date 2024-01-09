import type { FoundryClientOptions as OG_FoundryClientOptions } from '@osdk/legacy-client';
import { Auth } from '@osdk/legacy-client';
/** @deprecated submodule imports arent public api **/
export type FoundryClientOptions<TAuth extends Auth = Auth> = OG_FoundryClientOptions<TAuth>;
