import{j as e}from"./iframe-Dm6eVTzG.js";import{useMDXComponents as r}from"./index-FlUseBxK.js";import{M as i}from"./blocks-Dr6SaYbC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BhPs6Q8c.js";import"./index-DSDYHDv9.js";import"./index-CDLvbpJ7.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{title:"Docs/Guides/Usage with OSDK"}),`
`,e.jsx(n.h1,{id:"usage-with-osdk",children:"Usage with OSDK"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@osdk/react-components"}),` is built on top of
`,e.jsx(n.a,{href:"https://github.com/palantir/osdk-ts/tree/main/packages/react",rel:"nofollow",children:e.jsx(n.code,{children:"@osdk/react"})}),`,
which provides hooks for fetching Ontology data. Components accept OSDK types
directly and handle data loading, caching, and state management automatically.`]}),`
`,e.jsx(n.h2,{id:"how-it-works",children:"How it works"}),`
`,e.jsx(n.p,{children:"Every OSDK-aware component follows a two-layer architecture:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"OSDK layer"})," — fetches data via ",e.jsx(n.code,{children:"@osdk/react"}),` hooks, converts OSDK
entities into primitives, and passes them down.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Base layer"}),` — a pure React component with no OSDK imports. It receives
primitives and handles all UI interactions and styling.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["This means you can always drop down to the ",e.jsx(n.code,{children:"Base*"}),` variant and bring your own
data source.`]}),`
`,e.jsx(n.h2,{id:"osdkprovider",children:"OsdkProvider"}),`
`,e.jsxs(n.p,{children:["All components require an ",e.jsx(n.code,{children:"OsdkProvider"}),` wrapping your app. The provider
supplies the OSDK client that hooks use for network requests.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { createClient } from "@osdk/client";
import { OsdkProvider } from "@osdk/react";

const client = createClient(
  "https://your-stack.palantirfoundry.com",
  "ri.ontology.main.ontology.{UUID}",
  async () => "your-auth-token",
);

function App() {
  return (
    <OsdkProvider client={client}>
      {/* All @osdk/react-components go inside here */}
    </OsdkProvider>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"objecttable",children:"ObjectTable"}),`
`,e.jsx(n.p,{children:"Pass an OSDK object type and the table handles everything:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import { Employee } from "@your-osdk-package";

function EmployeeDirectory() {
  return (
    <ObjectTable
      objectType={Employee}
      enableOrdering
      enableColumnResize
    />
  );
}
`})}),`
`,e.jsx(n.h3,{id:"with-column-definitions",children:"With column definitions"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import type { ColumnDefinition } from "@osdk/react-components/experimental/object-table";

const columns: ColumnDefinition<typeof Employee>[] = [
  { id: "fullName", header: "Name" },
  { id: "department", header: "Department" },
  { id: "startDate", header: "Start Date" },
];

<ObjectTable objectType={Employee} columnDefinitions={columns} />
`})}),`
`,e.jsx(n.h2,{id:"filterlist--objecttable",children:"FilterList + ObjectTable"}),`
`,e.jsxs(n.p,{children:["Combine ",e.jsx(n.code,{children:"FilterList"})," with ",e.jsx(n.code,{children:"ObjectTable"})," to add interactive filtering:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { FilterList } from "@osdk/react-components/experimental/filter-list";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import { Employee } from "@your-osdk-package";

function FilteredDirectory() {
  const [filter, setFilter] = useState(undefined);

  return (
    <div style={{ display: "flex", gap: 16 }}>
      <FilterList
        objectType={Employee}
        filterDefinitions={[
          { type: "PROPERTY", id: "dept", key: "department",
            label: "Department", filterComponent: "LISTOGRAM",
            filterState: { type: "EXACT_MATCH", values: [] } },
        ]}
        onFilterChanged={setFilter}
      />
      <ObjectTable objectType={Employee} filter={filter} />
    </div>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"actionform",children:"ActionForm"}),`
`,e.jsx(n.p,{children:"Render a form for executing an Ontology Action:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ActionForm } from "@osdk/react-components/experimental/action-form";
import { createEmployee } from "@your-osdk-package";

function NewEmployeeForm() {
  return (
    <ActionForm
      actionType={createEmployee}
      onSubmitSuccess={() => console.log("Employee created!")}
    />
  );
}
`})}),`
`,e.jsx(n.h2,{id:"using-base-components",children:"Using Base components"}),`
`,e.jsxs(n.p,{children:["If you have your own data source, use the ",e.jsx(n.code,{children:"Base*"})," variants directly:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { BaseTable } from "@osdk/react-components/experimental/object-table";

function CustomTable({ data }) {
  return (
    <BaseTable
      rows={data}
      columns={[
        { id: "name", header: "Name", accessorKey: "name" },
        { id: "email", header: "Email", accessorKey: "email" },
      ]}
    />
  );
}
`})}),`
`,e.jsx(n.h2,{id:"further-reading",children:"Further reading"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"?path=/docs/docs-components-object-table--docs",children:"ObjectTable guide"})}),` —
Full props reference and 15+ examples.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"?path=/docs/docs-components-filter-list--docs",children:"FilterList guide"})}),` —
Filter definitions, histograms, and recipes.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"?path=/docs/docs-components-pdf-viewer--docs",children:"PdfViewer guide"})}),` —
Three-tier architecture and building blocks.`]}),`
`]})]})}function h(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{h as default};
