import { useLinks, useObjectSet } from "@osdk/react";
import { usePlatformApi } from "@osdk/react/platform-apis";

export function MyComponent() {
  const items = useObjectSet(MyObj.objectSet, {});
  return null;
}
