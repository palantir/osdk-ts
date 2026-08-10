import{f as b,j as a,r as i}from"./iframe-DDq7u4il.js";import{O as u}from"./object-table-BpfBfRhb.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DchmjQ8j.js";import"./Table-DgOUC1xc.js";import"./index-CRwX66Ho.js";import"./Dialog-H1aqqX4z.js";import"./cross-CnhzJciY.js";import"./svgIconContainer-gjlLDHcU.js";import"./useBaseUiId-DoF2emQC.js";import"./InternalBackdrop-BqfOZCoa.js";import"./composite-24zZeo5k.js";import"./index-wbPw0NdA.js";import"./index-i_VEQr3c.js";import"./index-Dj1wYsHv.js";import"./useEventCallback-CNAdD9HF.js";import"./SkeletonBar-Dmhi5wAM.js";import"./LoadingCell-D4_EgMjp.js";import"./ColumnConfigDialog-DBf4F70r.js";import"./DraggableList-CsH0LNO-.js";import"./search-DW3qWj6H.js";import"./Input-Daps5nhV.js";import"./useControlled-8csFG6-s.js";import"./isEqual-DcN7ZSuF.js";import"./isObject-CNVAtxoQ.js";import"./Button-0qAbUNya.js";import"./ActionButton-BIE8JzJ4.js";import"./Checkbox-DH04k5OL.js";import"./useValueChanged-fBovsQG2.js";import"./CollapsiblePanel-BEveHXGD.js";import"./MultiColumnSortDialog-DFcpSVXu.js";import"./MenuTrigger-Cg7MUzeK.js";import"./CompositeItem-CgZOI2Nx.js";import"./ToolbarRootContext-Cnr8zXiz.js";import"./getDisabledMountTransitionStyles-dF3SUEWY.js";import"./getPseudoElementBounds--4cOuUe2.js";import"./chevron-down-B0rjx85Q.js";import"./index-CyhobMXH.js";import"./error-CVPt2IGW.js";import"./BaseCbacBanner-lUy58fLg.js";import"./makeExternalStore-BGBbZ4XE.js";import"./Tooltip-tEX9kJ8I.js";import"./PopoverPopup-CH6pXruS.js";import"./toNumber-BnYLNr0W.js";import"./useOsdkClient-CqKydsqX.js";import"./tick-BnJ5UWFD.js";import"./DropdownField-wcZcgik2.js";import"./withOsdkMetrics-BzGj8Zi1.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
