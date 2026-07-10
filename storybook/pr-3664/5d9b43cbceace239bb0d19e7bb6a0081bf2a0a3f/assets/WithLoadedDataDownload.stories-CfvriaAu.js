import{f as b,j as a,r as i}from"./iframe-wdFHGWSX.js";import{O as u}from"./object-table-CXnSTAav.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-lRa11HLR.js";import"./Table-Db__dYu-.js";import"./index-6fSpBBEr.js";import"./Dialog-DpgYQ9fc.js";import"./cross-BDxtbqIF.js";import"./svgIconContainer-B66bzX5w.js";import"./useBaseUiId-BFHOoAwS.js";import"./InternalBackdrop-_573r4se.js";import"./composite-ZTl8PnYY.js";import"./index-C20qzzU3.js";import"./index-B2-SFY1A.js";import"./index-aoPAyyRB.js";import"./useEventCallback-ChkAMAK5.js";import"./SkeletonBar-BeTxX73y.js";import"./LoadingCell-vFqJ-Rmg.js";import"./ColumnConfigDialog-BpQcItW2.js";import"./DraggableList-5CHp1244.js";import"./search-D6UfD1mk.js";import"./Input-CARXx6XT.js";import"./useControlled-DNzAlgaa.js";import"./Button-BAojFwdk.js";import"./small-cross-CP2fkqmb.js";import"./ActionButton-Bt_Epu2m.js";import"./Checkbox-GRoY1-8M.js";import"./useValueChanged-CvBDT23_.js";import"./CollapsiblePanel-Db68UHD2.js";import"./MultiColumnSortDialog-Cw-nJrI4.js";import"./MenuTrigger-DCK3u1eb.js";import"./CompositeItem-Cy_VESaa.js";import"./ToolbarRootContext-BxABkCAF.js";import"./getDisabledMountTransitionStyles-BmUYvwrD.js";import"./getPseudoElementBounds-BPJeyuKO.js";import"./chevron-down-DcqeShV2.js";import"./index-P-S-4BbC.js";import"./error-Cu2wquHT.js";import"./BaseCbacBanner-CpaNN7HS.js";import"./makeExternalStore-BF1biqUn.js";import"./Tooltip-BNN72k1G.js";import"./PopoverPopup-D3vr5SR9.js";import"./toNumber-DhUVIF4m.js";import"./useOsdkClient-CI6HBfvy.js";import"./tick-Cl1RBXCn.js";import"./DropdownField-B6VKVtOx.js";import"./withOsdkMetrics-DDn7vw9i.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
