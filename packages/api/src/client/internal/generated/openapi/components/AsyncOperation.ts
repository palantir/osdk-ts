import { AsyncApplyActionOperationV2 } from "./AsyncApplyActionOperationV2";
import { AsyncActionOperation } from "./AsyncActionOperation";

export interface AsyncOperation_ApplyActionAsyncV2 extends AsyncApplyActionOperationV2 {
    type: "applyActionAsyncV2";
}

export interface AsyncOperation_ApplyActionAsync extends AsyncActionOperation {
    type: "applyActionAsync";
}

export type AsyncOperation = AsyncOperation_ApplyActionAsyncV2 | AsyncOperation_ApplyActionAsync;
