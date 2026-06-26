import{f as b,j as a,r as i}from"./iframe-CrtKjtEH.js";import{O as u}from"./object-table-DZ94ftyj.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-SSahoAr9.js";import"./Table-JZdg7GZI.js";import"./index-BwQBel0j.js";import"./Dialog-DvJk3xGZ.js";import"./cross-Cz8Bb3_T.js";import"./svgIconContainer-Dh3sUjjs.js";import"./useBaseUiId-DFsa-aX3.js";import"./InternalBackdrop-DHnTIILL.js";import"./composite-us4_F480.js";import"./index-Cq2x_ofO.js";import"./index-Sa5B4YvM.js";import"./index-CuGk1-av.js";import"./useEventCallback-SxjUEFvH.js";import"./SkeletonBar-BYsqkHTT.js";import"./LoadingCell-BGeEx55K.js";import"./ColumnConfigDialog-CXAwcs_C.js";import"./DraggableList-CMqs31lE.js";import"./search-CKBv43nH.js";import"./Input-hNZs0cNG.js";import"./useControlled-DFzHzZIl.js";import"./Button-H44IxOh8.js";import"./small-cross-Cic4keO3.js";import"./ActionButton-DQ3aCozb.js";import"./Checkbox-KwuDvry-.js";import"./minus-DUkZ9BHe.js";import"./tick-Cv92TETm.js";import"./useValueChanged-J_ST96R0.js";import"./caret-down-DurJlXNi.js";import"./CollapsiblePanel-BePveukO.js";import"./MultiColumnSortDialog-CDJDpTdN.js";import"./MenuTrigger-BaZUTHxY.js";import"./CompositeItem-D3qD8JcI.js";import"./ToolbarRootContext-Bk2PwjRD.js";import"./getDisabledMountTransitionStyles-DRXZcQpH.js";import"./getPseudoElementBounds-BQJe2Ssi.js";import"./chevron-down-DxQEXQwy.js";import"./index-BwhAMRUz.js";import"./error-DqXHGA21.js";import"./BaseCbacBanner-CHxVVdQG.js";import"./makeExternalStore-tacfjPhd.js";import"./Tooltip-BuByXAxE.js";import"./PopoverPopup-C2Oo12G7.js";import"./toNumber-DaTB0o4U.js";import"./useOsdkClient-MXDbRwE3.js";import"./DropdownField-wYt9gYlV.js";import"./withOsdkMetrics-BZ-XFVYd.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
