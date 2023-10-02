import { ObjectEdit } from "./ObjectEdit";

export interface ObjectEdits {
    edits: Array<ObjectEdit>;
    addedObjectCount: number;
    modifiedObjectsCount: number;
    addedLinksCount: number;
}
