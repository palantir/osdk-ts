import { useFoundryWidgetContext } from "@osdk/widget.client-react";
import type MainConfig from "./main.config.js";

export const useWidgetContext = useFoundryWidgetContext.withTypes<
  typeof MainConfig
>();
