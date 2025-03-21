export interface TokenSuccessResponse {
	access_token: string;
	token_type: string;
	refresh_token: string;
	expires_in: number;
}
export interface TokenErrorResponse {
	error: string;
	error_description: string;
}
export type TokenResponse = TokenErrorResponse | TokenSuccessResponse;
export declare function isTokenErrorResponse(response: TokenSuccessResponse | TokenErrorResponse): response is TokenErrorResponse;
