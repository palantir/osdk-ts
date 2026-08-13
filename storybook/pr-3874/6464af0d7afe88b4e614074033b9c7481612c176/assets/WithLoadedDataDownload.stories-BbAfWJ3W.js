import{f as b,j as a,r as i}from"./iframe-BcorHIlW.js";import{O as u}from"./object-table-B4UCWN34.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BKVHm-mS.js";import"./Table-48TCEO5W.js";import"./index-B_6nd-ig.js";import"./Dialog-DAgFtXxB.js";import"./cross-Dc1AyHJB.js";import"./svgIconContainer-CELc8YnE.js";import"./useBaseUiId-BNEl6a46.js";import"./InternalBackdrop-CqIU_AG5.js";import"./composite-CnKbnVU6.js";import"./index-DJgr8Ve3.js";import"./index-D0G6bTH7.js";import"./index-DmDsZq4W.js";import"./useEventCallback-BYEh8Lbq.js";import"./SkeletonBar-BQXc3_7i.js";import"./LoadingCell-BUKaj-MN.js";import"./ColumnConfigDialog-Dhs_TrtO.js";import"./DraggableList-CxHrnm_O.js";import"./search-DFDm-vhN.js";import"./Input-BDlnjPS-.js";import"./useControlled-BLGT_C96.js";import"./Button-D2Dfqz9N.js";import"./small-cross-CdBaewXq.js";import"./ActionButton-DrT_2S6p.js";import"./Checkbox-DF42yLUz.js";import"./useValueChanged-D0_LNJKx.js";import"./CollapsiblePanel-B0ClWT18.js";import"./MultiColumnSortDialog-W7cLl08V.js";import"./MenuTrigger-D7x_HiMZ.js";import"./CompositeItem-DAtA6HT0.js";import"./ToolbarRootContext-Dnx5ruWW.js";import"./getDisabledMountTransitionStyles-HxwKF_Gp.js";import"./getPseudoElementBounds-BeqhPp8n.js";import"./chevron-down-CuN7D4lo.js";import"./index-CrslJJ0M.js";import"./error-CqYYLkEc.js";import"./BaseCbacBanner-BXOWAbH2.js";import"./makeExternalStore-BLgd-akh.js";import"./Tooltip-jSHec6Gx.js";import"./PopoverPopup-COUulOaZ.js";import"./debounce-Bdi5BoLl.js";import"./useOsdkClient-DeO7tP5S.js";import"./tick-CUL9CaAQ.js";import"./DropdownField-D1C-_OGE.js";import"./isEqual-BGVz6dle.js";import"./withOsdkMetrics-CeNDUVo3.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
