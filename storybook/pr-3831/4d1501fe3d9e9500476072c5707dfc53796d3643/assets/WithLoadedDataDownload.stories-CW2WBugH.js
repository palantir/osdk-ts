import{f as b,j as a,r as i}from"./iframe-B_zElg-B.js";import{O as u}from"./object-table-CiudyEEV.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DRQoOE0T.js";import"./Table-YcuLBa9-.js";import"./index-Y0pbVALd.js";import"./Dialog-eqoCymUU.js";import"./cross-AjEzGA8V.js";import"./svgIconContainer-CUDghfka.js";import"./useBaseUiId-C39aF9XL.js";import"./InternalBackdrop-DhtYgC5u.js";import"./composite-0kNuzYvp.js";import"./index-Cixqsfx9.js";import"./index-C6L5_3LK.js";import"./index-DvYME2IR.js";import"./useEventCallback-Ca6KgphA.js";import"./SkeletonBar-DlZLi0bg.js";import"./LoadingCell-VpeWOucW.js";import"./ColumnConfigDialog-sn6CtPlU.js";import"./DraggableList-Bd644Fjq.js";import"./search-D4GHHRcy.js";import"./Input-CYBD-BHU.js";import"./useControlled-6dtWCE0B.js";import"./isEqual-D8eqqu_U.js";import"./isObject-YUZI-5HX.js";import"./Button-Ct7hm6nC.js";import"./ActionButton-DBW_GHnB.js";import"./Checkbox-D2EdTGWa.js";import"./useValueChanged-44oYbNFp.js";import"./CollapsiblePanel-CQKYGtyy.js";import"./MultiColumnSortDialog-47xFqf_s.js";import"./MenuTrigger-CjbOgME4.js";import"./CompositeItem-BVhfnvWC.js";import"./ToolbarRootContext-Cy1n_T1N.js";import"./getDisabledMountTransitionStyles-BT1usa7w.js";import"./getPseudoElementBounds-BbRYHzbr.js";import"./chevron-down--uAY4t4Y.js";import"./index-Cnqy7EOL.js";import"./error-Ckw62m6f.js";import"./BaseCbacBanner-D-fmKJvW.js";import"./makeExternalStore-B-Aw5Aa5.js";import"./Tooltip-CDziBIY_.js";import"./PopoverPopup-dlk6jeVL.js";import"./toNumber-CdMeurHh.js";import"./useOsdkClient-BfxQYBoI.js";import"./tick-URoWB_Nt.js";import"./DropdownField-Dp86C8Tw.js";import"./withOsdkMetrics-BBrkQJAI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
