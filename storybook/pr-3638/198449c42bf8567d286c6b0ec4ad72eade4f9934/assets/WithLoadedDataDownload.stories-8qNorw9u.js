import{f as b,j as a,r as i}from"./iframe-5hUGPGFG.js";import{O as u}from"./object-table-COZjRyCg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CJdwYBXx.js";import"./Table-BbQdodnm.js";import"./index-DLcCUbn1.js";import"./Dialog-V6nYoHZJ.js";import"./cross-U1SWpnoO.js";import"./svgIconContainer-B5Jyq-Wg.js";import"./useBaseUiId-DJajkDSm.js";import"./InternalBackdrop-BtrFxQf_.js";import"./composite-_LrboIJk.js";import"./index-BiaN8C24.js";import"./index-CQiTfYP_.js";import"./index-KQkGOchM.js";import"./useEventCallback-BCOGUPbA.js";import"./SkeletonBar-DHgYZJOe.js";import"./LoadingCell--Bp3Qael.js";import"./ColumnConfigDialog-Ex4azvu5.js";import"./DraggableList-BurtO9cD.js";import"./search-B42e95Ec.js";import"./Input-DKvYXO_W.js";import"./useControlled-B2g2UBH_.js";import"./Button-BaWfHYRR.js";import"./small-cross-BY9h7Qe_.js";import"./ActionButton-CXEvEX1s.js";import"./Checkbox-CaLwATSS.js";import"./useValueChanged-C300BAoU.js";import"./CollapsiblePanel-Cbas-oCb.js";import"./MultiColumnSortDialog-CjbAUeNx.js";import"./MenuTrigger-D28CUOqm.js";import"./CompositeItem-gDdBu88z.js";import"./ToolbarRootContext-CO-RKzZj.js";import"./getDisabledMountTransitionStyles-Bwp3qJr4.js";import"./getPseudoElementBounds-2uX0E92Z.js";import"./chevron-down-CdGGh6rq.js";import"./index-DLqXMb-q.js";import"./error-B87B4TKS.js";import"./BaseCbacBanner-ChCTjNHa.js";import"./makeExternalStore-qHOfLjNT.js";import"./Tooltip-Cv3jUOjq.js";import"./PopoverPopup-BkSNjqmS.js";import"./toNumber-YFCt8XiA.js";import"./useOsdkClient-tszG82Md.js";import"./tick-BHAzlyxW.js";import"./DropdownField-CBhFA2us.js";import"./withOsdkMetrics-Kwe1rYAM.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
