"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoundryClient = void 0;
const legacy_client_1 = require("@osdk/legacy-client");
const Ontology_1 = require("./Ontology");
class FoundryClient extends legacy_client_1.BaseFoundryClient {
    constructor(options) {
        super(options, Ontology_1.Ontology);
    }
    get ontology() {
        return super.ontology;
    }
}
exports.FoundryClient = FoundryClient;
