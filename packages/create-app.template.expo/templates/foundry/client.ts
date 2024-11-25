import { Client, createClient, createPlatformClient, PlatformClient } from '@osdk/client';
import { FOUNDRY_URL, ONTOLOGY_RID } from './osdkConst';
import { getValidAuthToken } from './Auth';
import { $ontologyRid } from '@osdk-sample-app-20/sdk';


export const client: Client = createClient(
    FOUNDRY_URL, 
    $ontologyRid, 
    getValidAuthToken,
);

export const platformClient: PlatformClient = createPlatformClient(FOUNDRY_URL, getValidAuthToken);
