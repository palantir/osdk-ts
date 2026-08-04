import{f as b,j as a,r as i}from"./iframe-Chf_oTGA.js";import{O as u}from"./object-table-DfZxQv0Z.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CDTIXXks.js";import"./Table-A1ezYdFI.js";import"./index-xJnBoHwJ.js";import"./Dialog-BcgX0pie.js";import"./cross-CrnBFQH-.js";import"./svgIconContainer-BH22RWVr.js";import"./useBaseUiId-hHX-f39p.js";import"./InternalBackdrop-CwX4t6qu.js";import"./composite-BoSTtwUc.js";import"./index-CxjHweEz.js";import"./index-BtccUsyA.js";import"./index-CWVms5Tp.js";import"./useEventCallback-BRqteG3d.js";import"./SkeletonBar-Djz_uQ63.js";import"./LoadingCell-6VEM_Qe8.js";import"./ColumnConfigDialog-CGaIoYIj.js";import"./DraggableList-IqnZskH8.js";import"./search-ygVixVNd.js";import"./Input-BFq9F5ks.js";import"./useControlled-VvgXxcWd.js";import"./isEqual-D1Q6ZEcL.js";import"./isObject--uK95e87.js";import"./Button-DKdaKz-_.js";import"./ActionButton-B0Pm9-CH.js";import"./Checkbox-Csz8M_77.js";import"./useValueChanged-BklgFBNq.js";import"./CollapsiblePanel-CUBqE99N.js";import"./MultiColumnSortDialog-xah2tayR.js";import"./MenuTrigger-BsfExqdA.js";import"./CompositeItem-C_RDCmWm.js";import"./ToolbarRootContext-GVFBeBA6.js";import"./getDisabledMountTransitionStyles-VZ9bw_0R.js";import"./getPseudoElementBounds-BkgIVNoQ.js";import"./chevron-down-BETM3MrF.js";import"./index-CMwyLjyb.js";import"./error-DgN3iPqH.js";import"./BaseCbacBanner-vCizbw2T.js";import"./makeExternalStore-BetVxvym.js";import"./Tooltip-C5E6djBP.js";import"./PopoverPopup-Crk7RKNj.js";import"./toNumber-aBr24n79.js";import"./useOsdkClient-VQg3IU_U.js";import"./tick-6ldMfmE5.js";import"./DropdownField-BdLbEKPf.js";import"./withOsdkMetrics-C4p6K-5h.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
