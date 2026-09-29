import{f as b,j as a,r as i}from"./iframe-DwbDsShL.js";import{O as u}from"./object-table-BgT5oNfq.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DhhmyXUk.js";import"./Table-BTdMExPd.js";import"./index-BELzmUVs.js";import"./Dialog-C9RL-4tq.js";import"./cross-CsyWmC2B.js";import"./svgIconContainer-xLBfLuAm.js";import"./useBaseUiId-CKINu-S2.js";import"./InternalBackdrop-CkMaO7_K.js";import"./composite-Dplovskw.js";import"./index-DYqy7FgF.js";import"./index-DL-SFPZn.js";import"./index-TAMkn_jr.js";import"./useEventCallback-D_o7AQG5.js";import"./SkeletonBar-hzcPKCTf.js";import"./LoadingCell-CKk4OZeM.js";import"./ColumnConfigDialog-eKI2SZFP.js";import"./DraggableList-sYZIUWkC.js";import"./search-D1hGu4NI.js";import"./Input-CMFW6oif.js";import"./useControlled-DY8ufjhO.js";import"./Button-DphpaBib.js";import"./small-cross--zSCPQCk.js";import"./ActionButton-CcahO6-X.js";import"./Checkbox-B3ZXGLZe.js";import"./useValueChanged-BgzkqT_-.js";import"./CollapsiblePanel-BDW-Fe21.js";import"./MultiColumnSortDialog-DHXQa_DH.js";import"./MenuTrigger-CR3U5NVZ.js";import"./CompositeItem-DOXgLazM.js";import"./ToolbarRootContext-BPuHUJNX.js";import"./getDisabledMountTransitionStyles-BugVbO8p.js";import"./getPseudoElementBounds-FBgTSxcr.js";import"./chevron-down-ckW8ziB1.js";import"./index-DZ-Ao651.js";import"./error-BJfNfAJx.js";import"./BaseCbacBanner-DQ4Mqy-u.js";import"./makeExternalStore-y7bd8937.js";import"./Tooltip-zs9usS6P.js";import"./PopoverPopup-BUbu0rVo.js";import"./debounce-DIDHBmIq.js";import"./useOsdkClient-DayV63R7.js";import"./tick-cgtgvDhU.js";import"./DropdownField-k94eZHLI.js";import"./isEqual-D9cIyJJ2.js";import"./withOsdkMetrics-BqWyBjIv.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
