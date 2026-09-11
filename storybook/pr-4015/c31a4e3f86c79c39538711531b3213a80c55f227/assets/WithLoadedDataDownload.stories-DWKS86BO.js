import{f as b,j as a,r as i}from"./iframe-DNRgqJZG.js";import{O as u}from"./object-table-B1zfwLTo.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B4MzypZ7.js";import"./Table-DvySJjkE.js";import"./index--r_AATYa.js";import"./Dialog-BNjSvDg6.js";import"./cross-fnGpeSL_.js";import"./svgIconContainer-RGbg_3In.js";import"./useBaseUiId-k1HsK5LP.js";import"./InternalBackdrop-C6yPahMN.js";import"./composite-BhLw2OB1.js";import"./index-D50m2_yv.js";import"./index-Bb2PTGBq.js";import"./index-J6FCVwwh.js";import"./useEventCallback-DAfTLw81.js";import"./SkeletonBar-BdIO37It.js";import"./LoadingCell-QYznWNAb.js";import"./ColumnConfigDialog-7M7EMVoR.js";import"./DraggableList-HRlKPnGS.js";import"./search-2pDcyK1J.js";import"./Input-DaU9Iq4Y.js";import"./useControlled-B0UDo4VH.js";import"./Button-DrBYvyjr.js";import"./small-cross-BtT2butt.js";import"./ActionButton-Dmy_y5QF.js";import"./Checkbox-B5bGmpU-.js";import"./useValueChanged-D_w674cM.js";import"./CollapsiblePanel-BlCOPMVs.js";import"./MultiColumnSortDialog-COKmoD-h.js";import"./MenuTrigger-Dj5N9rlo.js";import"./CompositeItem-GzRDip0q.js";import"./ToolbarRootContext-DAyCAc-p.js";import"./getDisabledMountTransitionStyles-4L_cObYh.js";import"./getPseudoElementBounds-DyKgoU5n.js";import"./chevron-down-BGaiaEhj.js";import"./index-CsEQ4i91.js";import"./error-DII-yisC.js";import"./BaseCbacBanner-B4tV7sGj.js";import"./makeExternalStore-D4vVBx2o.js";import"./Tooltip-DHSrIuxD.js";import"./PopoverPopup-TzHKm3nq.js";import"./debounce-BA7m7sn4.js";import"./useOsdkClient-CgS_42xe.js";import"./tick-DfDE1bdF.js";import"./DropdownField-Cu20yd1p.js";import"./isEqual-D-Z5npp3.js";import"./withOsdkMetrics-B_v8QCh0.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
