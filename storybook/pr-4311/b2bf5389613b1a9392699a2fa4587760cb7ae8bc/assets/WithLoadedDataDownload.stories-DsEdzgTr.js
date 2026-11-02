import{f as b,j as a,r as i}from"./iframe-DyyhsHPN.js";import{O as u}from"./object-table-Cbpj0r1f.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-TecF9w53.js";import"./Table-CNKLhBjA.js";import"./index-CvvBsxWW.js";import"./Dialog-DUBU3nXc.js";import"./cross-DpLnPIVs.js";import"./svgIconContainer-g2nhA_co.js";import"./useBaseUiId-BJ6PIN04.js";import"./InternalBackdrop-BngMdUq0.js";import"./composite-Bsp9V2TC.js";import"./index-BbJuL6dd.js";import"./index-CGUIbyJe.js";import"./index-Blnj9NS0.js";import"./useEventCallback-BxrNV8_m.js";import"./SkeletonBar-CFyXvkmW.js";import"./LoadingCell-DfavFaJ0.js";import"./ColumnConfigDialog-Byb5jzNj.js";import"./DraggableList-BcHgLABh.js";import"./search-CPGUiXny.js";import"./Input-DLcXZfv5.js";import"./useControlled-u76uhEJm.js";import"./Button-xW-9IrmO.js";import"./small-cross-CR1TDLwP.js";import"./ActionButton-BPWFDy9w.js";import"./Checkbox-DBJ2rOf5.js";import"./useValueChanged-DhqK6Cgu.js";import"./CollapsiblePanel-F0G2oMiY.js";import"./MultiColumnSortDialog-CFnl3gHS.js";import"./MenuTrigger-C4sLaFn-.js";import"./CompositeItem-COlnvMhp.js";import"./ToolbarRootContext-DTFkxjo1.js";import"./getDisabledMountTransitionStyles-B07p6-VI.js";import"./getPseudoElementBounds-CmtmchTY.js";import"./chevron-down-7VC2t8Hz.js";import"./index-Bb3R8qQ9.js";import"./error-CHS0y63D.js";import"./BaseCbacBanner-DwHDFIk2.js";import"./makeExternalStore-sflRCuNQ.js";import"./Tooltip-C6FTM4hx.js";import"./PopoverPopup-D4mGjEGR.js";import"./debounce-4BLi9EBr.js";import"./useOsdkClient-oeSeXjY9.js";import"./tick-3uXgu5u5.js";import"./DropdownField-CtXOtwg0.js";import"./isEqual-BoU7v8bO.js";import"./withOsdkMetrics-DkePQGfR.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
