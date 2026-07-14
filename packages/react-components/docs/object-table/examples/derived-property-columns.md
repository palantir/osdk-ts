### Derived-property (RDP) columns

Add columns backed by runtime-derived properties with `type: "rdp"`. RDP columns can be sorted like any other column.

```tsx
import { Employee } from "@my/osdk";
import { DerivedProperty } from "@osdk/client";
import {
  type ColumnDefinition,
  ObjectTable,
} from "@osdk/react-components/experimental/object-table";

type RDPs = { managerName: string | undefined };

const columnDefinitions: Array<ColumnDefinition<typeof Employee, RDPs>> = [
  { locator: { type: "property", id: "fullName" } },
  {
    locator: {
      type: "rdp",
      id: "managerName",
      creator: DerivedProperty.creator<typeof Employee, string | undefined>(
        (base) => base.lead.select({ fullName: true }),
        (pivot) => pivot?.fullName
      ),
    },
    renderHeader: () => "Manager",
  },
];

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
  defaultOrderBy={[{ property: "managerName", direction: "asc" }]}
/>;
```

[Open the "with derived property ordering and filter" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-columns--with-derived-property-ordering-and-filter)
