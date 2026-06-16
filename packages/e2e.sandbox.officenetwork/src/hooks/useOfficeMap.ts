import React from "react";
import type { Office } from "../generatedNoCheck2/index.js";

export function useOfficeMap(
  offices: ReadonlyArray<Office.OsdkInstance>,
): Map<string, Office.OsdkInstance> {
  return React.useMemo(() => {
    const map = new Map<string, Office.OsdkInstance>();
    for (const office of offices) {
      map.set(office.primaryKey_, office);
    }
    return map;
  }, [offices]);
}
