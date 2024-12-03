import { Client, createClient, createPlatformClient, PlatformClient } from '@osdk/client';
import { FOUNDRY_URL } from './osdkConst';
import { getValidAuthToken } from './Auth';
import { $ontologyRid } from "@osdk/e2e.generated.catchall";


export const client: Client = createClient(
    FOUNDRY_URL, 
    $ontologyRid, 
    getValidAuthToken,
);

export const platformClient: PlatformClient = createPlatformClient(FOUNDRY_URL, getValidAuthToken);
