import type { Client } from "@osdk/client";
import type { ObservableClient } from "@osdk/client/unstable-do-not-use";
import React from "react";
interface OsdkContextContents {
	client: Client;
	observableClient: ObservableClient;
}
export declare const OsdkContext2: React.Context<OsdkContextContents>;
export {};
