import{f as b,j as a,r as i}from"./iframe-C-UwW4DG.js";import{O as u}from"./object-table-BsVfNAmJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Db0XYIFl.js";import"./Table-siluBYMm.js";import"./index-DooFDgSw.js";import"./Dialog-CHq16UVE.js";import"./cross-C0jFn5SQ.js";import"./svgIconContainer-URl-rwet.js";import"./useBaseUiId-ClnYH1ug.js";import"./InternalBackdrop-7r1JThPf.js";import"./composite-Ypfb1Edk.js";import"./index-BcDdhWi-.js";import"./index-C555AqYe.js";import"./index-SeJE5K1u.js";import"./useEventCallback-mlqLfTOu.js";import"./SkeletonBar-DcJYy0af.js";import"./LoadingCell-Cas1PXJZ.js";import"./ColumnConfigDialog-Ce7QaykP.js";import"./DraggableList-BREzxWea.js";import"./search-DBoTeCbD.js";import"./Input-pe3OoF5W.js";import"./useControlled-TZvgmE5C.js";import"./Button-C5eVdiFy.js";import"./small-cross-DzcS9Sfk.js";import"./ActionButton-D8f08hWL.js";import"./Checkbox-DLPeEt5P.js";import"./useValueChanged-uSaOUwxj.js";import"./CollapsiblePanel-D1c5zj7J.js";import"./MultiColumnSortDialog-EDjUfL6p.js";import"./MenuTrigger-DKh9OuxX.js";import"./CompositeItem-CIDE_9zh.js";import"./ToolbarRootContext-CyZPcg8f.js";import"./getDisabledMountTransitionStyles-CnpEvHSU.js";import"./getPseudoElementBounds-CZJCNdSk.js";import"./chevron-down-BSTe-vxS.js";import"./index-C5XF08j0.js";import"./error-BfMTzUHm.js";import"./BaseCbacBanner-CFYRgQHF.js";import"./makeExternalStore-DrLBbM23.js";import"./Tooltip-BNdc_-gR.js";import"./PopoverPopup-DpKdHFZB.js";import"./toNumber-BIFpfNaH.js";import"./useOsdkClient-Bw1-1gYp.js";import"./tick--4nTmnEn.js";import"./DropdownField-lqpOA4_8.js";import"./withOsdkMetrics-B7RoOYcb.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
