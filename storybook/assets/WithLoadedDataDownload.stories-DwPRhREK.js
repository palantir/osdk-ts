import{f as b,j as a,r as i}from"./iframe-BMD419ka.js";import{O as u}from"./object-table-DklIXUmg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CiHZNj21.js";import"./index-kQgthC1n.js";import"./Dialog-Bnf9h6yt.js";import"./cross-C-Zn05Sh.js";import"./svgIconContainer-CHQFiUDX.js";import"./useBaseUiId-BBA3Ojwf.js";import"./InternalBackdrop-BzOsWlKG.js";import"./composite-C219b2sQ.js";import"./index-DoLcuz7h.js";import"./index-CxpxkMGG.js";import"./index-CZl_v7Sd.js";import"./useEventCallback-p3w8y99Z.js";import"./SkeletonBar-DEGMKOtH.js";import"./LoadingCell-CxK7vvT8.js";import"./ColumnConfigDialog-SWCRSzpQ.js";import"./DraggableList-CsKDALQ_.js";import"./search-EKHgMBUJ.js";import"./Input-Bra7C-xN.js";import"./useControlled-7nsHaAUN.js";import"./Button-LjQK0IIe.js";import"./small-cross-Cwk34a2M.js";import"./ActionButton-CTFg_lcv.js";import"./Checkbox-DtJ0hjBX.js";import"./useValueChanged-BsnzqRt6.js";import"./CollapsiblePanel-BRTyuHlQ.js";import"./MultiColumnSortDialog-DYNUSxBw.js";import"./MenuTrigger-BDfHjyma.js";import"./CompositeItem-Bp6sOKGe.js";import"./ToolbarRootContext-COV-S0gg.js";import"./getDisabledMountTransitionStyles-C6hYXqqN.js";import"./getPseudoElementBounds-CHbR_S8R.js";import"./chevron-down-Amjm1ssN.js";import"./index-BRel636c.js";import"./error-3ACxWnPD.js";import"./BaseCbacBanner-BxJHnPjU.js";import"./makeExternalStore-CFbDS87k.js";import"./Tooltip-CS3G91Py.js";import"./PopoverPopup-Cev_zMr-.js";import"./debounce-189bBZdJ.js";import"./useOsdkClient-C_nRFm8v.js";import"./tick-CWpYZ4jJ.js";import"./DropdownField-CJedxo24.js";import"./isEqual-DfX-8s8I.js";import"./withOsdkMetrics-JpL78Mh0.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
