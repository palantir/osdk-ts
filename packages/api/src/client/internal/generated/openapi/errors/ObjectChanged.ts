/**
 * An object used by this `Action` was changed by someone else while the `Action` was running.
 *
 */
export interface ObjectChanged {
    errorCode: "CONFLICT";
    errorName: "ObjectChanged";
    errorInstanceId: string;
    parameters: {
    };
}
