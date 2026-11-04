import{f as b,j as a,r as i}from"./iframe-DxLh3JbF.js";import{O as u}from"./object-table-CXV1HhY7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CtguWtZv.js";import"./Table-BlGlUSq2.js";import"./index-DKwvuwmq.js";import"./Dialog-D9QNYHK2.js";import"./cross-Bq7Vu5_q.js";import"./svgIconContainer-DVtbzSvb.js";import"./useBaseUiId-C0U6w1uv.js";import"./InternalBackdrop-CYZKR22v.js";import"./composite-BnT-JfoG.js";import"./index-lMNDx7C7.js";import"./index-CcJor5Xx.js";import"./index-JqNwC6gS.js";import"./useEventCallback-BB6FPyf8.js";import"./SkeletonBar-B3S-zvqX.js";import"./LoadingCell-VgpctpOH.js";import"./ColumnConfigDialog-Dz9ehfgV.js";import"./DraggableList-Y8hfAJUC.js";import"./search-6md9DSSP.js";import"./Input-Be22pwJh.js";import"./useControlled-CezKSMA-.js";import"./Button-DkhW4pYf.js";import"./small-cross-CmZIK1pw.js";import"./ActionButton-B_sTpPMt.js";import"./Checkbox-BSTTht3J.js";import"./useValueChanged-ZKInf5vA.js";import"./CollapsiblePanel-Bdhi8tcN.js";import"./MultiColumnSortDialog-c9m8g-xN.js";import"./MenuTrigger-B-SPPJK2.js";import"./CompositeItem-DzeDqabA.js";import"./ToolbarRootContext-BeQWjnov.js";import"./getDisabledMountTransitionStyles-CcKSQ82e.js";import"./getPseudoElementBounds-Xs14tMhu.js";import"./chevron-down-C2jGd_Ay.js";import"./index-2HlltdC-.js";import"./error-DE0gSpIQ.js";import"./BaseCbacBanner-BzPchdvo.js";import"./makeExternalStore-CIacUB7Y.js";import"./Tooltip-Cv44_0tC.js";import"./PopoverPopup-soj2Nfpm.js";import"./debounce-DMvnj4rJ.js";import"./useOsdkClient-D-0q6D8B.js";import"./tick-UzfIvE9e.js";import"./DropdownField-B27tcm_v.js";import"./isEqual-DL8SIK_A.js";import"./withOsdkMetrics-99fBVbxl.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
