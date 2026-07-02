import{f as b,j as a,r as i}from"./iframe-B03pBIP_.js";import{O as u}from"./object-table-COZYArnj.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-gyb1dP88.js";import"./Table-CukZ8CL8.js";import"./index-DOlmMWJv.js";import"./Dialog-2xLShn-C.js";import"./cross-Cf9O7ZTc.js";import"./svgIconContainer-CBDwWJ-g.js";import"./useBaseUiId-gsDYtBVr.js";import"./InternalBackdrop-yl_keGNd.js";import"./composite-DrF6Nb3j.js";import"./index-DS4A6C0_.js";import"./index-D7XpCzA_.js";import"./index-Fe0UwQG3.js";import"./useEventCallback-DdtCXYoF.js";import"./SkeletonBar-BIi6dbxy.js";import"./LoadingCell-26omNO3o.js";import"./ColumnConfigDialog-Do9NN0wU.js";import"./DraggableList-C5lhleEj.js";import"./search-D9VwIbx3.js";import"./Input-B1-Pqqi2.js";import"./useControlled-CyF-1we-.js";import"./Button-BZvMcfYH.js";import"./small-cross-UCu68clh.js";import"./ActionButton-B0i4YA5l.js";import"./Checkbox-aN60FYjN.js";import"./minus-CTFBdCT0.js";import"./tick-DsMeXgb8.js";import"./useValueChanged-DFriZxiv.js";import"./caret-down-vOG65R0M.js";import"./CollapsiblePanel-CpThTnNv.js";import"./MultiColumnSortDialog-vOy4jjpt.js";import"./MenuTrigger-CG7KL_3-.js";import"./CompositeItem-BqysQxF3.js";import"./ToolbarRootContext-t8zgJmVn.js";import"./getDisabledMountTransitionStyles-KwlYyPco.js";import"./getPseudoElementBounds-CWxm2NDI.js";import"./chevron-down-BlE15hp5.js";import"./index-BJv_deJk.js";import"./error-C-cZSYMq.js";import"./BaseCbacBanner-DnqlpnKz.js";import"./makeExternalStore-C-cVcDZS.js";import"./Tooltip-h4wqg_gN.js";import"./PopoverPopup-DiJrps8x.js";import"./toNumber-CORI8LBd.js";import"./useOsdkClient-BRAPKBmD.js";import"./DropdownField-B5OldI9i.js";import"./withOsdkMetrics-tgdMVltJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
