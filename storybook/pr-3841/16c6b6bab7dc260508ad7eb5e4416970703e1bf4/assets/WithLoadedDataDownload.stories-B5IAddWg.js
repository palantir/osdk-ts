import{f as b,j as a,r as i}from"./iframe-B_3axEb_.js";import{O as u}from"./object-table-B350mcID.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DVqF28Ob.js";import"./Table-qqzJxnMW.js";import"./index-WEswkdDQ.js";import"./Dialog-BtD6-2x7.js";import"./cross-COAB99ba.js";import"./svgIconContainer-Czb_u-B5.js";import"./useBaseUiId-mpVzZFod.js";import"./InternalBackdrop-CU6NWctY.js";import"./composite-k-oOtUOi.js";import"./index-BKGrISX8.js";import"./index-CV1QoXoI.js";import"./index-CsdjTlt6.js";import"./useEventCallback-DHGnwxNq.js";import"./SkeletonBar-7TcvHUms.js";import"./LoadingCell-BjRnr67f.js";import"./ColumnConfigDialog-B7-4JAIj.js";import"./DraggableList-L0zoz04e.js";import"./search-ClKVrDOr.js";import"./Input-BW6cPiJ8.js";import"./useControlled-DTpKBlZ0.js";import"./isEqual-ngVEl8Iu.js";import"./isObject-Dvc6D_PF.js";import"./Button-DViZAK3b.js";import"./ActionButton-CbwSb28k.js";import"./Checkbox-BDoaJcsA.js";import"./useValueChanged-CKmRTz9a.js";import"./CollapsiblePanel-CK4QXkOk.js";import"./MultiColumnSortDialog-EimSJagl.js";import"./MenuTrigger-D4X5URYr.js";import"./CompositeItem-BlbWDaOA.js";import"./ToolbarRootContext-D_DYze3I.js";import"./getDisabledMountTransitionStyles-SdFs7Ni0.js";import"./getPseudoElementBounds-DCzcjL9w.js";import"./chevron-down-DTB5Dfny.js";import"./index-DEGqs32K.js";import"./error-D2oTkGBT.js";import"./BaseCbacBanner-DShWLu3D.js";import"./makeExternalStore-C5zmjuzo.js";import"./Tooltip-BEIyqKN6.js";import"./PopoverPopup-yq2RTqAV.js";import"./toNumber-QrJPlThZ.js";import"./useOsdkClient-Dq0jfxt7.js";import"./tick-CkQdEScK.js";import"./DropdownField-CuTu35Y7.js";import"./withOsdkMetrics-DhHbJQbZ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
