import{f as b,j as a,r as i}from"./iframe-BmIumiFy.js";import{O as u}from"./object-table-CvOpDczA.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DOudssxF.js";import"./Table-BhjAHP64.js";import"./index-COtMTDwh.js";import"./Dialog-uE21v_ZQ.js";import"./cross-DwaGakXk.js";import"./svgIconContainer-zzO9ThP2.js";import"./useBaseUiId-u6D5SNaO.js";import"./InternalBackdrop-B9dKZpjj.js";import"./composite-xXwZ5piC.js";import"./index-C3Iv1KGN.js";import"./index-sxuF88AO.js";import"./index-DUFG2h40.js";import"./useEventCallback-B8NSSpYv.js";import"./SkeletonBar-BovQdxso.js";import"./LoadingCell-D0i64q0P.js";import"./ColumnConfigDialog-CtNE-3Ou.js";import"./DraggableList-BUJMmWzV.js";import"./search-B4tx0NX2.js";import"./Input-DMQEWRf3.js";import"./useControlled-BF-5Gu-Y.js";import"./isEqual-DuTTYvzw.js";import"./isObject-DrqpD2n2.js";import"./Button-BMFo_q3G.js";import"./ActionButton-DrJ6EZ8a.js";import"./Checkbox-aRpirLZ3.js";import"./useValueChanged-Dc-3HeWJ.js";import"./CollapsiblePanel-DJE96aKA.js";import"./MultiColumnSortDialog-Bgfe-LZL.js";import"./MenuTrigger-7DDfuo0C.js";import"./CompositeItem-CEPi8VM6.js";import"./ToolbarRootContext-ujFBXNzR.js";import"./getDisabledMountTransitionStyles-BfNZz4o-.js";import"./getPseudoElementBounds-DYdOL6QI.js";import"./chevron-down-SL5FndRp.js";import"./index-0qJVcbl0.js";import"./error-BsBgpzWK.js";import"./BaseCbacBanner-we2_u0B0.js";import"./makeExternalStore-B__ysOOH.js";import"./Tooltip-CZ7OA9Hx.js";import"./PopoverPopup-CItoAxrH.js";import"./toNumber-B5ytWKky.js";import"./useOsdkClient-DpUIXbJs.js";import"./tick-DZ-GdA6q.js";import"./DropdownField-BkYVcv5s.js";import"./withOsdkMetrics-aOoiWXTE.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
