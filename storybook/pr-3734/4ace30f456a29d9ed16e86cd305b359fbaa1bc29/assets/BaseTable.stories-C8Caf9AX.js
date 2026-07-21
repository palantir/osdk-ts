import{f as q,j as n,r as R}from"./iframe-CpwJPeyh.js";import{B as o,u as r,g as s,a as O}from"./Table-DzfjySjW.js";import"./preload-helper-GrGVcR2a.js";import"./index-DJkA5721.js";import"./Dialog-H-mKm1_Q.js";import"./cross-BJntrg2g.js";import"./svgIconContainer-CqkgEI8-.js";import"./useBaseUiId-DihNpFQ5.js";import"./InternalBackdrop-BIy4rB2g.js";import"./composite-C-Beuk3S.js";import"./index-tzu8SvT9.js";import"./index-B6xsto9n.js";import"./index-Bq9Ipd8V.js";import"./useEventCallback-Lg50Z1uB.js";import"./SkeletonBar-B7n7GM6J.js";import"./LoadingCell-UnqXRjOb.js";import"./ColumnConfigDialog-BXnck7ri.js";import"./DraggableList-BT6VmVR4.js";import"./search-rn4tl3gn.js";import"./Input-YvJt1O2i.js";import"./useControlled-DZ9apck0.js";import"./isEqual--gKKWI32.js";import"./isObject-CDJPgJy4.js";import"./Button-Bb-o9PCs.js";import"./ActionButton-BlyZTbqV.js";import"./Checkbox-Bq31nRAU.js";import"./useValueChanged-mSswcGvK.js";import"./CollapsiblePanel-fMkxFo_n.js";import"./MultiColumnSortDialog-L0sTM-wy.js";import"./MenuTrigger-l7mCAK2w.js";import"./CompositeItem-BnN8NUKf.js";import"./ToolbarRootContext-C-Uwte3Q.js";import"./getDisabledMountTransitionStyles-mgrrECha.js";import"./getPseudoElementBounds-BaQr93H7.js";import"./chevron-down-DUHALcBs.js";import"./index-_j5MOVdN.js";import"./error-D2J8vF0B.js";const c=[{id:1,name:"John Smith",email:"john.smith@example.com",department:"Engineering",startDate:"2020-01-15"},{id:2,name:"Sarah Johnson",email:"sarah.johnson@example.com",department:"Product",startDate:"2019-06-22"},{id:3,name:"Michael Chen",email:"michael.chen@example.com",department:"Engineering",startDate:"2021-03-01"},{id:4,name:"Emily Davis",email:"emily.davis@example.com",department:"Design",startDate:"2020-11-30"},{id:5,name:"Robert Wilson",email:"robert.wilson@example.com",department:"Sales",startDate:"2018-09-15"}],Be={title:"Components/ObjectTable/Building Blocks/BaseTable",component:o,tags:["beta"],parameters:{msw:{handlers:[...q.handlers]},controls:{expanded:!0}},argTypes:{table:{description:"An instance of tanstack react-table",control:!1},isLoading:{description:"Whether the table is fetching data",control:"boolean",defaultValue:!1,table:{defaultValue:{summary:"false"}}},fetchNextPage:{description:"A promise to fetch next page",control:!1},error:{description:"Error to show in the table",control:!1},rowHeight:{description:"The height of each row in pixels",control:"number",defaultValue:40,table:{defaultValue:{summary:"40"}}},headerMenuFeatureFlags:{description:"Configuration to show sorting, pinning, resizing, and column config menu in the header",control:"object",defaultValue:{showSortingItems:!1,showPinningItems:!1,showResizeItem:!1,showConfigItem:!1},table:{defaultValue:{summary:JSON.stringify({showSortingItems:!1,showPinningItems:!1,showResizeItem:!1,showConfigItem:!1})}}},editableConfig:{description:"Configuration for editable table",control:"object"},onRowClick:{description:"Called when a row is clicked.",control:!1,table:{category:"Events"}},renderCellContextMenu:{description:"If provided, will render this context menu when right clicking on a cell",control:!1,table:{category:"Advanced"}},className:{description:"Additional CSS class name for the table",control:"text"}}},a=[{accessorKey:"name",header:"Name"},{accessorKey:"email",header:"Email"},{accessorKey:"department",header:"Department"},{accessorKey:"startDate",header:"Start Date"}],m={parameters:{docs:{source:{code:`
import { BaseTable } from "@osdk/react-components/experimental/object-table";
import { 
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

function MyCustomTable({ data }) {
 
  const columns = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "department",
      header: "Department",
    },
    { accessorKey: "startDate", header: "Start Date" },
  ];

  
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
    columnResizeDirection: "ltr",
  });
  
  return <BaseTable table={table} />;
}`}}},render:e=>{const t=r({data:c,columns:a,getCoreRowModel:s(),columnResizeMode:"onChange",columnResizeDirection:"ltr"});return n.jsx(o,{...e,table:t})}},u={args:{headerMenuFeatureFlags:{showSortingItems:!0}},parameters:{docs:{source:{code:`
import { BaseTable } from "@osdk/react-components/experimental/object-table";
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type {
  SortingState,
} from "@tanstack/react-table";

const headerMenuFeatureFlags = {
  showSortingItems: true,
};
const [sorting, setSorting] = useState<SortingState>();

const table = useReactTable({
  data: mockData,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  state: {
    sorting,
  },
  enableSorting: true,
  onSortingChange: setSorting,
});


return <BaseTable table={table} headerMenuFeatureFlags={headerMenuFeatureFlags} />;
`}}},render:e=>{const[t,l]=R.useState([]),i=r({data:c,columns:a,getCoreRowModel:s(),getSortedRowModel:O(),state:{sorting:t},enableSorting:!0,onSortingChange:l});return n.jsx("div",{style:{height:"400px"},children:n.jsx(o,{...e,table:i})})}},d={args:{headerMenuFeatureFlags:{showPinningItems:!0}},parameters:{docs:{source:{code:`
import { BaseTable } from "@osdk/react-components/experimental/object-table";
import {
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type {
  ColumnPinningState,
} from "@tanstack/react-table";
 
const headerMenuFeatureFlags = {
  showPinningItems: true,
};
const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
  left: [],
  right: [],
});

const table = useReactTable({
  data: mockData,
  columns,
  getCoreRowModel: getCoreRowModel(),
  state: {
    columnPinning,
  },
  onColumnPinningChange: setColumnPinning,
});

return <BaseTable table={table} headerMenuFeatureFlags={headerMenuFeatureFlags} />;
`}}},render:e=>{const[t,l]=R.useState({left:[],right:[]}),i=r({data:c,columns:a,getCoreRowModel:s(),state:{columnPinning:t},enableColumnResizing:!1,onColumnPinningChange:l});return n.jsx("div",{style:{height:"400px"},children:n.jsx(o,{...e,table:i})})}},g={args:{headerMenuFeatureFlags:{showResizeItem:!0}},parameters:{docs:{source:{code:`
import { BaseTable } from "@osdk/react-components/experimental/object-table";
import {
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type {
  ColumnSizingState,
} from "@tanstack/react-table";
 
const headerMenuFeatureFlags = {
  showResizeItem: true,
};
const [columnSizing, setColumnSizing] = useState<ColumnSizingState>({});

const table = useReactTable({
  data: mockData,
  columns,
  getCoreRowModel: getCoreRowModel(),
  state: {
    columnSizing,
  },
  columnResizeMode: "onChange",
  columnResizeDirection: "ltr",
  onColumnSizingChange: setColumnSizing,
});


return <BaseTable table={table} headerMenuFeatureFlags={headerMenuFeatureFlags} />;
`}}},render:e=>{const[t,l]=R.useState({}),i=r({data:c,columns:a,getCoreRowModel:s(),state:{columnSizing:t},columnResizeMode:"onChange",columnResizeDirection:"ltr",onColumnSizingChange:l});return n.jsx("div",{style:{height:"400px"},children:n.jsx(o,{...e,table:i})})}},b={args:{headerMenuFeatureFlags:{showConfigItem:!0}},parameters:{docs:{source:{code:`
import { BaseTable } from "@osdk/react-components/experimental/object-table";
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type {
  VisibilityState,
} from "@tanstack/react-table";

const headerMenuFeatureFlags = {
  showConfigItem: true,
};
const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
  columns.reduce((acc, col) => ({ ...acc, [col.accessorKey]: true }), {})
);

const table = useReactTable({
  data: mockData,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  state: {
    columnVisibility,
  },
  onColumnVisibilityChange: setColumnVisibility,
});


return <BaseTable table={table} headerMenuFeatureFlags={headerMenuFeatureFlags} />;
`}}},render:e=>{const[t,l]=R.useState(a.reduce((_,H)=>({..._,[H.accessorKey]:!0}),{})),i=r({data:c,columns:a,getCoreRowModel:s(),getSortedRowModel:O(),state:{columnVisibility:t},onColumnVisibilityChange:l});return n.jsx("div",{style:{height:"400px"},children:n.jsx(o,{...e,table:i})})}},p={args:{isLoading:!0},parameters:{docs:{source:{code:`
const table = useReactTable({
  data: [], // No data
  columns,
  getCoreRowModel: getCoreRowModel(),
});

return <BaseTable table={table} isLoading={true} />;
}`}}},render:e=>{const t=r({data:[],columns:a,getCoreRowModel:s()});return n.jsx("div",{style:{height:"400px"},children:n.jsx(o,{...e,table:t})})}},h={args:{},parameters:{docs:{source:{code:`
const table = useReactTable({
  data: [], // No data
  columns,
  getCoreRowModel: getCoreRowModel(),
});

return <BaseTable table={table} />;
`}}},render:e=>{const t=r({data:[],columns:a,getCoreRowModel:s()});return n.jsx("div",{style:{height:"400px"},children:n.jsx(o,{...e,table:t})})}},C={args:{error:new Error("Example error")},parameters:{docs:{source:{code:'<BaseTable table={table} error={new Error("Example error")} />'}}},render:e=>{const t=r({data:[],columns:a,getCoreRowModel:s()});return n.jsx("div",{style:{height:"400px"},children:n.jsx(o,{...e,table:t})})}};var S,M,w;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
import { BaseTable } from "@osdk/react-components/experimental/object-table";
import { 
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

function MyCustomTable({ data }) {
 
  const columns = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "department",
      header: "Department",
    },
    { accessorKey: "startDate", header: "Start Date" },
  ];

  
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
    columnResizeDirection: "ltr",
  });
  
  return <BaseTable table={table} />;
}\`
      }
    }
  },
  render: args => {
    const table = useReactTable({
      data: mockData,
      columns,
      getCoreRowModel: getCoreRowModel(),
      columnResizeMode: "onChange",
      columnResizeDirection: "ltr"
    });
    return <BaseTable {...args} table={table} />;
  }
}`,...(w=(M=m.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var f,y,T;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    headerMenuFeatureFlags: {
      showSortingItems: true
    }
  },
  parameters: {
    docs: {
      source: {
        code: \`
import { BaseTable } from "@osdk/react-components/experimental/object-table";
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type {
  SortingState,
} from "@tanstack/react-table";

const headerMenuFeatureFlags = {
  showSortingItems: true,
};
const [sorting, setSorting] = useState<SortingState>();

const table = useReactTable({
  data: mockData,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  state: {
    sorting,
  },
  enableSorting: true,
  onSortingChange: setSorting,
});


return <BaseTable table={table} headerMenuFeatureFlags={headerMenuFeatureFlags} />;
\`
      }
    }
  },
  render: args => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const table = useReactTable({
      data: mockData,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      state: {
        sorting
      },
      enableSorting: true,
      onSortingChange: setSorting
    });
    return <div style={{
      height: "400px"
    }}>
        <BaseTable {...args} table={table} />
      </div>;
  }
}`,...(T=(y=u.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var F,x,z;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    headerMenuFeatureFlags: {
      showPinningItems: true
    }
  },
  parameters: {
    docs: {
      source: {
        code: \`
import { BaseTable } from "@osdk/react-components/experimental/object-table";
import {
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type {
  ColumnPinningState,
} from "@tanstack/react-table";
 
const headerMenuFeatureFlags = {
  showPinningItems: true,
};
const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
  left: [],
  right: [],
});

const table = useReactTable({
  data: mockData,
  columns,
  getCoreRowModel: getCoreRowModel(),
  state: {
    columnPinning,
  },
  onColumnPinningChange: setColumnPinning,
});

return <BaseTable table={table} headerMenuFeatureFlags={headerMenuFeatureFlags} />;
\`
      }
    }
  },
  render: args => {
    const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
      left: [],
      right: []
    });
    const table = useReactTable({
      data: mockData,
      columns,
      getCoreRowModel: getCoreRowModel(),
      state: {
        columnPinning
      },
      enableColumnResizing: false,
      onColumnPinningChange: setColumnPinning
    });
    return <div style={{
      height: "400px"
    }}>
        <BaseTable {...args} table={table} />
      </div>;
  }
}`,...(z=(x=d.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var k,D,B;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    headerMenuFeatureFlags: {
      showResizeItem: true
    }
  },
  parameters: {
    docs: {
      source: {
        code: \`
import { BaseTable } from "@osdk/react-components/experimental/object-table";
import {
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type {
  ColumnSizingState,
} from "@tanstack/react-table";
 
const headerMenuFeatureFlags = {
  showResizeItem: true,
};
const [columnSizing, setColumnSizing] = useState<ColumnSizingState>({});

const table = useReactTable({
  data: mockData,
  columns,
  getCoreRowModel: getCoreRowModel(),
  state: {
    columnSizing,
  },
  columnResizeMode: "onChange",
  columnResizeDirection: "ltr",
  onColumnSizingChange: setColumnSizing,
});


return <BaseTable table={table} headerMenuFeatureFlags={headerMenuFeatureFlags} />;
\`
      }
    }
  },
  render: args => {
    const [columnSizing, setColumnSizing] = useState<ColumnSizingState>({});
    const table = useReactTable({
      data: mockData,
      columns,
      getCoreRowModel: getCoreRowModel(),
      state: {
        columnSizing
      },
      columnResizeMode: "onChange",
      columnResizeDirection: "ltr",
      onColumnSizingChange: setColumnSizing
    });
    return <div style={{
      height: "400px"
    }}>
        <BaseTable {...args} table={table} />
      </div>;
  }
}`,...(B=(D=g.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var P,j,V;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    headerMenuFeatureFlags: {
      showConfigItem: true
    }
  },
  parameters: {
    docs: {
      source: {
        code: \`
import { BaseTable } from "@osdk/react-components/experimental/object-table";
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type {
  VisibilityState,
} from "@tanstack/react-table";

const headerMenuFeatureFlags = {
  showConfigItem: true,
};
const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
  columns.reduce((acc, col) => ({ ...acc, [col.accessorKey]: true }), {})
);

const table = useReactTable({
  data: mockData,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  state: {
    columnVisibility,
  },
  onColumnVisibilityChange: setColumnVisibility,
});


return <BaseTable table={table} headerMenuFeatureFlags={headerMenuFeatureFlags} />;
\`
      }
    }
  },
  render: args => {
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(columns.reduce((acc, col) => {
      return {
        ...acc,
        [col.accessorKey]: true
      };
    }, {}));
    const table = useReactTable({
      data: mockData,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      state: {
        columnVisibility
      },
      onColumnVisibilityChange: setColumnVisibility
    });
    return <div style={{
      height: "400px"
    }}>
        <BaseTable {...args} table={table} />
      </div>;
  }
}`,...(V=(j=b.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var v,I,E;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isLoading: true
  },
  parameters: {
    docs: {
      source: {
        code: \`
const table = useReactTable({
  data: [], // No data
  columns,
  getCoreRowModel: getCoreRowModel(),
});

return <BaseTable table={table} isLoading={true} />;
}\`
      }
    }
  },
  render: args => {
    const table = useReactTable({
      data: [] as Person[],
      columns,
      getCoreRowModel: getCoreRowModel()
    });
    return <div style={{
      height: "400px"
    }}>
        <BaseTable {...args} table={table} />
      </div>;
  }
}`,...(E=(I=p.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var K,N,W;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
const table = useReactTable({
  data: [], // No data
  columns,
  getCoreRowModel: getCoreRowModel(),
});

return <BaseTable table={table} />;
\`
      }
    }
  },
  render: args => {
    const table = useReactTable({
      data: [] as Person[],
      columns,
      getCoreRowModel: getCoreRowModel()
    });
    return <div style={{
      height: "400px"
    }}>
        <BaseTable {...args} table={table} />
      </div>;
  }
}`,...(W=(N=h.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var L,A,J;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    error: new Error("Example error")
  },
  parameters: {
    docs: {
      source: {
        code: \`<BaseTable table={table} error={new Error("Example error")} />\`
      }
    }
  },
  render: args => {
    const table = useReactTable({
      data: [] as Person[],
      columns,
      getCoreRowModel: getCoreRowModel()
    });
    return <div style={{
      height: "400px"
    }}>
        <BaseTable {...args} table={table} />
      </div>;
  }
}`,...(J=(A=C.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};const Pe=["Default","WithSorting","WithColumnPinning","WithColumnResizing","WithColumnConfig","LoadingState","EmptyState","ErrorState"];export{m as Default,h as EmptyState,C as ErrorState,p as LoadingState,b as WithColumnConfig,d as WithColumnPinning,g as WithColumnResizing,u as WithSorting,Pe as __namedExportsOrder,Be as default};
