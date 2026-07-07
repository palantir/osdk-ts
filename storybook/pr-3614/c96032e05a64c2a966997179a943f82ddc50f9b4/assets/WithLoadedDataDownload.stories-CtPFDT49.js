import{f as b,j as a,r as i}from"./iframe-C4S3DlTX.js";import{O as u}from"./object-table-5TCLLi30.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C12oki_1.js";import"./Table-BZenm8TX.js";import"./index-CGdxS39A.js";import"./Dialog-CdQpPS-a.js";import"./cross-CVWhTfAa.js";import"./svgIconContainer-C5n87xB5.js";import"./useBaseUiId-KxDZNND0.js";import"./InternalBackdrop-D6dNkn8W.js";import"./composite-zkHIXe_o.js";import"./index-CpasDDuw.js";import"./index-B810S7QY.js";import"./index-DKVKUpZO.js";import"./useEventCallback-CAsXO3Pq.js";import"./SkeletonBar-pgpV1reP.js";import"./LoadingCell-CG9NCdW2.js";import"./ColumnConfigDialog-CEE7kLEO.js";import"./DraggableList-DxTPrvu8.js";import"./search-Cq9i3S8m.js";import"./Input-dMIGhA3_.js";import"./useControlled-rJmEjAwF.js";import"./Button-CQDmEc2D.js";import"./small-cross-Cqqf2hJe.js";import"./ActionButton-DwgmEmde.js";import"./Checkbox-B37vfDI7.js";import"./useValueChanged-DtlELAkC.js";import"./CollapsiblePanel-BSd3BHOh.js";import"./MultiColumnSortDialog-3mQqOLyt.js";import"./MenuTrigger-BW1xB-jy.js";import"./CompositeItem-CNDemvXj.js";import"./ToolbarRootContext-B1GabsZj.js";import"./getDisabledMountTransitionStyles-BmzagvAD.js";import"./getPseudoElementBounds-BXwNOQrX.js";import"./chevron-down-PnC8kvGF.js";import"./index-DvqKfLtn.js";import"./error-BHFCx4XG.js";import"./BaseCbacBanner-D6iKabAd.js";import"./makeExternalStore-DkUbRBpR.js";import"./Tooltip-xuEqE1zK.js";import"./PopoverPopup-GPnRbwGw.js";import"./toNumber-BhwwnZcs.js";import"./useOsdkClient-Bs3fLLPF.js";import"./tick-V55cviuE.js";import"./DropdownField-B1d75is9.js";import"./withOsdkMetrics-_iEXrOrE.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
