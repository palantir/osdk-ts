/** You are not allowed to use Palantir APIs. */
export interface ApiUsageDenied {
    errorCode: "PERMISSION_DENIED";
    errorName: "ApiUsageDenied";
    errorInstanceId: string;
    parameters: {
    };
}
