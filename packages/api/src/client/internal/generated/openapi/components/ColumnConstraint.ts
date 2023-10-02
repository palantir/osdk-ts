import { BaseType } from "./BaseType";
import { ColumnName } from "./ColumnName";

export type ColumnConstraint = { columnType: BaseType; name: ColumnName; nullable?: boolean; };
