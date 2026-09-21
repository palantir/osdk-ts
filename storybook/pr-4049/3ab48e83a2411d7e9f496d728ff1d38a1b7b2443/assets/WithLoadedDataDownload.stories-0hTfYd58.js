import{f as b,j as a,r as i}from"./iframe-BCFKBwNO.js";import{O as u}from"./object-table-BI-fWRRG.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Brv957vn.js";import"./Table-CNexlFJ3.js";import"./index-D-Y-JsBx.js";import"./Dialog-8zok0XhQ.js";import"./cross-COb2-6gb.js";import"./svgIconContainer-DJ-tdzCi.js";import"./useBaseUiId-DhWedzoZ.js";import"./InternalBackdrop-w16b7Fa9.js";import"./composite-r28fX4bz.js";import"./index-RhQjfChg.js";import"./index-CI-GDb84.js";import"./index-CIbK25r6.js";import"./useEventCallback---Y7uPgD.js";import"./SkeletonBar-Dp_x2eQF.js";import"./LoadingCell-MMJsapFs.js";import"./ColumnConfigDialog-BNjv0wKN.js";import"./DraggableList-BuNGHbii.js";import"./search-cuvXpLTw.js";import"./Input-DblIYKZB.js";import"./useControlled-BM_Yur5U.js";import"./Button-DgFFjm2U.js";import"./small-cross-DZvPn1Ph.js";import"./ActionButton-CCcHuk54.js";import"./Checkbox-DkcYVcVa.js";import"./useValueChanged-C162beI-.js";import"./CollapsiblePanel-CELc9lI_.js";import"./MultiColumnSortDialog-eGV3sokT.js";import"./MenuTrigger-yqfp-VgQ.js";import"./CompositeItem-DrKg3RCP.js";import"./ToolbarRootContext-BgwM3bO2.js";import"./getDisabledMountTransitionStyles-ZdKEJKh5.js";import"./getPseudoElementBounds-DlcoOkhp.js";import"./chevron-down-815YMHZK.js";import"./index-DJgWECAA.js";import"./error-DLaayWkN.js";import"./BaseCbacBanner-CSuRjZdF.js";import"./makeExternalStore-Bhr-T-us.js";import"./Tooltip-Boqdt2X8.js";import"./PopoverPopup-Dg2dGkJN.js";import"./debounce-PdhZTz_Q.js";import"./useOsdkClient-DzUFbc0D.js";import"./tick-BCzVfJh_.js";import"./DropdownField-BQn3rTLQ.js";import"./isEqual-CGdgVv1y.js";import"./withOsdkMetrics-DwU6v8eQ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
