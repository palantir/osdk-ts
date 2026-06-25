import{f as b,j as a,r as i}from"./iframe-DtJdR8o5.js";import{O as u}from"./object-table-fzT_1vtm.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D9YuVikf.js";import"./Table-BXGP6lIf.js";import"./index-A9RQxA8v.js";import"./Dialog-Cqi26h8i.js";import"./cross-D-K9S6cu.js";import"./svgIconContainer-DnJJJFvI.js";import"./useBaseUiId-CimT7_Tr.js";import"./InternalBackdrop-WHnz6adD.js";import"./composite-C-gB3eF9.js";import"./index-CpKdfVQZ.js";import"./index-DJnV3HFJ.js";import"./index-6I1Hm2yo.js";import"./useEventCallback-DWIQSToy.js";import"./SkeletonBar-SUSHK0Np.js";import"./LoadingCell-Cec6KsjJ.js";import"./ColumnConfigDialog-DVQZ6MWk.js";import"./DraggableList-FFtKte1I.js";import"./Input-CEEIYH0q.js";import"./useControlled-CC-lI9Iz.js";import"./Button-DZTVI3Xo.js";import"./small-cross-Dk-3H06M.js";import"./ActionButton-sfVk1hNE.js";import"./Checkbox-BMamtVDw.js";import"./minus-C7KY5wgq.js";import"./useValueChanged-CoWuwFmz.js";import"./caret-down-B7eycUSM.js";import"./CollapsiblePanel-TUiCU5Gu.js";import"./MultiColumnSortDialog-CI3uh719.js";import"./MenuTrigger-BB60VMwq.js";import"./CompositeItem-DpyYsuyc.js";import"./ToolbarRootContext-86zdr2aK.js";import"./getDisabledMountTransitionStyles-DUIrI81q.js";import"./getPseudoElementBounds-XXYKcEnN.js";import"./chevron-down-BKRIHA0P.js";import"./index-C7tY_qZy.js";import"./error-3rzf31_v.js";import"./BaseCbacBanner-TiGL5C-I.js";import"./makeExternalStore-Sl9e-4xy.js";import"./Tooltip-bAjy2PyD.js";import"./PopoverPopup-DQiN_ZJv.js";import"./toNumber-CL-ronMY.js";import"./useOsdkClient-Cnj1dNIz.js";import"./DropdownField-DjpQkKKA.js";import"./withOsdkMetrics-DLlVXcS-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
