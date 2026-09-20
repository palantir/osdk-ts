import{f as b,j as a,r as i}from"./iframe-BdKsMQww.js";import{O as u}from"./object-table-BkuIvgs3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-MlpURx7u.js";import"./Table-COLO6x9d.js";import"./index-DKUuG3z9.js";import"./Dialog-BZinWXyV.js";import"./cross-DNiGESUx.js";import"./svgIconContainer-BnCWnnko.js";import"./useBaseUiId-DO0eFKXX.js";import"./InternalBackdrop-DjojD6Rk.js";import"./composite-BNox4Mzc.js";import"./index-EXOzxBPi.js";import"./index-DYRORlje.js";import"./index-DhxjQLte.js";import"./useEventCallback--olNvQB0.js";import"./SkeletonBar-MNZpFCNa.js";import"./LoadingCell-x5JMX0sy.js";import"./ColumnConfigDialog-C4xdKt-Z.js";import"./DraggableList-DXLCT-Tu.js";import"./search-PSF1rGs2.js";import"./Input-D7CFUCMW.js";import"./useControlled-7KbTYIa_.js";import"./Button-CcSyVXzr.js";import"./small-cross-BxFuyZcX.js";import"./ActionButton-DsqqImyB.js";import"./Checkbox-C7TXRP0z.js";import"./useValueChanged-D6y7mlr9.js";import"./CollapsiblePanel-DCh2QXjz.js";import"./MultiColumnSortDialog-B3qpBvBx.js";import"./MenuTrigger-I9hrZ2IK.js";import"./CompositeItem-e2FL5qAU.js";import"./ToolbarRootContext-CdO1SR-V.js";import"./getDisabledMountTransitionStyles-TgKlIubu.js";import"./getPseudoElementBounds-D4Wbrwbn.js";import"./chevron-down-Bw8Fchsf.js";import"./index-BbdEClvW.js";import"./error-Nv9n4Hjz.js";import"./BaseCbacBanner-C4MJE6CF.js";import"./makeExternalStore-BoNEUCBG.js";import"./Tooltip-BTAbXJfa.js";import"./PopoverPopup-B2wOVFFv.js";import"./debounce-BNPeqOUu.js";import"./useOsdkClient-DZdPds6c.js";import"./tick-B_ziR0EA.js";import"./DropdownField-B3O32GOa.js";import"./isEqual-DRWZbCfX.js";import"./withOsdkMetrics-C12liwOp.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
