import{f as b,j as a,r as i}from"./iframe-B6SlknkT.js";import{O as u}from"./object-table-BjD-a2rM.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CiWAtvVo.js";import"./Table-D1uGyHuL.js";import"./index-Cisl_9Mo.js";import"./Dialog-Dht4GjUV.js";import"./cross-K0XOfymX.js";import"./svgIconContainer-DvLmNigv.js";import"./useBaseUiId-DtAmNbh5.js";import"./InternalBackdrop-Dl30yC1C.js";import"./composite-P-ykFSG-.js";import"./index-BBz1sS-n.js";import"./index-BMjONJHt.js";import"./index-DmFxeViZ.js";import"./useEventCallback-NaQY75BS.js";import"./SkeletonBar-Clgo9cjH.js";import"./LoadingCell-CKZuBc9l.js";import"./ColumnConfigDialog-CehpGE9s.js";import"./DraggableList-CwYB9JVt.js";import"./search-xv1rsfPw.js";import"./Input-CXXJHcyj.js";import"./useControlled-PYuq7DgD.js";import"./isEqual-DBNTDdfj.js";import"./isObject-BLnKbGOO.js";import"./Button-F8n7DYb6.js";import"./ActionButton-BodQova9.js";import"./Checkbox-BNp5VU1x.js";import"./useValueChanged-CkgIT0Kx.js";import"./CollapsiblePanel-OFVSuctg.js";import"./MultiColumnSortDialog-CSgNB2hu.js";import"./MenuTrigger-DyWGdBhT.js";import"./CompositeItem-TSZ5fJAo.js";import"./ToolbarRootContext-2IHK8Ctj.js";import"./getDisabledMountTransitionStyles-ZwLnaqle.js";import"./getPseudoElementBounds-Cm2_1p_1.js";import"./chevron-down-DxJyaq1h.js";import"./index-WO9aHBrQ.js";import"./error-Bv29R1uB.js";import"./BaseCbacBanner-DUtQdQpu.js";import"./makeExternalStore-JliLFxhM.js";import"./Tooltip-BlcQGzNj.js";import"./PopoverPopup-Kq1sgNl6.js";import"./toNumber-CjsjmZPP.js";import"./useOsdkClient-6tgWcBTt.js";import"./tick-_Aaq9I8S.js";import"./DropdownField-BUVA7rQ6.js";import"./withOsdkMetrics-YbnoeFLv.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
