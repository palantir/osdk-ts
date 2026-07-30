import{f as b,j as a,r as i}from"./iframe-pYM9Kle3.js";import{O as u}from"./object-table-Dg8X1YLC.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D5KvRmWw.js";import"./Table-r_TjHfFz.js";import"./index-aGm8-TAF.js";import"./Dialog-DL97wxmD.js";import"./cross-BnBrW-eg.js";import"./svgIconContainer-C_8arsQh.js";import"./useBaseUiId-RIZ0yVnd.js";import"./InternalBackdrop-DIPX0H2i.js";import"./composite-sTRtyjQk.js";import"./index-W-KSUEkN.js";import"./index-BOW_h0zx.js";import"./index-05AG5g9M.js";import"./useEventCallback-D8yjtfXj.js";import"./SkeletonBar-BK9B7HSX.js";import"./LoadingCell-CN61tLvp.js";import"./ColumnConfigDialog-CURzWvFL.js";import"./DraggableList-pKSWkaE1.js";import"./search-DhM0Kz_K.js";import"./Input-CwD97Qzu.js";import"./useControlled-BncmKvh2.js";import"./isEqual-3I2_tgp7.js";import"./isObject-CgQKXRFD.js";import"./Button-CU-ddK4J.js";import"./ActionButton-BKxfDdu4.js";import"./Checkbox-CZptYZXi.js";import"./useValueChanged-CWxRqVfZ.js";import"./CollapsiblePanel-o9ZfF3wl.js";import"./MultiColumnSortDialog-B89-LTwa.js";import"./MenuTrigger-6lJzNeVm.js";import"./CompositeItem-Cx5UxeIi.js";import"./ToolbarRootContext-B9CW3s9P.js";import"./getDisabledMountTransitionStyles-RZdmxJEf.js";import"./getPseudoElementBounds-D-2Wx9v7.js";import"./chevron-down-BISeLNQR.js";import"./index-CS1mNa9j.js";import"./error-BxZYQlfA.js";import"./BaseCbacBanner-Dfp89-qt.js";import"./makeExternalStore-BkiGOiIS.js";import"./Tooltip-XQHWhF0b.js";import"./PopoverPopup-BJDqIkbD.js";import"./toNumber-BgnxX0iA.js";import"./useOsdkClient-BD1XYN6K.js";import"./tick-BiUS3pKu.js";import"./DropdownField-BFRZdytN.js";import"./withOsdkMetrics-DOlv4fq5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
