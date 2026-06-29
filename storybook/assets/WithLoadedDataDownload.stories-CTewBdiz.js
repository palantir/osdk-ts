import{f as b,j as a,r as i}from"./iframe-Dcob2W8_.js";import{O as u}from"./object-table-Bj1qs7i3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DHeM-9-4.js";import"./index-Bvh3RcnQ.js";import"./Dialog-DYOlHOKm.js";import"./cross-C_jTsLej.js";import"./svgIconContainer-BpTYx9Q8.js";import"./useBaseUiId-U9aYAGEx.js";import"./InternalBackdrop-DpnEyZiz.js";import"./composite-M8BIEMcs.js";import"./index-BoFlf3Uo.js";import"./index-BDsZi_tg.js";import"./index-Blbk1WCr.js";import"./useEventCallback-exSG89Ey.js";import"./SkeletonBar-BdOCohyP.js";import"./LoadingCell-D8SiPH3u.js";import"./ColumnConfigDialog-Cz2CHo9c.js";import"./DraggableList-uHueOzKx.js";import"./search-DMNHMKQT.js";import"./Input-B9MgFoYa.js";import"./useControlled-WTczK4fM.js";import"./Button-CLYa9bys.js";import"./small-cross-BsPwaf41.js";import"./ActionButton-BJ5oPQSc.js";import"./Checkbox-CIDs49MX.js";import"./minus-C5vub-g_.js";import"./tick-Dkfib2K4.js";import"./useValueChanged-BOZMc8Hc.js";import"./caret-down-CV4aXDks.js";import"./CollapsiblePanel-CRsSVXsO.js";import"./MultiColumnSortDialog-rg2xFFVu.js";import"./MenuTrigger-CUYAn02Y.js";import"./CompositeItem-DjGNiNJg.js";import"./ToolbarRootContext-CUhgq_HJ.js";import"./getDisabledMountTransitionStyles-U5k01Ji_.js";import"./getPseudoElementBounds-BEx-K6Y8.js";import"./chevron-down-BJqD46Ef.js";import"./index-Bnh0lEPO.js";import"./error-DoeeGnIt.js";import"./BaseCbacBanner-Bu1siASi.js";import"./makeExternalStore-C7bXpdyC.js";import"./Tooltip-9VSV8iXp.js";import"./PopoverPopup-CG4P1eky.js";import"./toNumber-Ck9SIron.js";import"./useOsdkClient-CVkvjVz-.js";import"./DropdownField-CkofW4Dn.js";import"./withOsdkMetrics-tRkPT9_X.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
