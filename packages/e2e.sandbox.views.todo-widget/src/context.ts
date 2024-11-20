import { useFoundryViewContext } from "@osdk/views-client-react.unstable";
import type MainConfig from "./main.config.js";

export const useFoundryContext = useFoundryViewContext.withTypes<
  typeof MainConfig
>();
