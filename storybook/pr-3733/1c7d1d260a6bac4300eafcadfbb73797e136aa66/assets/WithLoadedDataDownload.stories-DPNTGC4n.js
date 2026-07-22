import{f as b,j as a,r as i}from"./iframe-5Av9J7iC.js";import{O as u}from"./object-table-g8YdHhNo.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DgaONgBe.js";import"./Table-fOGpk7g-.js";import"./index-CakWirJ3.js";import"./Dialog--ItX3axl.js";import"./cross-BFeZD4VG.js";import"./svgIconContainer-ChqgIZeY.js";import"./useBaseUiId-CTRvM3n9.js";import"./InternalBackdrop-5aO0og_w.js";import"./composite-CJUYG2Gd.js";import"./index-B5XSfgME.js";import"./index-CePFmMhV.js";import"./index-DT2yOIbn.js";import"./useEventCallback-DwfyEcyq.js";import"./SkeletonBar-NLyrxMhT.js";import"./LoadingCell-BOPb-za1.js";import"./ColumnConfigDialog-L5WypbFv.js";import"./DraggableList-Br_5IR3l.js";import"./search-i9LMQsdM.js";import"./Input-CKLE5DGY.js";import"./useControlled-CJSxX2mb.js";import"./isEqual-Bj59b9ke.js";import"./isObject-DQi3UINm.js";import"./Button-DvaCRSj4.js";import"./ActionButton-B1qeRpNQ.js";import"./Checkbox-mlIANG1d.js";import"./useValueChanged-zgD6LkGj.js";import"./CollapsiblePanel-CUewA6lP.js";import"./MultiColumnSortDialog-oVdB0c3Z.js";import"./MenuTrigger-DDeOApUx.js";import"./CompositeItem-B_fNWGHp.js";import"./ToolbarRootContext-D9qLaZwz.js";import"./getDisabledMountTransitionStyles-DtxIq28D.js";import"./getPseudoElementBounds-CtYDnijm.js";import"./chevron-down-DDBK_vjK.js";import"./index-DFSaCp3v.js";import"./error-D7nzuD6f.js";import"./BaseCbacBanner-DZQkjBfD.js";import"./makeExternalStore-C_jIkJhs.js";import"./Tooltip-CGUfkaHY.js";import"./PopoverPopup-p-lns9ov.js";import"./toNumber-CSkHEs0v.js";import"./useOsdkClient-7qt1y6Cg.js";import"./tick-Dyc4KqdV.js";import"./DropdownField-b76NBOLF.js";import"./withOsdkMetrics-q4ppdfgP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
