import {
  OsdkProvider2 as Provider,
  useOsdkClient2 as useClient,
} from "@osdk/react/experimental";

export function App() {
  const client = useClient();
  return (
    <Provider client={client}>
      <div />
    </Provider>
  );
}
