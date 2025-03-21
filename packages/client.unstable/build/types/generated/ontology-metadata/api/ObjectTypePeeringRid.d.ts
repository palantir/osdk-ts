/**
* An identifier for a peered ObjectType used for establishing a mapping between local ObjectTypes and remote
* ObjectTypes for Peering. Before a Object can be peered, a user must configure a mapping between the local and
* remote ObjectType for that Object. If the local and remote ObjectType share the same ObjectTypePeeringRid,
* Peering will suggest forming a mapping between those types.
*
* ObjectTypePeeringRids are preserved in Marketplace blocks, so ObjectTypes installed from the same Marketplace
* definition on different stacks will share a ObjectTypePeeringRid if the original ObjectType packaged in
* Marketplace has a ObjectTypePeeringRid.
*/
export type ObjectTypePeeringRid = string;
