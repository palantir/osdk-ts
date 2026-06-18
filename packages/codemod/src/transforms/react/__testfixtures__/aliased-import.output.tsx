import {
  OsdkProvider as Provider,
  useOsdkClient as useClient,
} from "@osdk/react";

export function App() {
  const client = useClient();
  return (
    <Provider client={client}>
      <div />
    </Provider>
  );
}
