import { AsyncApplyActionOperationV2 } from "./AsyncApplyActionOperationV2";
import { AsyncActionOperation } from "./AsyncActionOperation";

export interface AsyncOperation_ApplyActionAsyncV2 extends AsyncApplyActionOperationV2 {
    type: "applyActionAsyncV2";
}

function isApplyActionAsyncV2(obj: AsyncOperation): obj is AsyncOperation_ApplyActionAsyncV2 {
    return (obj.type === "applyActionAsyncV2");
}

function applyActionAsyncV2(obj: AsyncApplyActionOperationV2): AsyncOperation_ApplyActionAsyncV2 {
    return {
        ...obj,
        type: "applyActionAsyncV2",
    };
}

export interface AsyncOperation_ApplyActionAsync extends AsyncActionOperation {
    type: "applyActionAsync";
}

function isApplyActionAsync(obj: AsyncOperation): obj is AsyncOperation_ApplyActionAsync {
    return (obj.type === "applyActionAsync");
}

function applyActionAsync(obj: AsyncActionOperation): AsyncOperation_ApplyActionAsync {
    return {
        ...obj,
        type: "applyActionAsync",
    };
}

export interface AsyncOperationVisitor<T> {
    applyActionAsyncV2: (obj: AsyncApplyActionOperationV2) => T;
    applyActionAsync: (obj: AsyncActionOperation) => T;
    unknown: (obj: AsyncOperation) => T;
}

function visit<T>(obj: AsyncOperation, visitor: AsyncOperationVisitor<T>): T {
    if (isApplyActionAsyncV2(obj)) {
        return visitor.applyActionAsyncV2(obj);
    }

    if (isApplyActionAsync(obj)) {
        return visitor.applyActionAsync(obj);
    }

    return visitor.unknown(obj);
}

export type AsyncOperation = AsyncOperation_ApplyActionAsyncV2 | AsyncOperation_ApplyActionAsync;

export const AsyncOperation = {
    isApplyActionAsyncV2: isApplyActionAsyncV2,
    applyActionAsyncV2: applyActionAsyncV2,
    isApplyActionAsync: isApplyActionAsync,
    applyActionAsync: applyActionAsync,
    visit: visit,
};
