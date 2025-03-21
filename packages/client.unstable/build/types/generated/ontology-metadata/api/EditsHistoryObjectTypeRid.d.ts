/**
* An rid identifying an object type used for storing edits history of another object type. Edit history object
* types cannot be edited manually by users and are automatically maintained by OMS based on the edits history
* settings in entity metadata of the main object type to track history for.
*/
export type EditsHistoryObjectTypeRid = string;
