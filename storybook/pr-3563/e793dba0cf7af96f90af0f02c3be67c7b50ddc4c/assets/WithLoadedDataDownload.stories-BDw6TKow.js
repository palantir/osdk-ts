import{f as b,j as a,r as i}from"./iframe-BacHJK7c.js";import{O as u}from"./object-table-Cf9S2iIc.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BquI1EIT.js";import"./Table-BgfhKpzu.js";import"./index-C0_jfzFs.js";import"./Dialog-D-7pmUwj.js";import"./cross-DvOBfeg1.js";import"./svgIconContainer-CPx9gOaT.js";import"./useBaseUiId-BGiqNj7J.js";import"./InternalBackdrop-DZCgu9NH.js";import"./composite-CDbVnU1f.js";import"./index-DuuwNypF.js";import"./index-BC1cRqw6.js";import"./index-BF5jMmOf.js";import"./useEventCallback-Rp9pLkok.js";import"./SkeletonBar-BcapNBiA.js";import"./LoadingCell-CzQg_ldW.js";import"./ColumnConfigDialog-B_e-Sz3z.js";import"./DraggableList-1JES-2zS.js";import"./Input-D6deVImg.js";import"./useControlled-BzjFaLYf.js";import"./Button-BZvbUTDk.js";import"./small-cross-B-RpvtVX.js";import"./ActionButton-Djqzad5u.js";import"./Checkbox-Bd4D1ZK8.js";import"./minus-_JDtiLzG.js";import"./useValueChanged-66b54Rlw.js";import"./caret-down-B9A9KLxn.js";import"./CollapsiblePanel-CHMh5Ebi.js";import"./MultiColumnSortDialog-3LoYVJGB.js";import"./MenuTrigger-BMmwNEZt.js";import"./CompositeItem-CAnzBS9g.js";import"./ToolbarRootContext-ju4Y21kp.js";import"./getDisabledMountTransitionStyles-CodT7QNi.js";import"./getPseudoElementBounds-DQy-mg_R.js";import"./chevron-down-C9sbSajX.js";import"./index-DNs_SFyZ.js";import"./error-VoyFwDr8.js";import"./BaseCbacBanner-DJkRvok2.js";import"./makeExternalStore-CwOeFco1.js";import"./Tooltip-B--CDO77.js";import"./PopoverPopup-49dnJT-P.js";import"./toNumber-DyzUn3gf.js";import"./useOsdkClient-BQJOF_Qs.js";import"./DropdownField-DCRSphIf.js";import"./withOsdkMetrics-kpzKtDyl.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
