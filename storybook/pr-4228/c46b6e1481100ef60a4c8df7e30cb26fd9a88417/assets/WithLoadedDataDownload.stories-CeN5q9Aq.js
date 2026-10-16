import{f as b,j as a,r as i}from"./iframe-DbS9D_O3.js";import{O as u}from"./object-table-DYoBWSpa.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CCKJK0hs.js";import"./Table-D4U-7O05.js";import"./index-DtbYZf2o.js";import"./Dialog-DfBMiG9A.js";import"./cross-D8Acxe7x.js";import"./svgIconContainer-BWtkfvw7.js";import"./useBaseUiId-DGo7w5rM.js";import"./InternalBackdrop-CUaheQ60.js";import"./composite-BVFSknHB.js";import"./index-DjECoGdr.js";import"./index-Cz6dsjwa.js";import"./index-Bo1c5tnJ.js";import"./useEventCallback-Bh0Tbg4X.js";import"./SkeletonBar-C0UKIou7.js";import"./LoadingCell-DXoSJvwg.js";import"./ColumnConfigDialog-LSyN-6-a.js";import"./DraggableList-Bl_hKlJz.js";import"./search-O2b5hRrN.js";import"./Input-BjkhNLJi.js";import"./useControlled-BU_DIXGN.js";import"./Button-CgXhCctb.js";import"./small-cross-CURfx7dD.js";import"./ActionButton-CV3Gtc6x.js";import"./Checkbox-DYEou9Z6.js";import"./useValueChanged-D8jiBEOA.js";import"./CollapsiblePanel-W0IgEcMp.js";import"./MultiColumnSortDialog-Ci9aVGlw.js";import"./MenuTrigger-Cx8VBTJz.js";import"./CompositeItem-CBVEdJrU.js";import"./ToolbarRootContext-DAT__9MO.js";import"./getDisabledMountTransitionStyles-B-ib1OlT.js";import"./getPseudoElementBounds-1TOviJ8v.js";import"./chevron-down-CRHApYO-.js";import"./index-Cn4ErW0D.js";import"./error-RW3dtBbn.js";import"./BaseCbacBanner-DI9iiF5O.js";import"./makeExternalStore-qkyjGCKT.js";import"./Tooltip-DDRYkVBh.js";import"./PopoverPopup-XTmmwdNv.js";import"./debounce-CLlBWcHq.js";import"./useOsdkClient-CkkpSDd5.js";import"./tick-BOzZ-jjE.js";import"./DropdownField-D6cu5JEW.js";import"./isEqual-CNxWTIVQ.js";import"./withOsdkMetrics-COgOpeFu.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
