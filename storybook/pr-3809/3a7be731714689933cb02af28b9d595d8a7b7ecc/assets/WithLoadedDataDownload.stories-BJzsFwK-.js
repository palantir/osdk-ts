import{f as b,j as a,r as i}from"./iframe-CpHLFs-j.js";import{O as u}from"./object-table-BG29GeR4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cx-Hj9ji.js";import"./Table-DHh5DJrx.js";import"./index-CW31sxVo.js";import"./Dialog-CjH99TMo.js";import"./cross-BMDhbGFA.js";import"./svgIconContainer-DJggAQ_8.js";import"./useBaseUiId-BBJe7HZ5.js";import"./InternalBackdrop-CHxyyeuy.js";import"./composite-Bb9xsxZ2.js";import"./index-BwGfwj9E.js";import"./index-D9rBAzJN.js";import"./index-B5E7rOF0.js";import"./useEventCallback-VriGb282.js";import"./SkeletonBar-w38sk0nV.js";import"./LoadingCell-B0zpyYf5.js";import"./ColumnConfigDialog-CaXzHV4W.js";import"./DraggableList-CdkW8wkH.js";import"./search-Dk5Mmea1.js";import"./Input-NmfJ6xcB.js";import"./useControlled-CU11-enl.js";import"./isEqual-CutVO7k5.js";import"./isObject-D2XlcjpL.js";import"./Button-DIETzomk.js";import"./ActionButton-ul0M5wXt.js";import"./Checkbox-BKaZSLRi.js";import"./useValueChanged-CFaYTh5g.js";import"./CollapsiblePanel-CJpYUV1y.js";import"./MultiColumnSortDialog-D_eBdYA3.js";import"./MenuTrigger-Bh2VvTmF.js";import"./CompositeItem-BCOuwNbL.js";import"./ToolbarRootContext-DLyGA8_p.js";import"./getDisabledMountTransitionStyles-DTudamhk.js";import"./getPseudoElementBounds-Rlm7eOUv.js";import"./chevron-down-BHWF8sCh.js";import"./index-DrQ_7o0H.js";import"./error-CJHQsKq8.js";import"./BaseCbacBanner-BIspY_8u.js";import"./makeExternalStore-qrCwPWzZ.js";import"./Tooltip-BrPhE4PX.js";import"./PopoverPopup-DDxX24TR.js";import"./toNumber-DvEoKfvv.js";import"./useOsdkClient-BbD9fywh.js";import"./tick-DbZpgMGy.js";import"./DropdownField-CjbCjEN6.js";import"./withOsdkMetrics-dGfsU2Pa.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
