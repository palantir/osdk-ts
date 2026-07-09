import{f as b,j as a,r as i}from"./iframe-kN2CD5Qg.js";import{O as u}from"./object-table-BIdiy0GS.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BaVDpoU1.js";import"./Table-Ciwei5TE.js";import"./index-oBrtIaAG.js";import"./Dialog-C5HfxUm9.js";import"./cross-DRmp8dJy.js";import"./svgIconContainer-CxmpMNRa.js";import"./useBaseUiId-B6udq1We.js";import"./InternalBackdrop-BVF173Iy.js";import"./composite-D4cCxMuf.js";import"./index-DS_WxjgQ.js";import"./index-FbxXCkto.js";import"./index-BGaBFTMb.js";import"./useEventCallback-DkiPdzk9.js";import"./SkeletonBar-BEkHG2o3.js";import"./LoadingCell-D2wbWtIq.js";import"./ColumnConfigDialog-0cI3ncQk.js";import"./DraggableList-Bhjp0CnB.js";import"./search-BgBwo5jC.js";import"./Input-ubkYoiwR.js";import"./useControlled-DL9FSZoX.js";import"./Button-D3jhIO28.js";import"./small-cross-Dc5vy2Rt.js";import"./ActionButton-BTYBs_na.js";import"./Checkbox-CBTHRBFp.js";import"./useValueChanged-a4TG1A35.js";import"./CollapsiblePanel-DYTdzwCI.js";import"./MultiColumnSortDialog-hI-Tf89h.js";import"./MenuTrigger-YS6rHvUE.js";import"./CompositeItem-BABLNs1C.js";import"./ToolbarRootContext-CUQoRhDS.js";import"./getDisabledMountTransitionStyles-C0pwxqHL.js";import"./getPseudoElementBounds-YRZFzxDR.js";import"./chevron-down-DBrI4cKi.js";import"./index-BM0_vPDD.js";import"./error-BIXJ4F89.js";import"./BaseCbacBanner-Dcs6jCNU.js";import"./makeExternalStore-CqsXbcPR.js";import"./Tooltip-C2K1WL0n.js";import"./PopoverPopup-kd6gG1P0.js";import"./toNumber-Ca22zIiL.js";import"./useOsdkClient-B4iTmaqi.js";import"./tick-CAhoiOwE.js";import"./DropdownField-SXr2PDBE.js";import"./withOsdkMetrics-C3QIy4-V.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
