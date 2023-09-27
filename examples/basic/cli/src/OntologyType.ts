import type { Ontology } from "@osdk/examples.basic.sdk";

// This little trick makes it easier for me to see
// what is happening in the types when I hover.
// We need to actually generate some nice types here too
type CapturedOntologyType = typeof Ontology;
export interface OntologyType extends CapturedOntologyType {}
