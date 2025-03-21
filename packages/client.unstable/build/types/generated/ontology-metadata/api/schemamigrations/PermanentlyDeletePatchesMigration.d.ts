/**
* A migration that will permanently delete patches applied on an object type. This is a required migration to be present if changing or modifying the primary key of an object type that has received edits.
*/
export interface PermanentlyDeletePatchesMigration {}
