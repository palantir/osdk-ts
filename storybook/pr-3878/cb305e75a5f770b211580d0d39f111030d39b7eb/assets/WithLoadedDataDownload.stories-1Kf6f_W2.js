import{f as b,j as a,r as i}from"./iframe-BXJnohbt.js";import{O as u}from"./object-table-D9NNs3hA.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-tvnGn4jg.js";import"./Table-B97BNwPW.js";import"./index-DJBlipGi.js";import"./Dialog-DAvTCL__.js";import"./cross-Q-_g4ZFQ.js";import"./svgIconContainer-VhJmqTox.js";import"./useBaseUiId-sZ35m2bM.js";import"./InternalBackdrop-vup632p4.js";import"./composite-DdNHLfsp.js";import"./index-DbER6lkg.js";import"./index-DIxniVKs.js";import"./index-BIEsfLi4.js";import"./useEventCallback-BvLSkLRP.js";import"./SkeletonBar-CDbdkFM2.js";import"./LoadingCell-U45hAs7y.js";import"./ColumnConfigDialog-e9SzTM1d.js";import"./DraggableList-yq3PZM49.js";import"./search-Bwx9I6xK.js";import"./Input-DFgR57Ky.js";import"./useControlled--cyQ52Ku.js";import"./Button-k1fX7wnM.js";import"./small-cross-3Wkanwed.js";import"./ActionButton-91Oje2JU.js";import"./Checkbox-DOv66HYU.js";import"./useValueChanged-CXlUDxOW.js";import"./CollapsiblePanel-C0Dtz8qp.js";import"./MultiColumnSortDialog-BhWeALjl.js";import"./MenuTrigger-Ci0xiN-V.js";import"./CompositeItem-DxHmEQaB.js";import"./ToolbarRootContext-DWK2aFvr.js";import"./getDisabledMountTransitionStyles-DbKz3mGY.js";import"./getPseudoElementBounds-CjzqAflM.js";import"./chevron-down-CyQUuZQm.js";import"./index-DCSxP7tL.js";import"./error-Du-8Vb6N.js";import"./BaseCbacBanner-yQghixcO.js";import"./makeExternalStore-Nh0J-rEN.js";import"./Tooltip-fNhv7nQW.js";import"./PopoverPopup-DzsPnqhc.js";import"./debounce-DTy8dIIZ.js";import"./useOsdkClient-y2bMalZp.js";import"./tick-1_WHGxzZ.js";import"./DropdownField--OTUJ18G.js";import"./isEqual-CsfWQL0f.js";import"./withOsdkMetrics-DBlk2yrx.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
