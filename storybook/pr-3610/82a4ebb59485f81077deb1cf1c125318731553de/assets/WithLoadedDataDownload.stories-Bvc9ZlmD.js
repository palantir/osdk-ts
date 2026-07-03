import{f as b,j as a,r as i}from"./iframe-BpTTav6E.js";import{O as u}from"./object-table-DRVdEb4U.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Df5e5mO9.js";import"./Table-BIiK8SRu.js";import"./index-DnNqScuN.js";import"./Dialog-dLWt1ini.js";import"./cross-M_pIfQOv.js";import"./svgIconContainer-xDffmDyE.js";import"./useBaseUiId-C1P880zF.js";import"./InternalBackdrop-DBAtMQSu.js";import"./composite-B5LqX7jj.js";import"./index-BrWuRadK.js";import"./index-DEB-hcmS.js";import"./index-B8InaBxB.js";import"./useEventCallback-BV4P0Sc7.js";import"./SkeletonBar-CcfUrAoO.js";import"./LoadingCell-DrmgfQa8.js";import"./ColumnConfigDialog-BP1ngZWy.js";import"./DraggableList-CXkv_3UD.js";import"./search-DRXiIi1S.js";import"./Input-D-Jo2YKE.js";import"./useControlled-DS6Fb4ZV.js";import"./Button-BuaxEZSl.js";import"./small-cross-BRdAVj1E.js";import"./ActionButton-5vCfzh5a.js";import"./Checkbox-BFv6NsZZ.js";import"./useValueChanged-BZ7qLHIN.js";import"./CollapsiblePanel-BehvXp2N.js";import"./MultiColumnSortDialog-KYpzWeTM.js";import"./MenuTrigger-REDUdJxd.js";import"./CompositeItem-D0nFRiE2.js";import"./ToolbarRootContext-B02kdYfC.js";import"./getDisabledMountTransitionStyles--aTmfuDm.js";import"./getPseudoElementBounds-CXfE86aC.js";import"./chevron-down-DP6F4-Rl.js";import"./index-mRA8IDTq.js";import"./error-C7YY6FkK.js";import"./BaseCbacBanner-3my90RS_.js";import"./makeExternalStore-B07NB1OM.js";import"./Tooltip-U5io4pC-.js";import"./PopoverPopup-D8QZcr-b.js";import"./toNumber-DsnIt_UJ.js";import"./useOsdkClient-Du9lO27I.js";import"./tick-CqPUcabn.js";import"./DropdownField-BKj4i4Vr.js";import"./withOsdkMetrics-B5wLpKbu.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
