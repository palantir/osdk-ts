import{f as b,j as a,r as i}from"./iframe-XEuGnsRt.js";import{O as u}from"./object-table-_UHYQX6_.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C3LA7DjD.js";import"./Table-BcibfcEg.js";import"./index-hoYFZTEU.js";import"./Dialog-D_mBKZUP.js";import"./cross-BkPJ4PVY.js";import"./svgIconContainer-Cb0RQGHu.js";import"./useBaseUiId-mCdtl4Rh.js";import"./InternalBackdrop-Dlc-yvI_.js";import"./composite-C7wKqsc5.js";import"./index-5B18EPoI.js";import"./index-Bm5H1-Zc.js";import"./index-DxPjU1RD.js";import"./useEventCallback-BXLpHy4Q.js";import"./SkeletonBar-CPImx-zD.js";import"./LoadingCell-BXX7To8Z.js";import"./ColumnConfigDialog-D59jO6Us.js";import"./DraggableList-Di19QZuD.js";import"./search-DrYL0jYv.js";import"./Input-BhE5wDoN.js";import"./useControlled-Ckobll8s.js";import"./Button-U91LUJU5.js";import"./small-cross-BXWfHbnv.js";import"./ActionButton-CTzHxAnF.js";import"./Checkbox-D9y8jkEY.js";import"./useValueChanged-UOAKkZbL.js";import"./CollapsiblePanel-DpP5dUOC.js";import"./MultiColumnSortDialog-K3YkdOcz.js";import"./MenuTrigger-alT3VBp4.js";import"./CompositeItem-B3HgSfnx.js";import"./ToolbarRootContext-DFElDt9z.js";import"./getDisabledMountTransitionStyles-cjPb1eyH.js";import"./getPseudoElementBounds-BM8-KJSz.js";import"./chevron-down-D0a4uQjN.js";import"./index-BJHmMD-z.js";import"./error-cdNJDk16.js";import"./BaseCbacBanner-7WgXRQgh.js";import"./makeExternalStore-J5wtFKEn.js";import"./Tooltip-CM7FIUkT.js";import"./PopoverPopup-Ci5HbqZ7.js";import"./toNumber-DdZO3eWY.js";import"./useOsdkClient-BDGuTD9F.js";import"./tick-v51j4XjK.js";import"./DropdownField-DR-jM4-A.js";import"./withOsdkMetrics-BM-nqYzx.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
