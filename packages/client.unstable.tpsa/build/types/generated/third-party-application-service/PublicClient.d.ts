import type { AuthorizationCodeGrant } from "./AuthorizationCodeGrant.js";
import type { OrganizationRid } from "./OrganizationRid.js";
import type { RefreshTokenGrant } from "./RefreshTokenGrant.js";
export interface PublicClient {
	authorizationCodeGrant: AuthorizationCodeGrant;
	refreshTokenGrant: RefreshTokenGrant;
	allowedOrganizationRids: Array<OrganizationRid> | undefined;
}
