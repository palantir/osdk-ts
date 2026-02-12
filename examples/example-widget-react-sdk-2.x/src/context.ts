import { useFoundryWidgetContext } from "@osdk/widget.client-react.unstable";
import type MainConfig from "./main.config.js";

export const useWidgetContext = useFoundryWidgetContext.withTypes<
  typeof MainConfig
>();
