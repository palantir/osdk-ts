import{f as b,j as a,r as i}from"./iframe-BIQDpA0w.js";import{O as u}from"./object-table-RXAbVnBZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CAkujj7t.js";import"./Table-Ce68YxbR.js";import"./index-QJcQchwi.js";import"./Dialog-D3VIN7AC.js";import"./cross-BhokxWW9.js";import"./svgIconContainer-Beiwk1zG.js";import"./useBaseUiId-HWzj2ccw.js";import"./InternalBackdrop-DMwmGhme.js";import"./composite-DWMEotDY.js";import"./index-Il0_IPc9.js";import"./index-DPEDKbeA.js";import"./index-BIXocC3w.js";import"./useEventCallback-BzVAB-mp.js";import"./SkeletonBar-B43s3nN1.js";import"./LoadingCell-DPwqXjlB.js";import"./ColumnConfigDialog-DxlsVkfp.js";import"./DraggableList-B4lvsNU6.js";import"./search-BU70SvPR.js";import"./Input-C1BIZDwN.js";import"./useControlled-JCzKMRhN.js";import"./Button-CwWS2Nno.js";import"./small-cross-CBUOmFXX.js";import"./ActionButton-DMzTeECz.js";import"./Checkbox-CTBZlszI.js";import"./useValueChanged-C1ElPd55.js";import"./CollapsiblePanel-DHXJGM_8.js";import"./MultiColumnSortDialog-DiKXAdpQ.js";import"./MenuTrigger-BCcyAoA5.js";import"./CompositeItem-k0wax-H2.js";import"./ToolbarRootContext-Cd2qP7C_.js";import"./getDisabledMountTransitionStyles-DLEuvAo9.js";import"./getPseudoElementBounds-DI-soIk4.js";import"./chevron-down-C5in3kf4.js";import"./index-FeoDYKMl.js";import"./error-D2lGBY9x.js";import"./BaseCbacBanner-TNEe3l7I.js";import"./makeExternalStore-DY4la4Jo.js";import"./Tooltip-DtFYkYWu.js";import"./PopoverPopup-CbUhKq8w.js";import"./debounce-1gOgvEv_.js";import"./useOsdkClient-CTsijBB9.js";import"./tick-CECUkR10.js";import"./DropdownField-7skf6f3x.js";import"./isEqual-BO1Nngw8.js";import"./withOsdkMetrics-BMxdO0Ca.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
