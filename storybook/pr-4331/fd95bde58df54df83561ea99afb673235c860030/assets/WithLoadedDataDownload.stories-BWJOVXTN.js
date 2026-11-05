import{f as b,j as a,r as i}from"./iframe-DfKl0JGk.js";import{O as u}from"./object-table-dUfpxSwm.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D2qZKtpg.js";import"./Table-CGlr-_aD.js";import"./index-aB099sio.js";import"./Dialog-C1AxpQJF.js";import"./cross-BNEnN7HL.js";import"./svgIconContainer-BAQrNZDY.js";import"./useBaseUiId-BFnbzIXU.js";import"./InternalBackdrop-DQiuVbxP.js";import"./composite-DoivXE_r.js";import"./index-CPvTwKaJ.js";import"./index-Cu8ZN5fR.js";import"./index-CKLNQuck.js";import"./useEventCallback-BPj-zmzp.js";import"./SkeletonBar-C3WAp5HN.js";import"./LoadingCell-Co75bDke.js";import"./ColumnConfigDialog-DLt-N818.js";import"./DraggableList-BmxyglgV.js";import"./search-BwIUQD_S.js";import"./Input-DOLGbI8I.js";import"./useControlled-CuqWKABX.js";import"./Button-B7sS73TJ.js";import"./small-cross-l23fMmT-.js";import"./ActionButton-BwTBHLns.js";import"./Checkbox-CpB2lS1k.js";import"./useValueChanged-BcrLWEfZ.js";import"./CollapsiblePanel-CgKpLYfM.js";import"./MultiColumnSortDialog-C1kscGYQ.js";import"./MenuTrigger-DB-s2Xyj.js";import"./CompositeItem-DCu8K_u-.js";import"./ToolbarRootContext-Djhkt96c.js";import"./getDisabledMountTransitionStyles-CvD_X3uJ.js";import"./getPseudoElementBounds-CiQNVwt7.js";import"./chevron-down-CdRuI-bU.js";import"./index-B1rjjc3Y.js";import"./error-Ci3w5MtL.js";import"./BaseCbacBanner-A-HZBMDm.js";import"./makeExternalStore-CSIEjtLx.js";import"./Tooltip-bZjfkZin.js";import"./isObject-D8Oji8bH.js";import"./debounce-BoOWLf3v.js";import"./useOsdkClient-D-epmGHT.js";import"./tick-Bf5SboOl.js";import"./DropdownField-DWj7vxDR.js";import"./isEqual-Cw-Jmji8.js";import"./_baseIsEqual-DR0ymikg.js";import"./withOsdkMetrics-DiSdxyjG.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
