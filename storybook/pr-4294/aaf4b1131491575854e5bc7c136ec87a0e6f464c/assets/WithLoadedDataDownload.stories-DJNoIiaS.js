import{f as b,j as a,r as i}from"./iframe-bA068ynB.js";import{O as u}from"./object-table-BOJPUH3M.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C9VsmxhQ.js";import"./Table-QfQxDgch.js";import"./index-DBROM1hX.js";import"./Dialog-zP62slpV.js";import"./cross-Bkk1ngCc.js";import"./svgIconContainer-ImDrBsfn.js";import"./useBaseUiId-BMBSefl3.js";import"./InternalBackdrop-CAp1E-tm.js";import"./composite-HNoPL5_Y.js";import"./index-rNZjrxqa.js";import"./index-NJJaf9yA.js";import"./index-B_XB1-MU.js";import"./useEventCallback-l7OAvfu_.js";import"./SkeletonBar-CPuvZGqb.js";import"./LoadingCell-BOttGxxP.js";import"./ColumnConfigDialog-AWh268ua.js";import"./DraggableList-3qYbN4Vj.js";import"./search-bHymEml7.js";import"./Input-Ca6oOOwx.js";import"./useControlled-Cpl65TMC.js";import"./Button-Dqcog7jP.js";import"./small-cross-BNxAoOIY.js";import"./ActionButton-DZrngljD.js";import"./Checkbox-DkUamXVL.js";import"./useValueChanged-g4lOY34t.js";import"./CollapsiblePanel-DlBdk-qD.js";import"./MultiColumnSortDialog-XZXFn790.js";import"./MenuTrigger-BhVkwwlK.js";import"./CompositeItem-yupHDpkm.js";import"./ToolbarRootContext-CUI-NHrb.js";import"./getDisabledMountTransitionStyles-GSnN3fW6.js";import"./getPseudoElementBounds-kM-G-LqQ.js";import"./chevron-down-C3KFPXv7.js";import"./index-BpjGzWVl.js";import"./error-BWkfH6c5.js";import"./BaseCbacBanner-B0HhO3pu.js";import"./makeExternalStore-VPZ76tFl.js";import"./Tooltip-KSItXnvL.js";import"./PopoverPopup-B2AfGcIN.js";import"./debounce-z6aUSNpd.js";import"./useOsdkClient-C4faDiEE.js";import"./tick-wfH5aW9V.js";import"./DropdownField-D4gWGmzj.js";import"./isEqual-Jfqc8hVd.js";import"./withOsdkMetrics-CtZfcEFb.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
