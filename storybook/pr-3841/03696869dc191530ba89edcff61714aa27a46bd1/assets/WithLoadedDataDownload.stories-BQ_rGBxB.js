import{f as b,j as a,r as i}from"./iframe-ca23OhYy.js";import{O as u}from"./object-table-wEaVQDYc.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CpBe6w6L.js";import"./Table-BP5JyPSM.js";import"./index-CSQGa-uf.js";import"./Dialog-Bg0B1dRX.js";import"./cross-CETsQjwW.js";import"./svgIconContainer-DY2iVrle.js";import"./useBaseUiId-BFRON7cN.js";import"./InternalBackdrop-BD_kNEKT.js";import"./composite-D8ER8GvA.js";import"./index-rx-oKm__.js";import"./index-4C3ZxLWs.js";import"./index-_isEvDLT.js";import"./useEventCallback-B5TdNu7r.js";import"./SkeletonBar-iGP3E_gb.js";import"./LoadingCell-DUpYKrDI.js";import"./ColumnConfigDialog-D1XljsR8.js";import"./DraggableList-CmOHeOhh.js";import"./search-RTWZj0KA.js";import"./Input-CDnjWJWA.js";import"./useControlled-C1AlQciX.js";import"./Button-DRovoLAj.js";import"./small-cross-DKWrBlfW.js";import"./ActionButton--CJ0iKEB.js";import"./Checkbox-DYNFlkDz.js";import"./useValueChanged-D-liDC3H.js";import"./CollapsiblePanel-CO3SJ3wp.js";import"./MultiColumnSortDialog-BSJEKruq.js";import"./MenuTrigger-BD0ejQtC.js";import"./CompositeItem-B-dNGI5-.js";import"./ToolbarRootContext-sGl4TGZ5.js";import"./getDisabledMountTransitionStyles-F_MGGD3V.js";import"./getPseudoElementBounds-DOG3HfD3.js";import"./chevron-down-CIVY1k1-.js";import"./index-DwmipJz1.js";import"./error-BW4SFkbJ.js";import"./BaseCbacBanner-oOnZG3e4.js";import"./makeExternalStore-BRJsYdtc.js";import"./Tooltip-0Szhy22Z.js";import"./PopoverPopup-i0IaPECP.js";import"./debounce-Cqzs3vCN.js";import"./useOsdkClient-BgRNBudR.js";import"./tick-MfwPO4IK.js";import"./DropdownField-Bx2rVDJP.js";import"./isEqual-B49J3Sid.js";import"./withOsdkMetrics-DVtZ9wxA.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
