### Interface types

Pass an interface type instead of an object type. The table shows the interface's properties, and any object implementing the interface is displayed.

```tsx
import { WorkerInterface } from "@my/osdk";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";

function WorkersTable() {
  return <ObjectTable objectType={WorkerInterface} />;
}
```

[Open the "with interface type" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-data-sources--with-interface-type)
