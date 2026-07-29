import{f as b,j as a,r as i}from"./iframe-BPlyPXiZ.js";import{O as u}from"./object-table-BScV5lCa.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CVn2ue9b.js";import"./Table-BS_leXaG.js";import"./index-Ddo5UG0H.js";import"./Dialog-D2zrtvf2.js";import"./cross-B2S6uBur.js";import"./svgIconContainer-BZdLsghv.js";import"./useBaseUiId-X-OXSAal.js";import"./InternalBackdrop-dhha9xyF.js";import"./composite-IGurVqQn.js";import"./index-BZ5Z-Qo0.js";import"./index-vSWwSHiI.js";import"./index-Dd7lSRWv.js";import"./useEventCallback-DS73g9BV.js";import"./SkeletonBar-TyIbhwv-.js";import"./LoadingCell-DNZmMnHL.js";import"./ColumnConfigDialog-CBG_bc8N.js";import"./DraggableList-CsR8OFri.js";import"./search-j4xQ6zka.js";import"./Input-CQD2pGYW.js";import"./useControlled-CIhLO8zV.js";import"./Button-DZ7USJIZ.js";import"./small-cross-ygVboZgp.js";import"./ActionButton-Djen2TBF.js";import"./Checkbox-B5CE-Q6Y.js";import"./useValueChanged-Dp6LKhLA.js";import"./CollapsiblePanel-D-Yow7GK.js";import"./MultiColumnSortDialog-BRjdiilQ.js";import"./MenuTrigger-BKGX7oO6.js";import"./CompositeItem-CiEDn4l-.js";import"./ToolbarRootContext-DnS0zku0.js";import"./getDisabledMountTransitionStyles-CG52k8sM.js";import"./getPseudoElementBounds-BZgnJ_yx.js";import"./chevron-down-C6-r-URf.js";import"./index-Da31hJ2m.js";import"./error-8ZIwvoQk.js";import"./BaseCbacBanner-Bi066NJ7.js";import"./makeExternalStore-B4hfq0qd.js";import"./Tooltip-C5FXW2EN.js";import"./PopoverPopup-BqTvT1Am.js";import"./toNumber-gNvKM7GV.js";import"./useOsdkClient-BE8gY3FP.js";import"./tick-Bmz4UTdt.js";import"./DropdownField-crORuWaU.js";import"./withOsdkMetrics-ByKEirKO.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
