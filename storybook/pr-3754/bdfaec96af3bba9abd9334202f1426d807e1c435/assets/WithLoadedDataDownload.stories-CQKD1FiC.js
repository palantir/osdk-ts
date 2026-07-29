import{f as b,j as a,r as i}from"./iframe-Cpo2Lb7Q.js";import{O as u}from"./object-table-5Jh_3dqt.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BTyBDeYw.js";import"./Table-DYI1bu7c.js";import"./index-DAIxb8lO.js";import"./Dialog-BcvgDMAE.js";import"./cross-CZFyZqXF.js";import"./svgIconContainer-CNBgUvgp.js";import"./useBaseUiId-C71UhqfB.js";import"./InternalBackdrop-BbBNeTmM.js";import"./composite-lg9O8pjM.js";import"./index-P8ZVWR7P.js";import"./index-BzSe1Ywi.js";import"./index-BbCiixnW.js";import"./useEventCallback-CXI_gnIi.js";import"./SkeletonBar-V58QqV18.js";import"./LoadingCell-CNLIcZ1_.js";import"./ColumnConfigDialog-CpBrKYB4.js";import"./DraggableList-D-hNhtrV.js";import"./search-81KRYPyx.js";import"./Input-Cq3cg5h0.js";import"./useControlled-Du4CUvuR.js";import"./isEqual-C-XNtB89.js";import"./isObject-DQzLRM1_.js";import"./Button-DvY2Q1-Z.js";import"./ActionButton-CEbVE-_9.js";import"./Checkbox-CmhKE0_L.js";import"./useValueChanged-wmiaDnHO.js";import"./CollapsiblePanel-DX31vVrS.js";import"./MultiColumnSortDialog-D0MoyL6S.js";import"./MenuTrigger-DjPrBlqb.js";import"./CompositeItem-Can9NOH7.js";import"./ToolbarRootContext-4YzqWCdW.js";import"./getDisabledMountTransitionStyles-CVyvKvVG.js";import"./getPseudoElementBounds-B1IEE38k.js";import"./chevron-down-BSTwpJrf.js";import"./index-DxrxQtdn.js";import"./error-C4NjMbrc.js";import"./BaseCbacBanner-BKoq64Pz.js";import"./makeExternalStore-Bmx7Tt0X.js";import"./Tooltip-BQBIdErB.js";import"./PopoverPopup-D5V5N6Lq.js";import"./toNumber-BK28PHzs.js";import"./useOsdkClient-DmZx15_x.js";import"./tick-CLQ_tC5j.js";import"./DropdownField-BH_EsL1V.js";import"./withOsdkMetrics-j77wZ3nI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
