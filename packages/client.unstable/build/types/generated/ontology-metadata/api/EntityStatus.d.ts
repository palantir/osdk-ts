/**
* Status type corresponding to `ObjectType`/`LinkType`/`PropertyType`-statuses. Differently from them, this only
* encodes the status itself, without encoding e.g. deprecation message. This is safe to log.
*/
export type EntityStatus = "EXPERIMENTAL" | "ACTIVE" | "DEPRECATED" | "EXAMPLE" | "ENDORSED";
