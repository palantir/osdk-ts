import{f as b,j as a,r as i}from"./iframe-D6mqFBTT.js";import{O as u}from"./object-table-DMtw019s.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BqiXGVGp.js";import"./Table-Dgqe0IDk.js";import"./index-IKJBAM9t.js";import"./Dialog-B5q7sPg2.js";import"./cross-jsK5yfay.js";import"./svgIconContainer-CGVVByNY.js";import"./useBaseUiId-KNerzZ5H.js";import"./InternalBackdrop-DxpuqSHn.js";import"./composite-BRPPGdt9.js";import"./index-fKrhMdSH.js";import"./index-B3qQ6cz9.js";import"./index-BMHndIiP.js";import"./useEventCallback-Ch_cFxP3.js";import"./SkeletonBar-yjzLBug0.js";import"./LoadingCell-qab6ItU1.js";import"./ColumnConfigDialog-BAPPRnxc.js";import"./DraggableList-BGSmRoW9.js";import"./Input-BeS2LIyW.js";import"./useControlled-B5HZUnFY.js";import"./Button-BB6SUvpu.js";import"./small-cross-_ghQN--q.js";import"./ActionButton-DN3TPtfp.js";import"./Checkbox-3D39SiNQ.js";import"./minus-D-TnOxBE.js";import"./useValueChanged-DVslp9WU.js";import"./caret-down-DXTVIqEQ.js";import"./CollapsiblePanel-XB6zv3eq.js";import"./MultiColumnSortDialog--SE2SwwP.js";import"./MenuTrigger-BLxGzBfJ.js";import"./CompositeItem-nNi23CSW.js";import"./ToolbarRootContext-DIcBmQKQ.js";import"./getDisabledMountTransitionStyles-DD5XPuvQ.js";import"./getPseudoElementBounds-BgOXoDB7.js";import"./chevron-down-DKrENz--.js";import"./index-HninNHLY.js";import"./error-BggPY48E.js";import"./BaseCbacBanner-BF_nD0Df.js";import"./makeExternalStore-CwLM2YVT.js";import"./Tooltip-DKOb3CGc.js";import"./PopoverPopup-BSDb3cN4.js";import"./toNumber-CFYMnE41.js";import"./useOsdkClient-CJOOE_mO.js";import"./DropdownField-D6e-ZalF.js";import"./withOsdkMetrics-BTWjxjI9.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
