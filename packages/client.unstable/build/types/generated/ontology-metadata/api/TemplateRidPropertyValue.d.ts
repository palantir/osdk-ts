/**
* A unique identifier of a codex template and optionally a codex template version which resolves to a derived
* series. If no version is provided, the latest version is used.
*/
export interface TemplateRidPropertyValue {
	templateRid: string;
	templateVersion: string | undefined;
}
