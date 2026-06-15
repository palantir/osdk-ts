### Basic table

Pass an object type and ObjectTable fetches rows, infers columns from the type's properties, and wires up sorting and the column-header menu out of the box.

```tsx
import { Employee } from "@my/osdk";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";

function EmployeesTable() {
  return <ObjectTable objectType={Employee} />;
}
```

[Open the "default" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable--default)
