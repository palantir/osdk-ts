import * as Api from "@osdk/api";
type Q = Api.InterfaceDefinition<any, any>;

import * as LegacyClient from "@osdk/legacy-client";
LegacyClient.isOk({ type: "ok", value: "" });
