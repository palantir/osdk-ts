export type WidgetSetLocator = WidgetSetLocator_InternalSitesLayout | WidgetSetLocator_ExternalSitesLayout;
export interface WidgetSetLocator_InternalSitesLayout {
	type: "internalSitesLayout";
	internalSitesLayout: InternalSitesLayoutLocator;
}
export interface WidgetSetLocator_ExternalSitesLayout {
	type: "externalSitesLayout";
	externalSitesLayout: ExternalSitesLayoutLocator;
}
export interface InternalSitesLayoutLocator {
	version: string;
}
export interface ExternalSitesLayoutLocator {
	repositoryRid: string;
	version: string;
}
