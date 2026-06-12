import { OsdkProvider, useOsdkClient } from "@osdk/react";
import React from "react";

interface Props {
  client: unknown;
}

export function App({ client }: Props) {
  const c = useOsdkClient();
  return (
    <OsdkProvider client={client}>
      <div>{String(c)}</div>
    </OsdkProvider>
  );
}
