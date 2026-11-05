import{f as b,j as a,r as i}from"./iframe-CfP80nhE.js";import{O as u}from"./object-table-BVaDN9oy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DVx9So3f.js";import"./Table-C-C6MgHD.js";import"./index-COwN8tdJ.js";import"./Dialog-iX7BQDos.js";import"./cross-Dhhk-QOY.js";import"./svgIconContainer-ByL1CzmI.js";import"./useBaseUiId-BpCYJZt6.js";import"./InternalBackdrop-Bx7guY_d.js";import"./composite-BXpnnXVg.js";import"./index-CTbyqW3F.js";import"./index-5ZL8iVjG.js";import"./index-yQDp3qiC.js";import"./useEventCallback-BZgh7tEU.js";import"./SkeletonBar-BTKdZ9Ff.js";import"./LoadingCell-CB6w0OIv.js";import"./ColumnConfigDialog-C-rNyPlT.js";import"./DraggableList-BTeUHn5f.js";import"./search-DBbR_HQC.js";import"./Input-C5rpYEfy.js";import"./useControlled-DY45BqZY.js";import"./Button-CBX6PhDU.js";import"./small-cross-MDPhdUvt.js";import"./ActionButton-bm-7ANXn.js";import"./Checkbox-HB4hmGD9.js";import"./useValueChanged-BWuoub0f.js";import"./CollapsiblePanel-C-Oui3tr.js";import"./MultiColumnSortDialog-FvhHmpMw.js";import"./MenuTrigger-BVMKdwJK.js";import"./CompositeItem-rrhF1DOt.js";import"./ToolbarRootContext-BNZ6uAxf.js";import"./getDisabledMountTransitionStyles-CkkZsrSS.js";import"./getPseudoElementBounds-B5VczZa8.js";import"./chevron-down-DosI46m-.js";import"./index-Db0uTKuy.js";import"./error-D8W3ZfFh.js";import"./BaseCbacBanner-Dx8ja9_G.js";import"./makeExternalStore-CX8kqVGx.js";import"./Tooltip-I7xftFyx.js";import"./isObject-C97A8-HS.js";import"./debounce-o-BE-ayW.js";import"./useOsdkClient-BiT3AVNq.js";import"./tick-bPvw1r3T.js";import"./DropdownField-DFKXNXg2.js";import"./isEqual-BqwGPlqV.js";import"./_baseIsEqual-7qS6C5tt.js";import"./withOsdkMetrics-B-Iw4pyn.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
const PAGE_SIZE = ${f};

const handleDownload = async () => {
  const snapshot = await tableRef.current?.getSnapshot();
  if (!snapshot) {
    return;
  }

  const csv = toCsv(snapshot.columns, snapshot.rows);
  downloadCsv(csv, "employees.csv");
};

return (
  <>
    <button onClick={handleDownload}>Download as CSV</button>
    <ObjectTable
      objectType={Employee}
      columnDefinitions={employeeColumns}
      pageSize={PAGE_SIZE}
      tableRef={tableRef}
    />
  </>
);`}}},render:()=>a.jsx(C,{})};function C(){const e=i.useRef(null),[n,t]=i.useState(!1),r=i.useCallback(async()=>{var o;t(!0);try{const s=await((o=e.current)==null?void 0:o.getSnapshot());if(!s)return;await g(E(s.columns,s.rows),"employees.csv")}finally{t(!1)}},[]);return a.jsxs("div",{className:"object-table-container",style:{height:"600px",display:"flex",flexDirection:"column"},children:[a.jsx("div",{style:{padding:"8px 0",marginBottom:8},children:a.jsx("button",{disabled:n,onClick:r,type:"button",style:{...y,...n?{cursor:"not-allowed",opacity:.6}:null},children:n?"Downloading…":"Download as CSV"})}),a.jsx(u,{objectType:h,columnDefinitions:w,pageSize:f,tableRef:e})]})}function E(e,n){return[e.map(t=>c(t.name)).join(","),...n.map(t=>e.map(r=>c(S(t.getValue(r.id)))).join(","))].join(`
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/u.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Uses \`tableRef.current.getSnapshot()\` to build and download a CSV from the ObjectTable's data. The Full name column uses \`renderCell\`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an \`Error\` instance from \`row.getValue\`, which the CSV renders as a literal marker."
      },
      source: {
        code: \`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
const PAGE_SIZE = \${PAGE_SIZE};

const handleDownload = async () => {
  const snapshot = await tableRef.current?.getSnapshot();
  if (!snapshot) {
    return;
  }

  const csv = toCsv(snapshot.columns, snapshot.rows);
  downloadCsv(csv, "employees.csv");
};

return (
  <>
    <button onClick={handleDownload}>Download as CSV</button>
    <ObjectTable
      objectType={Employee}
      columnDefinitions={employeeColumns}
      pageSize={PAGE_SIZE}
      tableRef={tableRef}
    />
  </>
);\`
      }
    }
  },
  render: () => <LoadedDataDownloadExample />
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
