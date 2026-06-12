import { useLinks, useObjectSet } from "@osdk/react/experimental";
import { usePlatformApi } from "@osdk/react/experimental/admin";

export function MyComponent() {
  const items = useObjectSet(MyObj.objectSet, {});
  return null;
}
