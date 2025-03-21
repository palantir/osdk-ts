/**
* An identifier for a peered LinkType used for establishing a mapping between local LinkTypes and remote
* LinkTypes for Peering. Before a link can be peered, a user must configure a mapping between the local and
* remote LinkType for that link. If the local and remote LinkType share the same LinkTypePeeringRid, Peering
* will suggest forming a mapping between those types.
*
* LinkTypePeeringRids are preserved in Marketplace blocks, so LinkTypes installed from the same Marketplace
* definition on different stacks will share a LinkTypePeeringRid if the original LinkType packaged in
* Marketplace has a LinkTypePeeringRid.
*/
export type LinkTypePeeringRid = string;
