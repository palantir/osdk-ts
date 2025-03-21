export interface Token {
	readonly access_token: string;
	readonly expires_in: number;
	readonly refresh_token?: string;
	readonly expires_at: number;
}
