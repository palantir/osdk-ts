import type { ObjectTypeId } from "../ObjectTypeId.js";
import type { CreateObjectOption } from "./CreateObjectOption.js";
/**
* ObjectReferenceType specifies that this parameter must be an ObjectLocator. An additional optional field maybeCreateObjectOption is included for handling upsert action types by providing flexibility of object creation from a user-specified PK or auto-generated UID PK.
*/
export interface ObjectReferenceType {
	objectTypeId: ObjectTypeId;
	maybeCreateObjectOption: CreateObjectOption | undefined;
}
