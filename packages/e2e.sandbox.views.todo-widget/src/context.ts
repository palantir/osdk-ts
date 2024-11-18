import { useFoundryViewContext } from "@osdk/views-client-react.unstable";
import type MainParameters from "./main.parameters.js";

export const useFoundryContext = useFoundryViewContext.withTypes<
  typeof MainParameters
>();
