import{f as b,j as a,r as i}from"./iframe-CEzTjPrX.js";import{O as u}from"./object-table-BuQprooG.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DUTwDOF_.js";import"./Table-B9Oaxure.js";import"./index-Bxks1lYR.js";import"./Dialog-BT6NDBzr.js";import"./cross-CwAqkswM.js";import"./svgIconContainer-CKFVWuuf.js";import"./useBaseUiId-BgFGhdF-.js";import"./InternalBackdrop-B6dk9w1k.js";import"./composite-CVmkB6SM.js";import"./index-C9eueXWb.js";import"./index-DvuOpWIH.js";import"./index-bLaWsTjV.js";import"./useEventCallback-BpwIOGee.js";import"./SkeletonBar-bBQLRVln.js";import"./LoadingCell-CfwL-qQy.js";import"./ColumnConfigDialog-C9qesawH.js";import"./DraggableList-7I4KYQYA.js";import"./search-CcE_VMNk.js";import"./Input-DVRi4ofR.js";import"./useControlled-Ivw8qQ8S.js";import"./isEqual-B56OhnIh.js";import"./isObject-Bcb3ncsj.js";import"./Button-Czzg7E_D.js";import"./ActionButton-CRxSAo_7.js";import"./Checkbox-vmtPyYdc.js";import"./useValueChanged-D2cAZSU7.js";import"./CollapsiblePanel-yT2vOhtf.js";import"./MultiColumnSortDialog-GWfjieQB.js";import"./MenuTrigger-DI7EuJIB.js";import"./CompositeItem-_SDwp0eF.js";import"./ToolbarRootContext-CPNq27yP.js";import"./getDisabledMountTransitionStyles-DG5jRZgt.js";import"./getPseudoElementBounds-BQH9f0wI.js";import"./chevron-down-SfT6NQyX.js";import"./index-0p1gArIw.js";import"./error-B1ipXgKY.js";import"./BaseCbacBanner-Duzjrut7.js";import"./makeExternalStore-C9gV0ZCP.js";import"./Tooltip-CxsESuUv.js";import"./PopoverPopup-BtDjeJwK.js";import"./toNumber-DODznEsd.js";import"./useOsdkClient-Cq3RoDOh.js";import"./tick-DHVN90Kz.js";import"./DropdownField-DMIc5qcW.js";import"./withOsdkMetrics-DrcUYiC0.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const we=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,we as __namedExportsOrder,ye as default};
