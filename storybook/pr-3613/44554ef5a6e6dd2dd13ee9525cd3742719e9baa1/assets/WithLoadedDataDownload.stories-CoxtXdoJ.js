import{f as b,j as a,r as i}from"./iframe-B0bgem6h.js";import{O as u}from"./object-table-CdCp_d4c.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-o4rus8nx.js";import"./Table-DTdmbJUr.js";import"./index-BzugOSE0.js";import"./Dialog-C7FLVgry.js";import"./cross-DXK8iSTm.js";import"./svgIconContainer-Bn2APD4U.js";import"./useBaseUiId-BEX-u_qo.js";import"./InternalBackdrop-CVJRw8io.js";import"./composite-Bhfze_tK.js";import"./index-D1vRvMhB.js";import"./index-DAy6qlyx.js";import"./index-CFluKFPI.js";import"./useEventCallback-DThgtgCM.js";import"./SkeletonBar-AtDuMz0i.js";import"./LoadingCell-BZpDff42.js";import"./ColumnConfigDialog-DE3seyyw.js";import"./DraggableList-CGXZaElA.js";import"./search-BCSIQ8We.js";import"./Input-DnQOjmUp.js";import"./useControlled-mJi4SfI4.js";import"./Button-BCH-GqBR.js";import"./small-cross-COx5q00i.js";import"./ActionButton-CKKii7pv.js";import"./Checkbox-BZAWTQwn.js";import"./minus-CC09LIbZ.js";import"./tick-bTIYKJK8.js";import"./useValueChanged-5nj3Y2ua.js";import"./caret-down-Dh4NhVGo.js";import"./CollapsiblePanel-vhixv53n.js";import"./MultiColumnSortDialog-0ua65-zx.js";import"./MenuTrigger-2ECycEG4.js";import"./CompositeItem-D6KfO6Fb.js";import"./ToolbarRootContext-Cw7F_jEZ.js";import"./getDisabledMountTransitionStyles-G4l6ht-Y.js";import"./getPseudoElementBounds-BaK6VgJv.js";import"./chevron-down-BmdI0Fmy.js";import"./index-DE414JAH.js";import"./error-D2v1VlU-.js";import"./BaseCbacBanner-Bea6s-PE.js";import"./makeExternalStore-CIzGe6Gc.js";import"./Tooltip-DJHOGQFD.js";import"./PopoverPopup-BhUI6YS5.js";import"./toNumber-Dx3Y0kHh.js";import"./useOsdkClient-BYMyJ1bF.js";import"./DropdownField-BEsiJ8-1.js";import"./withOsdkMetrics-BH3Cbpon.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
