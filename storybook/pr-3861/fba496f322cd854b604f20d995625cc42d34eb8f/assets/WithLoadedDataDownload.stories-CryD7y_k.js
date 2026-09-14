import{f as b,j as a,r as i}from"./iframe-Uo3dslN8.js";import{O as u}from"./object-table-xo8-ePPK.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Di20YyVw.js";import"./Table-Bj185Q2M.js";import"./index-DM2i2mIv.js";import"./Dialog-DPSIYe0q.js";import"./cross-CtSgYx1A.js";import"./svgIconContainer-CCPA44UG.js";import"./useBaseUiId-BMW1tYuT.js";import"./InternalBackdrop-Cawem0xc.js";import"./composite-CJL7rGjP.js";import"./index-BjmUJLrE.js";import"./index-DNOgt9xG.js";import"./index-AMq3qfnV.js";import"./useEventCallback-DuKH2Kse.js";import"./SkeletonBar-hMMVmlwX.js";import"./LoadingCell-DbCXbulB.js";import"./ColumnConfigDialog-CJtYLyJh.js";import"./DraggableList-BOsu8b6O.js";import"./search-DMwUXAz4.js";import"./Input-COrEd_bS.js";import"./useControlled-DxDhJC_G.js";import"./Button-CVEJXnPN.js";import"./small-cross-23YS3Wdy.js";import"./ActionButton-C5Zbzrcj.js";import"./Checkbox-F4EIPJKJ.js";import"./useValueChanged-DKndpPjF.js";import"./CollapsiblePanel-BMUw2sen.js";import"./MultiColumnSortDialog-BhY76eSz.js";import"./MenuTrigger-DNYd3FuB.js";import"./CompositeItem-CwindMm_.js";import"./ToolbarRootContext-CpVoG4Hd.js";import"./getDisabledMountTransitionStyles-DjGcX-z1.js";import"./getPseudoElementBounds-B1qmsDI-.js";import"./chevron-down-CCfCID7b.js";import"./index-DmI8cFxT.js";import"./error-Suxt282O.js";import"./BaseCbacBanner-BTXRf756.js";import"./makeExternalStore-BoTJ6suj.js";import"./Tooltip-B4ethV14.js";import"./PopoverPopup-BHKbeMsS.js";import"./debounce-BaKAl05r.js";import"./useOsdkClient-CZ5jAc54.js";import"./tick-W4zHdn4i.js";import"./DropdownField-S1rKLw4k.js";import"./isEqual-1lbKKA-o.js";import"./withOsdkMetrics-BYDhROpI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
