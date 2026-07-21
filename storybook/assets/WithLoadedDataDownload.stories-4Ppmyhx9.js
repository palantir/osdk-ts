import{f as b,j as a,r as i}from"./iframe-DytbHhki.js";import{O as u}from"./object-table-DdBnOKuC.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DCN63zph.js";import"./index-D_gO6T8d.js";import"./Dialog-BAmBuHn1.js";import"./cross-i6RcU6jV.js";import"./svgIconContainer-CuByUzhw.js";import"./useBaseUiId-BXp8gPAV.js";import"./InternalBackdrop-B6eJCl6q.js";import"./composite-CALz1dJo.js";import"./index-BJ7QtMHN.js";import"./index-CqMxAMOx.js";import"./index-CoFFe6VB.js";import"./useEventCallback-PK4_z6wD.js";import"./SkeletonBar-DaIXOfR8.js";import"./LoadingCell-CGRNgvvQ.js";import"./ColumnConfigDialog-CUYe8Ko2.js";import"./DraggableList-CcaYC74B.js";import"./search-B3ds4xzI.js";import"./Input-Cje8oXaD.js";import"./useControlled-DqobAIw0.js";import"./isEqual-DnkbdZwD.js";import"./isObject-B6BLOvR3.js";import"./Button-B2vIayxf.js";import"./ActionButton-CsHW80S4.js";import"./Checkbox-BRLch1Ef.js";import"./useValueChanged-DKTxXba2.js";import"./CollapsiblePanel-BD-MxPFJ.js";import"./MultiColumnSortDialog-BQHpOMea.js";import"./MenuTrigger-DU_nwvYE.js";import"./CompositeItem-BplIbDpd.js";import"./ToolbarRootContext-DzqS5waG.js";import"./getDisabledMountTransitionStyles-WgZN3Hl0.js";import"./getPseudoElementBounds-C9soiFUF.js";import"./chevron-down-CYf23tnh.js";import"./index-DnqlLGeC.js";import"./error-BXAWhyme.js";import"./BaseCbacBanner-BdWnMIEn.js";import"./makeExternalStore-CRhUhF3-.js";import"./Tooltip-BcTr22mU.js";import"./PopoverPopup-CTk2UiJ6.js";import"./toNumber-Bfhtb8_5.js";import"./useOsdkClient-S7xilFcy.js";import"./tick-CvSMvDv3.js";import"./DropdownField-BDn0wr5x.js";import"./withOsdkMetrics-BUpd5crj.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
