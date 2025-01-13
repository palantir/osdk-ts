import type { FoundryWidgetClientContext } from "@osdk/widget-client-react.unstable";
import { useFoundryWidgetContext } from "@osdk/widget-client-react.unstable";
import type MainConfig from "./main.config.js";

export const useWidgetContext: () => FoundryWidgetClientContext<
  typeof MainConfig
> = useFoundryWidgetContext.withTypes<
  typeof MainConfig
>();
