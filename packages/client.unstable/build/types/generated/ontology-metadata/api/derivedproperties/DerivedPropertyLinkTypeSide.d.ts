/**
* Specifies a side of a link type to indicate a direction derived property is going from. Its semantic
* meaning depends on the context of usage.
*
* For many-to-many link types SOURCE corresponds to object type A in the link type definition, and
* TARGET corresponds to object type B.
*
* For one-to-many link types SOURCE generally corresponds to the ONE (or primary key) side in the
* link type definition, and TARGET corresponds to the MANY (or foreign key) side.
* EXCEPTION: In self-referential one-to-many link types, this is inverted: SOURCE corresponds to the MANY side
* and TARGET corresponds to the ONE side in self-referential one-to-many link types.
*
* See also: `https://github.palantir.build/foundry/ontology-metadata-service/blob/develop/docs/adr/0055-link-type-side-semantics.md`
* for more context surrounding this decision.
*/
export type DerivedPropertyLinkTypeSide = "SOURCE" | "TARGET";
