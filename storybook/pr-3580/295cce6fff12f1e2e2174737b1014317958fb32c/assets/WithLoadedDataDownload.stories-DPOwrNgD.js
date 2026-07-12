import{f as b,j as a,r as i}from"./iframe-xXjK4u40.js";import{O as u}from"./object-table-O-3jQ9um.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BqE7-R_N.js";import"./Table-BbJlRSa6.js";import"./index-ClEtxyXp.js";import"./Dialog-DXAgbWWw.js";import"./cross-CYYIgRmS.js";import"./svgIconContainer-BFEw6mWP.js";import"./useBaseUiId-CYVPPn0B.js";import"./InternalBackdrop-DVk6VTtd.js";import"./composite-DvPYbg5V.js";import"./index-CLDg91iN.js";import"./index-_a-wUnXx.js";import"./index-DBt9FaTm.js";import"./useEventCallback-B9wksxZ5.js";import"./SkeletonBar-Dm-ma8v4.js";import"./LoadingCell-CD6b9iFl.js";import"./ColumnConfigDialog-Cf6fmwoq.js";import"./DraggableList-BnKMxPa0.js";import"./search-D-e0QOGp.js";import"./Input-DveW8qZb.js";import"./useControlled-2wc3LkSU.js";import"./Button-DlW9kU4X.js";import"./small-cross-FairzApE.js";import"./ActionButton-D1qtdWgf.js";import"./Checkbox-D6L_9qOp.js";import"./useValueChanged-B-337LZo.js";import"./CollapsiblePanel-C6Hymyfr.js";import"./MultiColumnSortDialog-BjqOmsIO.js";import"./MenuTrigger-TQnQLNwI.js";import"./CompositeItem-CT7o0f18.js";import"./ToolbarRootContext-BnchmzSb.js";import"./getDisabledMountTransitionStyles-9zy1v25V.js";import"./getPseudoElementBounds-Br9-teKs.js";import"./chevron-down-Bos-P3hL.js";import"./index-C7m05fpg.js";import"./error-BBBAnrZj.js";import"./BaseCbacBanner-DIsImwfz.js";import"./makeExternalStore-BLknL1Vk.js";import"./Tooltip-BOetRXH_.js";import"./PopoverPopup-1GndBLr2.js";import"./toNumber-BoN6sGo0.js";import"./useOsdkClient-BNT7N4NH.js";import"./tick-CC5Rf4Pc.js";import"./DropdownField-DY2W29ys.js";import"./withOsdkMetrics-DG9fGxL-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
