import type { AuthorizationCodeGrant } from "./AuthorizationCodeGrant.js";
import type { ClientCredentialsGrant } from "./ClientCredentialsGrant.js";
import type { OrganizationRid } from "./OrganizationRid.js";
import type { RefreshTokenGrant } from "./RefreshTokenGrant.js";
export interface ConfidentialClient {
	authorizationCodeGrant: AuthorizationCodeGrant;
	clientCredentialsGrant: ClientCredentialsGrant;
	refreshTokenGrant: RefreshTokenGrant;
	allowedOrganizationRids: Array<OrganizationRid> | undefined;
}
