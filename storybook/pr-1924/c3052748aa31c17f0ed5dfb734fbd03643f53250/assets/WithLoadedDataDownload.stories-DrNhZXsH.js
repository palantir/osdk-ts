import{f as b,j as a,r as i}from"./iframe-DM57FO0O.js";import{O as u}from"./object-table-BUncbmPw.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CiDQt3z4.js";import"./Table-fAJkuYMM.js";import"./index-78xpG-CN.js";import"./Dialog-B0lIxBy0.js";import"./cross-C4FWi7U6.js";import"./svgIconContainer-M4pBKDc9.js";import"./useBaseUiId-LhiCCirY.js";import"./InternalBackdrop-B7cw_zj9.js";import"./composite-szsum3r3.js";import"./index-X1UuWlqK.js";import"./index-C9SVGTzI.js";import"./index-BDCm_GGT.js";import"./useEventCallback-CQNDnyq4.js";import"./SkeletonBar-BXNcPfxw.js";import"./LoadingCell-CCifMiw4.js";import"./ColumnConfigDialog-BeH1Bmdd.js";import"./DraggableList-B-6UJOIk.js";import"./search-Swo5uGHk.js";import"./Input-jbZr5DP-.js";import"./useControlled-DmurJkbB.js";import"./isEqual-Bpc4ZaBI.js";import"./isObject-B39z3wFu.js";import"./Button-BtR_Rgq_.js";import"./ActionButton-CuTsrFpF.js";import"./Checkbox-CxtuU-nw.js";import"./useValueChanged-B7JDyvaj.js";import"./CollapsiblePanel-7JaVin_2.js";import"./MultiColumnSortDialog-CTjKzaH_.js";import"./MenuTrigger-DLb09YCg.js";import"./CompositeItem-COr71cMo.js";import"./ToolbarRootContext-Dme1Nr8M.js";import"./getDisabledMountTransitionStyles-BNVUpdXb.js";import"./getPseudoElementBounds-DTdRK2OL.js";import"./chevron-down-Dy3xC1Qv.js";import"./index-CIEwid69.js";import"./error-B-7TqBpt.js";import"./BaseCbacBanner-DnBux0DR.js";import"./makeExternalStore-IjYBHzVF.js";import"./Tooltip-D9DM-LvZ.js";import"./PopoverPopup-DJ9h3nij.js";import"./toNumber-BcdoaNcr.js";import"./useOsdkClient-CMjaLpsJ.js";import"./tick-D4_boYVT.js";import"./DropdownField-BHDZB30j.js";import"./withOsdkMetrics-U1ecBNOt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
