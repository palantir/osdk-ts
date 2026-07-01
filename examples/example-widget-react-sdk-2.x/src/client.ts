import { createClient } from "@osdk/client";
import { $ontologyRid } from "@osdk/e2e.generated.catchall";
import { createFoundryWidgetTokenProvider } from "@osdk/widget.client";

export const client = createClient(
  window.location.origin,
  $ontologyRid,
  createFoundryWidgetTokenProvider()
);
