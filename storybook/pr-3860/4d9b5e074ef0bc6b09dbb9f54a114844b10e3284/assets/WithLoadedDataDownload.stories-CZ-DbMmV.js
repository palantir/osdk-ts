import{f as b,j as a,r as i}from"./iframe-BjnPtOz_.js";import{O as u}from"./object-table-zIzp69cD.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DvpFqhNW.js";import"./Table-COsXx5hz.js";import"./index-B-VO8ckc.js";import"./Dialog-CqCeMiee.js";import"./cross-Dor8dRPD.js";import"./svgIconContainer-CMItwta7.js";import"./useBaseUiId-smhGGpwO.js";import"./InternalBackdrop-BXVLkMxu.js";import"./composite-_Pzh5Y_l.js";import"./index-CIJ2rBTU.js";import"./index-C4D01Ue3.js";import"./index-DNE-sCgP.js";import"./useEventCallback-BzItO3JI.js";import"./SkeletonBar-DwjyCsyI.js";import"./LoadingCell-Ck2EC4mw.js";import"./ColumnConfigDialog-DbHBC-09.js";import"./DraggableList-c6-ZcjMb.js";import"./search-OEEiuMQK.js";import"./Input-SUEmcWu4.js";import"./useControlled-BbAelK_j.js";import"./Button-Cxf8-3hK.js";import"./small-cross-D2oHW2nL.js";import"./ActionButton-l6-GCpK2.js";import"./Checkbox-DBdKnyBo.js";import"./useValueChanged-C5P2XyrK.js";import"./CollapsiblePanel-BjAK6Orf.js";import"./MultiColumnSortDialog-KzJc224-.js";import"./MenuTrigger-DGQUU3YK.js";import"./CompositeItem-CQIJeL3v.js";import"./ToolbarRootContext-GKohB1Vi.js";import"./getDisabledMountTransitionStyles-DumrMjAd.js";import"./getPseudoElementBounds-6oxs1p6q.js";import"./chevron-down-RU6ZJ7SE.js";import"./index-505RtiSa.js";import"./error-Df9MLz6T.js";import"./BaseCbacBanner-BXiUKVyr.js";import"./makeExternalStore-N4sJbBYc.js";import"./Tooltip-Dnqgpj59.js";import"./PopoverPopup-B20RcrSM.js";import"./toNumber-BL1xMckt.js";import"./useOsdkClient-B2zBLF21.js";import"./tick-BPQqxqWd.js";import"./DropdownField-Q5XGg2hM.js";import"./withOsdkMetrics-sn_AdfzF.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
