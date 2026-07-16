import{f as b,j as a,r as i}from"./iframe-6ZbAZg8X.js";import{O as u}from"./object-table-BrhTfX12.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B9k1kqSD.js";import"./Table-C5UZ5Ruz.js";import"./index-BPjhFk1G.js";import"./Dialog-CvuCbmN0.js";import"./cross-yCNc4byY.js";import"./svgIconContainer-DUoRnlmE.js";import"./useBaseUiId-1RjQbkk7.js";import"./InternalBackdrop-4X0WJbge.js";import"./composite-Cm8gTBce.js";import"./index-CBKFAKiV.js";import"./index-VjGHSA68.js";import"./index-CZo_w4Cy.js";import"./useEventCallback-DKzPqmgh.js";import"./SkeletonBar-DxMmHHpo.js";import"./LoadingCell-BWExOBFa.js";import"./ColumnConfigDialog-NxOggU_R.js";import"./DraggableList-Qhreci7Z.js";import"./search-CqSUGpEg.js";import"./Input-z0TYPoN8.js";import"./useControlled-DR6JEyhp.js";import"./Button-BYZ8cIp_.js";import"./small-cross-Cut-J8Rn.js";import"./ActionButton-Br7uhBbF.js";import"./Checkbox-BoUskKrF.js";import"./useValueChanged-C6Y8Fdht.js";import"./CollapsiblePanel-GCKg9fHu.js";import"./MultiColumnSortDialog-DztsCfGl.js";import"./MenuTrigger-DesrCeJQ.js";import"./CompositeItem-0t0UZZXC.js";import"./ToolbarRootContext-vJ4xK0Ae.js";import"./getDisabledMountTransitionStyles-CKqD2xEi.js";import"./getPseudoElementBounds-C8Xs6bEB.js";import"./chevron-down-8OHfQsqq.js";import"./index-Cnsri6qn.js";import"./error-DBNizHSO.js";import"./BaseCbacBanner-R3LHbU7K.js";import"./makeExternalStore-BpnrcJse.js";import"./Tooltip-DMNEXqKo.js";import"./PopoverPopup-D7aae8o6.js";import"./toNumber-DE_k4xLl.js";import"./useOsdkClient-B6l6ZKhk.js";import"./tick-BNlgCR0p.js";import"./DropdownField-CbBVFpnn.js";import"./withOsdkMetrics-BBbdfsKr.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
