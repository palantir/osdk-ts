/**
* A capability the token should be allowed to perform. The user must still satisfy
* the underlying permission for the capability for the token to be effective. If a
* user loses the underlying permission for the capability the token will no longer
* be effective.
*/
export type TokenCapability = "INSTALL_SDK" | "DEPLOY_WEBSITE";
