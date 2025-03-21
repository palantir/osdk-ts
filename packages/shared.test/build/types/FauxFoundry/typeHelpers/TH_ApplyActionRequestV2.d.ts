import type { ActionParam } from "@osdk/api";
import type { ActionParameterType, ActionParameterV2, ActionTypeV2, ApplyActionRequestV2, AttachmentRid, ParameterId } from "@osdk/foundry.ontologies";
type TH_ActionParameterType_Primitive<X extends ActionParameterType> = X extends {
	type: "attachment"
} ? AttachmentRid : ActionParam.PrimitiveType<Exclude<X["type"], "object" | "array" | "objectSet" | "interfaceObject" | "attachment">>;
type TH_ActionParameterType<X extends ActionParameterType> = X extends {
	type: "array"
} ? TH_ActionParameterType_Primitive<Extract<X, {
	type: "array"
}>["subType"]>[] : X extends {
	type: "object"
} ? string | number | boolean : X extends {
	type: "objectSet"
} ? string : X extends {
	type: "interfaceObject"
} ? {
	objectTypeApiName: string
	primaryKeyValue: string
} : TH_ActionParameterType_Primitive<X>;
type TH_Parameters<X extends Record<ParameterId, ActionParameterV2>> = { [K in keyof X & string as X[K]["required"] extends true ? K : never] : TH_ActionParameterType<X[K]["dataType"]> } & { [K in keyof X & string as X[K]["required"] extends true ? never : K]? : TH_ActionParameterType<X[K]["dataType"]> };
export type TH_ApplyActionRequestV2<X extends ActionTypeV2> = Omit<ApplyActionRequestV2, "parameters"> & {
	parameters: TH_Parameters<X["parameters"]>
};
export {};
