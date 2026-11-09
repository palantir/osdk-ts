import{f as b,j as a,r as i}from"./iframe-BGt7IhdS.js";import{O as u}from"./object-table-M-Kg_adD.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DUkvm5oM.js";import"./Table-D4qL2JfY.js";import"./index-gkzrPHGR.js";import"./Dialog-FEhrWvxq.js";import"./cross-Cb9gWeTe.js";import"./svgIconContainer-Bf5Aovc1.js";import"./useBaseUiId-Dcw5wc3b.js";import"./InternalBackdrop-S55VIO1-.js";import"./composite-CtTlfVza.js";import"./index-DUEp08qS.js";import"./index-W3km3k8_.js";import"./index-CNVam7GG.js";import"./useEventCallback-JNIdHdBh.js";import"./SkeletonBar-CgrFEgnf.js";import"./LoadingCell-_2ldlBj_.js";import"./ColumnConfigDialog-BFunB1CC.js";import"./DraggableList-DhrRiD7Y.js";import"./search-B8wvEhc-.js";import"./Input-BDhQTr7d.js";import"./useControlled-BgB3rMOH.js";import"./Button-Bf0GrAaJ.js";import"./small-cross-D5oEM4rj.js";import"./ActionButton-BLtk1IHL.js";import"./Checkbox-TkM9h5Go.js";import"./useValueChanged-CBLz-uPE.js";import"./CollapsiblePanel-C6psZrkp.js";import"./MultiColumnSortDialog-DAOqHewy.js";import"./MenuTrigger-Bm6hwNKU.js";import"./CompositeItem-VInoCAcU.js";import"./ToolbarRootContext-DcgyCrBd.js";import"./getDisabledMountTransitionStyles-B653rn17.js";import"./getPseudoElementBounds-C4Cn99UK.js";import"./chevron-down-DB4w1r6J.js";import"./index-C1TCtrZ_.js";import"./error-5t3qELAN.js";import"./BaseCbacBanner-BMXAVja9.js";import"./makeExternalStore-Crpu5ieT.js";import"./Tooltip-Bj8KxrzN.js";import"./isObject-Ce9k2qqC.js";import"./debounce-B-wJIF06.js";import"./useOsdkClient-BcDStKp7.js";import"./tick-BMa_7DrH.js";import"./DropdownField-DLrwqyVG.js";import"./isEqual-nup27oBZ.js";import"./_baseIsEqual-DupyGeRb.js";import"./withOsdkMetrics-BEwucJks.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
