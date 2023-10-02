import { BaseType } from "./BaseType";
import { ColumnName } from "./ColumnName";

export interface ColumnConstraint {
    columnType: BaseType;
    name: ColumnName;
    nullable?: boolean;
}
