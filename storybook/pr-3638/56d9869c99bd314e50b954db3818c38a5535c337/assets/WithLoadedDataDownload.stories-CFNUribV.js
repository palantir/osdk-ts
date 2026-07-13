import{f as b,j as a,r as i}from"./iframe-D1bftbFK.js";import{O as u}from"./object-table-COhG12FN.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CNIzgNg3.js";import"./Table-f7czZJhV.js";import"./index-D1loE7aj.js";import"./Dialog-Gw67Q6Rn.js";import"./cross-DzZeKJfj.js";import"./svgIconContainer-Dqjbb7fg.js";import"./useBaseUiId-Bvl0vz9p.js";import"./InternalBackdrop-BB3RsRDt.js";import"./composite-DOqV9ejV.js";import"./index-dOf4Grlg.js";import"./index-DlVzaQME.js";import"./index-BrmJX9uT.js";import"./useEventCallback-CQFMWWc5.js";import"./SkeletonBar-BBaAbbby.js";import"./LoadingCell-tL13-Ngd.js";import"./ColumnConfigDialog-_zRc8A_C.js";import"./DraggableList-CHohrtMd.js";import"./search-vcgo5x2D.js";import"./Input-RPabR7fY.js";import"./useControlled-BUXx323f.js";import"./Button-5rYiDiWd.js";import"./small-cross-WqHxMak_.js";import"./ActionButton-DqvSa_C_.js";import"./Checkbox-CttXfua9.js";import"./useValueChanged-qrNKsSwz.js";import"./CollapsiblePanel-Cx2HEal9.js";import"./MultiColumnSortDialog-ezonVfTE.js";import"./MenuTrigger-CeW60YCc.js";import"./CompositeItem-Bk5dEGxZ.js";import"./ToolbarRootContext-Rh3iVkuL.js";import"./getDisabledMountTransitionStyles-DcwdTU8M.js";import"./getPseudoElementBounds-C030YbuO.js";import"./chevron-down-rJxkhghQ.js";import"./index-C98djebO.js";import"./error-BwiNsD3B.js";import"./BaseCbacBanner-DOSTVC1G.js";import"./makeExternalStore-BoS1QRtv.js";import"./Tooltip-BTZWbjz7.js";import"./PopoverPopup-BUqCoHyP.js";import"./toNumber-C6Du4OzQ.js";import"./useOsdkClient-DX-l6J9g.js";import"./tick-CLSnRXRH.js";import"./DropdownField-lTLhy-GB.js";import"./withOsdkMetrics-I5lFWqrI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
