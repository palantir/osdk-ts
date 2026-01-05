import { $ontologyRid } from "@osdk/e2e.generated.catchall";
import { createClient } from "@osdk/client";
import { createFoundryWidgetTokenProvider } from "@osdk/widget.client";

export const client = createClient(
  window.location.origin,
  $ontologyRid,
  createFoundryWidgetTokenProvider(),
);
