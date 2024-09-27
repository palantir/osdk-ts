import * as Client from "@osdk/client";
Client.createClient({} as any, "", async () => "");

import * as Api from "@osdk/api";
type Q = Api.InterfaceMetadata<any>;

import * as Unstable from "@osdk/client/unstable-do-not-use";
Unstable.augment({ type: "object", apiName: "foo" } as any);
