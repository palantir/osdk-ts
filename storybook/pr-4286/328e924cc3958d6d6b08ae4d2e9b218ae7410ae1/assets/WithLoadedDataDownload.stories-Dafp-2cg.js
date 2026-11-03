import{f as b,j as a,r as i}from"./iframe-_lLrSj1r.js";import{O as u}from"./object-table-DfjFdMz3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper--K06I6bX.js";import"./Table-C6Rb4d0k.js";import"./index-u4LjU3wy.js";import"./Dialog-BM1TicUi.js";import"./cross-Cf8HUSkr.js";import"./svgIconContainer-mBZD1oTc.js";import"./useBaseUiId-Bc8GG6V8.js";import"./InternalBackdrop-Lf90Fmle.js";import"./composite-BZPxrUSk.js";import"./index-DMVKgr18.js";import"./index-_W33FQQz.js";import"./index-BbJyxAJY.js";import"./useEventCallback-r8S4G08J.js";import"./SkeletonBar-4yDHQYXq.js";import"./LoadingCell-C39J4KHi.js";import"./ColumnConfigDialog-CxI_NE7F.js";import"./DraggableList-Ba07DvjG.js";import"./search-BsFDT1OC.js";import"./Input-ByElj6b4.js";import"./useControlled-ef7rEDgw.js";import"./Button-DtR0BNuF.js";import"./small-cross-MPNxrGPx.js";import"./ActionButton-DkdffwG3.js";import"./Checkbox-Dfkp-Kkb.js";import"./useValueChanged-B2NcodEa.js";import"./CollapsiblePanel-DSAb5O_U.js";import"./MultiColumnSortDialog-BEgba4jz.js";import"./MenuTrigger-cjXmFjSP.js";import"./CompositeItem-DQchaMiL.js";import"./ToolbarRootContext-DHD80eI9.js";import"./getDisabledMountTransitionStyles-5zflYeEg.js";import"./getPseudoElementBounds-_MMb03QT.js";import"./chevron-down-DeOYs4U6.js";import"./index-Cp32Ucpe.js";import"./error-po7axJSl.js";import"./BaseCbacBanner-BwEI1yUe.js";import"./makeExternalStore-CBJvRSBt.js";import"./Tooltip-D9sqgv57.js";import"./PopoverPopup-DmehJnCH.js";import"./debounce-CT5Ar2jy.js";import"./useOsdkClient-BGeTWEem.js";import"./tick-BhMF4eWB.js";import"./DropdownField-D01ccTug.js";import"./isEqual-DfmCLQw6.js";import"./withOsdkMetrics-cH-rirPE.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
