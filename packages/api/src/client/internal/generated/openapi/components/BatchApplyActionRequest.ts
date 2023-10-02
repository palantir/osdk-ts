import { ApplyActionRequest } from "./ApplyActionRequest";

export interface BatchApplyActionRequest {
    requests: Array<ApplyActionRequest>;
}
