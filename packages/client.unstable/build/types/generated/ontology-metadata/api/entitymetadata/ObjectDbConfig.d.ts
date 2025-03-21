/**
* Configuration for one instance of an ObjectDb, for example for one Highbury cluster.
* If `configValue` is left empty, the ObjectDb should apply the default configuration for this entity.
* If `configValue` is present, interpretation of the string is responsibility of the ObjectDb.
*/
export interface ObjectDbConfig {
	configValue: string | undefined;
}
