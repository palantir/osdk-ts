import { type ConjureContext } from "conjure-lite";
import type { ObjectTypeRid } from "../../ObjectTypeRid.js";
import type { GetSuggestedRolesDatasourceResponse } from "../GetSuggestedRolesDatasourceResponse.js";
/**
* Returns the ids of the principals that are suggested to have the editor or owner role on the ObjectType.
*
* The suggestions are based on what operations each principal has on the the backing dataset.
*
* The endpoint won't suggest any roles if the ObjectType has more than one backing datasources.
*
* This endpoint requires the `ontology:update-entity-roles` operation on the ObjectTypeRid and
* `ontology:unrestrict-from-datasource` operation on the dataset rid backing the ObjectType.
*/
export declare function getSuggestedRolesForObjectTypeDatasource(ctx: ConjureContext, objectTypeRid: ObjectTypeRid): Promise<GetSuggestedRolesDatasourceResponse>;
