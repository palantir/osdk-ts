import{f as b,j as a,r as i}from"./iframe-B-n5uLkA.js";import{O as u}from"./object-table-DpR_3wrC.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-vxu-jvpO.js";import"./Table-DJglKLQw.js";import"./index-r9aFA9c6.js";import"./Dialog-DJz7Ov-G.js";import"./cross-CzzoI-Me.js";import"./svgIconContainer-BAP4xquW.js";import"./useBaseUiId-Cx3-H6q7.js";import"./InternalBackdrop-DE5d7cjQ.js";import"./composite-CcnMcVoq.js";import"./index-AEeSb7o4.js";import"./index-DKaYQA5S.js";import"./index-CWueSEk2.js";import"./useEventCallback-Cug5Ejgk.js";import"./SkeletonBar-Cy7lWMxB.js";import"./LoadingCell-DR7WlWbN.js";import"./ColumnConfigDialog-BhU-gVnl.js";import"./DraggableList-C1OCbizh.js";import"./search-DCVRYddG.js";import"./Input-LcpenwpJ.js";import"./useControlled-Bce4MQ3D.js";import"./Button-Cxizrf8Y.js";import"./small-cross-xC3C54Po.js";import"./ActionButton-D2uNXT3k.js";import"./Checkbox-CIUBwDNv.js";import"./useValueChanged-DWhuyL2N.js";import"./CollapsiblePanel-D3r1-b_X.js";import"./MultiColumnSortDialog-R4zjE0hh.js";import"./MenuTrigger-BQhRZlK9.js";import"./CompositeItem-Brq4Jfrc.js";import"./ToolbarRootContext-pXgQ7_Yk.js";import"./getDisabledMountTransitionStyles-BWEZuvfD.js";import"./getPseudoElementBounds-DNbnatNp.js";import"./chevron-down-COZB8m2A.js";import"./index-B0qRo9vw.js";import"./error-ctHtVSzl.js";import"./BaseCbacBanner-Ck12EOP4.js";import"./makeExternalStore-CWIwlctc.js";import"./Tooltip-f4HmeV3o.js";import"./PopoverPopup-BoLWF4qb.js";import"./debounce-H1RiGpm9.js";import"./useOsdkClient-CDqx5dcV.js";import"./tick-DdfGjDes.js";import"./DropdownField-BoiijBdj.js";import"./isEqual-DdqzM83-.js";import"./withOsdkMetrics-BSpJ8hG-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
