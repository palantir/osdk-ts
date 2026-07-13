import{f as b,j as a,r as i}from"./iframe-CyaLwNeN.js";import{O as u}from"./object-table-zz_cUWpZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C59wXJGm.js";import"./Table-DKHub-3R.js";import"./index-ClYCFxLc.js";import"./Dialog-DoHkd20w.js";import"./cross-YnSfoWry.js";import"./svgIconContainer-DENCU-Gn.js";import"./useBaseUiId-DvZ_p5uK.js";import"./InternalBackdrop-D-ZFDWhX.js";import"./composite-DI16xt5E.js";import"./index-Cn-2cn1s.js";import"./index-DCVzVXAO.js";import"./index-CKry7Zq0.js";import"./useEventCallback-BvVzdICO.js";import"./SkeletonBar-BQYZLXYL.js";import"./LoadingCell-BGGYZ8OO.js";import"./ColumnConfigDialog-Dy6Gx9FD.js";import"./DraggableList-D7WKsA6x.js";import"./search-BZwB1dD8.js";import"./Input-ejD1PUHf.js";import"./useControlled-CVWFOP-m.js";import"./Button-Bpm9V69u.js";import"./small-cross-BvHRjYwk.js";import"./ActionButton-BA1WCQK6.js";import"./Checkbox-Dgg2Pte1.js";import"./useValueChanged-D2MFLZ7Z.js";import"./CollapsiblePanel-1q5cIbsQ.js";import"./MultiColumnSortDialog-D8o2G0Tr.js";import"./MenuTrigger-CTWgJwx2.js";import"./CompositeItem-BlMJ0-sW.js";import"./ToolbarRootContext-n2aK4s4L.js";import"./getDisabledMountTransitionStyles-BfbgGNpV.js";import"./getPseudoElementBounds-DBziFB1M.js";import"./chevron-down-aw0xFEGn.js";import"./index-fLqOInXO.js";import"./error-CDsS4DUR.js";import"./BaseCbacBanner-gIkXQHft.js";import"./makeExternalStore-C6mAl8IT.js";import"./Tooltip-DPdrIS6c.js";import"./PopoverPopup-CjU-dXpD.js";import"./toNumber-DWddHeY0.js";import"./useOsdkClient-CxqVq7FW.js";import"./tick-Cs94Kx7I.js";import"./DropdownField-BCNJ_jPD.js";import"./withOsdkMetrics-C1chW5-0.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
