import{f as b,j as a,r as i}from"./iframe-ByH6cwcC.js";import{O as u}from"./object-table-vIIHUQVm.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CTHNm7Zf.js";import"./Table-UkNmrvXR.js";import"./index-BffOjmGP.js";import"./Dialog-DPTNFvmX.js";import"./cross-CUNO9jlI.js";import"./svgIconContainer-C59hMuAg.js";import"./useBaseUiId-rCCQLDzE.js";import"./InternalBackdrop-BOvoVjdH.js";import"./composite-DsmzMxzf.js";import"./index-N0N9SzuH.js";import"./index-B9rySOnb.js";import"./index-DwSNPP4c.js";import"./useEventCallback-5-9ioIJ9.js";import"./SkeletonBar-DH4wpQvw.js";import"./LoadingCell-BHyVKnhe.js";import"./ColumnConfigDialog-CDpP6W2F.js";import"./DraggableList-nivrjWVF.js";import"./search-Do_ND450.js";import"./Input-BQqKdvxX.js";import"./useControlled-CiJux5fd.js";import"./Button-CPqebLlQ.js";import"./small-cross-Cax6JCvi.js";import"./ActionButton-CSu9cdVs.js";import"./Checkbox-B0BvBwx1.js";import"./useValueChanged-CR5RlyXy.js";import"./CollapsiblePanel-CxxueGOW.js";import"./MultiColumnSortDialog-BhxHso4-.js";import"./MenuTrigger-Da8FkEAr.js";import"./CompositeItem-BAQU7622.js";import"./ToolbarRootContext-BlxbtcnM.js";import"./getDisabledMountTransitionStyles-DT4C1Ry1.js";import"./getPseudoElementBounds-hG2SWQQo.js";import"./chevron-down-Dat11n9w.js";import"./index-OS6ALw7f.js";import"./error-Di2DxefB.js";import"./BaseCbacBanner-BXetmlOi.js";import"./makeExternalStore-DxT_f6S6.js";import"./Tooltip-D62erufF.js";import"./PopoverPopup-BCbNGrfj.js";import"./debounce-CGwOWugm.js";import"./useOsdkClient-BInBbtyf.js";import"./tick-abIWECA9.js";import"./DropdownField-BLckusfA.js";import"./isEqual-t7rQRmdo.js";import"./withOsdkMetrics-DSJJhCCa.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
