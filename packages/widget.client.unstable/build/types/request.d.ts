import type { HostMessage, WidgetMessage } from "@osdk/widget.api.unstable";
export declare function serializeRequest(id: string, input: RequestInfo | URL, init: RequestInit | undefined): WidgetMessage.Payload._unstable_FetchRequest;
export declare function deserializeResponse(response: HostMessage.Payload._unstable_FetchResponseSuccess): Response;
