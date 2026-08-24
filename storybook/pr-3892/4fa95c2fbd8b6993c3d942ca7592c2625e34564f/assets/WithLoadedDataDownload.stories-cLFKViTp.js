import{f as b,j as a,r as i}from"./iframe-ClI_suoI.js";import{O as u}from"./object-table-Dc3bm7wL.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D0Vsi6i3.js";import"./Table-Do37un_W.js";import"./index-BOKiLQxP.js";import"./Dialog-QlvwO9cL.js";import"./cross-BQ8MM7XW.js";import"./svgIconContainer-CUHjWuFL.js";import"./useBaseUiId-Dc6nwPYL.js";import"./InternalBackdrop-BUi2iTEd.js";import"./composite-BJOTlA1D.js";import"./index-l7ila5kK.js";import"./index-BM0PuGji.js";import"./index-B1mNthSM.js";import"./useEventCallback-DVEB68OM.js";import"./SkeletonBar-D6U2O75A.js";import"./LoadingCell-chWRAdnb.js";import"./ColumnConfigDialog-Cmo1wVkn.js";import"./DraggableList-BKBY8rPP.js";import"./search-DE3wrgSm.js";import"./Input-DBdXXl4r.js";import"./useControlled-Blt5oj3t.js";import"./Button-COPur_kS.js";import"./small-cross-DWTE1D7g.js";import"./ActionButton-pbm-2r65.js";import"./Checkbox-S9UuBkvE.js";import"./useValueChanged-B3aVy-K-.js";import"./CollapsiblePanel-BMyuJGmo.js";import"./MultiColumnSortDialog-CF8In-U-.js";import"./MenuTrigger-BSLJomwL.js";import"./CompositeItem-BOlADeZN.js";import"./ToolbarRootContext-BRzHaDW7.js";import"./getDisabledMountTransitionStyles-CXvh3y62.js";import"./getPseudoElementBounds-Df-qZ214.js";import"./chevron-down-BZBtwvY3.js";import"./index-iFSHL4p3.js";import"./error-p2VRCnQK.js";import"./BaseCbacBanner-DV_F8c5m.js";import"./makeExternalStore-BDP9Ow_W.js";import"./Tooltip-DgpP4QJ4.js";import"./PopoverPopup-9ckP_Vcx.js";import"./debounce-DPHlWhp3.js";import"./useOsdkClient-B-EWrqMY.js";import"./tick-DSX_6FCY.js";import"./DropdownField-By-ew9Op.js";import"./useDebouncedCallback-CbNUArZs.js";import"./withOsdkMetrics-DG46gbmI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
