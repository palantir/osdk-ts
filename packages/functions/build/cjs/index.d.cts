export { Attachment, Range, ThreeDimensionalAggregation, TwoDimensionalAggregation } from '@osdk/api';
import { Client } from '@osdk/client';
import { A as AnyEdit, a as AddLinkEdits, R as RemoveLinkEdits, C as CreateObjectEdits, D as DeleteObjectEdits, U as UpdateObjectEdits } from './internal-CCgasLc-.cjs';
export { E as Edits } from './internal-CCgasLc-.cjs';

type Integer<T extends number = number> = T & {
    __integerBrand?: void;
};
type Float<T extends number = number> = T & {
    __floatBrand?: void;
};
type Double<T extends number = number> = T & {
    __doubleBrand?: void;
};
type Long<T extends string = string> = T & {
    __longBrand?: void;
};
type DateISOString<T extends string = string> = T & {
    __dateBrand?: void;
};
type TimestampISOString<T extends string = string> = T & {
    __timestampBrand?: void;
};

interface EditBatch<X extends AnyEdit = never> {
    link: <L extends AddLinkEdits<X>>(source: L["source"], apiName: L["apiName"], target: L["target"]) => void;
    unlink: <L extends RemoveLinkEdits<X>>(source: L["source"], apiName: L["apiName"], target: L["target"]) => void;
    create: <O extends CreateObjectEdits<X>>(obj: O["obj"], properties: O["properties"]) => void;
    delete: <O extends DeleteObjectEdits<X>>(obj: O["obj"]) => void;
    update: <O extends UpdateObjectEdits<X>>(obj: O["obj"], properties: O["properties"]) => void;
    getEdits: () => X[];
}

declare function createEditBatch<T extends AnyEdit>(_client: Client): EditBatch<T>;

export { type DateISOString, type Double, type EditBatch, type Float, type Integer, type Long, type TimestampISOString, createEditBatch };
