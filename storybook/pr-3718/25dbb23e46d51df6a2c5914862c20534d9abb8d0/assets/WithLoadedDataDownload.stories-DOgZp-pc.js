import{f as b,j as a,r as i}from"./iframe-DHJcRMo1.js";import{O as u}from"./object-table-CJ7xHujJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BrigsJda.js";import"./Table-D6q8jwjr.js";import"./index-vko8ddJv.js";import"./Dialog-C8caJ1mC.js";import"./cross-6JjUZ1sO.js";import"./svgIconContainer-C0gcdsgX.js";import"./useBaseUiId-67EydAK4.js";import"./InternalBackdrop-CKHwKqH3.js";import"./composite-BVMojmvB.js";import"./index-UHlx9MBB.js";import"./index-tuGOm3ZG.js";import"./index-C98tNhPI.js";import"./useEventCallback-B-g2quNy.js";import"./SkeletonBar-CssBd8lj.js";import"./LoadingCell-Drc3kzTm.js";import"./ColumnConfigDialog-B4RHWQHy.js";import"./DraggableList-tfjh-waR.js";import"./search-Be6SHPQr.js";import"./Input-BNa8a8E-.js";import"./useControlled-kucBpkMe.js";import"./isEqual-fHq2fVMc.js";import"./isObject-QSfWveIi.js";import"./Button-DD6En_dP.js";import"./ActionButton-C1_rWY8u.js";import"./Checkbox-10hCXnWl.js";import"./useValueChanged-Btsc6E8S.js";import"./CollapsiblePanel-DVAHuol4.js";import"./MultiColumnSortDialog-zxwQjtp3.js";import"./MenuTrigger-B8RJdLgp.js";import"./CompositeItem-BFFuJeHH.js";import"./ToolbarRootContext-Cg9GYqXm.js";import"./getDisabledMountTransitionStyles-BM2xxcY5.js";import"./getPseudoElementBounds-tVdoa0nG.js";import"./chevron-down-Coyt6YKY.js";import"./index-DXiwM2ji.js";import"./error-DiK0Ne3K.js";import"./BaseCbacBanner-BZCG6JLP.js";import"./makeExternalStore-BqO749be.js";import"./Tooltip-D8QBAeSM.js";import"./PopoverPopup-DTUYlNW7.js";import"./toNumber-D62GPJqf.js";import"./useOsdkClient-8LcgV5uf.js";import"./tick-B2lYXbeY.js";import"./DropdownField-DOuevEVo.js";import"./withOsdkMetrics-Cdbiilck.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
