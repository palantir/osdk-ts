import { ApplyActionMode } from "./ApplyActionMode";
import { ReturnEditsMode } from "./ReturnEditsMode";

export interface ApplyActionRequestOptions {
    mode?: ApplyActionMode;
    returnEdits?: ReturnEditsMode;
}
