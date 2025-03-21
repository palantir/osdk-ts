import type { Client } from "@osdk/client";
import { type ObservableClient } from "@osdk/client/unstable-do-not-use";
import React from "react";
interface OsdkProviderOptions {
	children: React.ReactNode;
	client: Client;
	observableClient?: ObservableClient;
}
export declare function OsdkProvider2({ children, client, observableClient }: OsdkProviderOptions): React.JSX.Element;
export {};
