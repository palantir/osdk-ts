import{f as b,j as a,r as i}from"./iframe-DXDjAXel.js";import{O as u}from"./object-table-BP82I6MO.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-IpZxA0ro.js";import"./Table-C6a4keXk.js";import"./index-CpU5tjqP.js";import"./Dialog-Df0gqIAe.js";import"./cross-DEtWv0qy.js";import"./svgIconContainer-jCzC3C8h.js";import"./useBaseUiId-C45Ma1UV.js";import"./InternalBackdrop-CRUN8gyi.js";import"./composite--V8DJrbe.js";import"./index-DeWq_guV.js";import"./index-BxV2gtcY.js";import"./index-BacqsjHg.js";import"./useEventCallback-X2pfGQGy.js";import"./SkeletonBar-HdKrVA_I.js";import"./LoadingCell-CdRFLWJX.js";import"./ColumnConfigDialog-lhgh-FoD.js";import"./DraggableList-DhIqos5Q.js";import"./search-CiGMtB3E.js";import"./Input-Dpc4Iwso.js";import"./useControlled-KXVdK95E.js";import"./Button-B-4Jw48N.js";import"./small-cross-DbxwjyCU.js";import"./ActionButton-DBwaiG9o.js";import"./Checkbox-COH4j_qR.js";import"./useValueChanged-BmkI91ny.js";import"./CollapsiblePanel-BLnECc8-.js";import"./MultiColumnSortDialog-BqJnqOkd.js";import"./MenuTrigger-CWYE3ioj.js";import"./CompositeItem-CDBKBcu9.js";import"./ToolbarRootContext-YFTPY9mo.js";import"./getDisabledMountTransitionStyles-Ccg_pvfR.js";import"./getPseudoElementBounds-BHQeyyd6.js";import"./chevron-down-KI9ROJP6.js";import"./index-BZKWr6fS.js";import"./error-Ba9KLhOx.js";import"./BaseCbacBanner-tj-1o0aL.js";import"./makeExternalStore-Dyu5lTE9.js";import"./Tooltip-_9vbGbii.js";import"./PopoverPopup-Tb6F7J3K.js";import"./debounce-BtAkR6Pi.js";import"./useOsdkClient-_rpTUpw6.js";import"./tick-BygXNrkI.js";import"./DropdownField-DkSwoN9D.js";import"./isEqual-CpA_oqdP.js";import"./withOsdkMetrics-B_T1pq9p.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
