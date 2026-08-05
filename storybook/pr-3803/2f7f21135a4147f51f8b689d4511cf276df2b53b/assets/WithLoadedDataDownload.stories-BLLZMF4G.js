import{f as b,j as a,r as i}from"./iframe-CKhREHfL.js";import{O as u}from"./object-table-de7N08mm.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DBUxvamd.js";import"./Table-CInxtrnC.js";import"./index-C5QFNAxP.js";import"./Dialog-D7aHGxIH.js";import"./cross-Ctdls4x7.js";import"./svgIconContainer-xQdtq3jL.js";import"./useBaseUiId-CxNcwInf.js";import"./InternalBackdrop-Da2U-hCq.js";import"./composite-DRC4ACh_.js";import"./index-B_JObfE5.js";import"./index-Bbvw0vLy.js";import"./index-D0pO9-WJ.js";import"./useEventCallback-C911K9Dx.js";import"./SkeletonBar-CqiWnmpN.js";import"./LoadingCell-BA0b1nsh.js";import"./ColumnConfigDialog-D_XzeQ3O.js";import"./DraggableList-B7Ku7Hqn.js";import"./search-BDUioyk4.js";import"./Input-BHAHokL6.js";import"./useControlled-DU_GLnf5.js";import"./isEqual-ZzYBlkqe.js";import"./isObject-DrlOELdm.js";import"./Button-BMZmhn3e.js";import"./ActionButton-DNfv6jVQ.js";import"./Checkbox-CV09gumM.js";import"./useValueChanged-1i6JVRlt.js";import"./CollapsiblePanel-CcAu94A8.js";import"./MultiColumnSortDialog-CwfvwQk-.js";import"./MenuTrigger-CsOslwJg.js";import"./CompositeItem-BvUhxEG9.js";import"./ToolbarRootContext-CUGbrwD0.js";import"./getDisabledMountTransitionStyles-Df-fM2Dk.js";import"./getPseudoElementBounds-DDXuDbup.js";import"./chevron-down-KTtBty24.js";import"./index-ChjJkDiV.js";import"./error-DVbvZX26.js";import"./BaseCbacBanner-CNcfqMp1.js";import"./makeExternalStore-qR4iZXdH.js";import"./Tooltip-D-yEypjt.js";import"./PopoverPopup-B_epRAt2.js";import"./toNumber-BmYL_tSw.js";import"./useOsdkClient-VcCE1wl4.js";import"./tick-6s5dMJuy.js";import"./DropdownField-DY-Xl2eR.js";import"./withOsdkMetrics-B8apvPCk.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
