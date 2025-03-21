import * as _osdk_shared_client from '@osdk/shared.client';
import { SharedClientContext } from '@osdk/shared.client2';

type OldSharedClientContext = _osdk_shared_client.SharedClientContext;
declare function createSharedClientContext(baseUrl: string, tokenProvider: () => Promise<string>, userAgent: string, fetchFn?: typeof globalThis.fetch): SharedClientContext & OldSharedClientContext;

export { createSharedClientContext };
