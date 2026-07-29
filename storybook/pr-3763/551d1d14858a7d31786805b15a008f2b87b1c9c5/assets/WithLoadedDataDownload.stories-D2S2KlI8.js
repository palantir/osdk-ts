import{f as b,j as a,r as i}from"./iframe-B_Qcr1FE.js";import{O as u}from"./object-table-DAA5lgbe.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ByylHqff.js";import"./Table-CFY175rH.js";import"./index-CuAfhbdX.js";import"./Dialog-B0AhWfDq.js";import"./cross-B_bL67RS.js";import"./svgIconContainer-HOxgQzaL.js";import"./useBaseUiId-BT7nsgc0.js";import"./InternalBackdrop-CkOigyzD.js";import"./composite-CK1N4h6C.js";import"./index-DDNYXikC.js";import"./index-D-jbiCY8.js";import"./index-DndWxBJo.js";import"./useEventCallback-9h2GBVBE.js";import"./SkeletonBar-DC7q-eBJ.js";import"./LoadingCell-DGSHxikO.js";import"./ColumnConfigDialog-eZ62lZti.js";import"./DraggableList-5VzGzIxf.js";import"./search-Cnc343lq.js";import"./Input-CnRDzw12.js";import"./useControlled-i58fxNEc.js";import"./isEqual-B-H1SIym.js";import"./isObject--dikM3Fl.js";import"./Button-Cn245j1w.js";import"./ActionButton-CS8C28oW.js";import"./Checkbox-BQt3oBJx.js";import"./useValueChanged-C6rWrf7-.js";import"./CollapsiblePanel-7PrGdLma.js";import"./MultiColumnSortDialog-I8lvNBXl.js";import"./MenuTrigger-T5mh7LLG.js";import"./CompositeItem-IwhuMT6y.js";import"./ToolbarRootContext-IZR9f2eY.js";import"./getDisabledMountTransitionStyles-CWpIDhsc.js";import"./getPseudoElementBounds-B_Pqjac0.js";import"./chevron-down-DmIABeew.js";import"./index-CtHaTe0V.js";import"./error-i48OCe6N.js";import"./BaseCbacBanner-Bl1vz49-.js";import"./makeExternalStore-CzaoHCck.js";import"./Tooltip-imI0x-7c.js";import"./PopoverPopup-C2ytPyDe.js";import"./toNumber-DSbbqKW3.js";import"./useOsdkClient-vEHou9o8.js";import"./tick-BTdonOzt.js";import"./DropdownField-MTaxgVGj.js";import"./withOsdkMetrics-8G_3-O2s.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
