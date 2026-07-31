import{f as b,j as a,r as i}from"./iframe-CF2n_SwP.js";import{O as u}from"./object-table-Ws3ignoy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DpkaM50o.js";import"./Table-CBr66Lo7.js";import"./index-D2CBKEtq.js";import"./Dialog-DLnTIYpe.js";import"./cross-BHNzOWs1.js";import"./svgIconContainer-U4yJEvCA.js";import"./useBaseUiId-JH9EwjdR.js";import"./InternalBackdrop-CFqIHn15.js";import"./composite-DZIjbJPA.js";import"./index-BidtJzDD.js";import"./index-CgTL-8g-.js";import"./index-Cw8Yhhfu.js";import"./useEventCallback-5QX3oL2W.js";import"./SkeletonBar-cM1CrOuj.js";import"./LoadingCell-_kLrmdk5.js";import"./ColumnConfigDialog-Czn5LnnR.js";import"./DraggableList-0yBygflh.js";import"./search-Bdvx3ZDa.js";import"./Input-CGJrCa5R.js";import"./useControlled-DmmVigSV.js";import"./isEqual-CKx_5yvK.js";import"./isObject-DJupl0Bh.js";import"./Button-C3HVqe_G.js";import"./ActionButton-BH97OqGs.js";import"./Checkbox-D_I3fajL.js";import"./useValueChanged-sT6XHa_c.js";import"./CollapsiblePanel-yV7ZG1oY.js";import"./MultiColumnSortDialog-BBJiA0Gy.js";import"./MenuTrigger-Ck_tS7HF.js";import"./CompositeItem-WiSS-79O.js";import"./ToolbarRootContext-BMZZpRhf.js";import"./getDisabledMountTransitionStyles-Ch5qDZKW.js";import"./getPseudoElementBounds-vz9Xk0s1.js";import"./chevron-down-DX2JC5eM.js";import"./index-ExDoAjE3.js";import"./error-Dbf0LG0M.js";import"./BaseCbacBanner-DSQTVBGe.js";import"./makeExternalStore-CKv8i6Rr.js";import"./Tooltip-CHLCRTGv.js";import"./PopoverPopup-BOqiFA9Z.js";import"./toNumber-CWEJRA8Y.js";import"./useOsdkClient-CjY8fwPh.js";import"./tick-DTwY1UVD.js";import"./DropdownField-BVuM_ctV.js";import"./withOsdkMetrics-nsN9tDQx.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
