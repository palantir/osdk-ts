/**
* Represents the type of ObjectDb, for example Highbury or Writeback. The value corresponds to the type field
* advertised by the ObjectDb in the "funnel-sync-manager" discovery role.
*
* The maximum size of the objects DB type is 20 bytes, when encoded in UTF-8.
*/
export type ObjectDbType = string;
