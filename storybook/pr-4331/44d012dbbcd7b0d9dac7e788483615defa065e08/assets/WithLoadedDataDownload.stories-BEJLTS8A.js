import{f as b,j as a,r as i}from"./iframe-NfexZY9x.js";import{O as u}from"./object-table-5hrx1AIT.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CLTJrXfR.js";import"./Table-I8E0mLIT.js";import"./index-DHazzmu_.js";import"./Dialog-DfKhixPu.js";import"./cross-BPxlVDyK.js";import"./svgIconContainer-p6aEe31f.js";import"./useBaseUiId-C16bF6M9.js";import"./InternalBackdrop-8mGv6jNv.js";import"./composite-BGUozWMo.js";import"./index-DaRojdGd.js";import"./index-Dp-u7LeB.js";import"./index-BnBOcHOT.js";import"./useEventCallback-DTK6M9zp.js";import"./SkeletonBar-_pY-LFxw.js";import"./LoadingCell-B5QQ7dT1.js";import"./ColumnConfigDialog-Bo-hV8UH.js";import"./DraggableList-CI_hj_Rq.js";import"./search-CmlPMAF4.js";import"./Input-CPs1rDr1.js";import"./useControlled-qgEamnCT.js";import"./Button-DY6lym1F.js";import"./small-cross-BjgiVUVX.js";import"./ActionButton-BT8WXcBI.js";import"./Checkbox-uVVxQ-wM.js";import"./useValueChanged-CYgXq6N-.js";import"./CollapsiblePanel-izSDW4TN.js";import"./MultiColumnSortDialog-D4m8m0GD.js";import"./MenuTrigger-CFx5IQyW.js";import"./CompositeItem-CHYMHjt2.js";import"./ToolbarRootContext-BdUx3mSp.js";import"./getDisabledMountTransitionStyles-C9b0y1iT.js";import"./getPseudoElementBounds-LhciNlN1.js";import"./chevron-down-ZCZOaNcj.js";import"./index-C7mnTzRF.js";import"./error-CIC9WqgE.js";import"./BaseCbacBanner-CIauo2y7.js";import"./makeExternalStore-C62gR5VT.js";import"./Tooltip-BQGbUuSo.js";import"./isObject-CQ_LajrM.js";import"./debounce-ChoeoRSR.js";import"./useOsdkClient-Bp3-RDM4.js";import"./tick-BpZziSjB.js";import"./DropdownField-CcTDIp1R.js";import"./isEqual-D9nxHocX.js";import"./_baseIsEqual-B9eMrTO6.js";import"./withOsdkMetrics-DSmb0LrF.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
