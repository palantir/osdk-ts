import type { ObjectOrInterfaceDefinition, OsdkBase } from "@osdk/api";
export interface HolderBase<T extends ObjectOrInterfaceDefinition> {
	[UnderlyingOsdkObject]: OsdkBase<any>;
	[ObjectDefRef]?: T;
	[InterfaceDefRef]?: T;
}
