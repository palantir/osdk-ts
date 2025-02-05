import * as Client from "@osdk/client";
import * as oauth from "@osdk/oauth";
import * as sdk from "@test-app2/osdk";

globalThis.window ??= {
  location: "",
} as any;

const client = oauth.createPublicOauthClient(
  "asdf",
  "https://localhost",
  "https://localhost",
);
Client.createClient("https://localhsot:8080", "ri.foo.bar", client);

import * as Api from "@osdk/api";
type Q = Api.InterfaceMetadata;

import * as Unstable from "@osdk/client/unstable-do-not-use";
Unstable.augment({ type: "object", apiName: "foo" } as any);

if (sdk.$Objects.Employee.apiName !== "Employee") {
  throw new Error("Expected Employee");
}
