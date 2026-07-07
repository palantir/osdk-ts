import{f as b,j as a,r as i}from"./iframe-CCipF1Gu.js";import{O as u}from"./object-table-Ci6KbIgI.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DyQNCCfn.js";import"./Table-CmacUHpi.js";import"./index-Db8z_Hye.js";import"./Dialog-DNLrB3rQ.js";import"./cross-DiOEkLx6.js";import"./svgIconContainer-DHE5fDWZ.js";import"./useBaseUiId-CWyUyXAh.js";import"./InternalBackdrop-5-cXA4Bt.js";import"./composite-B1toWk7q.js";import"./index-C_lc2ILX.js";import"./index-BMJ22wsT.js";import"./index-BOMuJ9cz.js";import"./useEventCallback-Dj9lFL5w.js";import"./SkeletonBar-D9K7KLAx.js";import"./LoadingCell-B5K9ftBV.js";import"./ColumnConfigDialog-BaeBBra9.js";import"./DraggableList-B3j0XoA5.js";import"./search-rV5C5W_L.js";import"./Input--JNTo814.js";import"./useControlled-C2ebkniI.js";import"./Button-hL4QnKp1.js";import"./small-cross-yXFSTUP7.js";import"./ActionButton-heKu_t46.js";import"./Checkbox-BmVjwXjY.js";import"./useValueChanged-B-M5CVPa.js";import"./CollapsiblePanel-DGJn6Maw.js";import"./MultiColumnSortDialog-BoIHWg8I.js";import"./MenuTrigger-oEEtL9Wr.js";import"./CompositeItem-BEvC6B4Q.js";import"./ToolbarRootContext-BvBYCTeH.js";import"./getDisabledMountTransitionStyles-DEV1-foK.js";import"./getPseudoElementBounds-CSOzUbvE.js";import"./chevron-down-CokEFD0V.js";import"./index-BXSH3t7d.js";import"./error-Cslg2EPx.js";import"./BaseCbacBanner-DmaE8M-w.js";import"./makeExternalStore-DfFo9Pzi.js";import"./Tooltip-BAf-5QHv.js";import"./PopoverPopup-Dj4jtlXL.js";import"./toNumber-DJrkK84W.js";import"./useOsdkClient-C-yuN-fT.js";import"./tick-BlokcJw2.js";import"./DropdownField-BqDBjFEX.js";import"./withOsdkMetrics-BxZv_ggk.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
