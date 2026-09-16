import{f as b,j as a,r as i}from"./iframe-C2aef3Jo.js";import{O as u}from"./object-table-DMcKKEk4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B0E-WsIe.js";import"./Table-pflxRlkp.js";import"./index-CsHYpv_s.js";import"./Dialog-BtdNvTzc.js";import"./cross-mqWCDQwu.js";import"./svgIconContainer-BXdP-ypI.js";import"./useBaseUiId-BjYhZ9YY.js";import"./InternalBackdrop-BlKAfi2x.js";import"./composite-B2RxptoP.js";import"./index-DQucsIw7.js";import"./index-Cp-EDvHL.js";import"./index-CyH7L4rU.js";import"./useEventCallback-CoxthiVL.js";import"./SkeletonBar-gnedLyA8.js";import"./LoadingCell-DdO7Ovgw.js";import"./ColumnConfigDialog-C2N80SQq.js";import"./DraggableList-BgAgl3DM.js";import"./search-D59Jmp9F.js";import"./Input-DZdZFiVD.js";import"./useControlled-D_x1ayHM.js";import"./Button-Cg9SUJSs.js";import"./small-cross-DtWUwlkL.js";import"./ActionButton-CfluOSPS.js";import"./Checkbox-CQZyZMOV.js";import"./useValueChanged-CVWJNNpw.js";import"./CollapsiblePanel-BUi3el3A.js";import"./MultiColumnSortDialog-B1FOLAbC.js";import"./MenuTrigger-wDdcEy_H.js";import"./CompositeItem-083J1aRu.js";import"./ToolbarRootContext-B7lRNTOm.js";import"./getDisabledMountTransitionStyles-BNLNL_0E.js";import"./getPseudoElementBounds-CD5dDWGk.js";import"./chevron-down-DQZukdfl.js";import"./index-aIdw8oWM.js";import"./error-D0kSZtEZ.js";import"./BaseCbacBanner-BiWMelEa.js";import"./makeExternalStore-Bm5e9_5-.js";import"./Tooltip-DPyBGWcj.js";import"./PopoverPopup-DvqStvko.js";import"./debounce-BmYDT_B0.js";import"./useOsdkClient-2T4P3ooX.js";import"./tick-CqaW51QZ.js";import"./DropdownField-CILDnmw3.js";import"./isEqual-BvfB1Oe3.js";import"./withOsdkMetrics-DRjEcDDc.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
