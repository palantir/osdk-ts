import{f as b,j as a,r as i}from"./iframe-nukQkA9I.js";import{O as u}from"./object-table-K9D0nuN0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-SAYG1EIe.js";import"./Table-DKXqaPRr.js";import"./index-D-GlitYq.js";import"./Dialog-Dnpt6yRQ.js";import"./cross-AUKdXd6S.js";import"./svgIconContainer-BRLU7q7E.js";import"./useBaseUiId-DDz0NCTS.js";import"./InternalBackdrop-a-wOXysB.js";import"./composite-C4ibImfR.js";import"./index-C3FqsozF.js";import"./index-BNEnQN8B.js";import"./index-DB5tfdIB.js";import"./useEventCallback-D6wC1Sto.js";import"./SkeletonBar-Bo4glzOY.js";import"./LoadingCell-zTTgdgYS.js";import"./ColumnConfigDialog-Djcvk-p7.js";import"./DraggableList-DfxHwUAO.js";import"./search-DU9QOFIa.js";import"./Input-BpkcbvD3.js";import"./useControlled-CCaNPmgV.js";import"./Button-DH7_1I4V.js";import"./small-cross-Djgqv-i1.js";import"./ActionButton-CRB-SEkc.js";import"./Checkbox-DuAOV7nQ.js";import"./useValueChanged-ChdRJ_58.js";import"./CollapsiblePanel-Cjaojbm_.js";import"./MultiColumnSortDialog-RiPM62Ra.js";import"./MenuTrigger-eSY_j9xA.js";import"./CompositeItem-FfzK-6cQ.js";import"./ToolbarRootContext-fpQvlLhR.js";import"./getDisabledMountTransitionStyles-DDgFSqxd.js";import"./getPseudoElementBounds-m5PwG0QT.js";import"./chevron-down-A-s4tptO.js";import"./index-DHZErGjk.js";import"./error-Btym7AAe.js";import"./BaseCbacBanner-Cli9v28S.js";import"./makeExternalStore-BULRIBYo.js";import"./Tooltip-B7VRWvgf.js";import"./PopoverPopup-ZbVHJ-GH.js";import"./debounce-DVmJRHR5.js";import"./useOsdkClient-DiA-yxQE.js";import"./tick-y2AICyxl.js";import"./DropdownField-DOfjncwG.js";import"./isEqual-ANSE0uXE.js";import"./withOsdkMetrics--rpBEpu9.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
