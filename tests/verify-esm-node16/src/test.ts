import * as Client from "@osdk/client";
import * as sdk from "@test-app2/osdk";
Client.createClient({} as any, "", async () => "");

import * as Api from "@osdk/api";
type Q = Api.InterfaceMetadata;

import * as Unstable from "@osdk/client/unstable-do-not-use";
Unstable.augment({ type: "object", apiName: "foo" } as any);

if (sdk.$Objects.Employee.apiName !== "Employee") {
  throw new Error("Expected Employee");
}
