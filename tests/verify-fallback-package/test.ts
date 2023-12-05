import * as Client from "@osdk/client";
Client.createClient({} as any, "", () => "");

import * as Api from "@osdk/api";
Api.createThinClient({} as any, "", () => "");

import * as LegacyClient from "@osdk/legacy-client";
LegacyClient.isOk({ type: "ok", value: "" });
