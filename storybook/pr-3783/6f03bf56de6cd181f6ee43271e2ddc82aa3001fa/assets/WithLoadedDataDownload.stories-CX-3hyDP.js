import{f as b,j as a,r as i}from"./iframe-gzVrYTak.js";import{O as u}from"./object-table-C-sLm1HQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-L3pE98T_.js";import"./Table-BkXDUvyw.js";import"./index-RDVHJcvo.js";import"./Dialog-NA1whH4o.js";import"./cross-CM3TMApR.js";import"./svgIconContainer-kSLl__Df.js";import"./useBaseUiId-B81zB54n.js";import"./InternalBackdrop-CxXYb1xI.js";import"./composite-DQVnyrFk.js";import"./index-Cj4q3NWW.js";import"./index-CrUm-nlo.js";import"./index-YkVJ8bwT.js";import"./useEventCallback-CaYSsoFe.js";import"./SkeletonBar-CuVXQn97.js";import"./LoadingCell-BvfCkKa7.js";import"./ColumnConfigDialog-CCz4bxdY.js";import"./DraggableList-CowK3uFp.js";import"./search-DQCB2p55.js";import"./Input-vdipARBj.js";import"./useControlled-IkTNQ6K_.js";import"./isEqual-DAOgit_z.js";import"./isObject-ne5OPKUP.js";import"./Button-iNtaOIhz.js";import"./ActionButton-DkjqAK9y.js";import"./Checkbox-u3pEtOb0.js";import"./useValueChanged-C32Qdb5x.js";import"./CollapsiblePanel-DSjaRvCE.js";import"./MultiColumnSortDialog-XfHjxf5h.js";import"./MenuTrigger-DZ9_zWX7.js";import"./CompositeItem-Y24lxPAU.js";import"./ToolbarRootContext-BEITgtkO.js";import"./getDisabledMountTransitionStyles-BFYTmhnF.js";import"./getPseudoElementBounds-BC-J1AwV.js";import"./chevron-down-ErG01cxd.js";import"./index-BxtnWxzi.js";import"./error-DbGHRKTj.js";import"./BaseCbacBanner-iBnAmYD-.js";import"./makeExternalStore-Cb7zye3Q.js";import"./Tooltip-YgeU8akB.js";import"./PopoverPopup-CX4ORbOa.js";import"./toNumber-Cw2vjGar.js";import"./useOsdkClient-DTgVoOP6.js";import"./tick-BfZPsX8z.js";import"./DropdownField-Cg5Ze26h.js";import"./withOsdkMetrics-CkrFpESP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
