import{f as b,j as a,r as i}from"./iframe-D9kZ7oKm.js";import{O as u}from"./object-table-HyBNt6Bd.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D_9croem.js";import"./Table-CVpneVrz.js";import"./index-CqRud9uD.js";import"./Dialog-CMCjCn82.js";import"./cross-ByBOsUt4.js";import"./svgIconContainer-rMQ6NxoF.js";import"./useBaseUiId-DLiXg0iE.js";import"./InternalBackdrop-D7Ibl6C8.js";import"./composite-CU2VzQxk.js";import"./index-BL5TYGry.js";import"./index-BV8mxMmV.js";import"./index-DsSF8vUG.js";import"./useEventCallback-C8WcoY1r.js";import"./SkeletonBar-HLzWfj0a.js";import"./LoadingCell-B8EAoDQi.js";import"./ColumnConfigDialog-C5qy0MIc.js";import"./DraggableList-CC6elubs.js";import"./search-ZNDSswQj.js";import"./Input-nS1tbIyp.js";import"./useControlled-D_VX6z4f.js";import"./Button-BnTkb7kw.js";import"./small-cross-BfnjmzBW.js";import"./ActionButton-B0s3IOvu.js";import"./Checkbox-B-P9jrJ1.js";import"./useValueChanged-FHgTPL1b.js";import"./CollapsiblePanel-DPN6Z6g8.js";import"./MultiColumnSortDialog-CyjQTp2z.js";import"./MenuTrigger-Di-PM5s_.js";import"./CompositeItem-CzKJLAoA.js";import"./ToolbarRootContext-DGR2lftI.js";import"./getDisabledMountTransitionStyles-BQH6Qqz6.js";import"./getPseudoElementBounds-D59qIKV1.js";import"./chevron-down-CObaMvlQ.js";import"./index-Bi1PFb4u.js";import"./error-BUXoxIB7.js";import"./BaseCbacBanner-DdglVscp.js";import"./makeExternalStore-SKHEbBrI.js";import"./Tooltip-8Ot-UkKt.js";import"./PopoverPopup-DPlFv7d_.js";import"./debounce-DXt5GRwA.js";import"./useOsdkClient-C0ObZPai.js";import"./tick-B52iWNIF.js";import"./DropdownField-CIgkZQut.js";import"./isEqual-CaRdeTqX.js";import"./withOsdkMetrics-BCGwBrf8.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
