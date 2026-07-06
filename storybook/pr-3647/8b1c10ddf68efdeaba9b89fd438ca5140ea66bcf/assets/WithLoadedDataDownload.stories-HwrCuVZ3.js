import{f as b,j as a,r as i}from"./iframe-BMHCHGCV.js";import{O as u}from"./object-table-sWxRB2Zw.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BToqMbIM.js";import"./Table-KtxBq4Qt.js";import"./index-BWvdte7B.js";import"./Dialog-MoHCigUA.js";import"./cross-DOL0bGpk.js";import"./svgIconContainer-C9IhYIlY.js";import"./useBaseUiId-Dw6KSEH5.js";import"./InternalBackdrop-Cx2HcW_Y.js";import"./composite-DVGhito1.js";import"./index-NotlhKzd.js";import"./index-sYtRHJSk.js";import"./index-CpAnw4aN.js";import"./useEventCallback-Bhm5VxNk.js";import"./SkeletonBar-RLqGqCiW.js";import"./LoadingCell-CLkTmUtl.js";import"./ColumnConfigDialog-DIpESJ7x.js";import"./DraggableList-BK-msxMa.js";import"./search-BfFyr5yu.js";import"./Input-meCDYtHF.js";import"./useControlled-BRtv8zXv.js";import"./Button-C5QMWSrh.js";import"./small-cross-qkK35VpL.js";import"./ActionButton-ge2lMnJU.js";import"./Checkbox-DDYR0AUo.js";import"./useValueChanged-Dboh9V04.js";import"./CollapsiblePanel-DiU7EMOO.js";import"./MultiColumnSortDialog-C6jWqy7Q.js";import"./MenuTrigger-5I1dcn-m.js";import"./CompositeItem-DNAmy2TP.js";import"./ToolbarRootContext-7nCaEpX8.js";import"./getDisabledMountTransitionStyles-3qZjQRvj.js";import"./getPseudoElementBounds-Ds9hOSsz.js";import"./chevron-down-BdOF-_Ji.js";import"./index-DEoekmkM.js";import"./error-m-zoj5Z7.js";import"./BaseCbacBanner-D9tXUGCK.js";import"./makeExternalStore-DrivM0p_.js";import"./Tooltip-XK9w9b8J.js";import"./PopoverPopup-DHqynsSp.js";import"./toNumber-Dgv9SuYx.js";import"./useOsdkClient-BDYs6Htu.js";import"./tick-0BlKS-Z3.js";import"./DropdownField-BvpOJ8GC.js";import"./withOsdkMetrics-DS7wiXkt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
