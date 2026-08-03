import{f as b,j as a,r as i}from"./iframe-ByDFxc6J.js";import{O as u}from"./object-table-Cuy2ZZiP.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DsAHu_tG.js";import"./Table-Dam2UJf8.js";import"./index-COrglkMl.js";import"./Dialog-B78Wpb89.js";import"./cross-w3hxXSvD.js";import"./svgIconContainer-Cdl4pzn_.js";import"./useBaseUiId-D3OL8vQs.js";import"./InternalBackdrop-Csd2HTI2.js";import"./composite-Cwm4Y6dc.js";import"./index-B9guDax2.js";import"./index-Bc4TUgst.js";import"./index-Cgx_EwSA.js";import"./useEventCallback-1qwqMCsR.js";import"./SkeletonBar-aM6Fy1o8.js";import"./LoadingCell-CrYPPVgs.js";import"./ColumnConfigDialog-CoBUhc6u.js";import"./DraggableList-BhHyN4LT.js";import"./search-DGeK7c1j.js";import"./Input-DDk9us9b.js";import"./useControlled-Ci-xyBbB.js";import"./isEqual-CEnEbtP1.js";import"./isObject-D2Dn4sIt.js";import"./Button-m3_edGWL.js";import"./ActionButton-D4kwrLk3.js";import"./Checkbox-DCKmoS6E.js";import"./useValueChanged-wikWbzp7.js";import"./CollapsiblePanel-BO8NnsX2.js";import"./MultiColumnSortDialog-CkcyfWVn.js";import"./MenuTrigger-CH6rfP9H.js";import"./CompositeItem-2RzmuieV.js";import"./ToolbarRootContext-BIWqFB3h.js";import"./getDisabledMountTransitionStyles-DaSobCt5.js";import"./getPseudoElementBounds-CsMIwoWo.js";import"./chevron-down-E23zrlQO.js";import"./index-BBAKdsvN.js";import"./error-C9F6tpCk.js";import"./BaseCbacBanner-bWH910W6.js";import"./makeExternalStore-E2xf1luR.js";import"./Tooltip-BMhKILjF.js";import"./PopoverPopup-BXbrjj3M.js";import"./toNumber-BrMdeazV.js";import"./useOsdkClient-JE9b6z1p.js";import"./tick-BvsSQam1.js";import"./DropdownField-B4APnnSf.js";import"./withOsdkMetrics-Du8BWQXf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
