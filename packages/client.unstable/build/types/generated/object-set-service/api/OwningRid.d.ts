/**
* Resource identifier of a gatekeeper resource which OSS can use to permission additional metadata about
* the execution of requests.
* For requests that run with Backend.HIGHBURY, this owning rid will be used as Spark Reporter's
* "owning rid" and therefore anyone who has the "foundry:read-data" operation on this rid as well as the
* data involved in the queried object set will be able to see associated metadata, for example spark query
* plans and rdd graphs.
* NOTE: This rid has to be safe for logging purposes.
*/
export type OwningRid = string;
