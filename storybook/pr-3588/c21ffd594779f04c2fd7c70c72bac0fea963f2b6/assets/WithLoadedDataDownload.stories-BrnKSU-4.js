import{f as b,j as a,r as i}from"./iframe-B0-tfh-c.js";import{O as u}from"./object-table-CElfWeNF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C4hPIoyS.js";import"./Table-mBvKtU6c.js";import"./index-o6pOtgsT.js";import"./Dialog-BtNFg0Ba.js";import"./cross-CFyLhWV7.js";import"./svgIconContainer-C4aEhaYY.js";import"./useBaseUiId-DDUM07aX.js";import"./InternalBackdrop-5pNvJy8O.js";import"./composite-CRiuV0VN.js";import"./index-ClBRmNFr.js";import"./index-ofPqUom8.js";import"./index-CJexmYyu.js";import"./useEventCallback-CWKyC5RZ.js";import"./SkeletonBar-CCO1GM2C.js";import"./LoadingCell-BZ79Bdzq.js";import"./ColumnConfigDialog-HnPNdC-B.js";import"./DraggableList-C8t2my7k.js";import"./search-BjuITscC.js";import"./Input-CI58F6cK.js";import"./useControlled-CG0ODf7u.js";import"./Button-K8sSc9Ht.js";import"./small-cross-DHPKCqpp.js";import"./ActionButton-C_BPPDTi.js";import"./Checkbox-B_wZyMqm.js";import"./minus-CwuL6HIZ.js";import"./tick-CUoDPsNU.js";import"./useValueChanged-C3NzWCCQ.js";import"./caret-down-CAbKK5RA.js";import"./CollapsiblePanel-DqemgMga.js";import"./MultiColumnSortDialog-B6RPN2xx.js";import"./MenuTrigger-BUyPg5bA.js";import"./CompositeItem-QSA7DLWZ.js";import"./ToolbarRootContext-r7uc7AQy.js";import"./getDisabledMountTransitionStyles-D0bOjwBI.js";import"./getPseudoElementBounds-o4-IXSHe.js";import"./chevron-down-BISz4od6.js";import"./index-BR6Ge-EQ.js";import"./error-uUmuq0xV.js";import"./BaseCbacBanner-BFmc9EC8.js";import"./makeExternalStore-CoNXTWCW.js";import"./Tooltip-wJyh24UO.js";import"./PopoverPopup-CjVD96Kv.js";import"./toNumber-BnfL6wwZ.js";import"./useOsdkClient-DdcNgGVt.js";import"./DropdownField-BruiB-yV.js";import"./withOsdkMetrics-DEML7v4G.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
