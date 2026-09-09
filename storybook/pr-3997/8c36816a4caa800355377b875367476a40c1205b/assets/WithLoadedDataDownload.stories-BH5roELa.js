import{f as b,j as a,r as i}from"./iframe-SOll1F4-.js";import{O as u}from"./object-table-8Lyto80n.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CZMLvVAf.js";import"./Table-D_kd8VXt.js";import"./index-DrJjeRbc.js";import"./Dialog-Bmx1tS-O.js";import"./cross-BhBNLXbN.js";import"./svgIconContainer-BqIiSSFa.js";import"./useBaseUiId-sLJlVzyX.js";import"./InternalBackdrop-DuO7hhrB.js";import"./composite-DrjuPSYu.js";import"./index-Bz0lLybg.js";import"./index-B_l0ycL7.js";import"./index-BxU0-qmk.js";import"./useEventCallback-DkB0XSt3.js";import"./SkeletonBar-ImB0JjUc.js";import"./LoadingCell-PvqKWmYK.js";import"./ColumnConfigDialog-CxJThB76.js";import"./DraggableList-DnYRjrbD.js";import"./search-DAnTDJ17.js";import"./Input-CD41sKiv.js";import"./useControlled-A2CHlnom.js";import"./Button-Cnjwffgu.js";import"./small-cross-DFG8waLt.js";import"./ActionButton-BED8MEyS.js";import"./Checkbox-B8Uf2TMr.js";import"./useValueChanged-BK4PR_uW.js";import"./CollapsiblePanel-D5QCO8r0.js";import"./MultiColumnSortDialog-DhUgrXVT.js";import"./MenuTrigger-mz_ipzIa.js";import"./CompositeItem-CILt4SmA.js";import"./ToolbarRootContext-C6z7XZRH.js";import"./getDisabledMountTransitionStyles-CqkzNEYE.js";import"./getPseudoElementBounds-DmvT9tik.js";import"./chevron-down-B7EMYXAy.js";import"./index-C1rZZXtv.js";import"./error-C4kcTs-K.js";import"./BaseCbacBanner-t3TVdD0X.js";import"./makeExternalStore-C8WgzvlO.js";import"./Tooltip-D0hmlA59.js";import"./PopoverPopup-BJU9-Q2L.js";import"./debounce-CbpELLX-.js";import"./useOsdkClient-DN1cnskB.js";import"./tick-DfEEUKDP.js";import"./DropdownField-DCmZO5bG.js";import"./isEqual-Cy_MZ2uT.js";import"./withOsdkMetrics-DEguMpFR.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
