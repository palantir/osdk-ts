import type { Client } from "@osdk/client";
import React from "react";
export declare function OsdkProvider({ children, client }: {
	children: React.ReactNode
	client: Client
}): React.JSX.Element;
