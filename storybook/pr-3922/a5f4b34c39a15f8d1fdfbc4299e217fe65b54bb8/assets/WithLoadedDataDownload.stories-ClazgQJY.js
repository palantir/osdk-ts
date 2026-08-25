import{f as b,j as a,r as i}from"./iframe--ZIBZMJQ.js";import{O as u}from"./object-table-KNrTILkI.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BiE66roc.js";import"./Table-CR1ZY04U.js";import"./index-BYKsb6nS.js";import"./Dialog-BxHRHbYX.js";import"./cross-QLCI-etH.js";import"./svgIconContainer-11XNL8gH.js";import"./useBaseUiId-BfJLJwpt.js";import"./InternalBackdrop-z1APkrkS.js";import"./composite-DjX-WyFk.js";import"./index-3A3ZgJ7o.js";import"./index-DTFWeURW.js";import"./index-DJ0hEfax.js";import"./useEventCallback-nes60B0x.js";import"./SkeletonBar-C9ghf2W8.js";import"./LoadingCell-DsEnrI5y.js";import"./ColumnConfigDialog-BgHsIhTT.js";import"./DraggableList-C8jgXyiw.js";import"./search-BetwMOQy.js";import"./Input-wMnSWKve.js";import"./useControlled-CuA5uTC4.js";import"./Button-BVMM1AFw.js";import"./small-cross-AEvgNgh3.js";import"./ActionButton-CSQNhKKa.js";import"./Checkbox-BGlo_J32.js";import"./useValueChanged-B8quW5n_.js";import"./CollapsiblePanel-Cjhv8Ewx.js";import"./MultiColumnSortDialog-Cx4hmGkX.js";import"./MenuTrigger-DVt0mbBR.js";import"./CompositeItem-DMbKryF9.js";import"./ToolbarRootContext-Ca6p-z_B.js";import"./getDisabledMountTransitionStyles-BCrSG_ZI.js";import"./getPseudoElementBounds-CVaq16Fi.js";import"./chevron-down-DEwAc30E.js";import"./index-B5Q5H9tI.js";import"./error-5Bj03CYI.js";import"./BaseCbacBanner-DEoNC6xQ.js";import"./makeExternalStore-LwZ_z8rF.js";import"./Tooltip-Cs5IS7F_.js";import"./PopoverPopup-Br6iExL7.js";import"./debounce-DbrfhfA3.js";import"./useOsdkClient-CZI38WK0.js";import"./tick-D8AASSmE.js";import"./DropdownField-C0LKkg1n.js";import"./isEqual-DKftO1kp.js";import"./withOsdkMetrics-CK4M-mJV.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
