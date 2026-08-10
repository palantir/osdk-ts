import{f as b,j as a,r as i}from"./iframe-rflnhUL0.js";import{O as u}from"./object-table-BuC8IlXH.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-JrW1tzuD.js";import"./Table-CcDzY1b4.js";import"./index-CKEIJLZz.js";import"./Dialog-CaW29oo5.js";import"./cross-DnlUR3uJ.js";import"./svgIconContainer-CfRMoYYm.js";import"./useBaseUiId-B-D920ll.js";import"./InternalBackdrop-BmgqUUZm.js";import"./composite-DWpGM0Ys.js";import"./index-DskUz2s5.js";import"./index-Cmmo0Jm_.js";import"./index-CYog2F1S.js";import"./useEventCallback-IFua3RYV.js";import"./SkeletonBar-Bx9hAro-.js";import"./LoadingCell-gS42QkYV.js";import"./ColumnConfigDialog-st3e9zUU.js";import"./DraggableList-BB16q4ou.js";import"./search-Dbr7xQD1.js";import"./Input-DxO_QsKj.js";import"./useControlled-pmT8hQxb.js";import"./isEqual-DbN-tv-e.js";import"./isObject-BkxNQewi.js";import"./Button-C3fC6A6m.js";import"./ActionButton-DK7xXRak.js";import"./Checkbox-BROO1bDi.js";import"./useValueChanged-B6Ou-IZI.js";import"./CollapsiblePanel-BUTZsP3m.js";import"./MultiColumnSortDialog-CQP0H1PV.js";import"./MenuTrigger-CnsFIHQ4.js";import"./CompositeItem--VYrNhIm.js";import"./ToolbarRootContext-DEPy0pOQ.js";import"./getDisabledMountTransitionStyles-CZvlUQGU.js";import"./getPseudoElementBounds-C99NhKV6.js";import"./chevron-down-DJU55j1c.js";import"./index-CVhEYDwD.js";import"./error-CQhUr9EW.js";import"./BaseCbacBanner-C3An4QRs.js";import"./makeExternalStore-CT5u938L.js";import"./Tooltip-BsKl9t32.js";import"./PopoverPopup-BByUGNRE.js";import"./toNumber-DmIm5Qmb.js";import"./useOsdkClient-Ufw7pTgL.js";import"./tick-Dsl8J2EY.js";import"./DropdownField-CHHdcXVp.js";import"./withOsdkMetrics-KUKh2Lgy.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
