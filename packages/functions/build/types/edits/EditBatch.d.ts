import type { AddLinkEdits, AnyEdit, CreateObjectEdits, DeleteObjectEdits, RemoveLinkEdits, UpdateObjectEdits } from "./types.js";
export interface EditBatch<X extends AnyEdit = never> {
	link: <L extends AddLinkEdits<X>>(source: L["source"], apiName: L["apiName"], target: L["target"]) => void;
	unlink: <L extends RemoveLinkEdits<X>>(source: L["source"], apiName: L["apiName"], target: L["target"]) => void;
	create: <O extends CreateObjectEdits<X>>(obj: O["obj"], properties: O["properties"]) => void;
	delete: <O extends DeleteObjectEdits<X>>(obj: O["obj"]) => void;
	update: <O extends UpdateObjectEdits<X>>(obj: O["obj"], properties: O["properties"]) => void;
	getEdits: () => X[];
}
