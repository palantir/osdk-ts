### From an ObjectSet

Pass an `objectSet` to drive the table from a pre-filtered or derived set instead of the whole object type.

```tsx
import { Employee } from "@my/osdk";
import { useOsdkClient } from "@osdk/react";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";

function MarketingTable() {
  const client = useOsdkClient();
  const marketing = client(Employee).where({ jobProfile: "Marketing Manager" });
  return <ObjectTable objectType={Employee} objectSet={marketing} />;
}
```

[Open the "with object set" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-data-sources--with-object-set)
