/**
* Entity can be stored in Phonograph and Highbury though the data is read-only. Edits are disabled.
* This is a legacy state which should not be used anymore. Instead set the ObjectType or LinkType via a
* `ObjectStorageV2Modification` which includes a `MigrationConfiguration` to start the migration process
* from Phonograh to Object Storage V2 (Highbury).
*
* If a consumer attempts to set an object type or link type to `ReadOnlyV1V2`, OMS will internally
* remap to an `ObjectStorageV2Modification` instead.
*/
export interface ReadOnlyV1V2Modification {}
