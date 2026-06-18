import { OsdkProvider2, useOsdkClient2 } from "@osdk/react/experimental";
import React from "react";

interface Props {
  client: unknown;
}

export function App({ client }: Props) {
  const c = useOsdkClient2();
  return (
    <OsdkProvider2 client={client}>
      <div>{String(c)}</div>
    </OsdkProvider2>
  );
}
