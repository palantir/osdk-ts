import{f as b,j as a,r as i}from"./iframe-BnQn1FlY.js";import{O as u}from"./object-table-BOdB6mRf.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BecbOaxr.js";import"./Table-DvIt_vn4.js";import"./index-CfSflYMd.js";import"./Dialog-BUoqfpGV.js";import"./cross-CQwrttsU.js";import"./svgIconContainer-C8CWCK4h.js";import"./useBaseUiId-D_n7SQSX.js";import"./InternalBackdrop-BK5BvcOi.js";import"./composite-D7QBQd-n.js";import"./index-TO_0y0N3.js";import"./index-C1lVCR7D.js";import"./index-BZF3QGqV.js";import"./useEventCallback-CFxdcXkp.js";import"./SkeletonBar-DABOfyFg.js";import"./LoadingCell-DIqxv0Br.js";import"./ColumnConfigDialog-BUyCrvE-.js";import"./DraggableList-C5z8YS9x.js";import"./search-DRs0Pqxh.js";import"./Input-DoQKk1PO.js";import"./useControlled-i3XBhDi5.js";import"./Button-DdWl47ZG.js";import"./small-cross-CIlPARtt.js";import"./ActionButton-D4YbdFWJ.js";import"./Checkbox-DMoofL04.js";import"./useValueChanged-DCL6nLeD.js";import"./CollapsiblePanel-7pS-YmLY.js";import"./MultiColumnSortDialog-BnrzMhSB.js";import"./MenuTrigger-4Ysk7jLT.js";import"./CompositeItem-DQ-KZaEd.js";import"./ToolbarRootContext-DpVEn9hT.js";import"./getDisabledMountTransitionStyles-mUbg0fsY.js";import"./getPseudoElementBounds-Btt2eHQG.js";import"./chevron-down-CBuocP3-.js";import"./index-CzWHx20P.js";import"./error-HPj_xS2_.js";import"./BaseCbacBanner-CMFVvGvU.js";import"./makeExternalStore-CydlKeaD.js";import"./Tooltip-CZ3Eb1De.js";import"./PopoverPopup-Dv1gHfMh.js";import"./debounce-C4XOemAw.js";import"./useOsdkClient-BOzHXDv_.js";import"./tick-ByOfPxOM.js";import"./DropdownField-CBQ5hYY4.js";import"./isEqual-zAekXAR7.js";import"./withOsdkMetrics-BE7G7j9y.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
