import { $ontologyRid } from "@osdk/e2e.generated.catchall";
import { createClient } from "@osdk/client";

export const client = createClient(
    window.location.origin,
    $ontologyRid,
    () => Promise.resolve("widgets-auth"),
);
