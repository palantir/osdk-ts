import{f as b,j as a,r as i}from"./iframe-D9LEKPHA.js";import{O as u}from"./object-table-B1AfggZM.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dxzd1OZD.js";import"./Table-DXZyWBeX.js";import"./index-DzK_y6C8.js";import"./Dialog-CWnr_w5m.js";import"./cross-C3SLdrCX.js";import"./svgIconContainer-e-ufemnI.js";import"./useBaseUiId-CBbaApFb.js";import"./InternalBackdrop-GJoSUQP4.js";import"./composite-CGRnG1Ww.js";import"./index-DXKCvCyZ.js";import"./index-Bc3q1fMe.js";import"./index-DsxzOZNt.js";import"./useEventCallback-DDtAALNo.js";import"./SkeletonBar-Dyau828r.js";import"./LoadingCell-CAS6H_28.js";import"./ColumnConfigDialog-A5yV7I5q.js";import"./DraggableList-a_S_NMQt.js";import"./search-CA19qJZK.js";import"./Input-D7T3_Ui_.js";import"./useControlled-3uaONOlZ.js";import"./Button-CFsy2fIN.js";import"./small-cross-suCAhOQB.js";import"./ActionButton-Bf8hi2D9.js";import"./Checkbox-k2zGxl_k.js";import"./useValueChanged-CGf07a8j.js";import"./CollapsiblePanel-D4Wj2a6a.js";import"./MultiColumnSortDialog-DkEgg_lY.js";import"./MenuTrigger-hlDUsPJn.js";import"./CompositeItem-C_PTfcmx.js";import"./ToolbarRootContext-CATQRVeE.js";import"./getDisabledMountTransitionStyles-CBkqgZFm.js";import"./getPseudoElementBounds-BqSDvjTD.js";import"./chevron-down-5k8pvBL_.js";import"./index-vYt4oG90.js";import"./error-CuQM1-tZ.js";import"./BaseCbacBanner-BDhY3mYb.js";import"./makeExternalStore-CH14MzlW.js";import"./Tooltip-BTJQl-Kl.js";import"./isObject-D93Vzkd_.js";import"./debounce-BbpvLq-c.js";import"./useOsdkClient-CcWL-FKN.js";import"./tick-CbRcQjZj.js";import"./DropdownField-BGcI4SWd.js";import"./isEqual-CFExKmCm.js";import"./_baseIsEqual-O2ApXnqd.js";import"./withOsdkMetrics-CQaJkAGj.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
