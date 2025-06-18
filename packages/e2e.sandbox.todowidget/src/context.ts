import type { FoundryWidgetClientContext } from "@osdk/widget.client-react";
import { useFoundryWidgetContext } from "@osdk/widget.client-react";
import type MainConfig from "./main.config.js";

export const useWidgetContext: () => FoundryWidgetClientContext<
  typeof MainConfig
> = useFoundryWidgetContext.withTypes<
  typeof MainConfig
>();
