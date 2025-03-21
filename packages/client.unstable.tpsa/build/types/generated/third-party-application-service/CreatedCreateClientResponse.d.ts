import type { ClientId } from "./ClientId.js";
import type { ClientSecret } from "./ClientSecret.js";
export interface CreatedCreateClientResponse {
	clientId: ClientId;
	secret: ClientSecret | undefined;
}
