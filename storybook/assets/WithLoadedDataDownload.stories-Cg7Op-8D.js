import{f as b,j as a,r as i}from"./iframe-CGAAWjUk.js";import{O as u}from"./object-table-BZlLGqvs.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D7Q85Sz5.js";import"./index-DVNbGEom.js";import"./Dialog-CIPdQzzS.js";import"./cross-BMOnILF9.js";import"./svgIconContainer-C5cq20xn.js";import"./useBaseUiId-q2gn17YU.js";import"./InternalBackdrop-DlCmV2DU.js";import"./composite-TSR6i9AI.js";import"./index-CAq0mONR.js";import"./index-cfs0j-RS.js";import"./index-De_PRb-G.js";import"./useEventCallback-BUwzpQG6.js";import"./SkeletonBar-Cg0rZugM.js";import"./LoadingCell-BhmR5vaV.js";import"./ColumnConfigDialog-e5lVvbA5.js";import"./DraggableList-4KWpoLF-.js";import"./search-B1x9qoKl.js";import"./Input-DcY1pFOE.js";import"./useControlled-BH1kMEtF.js";import"./Button-C3seCtRt.js";import"./small-cross-WaOM7yTh.js";import"./ActionButton-ydkbhU8f.js";import"./Checkbox-Cif29S8E.js";import"./useValueChanged-B6LZJm-I.js";import"./CollapsiblePanel-BDQXixbq.js";import"./MultiColumnSortDialog-B1waxiAF.js";import"./MenuTrigger-rkGpkOUN.js";import"./CompositeItem-C6tKhX8Q.js";import"./ToolbarRootContext-Dg97O1ft.js";import"./getDisabledMountTransitionStyles-BAG4qb7O.js";import"./getPseudoElementBounds-C9AcnV7g.js";import"./chevron-down-BzIR7Dic.js";import"./index-CpMNxW-6.js";import"./error-CYiBScrz.js";import"./BaseCbacBanner-D3-ekCj4.js";import"./makeExternalStore-dSMUltpM.js";import"./Tooltip-CnB77xDQ.js";import"./PopoverPopup-v9CSnE1B.js";import"./toNumber-BJXu2EHJ.js";import"./useOsdkClient-Dv52rRRB.js";import"./tick-CcekCI9q.js";import"./DropdownField-DB3ruQd4.js";import"./withOsdkMetrics-CUrrt16x.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
