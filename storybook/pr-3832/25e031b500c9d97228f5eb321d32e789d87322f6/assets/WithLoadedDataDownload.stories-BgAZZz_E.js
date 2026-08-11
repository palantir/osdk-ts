import{f as b,j as a,r as i}from"./iframe-Bw-Agif6.js";import{O as u}from"./object-table-CTJAZJUm.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-wHYoTEvY.js";import"./Table-YHJ1nC5C.js";import"./index-DNmIinQa.js";import"./Dialog-D6n9iA1R.js";import"./cross-D63pv_qh.js";import"./svgIconContainer-D0FLeaRo.js";import"./useBaseUiId-BkzXSrg6.js";import"./InternalBackdrop-DlvukuPB.js";import"./composite-B_WicqqA.js";import"./index-ByJX6_Sx.js";import"./index-CAIuwcNw.js";import"./index-ByTvDRwc.js";import"./useEventCallback-C1jTj680.js";import"./SkeletonBar-D3kOzCQe.js";import"./LoadingCell-rqLUXNzU.js";import"./ColumnConfigDialog-D7ROuj86.js";import"./DraggableList-rHucen_L.js";import"./search-B0cSkiVa.js";import"./Input-BrcHuaTL.js";import"./useControlled-kEo0k7Py.js";import"./isEqual-D8Ika_FF.js";import"./isObject-C-20wa_z.js";import"./Button-DHc-O6ds.js";import"./ActionButton-D-ZUAS07.js";import"./Checkbox-tUW5bxQD.js";import"./useValueChanged-Dx-JN9io.js";import"./CollapsiblePanel-DFCeMXeo.js";import"./MultiColumnSortDialog-D5O3P0b1.js";import"./MenuTrigger-RUVJ72u2.js";import"./CompositeItem-5WZPpFtM.js";import"./ToolbarRootContext-Cf0AzzGI.js";import"./getDisabledMountTransitionStyles-mJwhDS-c.js";import"./getPseudoElementBounds-Dqwkk5Q-.js";import"./chevron-down-Dngh-QRN.js";import"./index-B5NpxPBP.js";import"./error-Rg-jn8n4.js";import"./BaseCbacBanner-D2cg6kX3.js";import"./makeExternalStore-Bbb3TB_2.js";import"./Tooltip-BDXQSKX4.js";import"./PopoverPopup-BxLXkzKe.js";import"./toNumber-bloY9kc_.js";import"./useOsdkClient-jaVoMXOI.js";import"./tick-BPugKlpA.js";import"./DropdownField-RW9yBtlE.js";import"./withOsdkMetrics-C6Xz7eXL.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
