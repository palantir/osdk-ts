import{f as b,j as a,r as i}from"./iframe-Csm-gXDM.js";import{O as u}from"./object-table-qsvVYomC.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B2pQoQF5.js";import"./Table-HXI6QEIq.js";import"./index-DSOkxNmo.js";import"./Dialog-CckVRK8t.js";import"./cross-D5yi1h_k.js";import"./svgIconContainer-D8CdVdTF.js";import"./useBaseUiId-BvtcsR9k.js";import"./InternalBackdrop-PYXL4FuF.js";import"./composite-Cd3ThWKg.js";import"./index-D8ourLLB.js";import"./index-DK8dF11E.js";import"./index-Bz_Scb7W.js";import"./useEventCallback-C21WKomU.js";import"./SkeletonBar-ExHoWVim.js";import"./LoadingCell-BCEMfVaW.js";import"./ColumnConfigDialog-C39UVoTn.js";import"./DraggableList-Ccj7NtyF.js";import"./search-BWu2Apub.js";import"./Input-CmyNmn-U.js";import"./useControlled-DlN8ExsH.js";import"./Button-D7cNt94b.js";import"./small-cross-TUSxa0rW.js";import"./ActionButton-D_Y5O8mn.js";import"./Checkbox-a5A6rPqQ.js";import"./useValueChanged-ARdcJoaj.js";import"./CollapsiblePanel-BL19iTTX.js";import"./MultiColumnSortDialog-B-vdD6yG.js";import"./MenuTrigger-B6OZlMQ0.js";import"./CompositeItem-BGdHymE8.js";import"./ToolbarRootContext-6VqAIkkQ.js";import"./getDisabledMountTransitionStyles-f3cbN-9y.js";import"./getPseudoElementBounds-DF7dHhi1.js";import"./chevron-down-K33gEoQm.js";import"./index-VPVf3Zil.js";import"./error-ptWpun4u.js";import"./BaseCbacBanner-CVh7jwjd.js";import"./makeExternalStore-DYZ91XmC.js";import"./Tooltip-CYtmaZF0.js";import"./PopoverPopup-CN55iEhH.js";import"./debounce-BWlbUKap.js";import"./useOsdkClient-D66R8lyo.js";import"./tick-D0oIP5GF.js";import"./DropdownField-C6s4GoHW.js";import"./isEqual-Cc-7thO7.js";import"./withOsdkMetrics-BGSXyq-B.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
