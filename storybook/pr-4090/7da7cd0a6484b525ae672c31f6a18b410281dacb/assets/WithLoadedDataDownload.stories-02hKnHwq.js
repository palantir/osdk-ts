import{f as b,j as a,r as i}from"./iframe-CzOIzVud.js";import{O as u}from"./object-table-BiaV50TY.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CwMKM08Q.js";import"./Table-C1slSHqd.js";import"./index-CTmIGBdU.js";import"./Dialog-DDNGSzjz.js";import"./cross-ChoO-hHZ.js";import"./svgIconContainer-0bhWATaq.js";import"./useBaseUiId-PA6AbvCv.js";import"./InternalBackdrop-8vONEObA.js";import"./composite-CCnWWb1N.js";import"./index-CYHilSIV.js";import"./index-OcnJrvDb.js";import"./index-CeqpJRDR.js";import"./useEventCallback-e2owZAXd.js";import"./SkeletonBar-BM-didmo.js";import"./LoadingCell-GADOyGu6.js";import"./ColumnConfigDialog-DTctQD0N.js";import"./DraggableList-BRQYiX0W.js";import"./search-OylK7gf9.js";import"./Input-C7TpWAR_.js";import"./useControlled-Bl4FNa4w.js";import"./Button-PAMPzLp5.js";import"./small-cross-Cev--Ndg.js";import"./ActionButton-BhhEiGs3.js";import"./Checkbox-C-AKjDp-.js";import"./useValueChanged-DAu4NU-7.js";import"./CollapsiblePanel-Cfd_4ZcG.js";import"./MultiColumnSortDialog-Cgs8kePe.js";import"./MenuTrigger-BflBD4VN.js";import"./CompositeItem-A6EkfQUI.js";import"./ToolbarRootContext-CMaoaTCy.js";import"./getDisabledMountTransitionStyles-Dii4bpI2.js";import"./getPseudoElementBounds-B02vA_g5.js";import"./chevron-down-Cb1symQ7.js";import"./index-BFY6m5n5.js";import"./error-bNK0ajAf.js";import"./BaseCbacBanner-X2T3Xpv6.js";import"./makeExternalStore-BLR6RjGC.js";import"./Tooltip-DObflQ9W.js";import"./PopoverPopup-lEB4hKfS.js";import"./debounce-C1RT7wUt.js";import"./useOsdkClient-Cfr0VwOI.js";import"./tick-sKwgcsDW.js";import"./DropdownField-CImlhZV3.js";import"./isEqual-C17Xnhpn.js";import"./withOsdkMetrics-C2KUxQ8x.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
