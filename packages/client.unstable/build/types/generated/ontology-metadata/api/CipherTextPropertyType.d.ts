import type { Type } from "./Type.js";
export interface CipherTextPropertyType {
	plainTextType: Type;
	defaultCipherChannelRid: string | undefined;
}
