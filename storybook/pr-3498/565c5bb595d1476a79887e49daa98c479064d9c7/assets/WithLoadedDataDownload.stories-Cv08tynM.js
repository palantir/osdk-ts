import{f as b,j as a,r as i}from"./iframe-BQgTT6N0.js";import{O as u}from"./object-table-B0GnKAYr.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BffpQyeb.js";import"./Table-BR-itL3w.js";import"./index-HnAdOqsd.js";import"./Dialog-DDMIxoav.js";import"./cross-BCyUgecY.js";import"./svgIconContainer-BOCAU5k6.js";import"./useBaseUiId-D_XYE6j1.js";import"./InternalBackdrop-CDClToXf.js";import"./composite-kuLapxZy.js";import"./index-PRpzADiJ.js";import"./index-F5P1QzXV.js";import"./index-BE_z2Id5.js";import"./useEventCallback-DqAL830l.js";import"./SkeletonBar-C6xtdF_S.js";import"./LoadingCell-BPSJPBH1.js";import"./ColumnConfigDialog-DgBqj7rX.js";import"./DraggableList-B15jO3xQ.js";import"./Input-LIwQJJUk.js";import"./useControlled-jjLK3_9U.js";import"./Button-CnGfZPyI.js";import"./small-cross-DFZpvzxm.js";import"./ActionButton-BTMEgFZN.js";import"./Checkbox-B8T65RKO.js";import"./minus-Cw8PulDc.js";import"./useValueChanged-BreTCqXv.js";import"./caret-down-DPGd20w2.js";import"./CollapsiblePanel-BaDVwP4B.js";import"./MultiColumnSortDialog-D14x-upC.js";import"./MenuTrigger-BNQuz1hA.js";import"./CompositeItem-DT371y7B.js";import"./ToolbarRootContext-Ces_NeE2.js";import"./getDisabledMountTransitionStyles-BqaVPoi9.js";import"./getPseudoElementBounds-BRaKW5XV.js";import"./chevron-down-O2cjp07V.js";import"./index-CNpFCfpQ.js";import"./error-j2UvKzh8.js";import"./BaseCbacBanner-k3zzdka-.js";import"./makeExternalStore-CSl6TaXk.js";import"./Tooltip-CvBly9hT.js";import"./PopoverPopup-CnlF41eZ.js";import"./toNumber-fIrv_YGy.js";import"./useOsdkClient-C2PE8493.js";import"./DropdownField-DZKYXnP-.js";import"./withOsdkMetrics-LSZgh3q5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
