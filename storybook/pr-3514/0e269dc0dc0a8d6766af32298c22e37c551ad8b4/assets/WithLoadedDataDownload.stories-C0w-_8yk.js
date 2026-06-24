import{f as b,j as a,r as i}from"./iframe-Dt23VS2Z.js";import{O as u}from"./object-table-CsWrb87S.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CDbHLuIJ.js";import"./Table-Gk-h24M2.js";import"./index-DXJEmnjN.js";import"./Dialog-CI62ffPs.js";import"./cross-CcucmV0I.js";import"./svgIconContainer-Dcx_fEGI.js";import"./useBaseUiId-Cw-CwzoJ.js";import"./InternalBackdrop-CNKXwl0N.js";import"./composite-CZm5T3m5.js";import"./index-BJQE82NE.js";import"./index-Diirl9qd.js";import"./index-vMS793UO.js";import"./useEventCallback-DG-rh0jj.js";import"./SkeletonBar-BbwuVn85.js";import"./LoadingCell-Dsj4ARAa.js";import"./ColumnConfigDialog-BfV2E1_d.js";import"./DraggableList-B2HhD_gm.js";import"./Input-B7lTQB0Z.js";import"./useControlled-DOiCnDPS.js";import"./Button-EnTVyLw_.js";import"./small-cross-BcKqhqUD.js";import"./ActionButton-BdqM7lhp.js";import"./Checkbox-CRKeP7XI.js";import"./minus-DS_onhdK.js";import"./useValueChanged-DKtJy5y-.js";import"./caret-down-B7wt9gYi.js";import"./CollapsiblePanel-Cg9_gUic.js";import"./MultiColumnSortDialog-BmB0bmWa.js";import"./MenuTrigger-BXgcS4WH.js";import"./CompositeItem-O_elIjk1.js";import"./ToolbarRootContext-D9DfySWd.js";import"./getDisabledMountTransitionStyles-BMDslz7c.js";import"./getPseudoElementBounds-BBC582qT.js";import"./chevron-down-CVpGfrz_.js";import"./index-RtMEqfR-.js";import"./error-CCtxrEto.js";import"./BaseCbacBanner-D-G7tYQ0.js";import"./makeExternalStore-CU6m38AP.js";import"./Tooltip-Bo-kihMN.js";import"./PopoverPopup-BEc-6R0p.js";import"./toNumber-BzqcUk2R.js";import"./useOsdkClient-N9aw6Qjx.js";import"./DropdownField-CpLV6zZS.js";import"./withOsdkMetrics-BYt--z85.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
