import type { AsyncParameterValueMap, WidgetConfig } from "../config.js";
interface HostBaseMessage<
	T extends string,
	P = unknown
> {
	type: T;
	payload: P;
}
export declare namespace HostMessage {
	const Version = "1.0.0";
	type Version = typeof Version;
	namespace Payload {
		interface UpdateParameters<C extends WidgetConfig<C["parameters"]>> {
			parameters: AsyncParameterValueMap<C>;
		}
		interface _unstable_FetchResponseSuccess {
			id: string;
			status: number;
			statusText: string;
			headers: Record<string, string>;
			body: string;
		}
		interface _unstable_FetchResponseFailed {
			id: string;
			error: string;
		}
	}
	type Payload = Payload.UpdateParameters<any> | Payload._unstable_FetchResponseSuccess | Payload._unstable_FetchResponseFailed;
	interface UpdateParameters<C extends WidgetConfig<C["parameters"]>> extends HostBaseMessage<"host.update-parameters", Payload.UpdateParameters<C>> {}
	interface _unstable_FetchResponseSuccess extends HostBaseMessage<"host._unstable.fetch-response-success", Payload._unstable_FetchResponseSuccess> {}
	interface _unstable_FetchResponseFailed extends HostBaseMessage<"host._unstable.fetch-response-failed", Payload._unstable_FetchResponseFailed> {}
}
export type HostMessage<C extends WidgetConfig<C["parameters"]>> = HostMessage.UpdateParameters<C> | HostMessage._unstable_FetchResponseSuccess | HostMessage._unstable_FetchResponseFailed;
export declare function isHostParametersUpdatedMessage<C extends WidgetConfig<C["parameters"]>>(event: HostMessage<C>): event is HostMessage.UpdateParameters<C>;
export declare function _unstable_isHostFetchResponseSuccessMessage<C extends WidgetConfig<C["parameters"]>>(event: HostMessage<C>): event is HostMessage._unstable_FetchResponseSuccess;
export declare function _unstable_isHostFetchResponseFailedMessage<C extends WidgetConfig<C["parameters"]>>(event: HostMessage<C>): event is HostMessage._unstable_FetchResponseFailed;
type HostMessageVisitor<C extends WidgetConfig<C["parameters"]>> = { [T in HostMessage<C>["type"]] : (payload: Extract<HostMessage<C>, {
	type: T
}> extends {
	payload: infer P
} ? P : never) => void } & {
	_unknown: (type: string) => void
};
/**
* Strongly typed visitor to handle every type of host message
*/
export declare function visitHostMessage<C extends WidgetConfig<C["parameters"]>>(message: HostMessage<C>, visitor: HostMessageVisitor<C>): void;
export {};
