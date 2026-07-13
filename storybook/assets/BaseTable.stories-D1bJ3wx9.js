import{f as q,j as n,r as R}from"./iframe-BxCJPCse.js";import{B as o,u as r,g as s,a as O}from"./Table-CTY9PlfL.js";import"./preload-helper-Dp1pzeXC.js";import"./index-bqr75Rsj.js";import"./Dialog-m6Ftn1l8.js";import"./cross-DbAZfv-E.js";import"./svgIconContainer-DgI3jQUV.js";import"./useBaseUiId-CutF0j3G.js";import"./InternalBackdrop-B0ZUyLYZ.js";import"./composite-D6lyqV-H.js";import"./index-CgYvsxZG.js";import"./index-C3PJ5sQB.js";import"./index-BH_nQqc7.js";import"./useEventCallback-jMijy4-s.js";import"./SkeletonBar-RdpANhkJ.js";import"./LoadingCell-Bh_qUKZE.js";import"./ColumnConfigDialog-wU_1SuhU.js";import"./DraggableList-XfnGajmb.js";import"./search-CW9DG48n.js";import"./Input-DVjajTyj.js";import"./useControlled-cr8WJ7fY.js";import"./Button-BwE-cHBr.js";import"./small-cross-Cjdq_Ew9.js";import"./ActionButton-CFm2_hjg.js";import"./Checkbox-B3XHh-Tm.js";import"./useValueChanged-TVvy7eDO.js";import"./CollapsiblePanel-BP7LJMic.js";import"./MultiColumnSortDialog-CWVBMsRF.js";import"./MenuTrigger-D1pL1Y85.js";import"./CompositeItem-BvA_CVeT.js";import"./ToolbarRootContext-CKb6Hebz.js";import"./getDisabledMountTransitionStyles-_7QNzyvR.js";import"./getPseudoElementBounds-gBxVerhe.js";import"./chevron-down-HCT0fjSD.js";import"./index-BiWWXAC7.js";import"./error-C43AB1o9.js";const c=[{id:1,name:"John Smith",email:"john.smith@example.com",department:"Engineering",startDate:"2020-01-15"},{id:2,name:"Sarah Johnson",email:"sarah.johnson@example.com",department:"Product",startDate:"2019-06-22"},{id:3,name:"Michael Chen",email:"michael.chen@example.com",department:"Engineering",startDate:"2021-03-01"},{id:4,name:"Emily Davis",email:"emily.davis@example.com",department:"Design",startDate:"2020-11-30"},{id:5,name:"Robert Wilson",email:"robert.wilson@example.com",department:"Sales",startDate:"2018-09-15"}],De={title:"Components/ObjectTable/Building Blocks/BaseTable",component:o,tags:["beta"],parameters:{msw:{handlers:[...q.handlers]},controls:{expanded:!0}},argTypes:{table:{description:"An instance of tanstack react-table",control:!1},isLoading:{description:"Whether the table is fetching data",control:"boolean",defaultValue:!1,table:{defaultValue:{summary:"false"}}},fetchNextPage:{description:"A promise to fetch next page",control:!1},error:{description:"Error to show in the table",control:!1},rowHeight:{description:"The height of each row in pixels",control:"number",defaultValue:40,table:{defaultValue:{summary:"40"}}},headerMenuFeatureFlags:{description:"Configuration to show sorting, pinning, resizing, and column config menu in the header",control:"object",defaultValue:{showSortingItems:!1,showPinningItems:!1,showResizeItem:!1,showConfigItem:!1},table:{defaultValue:{summary:JSON.stringify({showSortingItems:!1,showPinningItems:!1,showResizeItem:!1,showConfigItem:!1})}}},editableConfig:{description:"Configuration for editable table",control:"object"},onRowClick:{description:"Called when a row is clicked.",control:!1,table:{category:"Events"}},renderCellContextMenu:{description:"If provided, will render this context menu when right clicking on a cell",control:!1,table:{category:"Advanced"}},className:{description:"Additional CSS class name for the table",control:"text"}}},a=[{accessorKey:"name",header:"Name"},{accessorKey:"email",header:"Email"},{accessorKey:"department",header:"Department"},{accessorKey:"startDate",header:"Start Date"}],m={parameters:{docs:{source:{code:`
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
}`}}},render:e=>{const t=r({data:c,columns:a,getCoreRowModel:s(),columnResizeMode:"onChange",columnResizeDirection:"ltr"});return n.jsx(o,{...e,table:t})}},d={args:{headerMenuFeatureFlags:{showSortingItems:!0}},parameters:{docs:{source:{code:`
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
`}}},render:e=>{const[t,l]=R.useState([]),i=r({data:c,columns:a,getCoreRowModel:s(),getSortedRowModel:O(),state:{sorting:t},enableSorting:!0,onSortingChange:l});return n.jsx("div",{style:{height:"400px"},children:n.jsx(o,{...e,table:i})})}},u={args:{headerMenuFeatureFlags:{showPinningItems:!0}},parameters:{docs:{source:{code:`
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
}`,...(w=(M=m.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var f,T,F;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(F=(T=d.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var x,y,z;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(z=(y=u.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var k,D,B;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(B=(D=g.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var P,j,v;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(v=(j=b.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var I,E,V;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(V=(E=p.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var K,N,W;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(J=(A=C.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};const Be=["Default","WithSorting","WithColumnPinning","WithColumnResizing","WithColumnConfig","LoadingState","EmptyState","ErrorState"];export{m as Default,h as EmptyState,C as ErrorState,p as LoadingState,b as WithColumnConfig,u as WithColumnPinning,g as WithColumnResizing,d as WithSorting,Be as __namedExportsOrder,De as default};
