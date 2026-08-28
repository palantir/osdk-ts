import{f as b,j as a,r as i}from"./iframe-BzTrYIGj.js";import{O as u}from"./object-table-B-Ijnqri.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DN18uj2q.js";import"./Table-D6xe963K.js";import"./index-BrLV4dFb.js";import"./Dialog-B4_vQQmg.js";import"./cross-C6h0gf3C.js";import"./svgIconContainer-BZmpt804.js";import"./useBaseUiId-BnkVlZO6.js";import"./InternalBackdrop-BxTdVsU4.js";import"./composite-BD8s54zP.js";import"./index-BwQpmBgV.js";import"./index-Cb5QJVzG.js";import"./index-CTFSiazZ.js";import"./useEventCallback-lPJeV2ho.js";import"./SkeletonBar-HJjKmAs4.js";import"./LoadingCell--wQm6AzL.js";import"./ColumnConfigDialog-B52kott7.js";import"./DraggableList-D95DUzYE.js";import"./search-C0_wSRgh.js";import"./Input-DYoLRy9q.js";import"./useControlled-DOebwg81.js";import"./Button-iX8EOfC8.js";import"./small-cross-BlolGBAt.js";import"./ActionButton-D-Tq9Dhs.js";import"./Checkbox-CM3qffdw.js";import"./useValueChanged-BS2UNk3o.js";import"./CollapsiblePanel-fkBpzIbF.js";import"./MultiColumnSortDialog-hI5XWovP.js";import"./MenuTrigger-Bzv7UvTk.js";import"./CompositeItem-BftnSL_x.js";import"./ToolbarRootContext-BxcZ8iGZ.js";import"./getDisabledMountTransitionStyles-DT16cxHd.js";import"./getPseudoElementBounds-CKv8RmSv.js";import"./chevron-down-BgrpuhFy.js";import"./index-Cetl04Gl.js";import"./error-gmpJmGSg.js";import"./BaseCbacBanner-CylE7vdU.js";import"./makeExternalStore-TyTg8pnL.js";import"./Tooltip-CY7RNSdr.js";import"./PopoverPopup-XLUtI616.js";import"./debounce-O82EKYE8.js";import"./useOsdkClient-BwFfMjb6.js";import"./tick-C06aFeyp.js";import"./DropdownField-CzeFiqs2.js";import"./isEqual-DMiOnRvx.js";import"./withOsdkMetrics-B4hlBqzl.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
