import type { InterfaceHolder } from "../../object/convertWireToOsdkObjects/InterfaceHolder.js";
import type { ObjectHolder } from "../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { SimpleWhereClause } from "./SimpleWhereClause.js";
export declare function objectSortaMatchesWhereClause(o: ObjectHolder | InterfaceHolder, whereClause: SimpleWhereClause, strict: boolean): boolean;
