import{f as b,j as a,r as i}from"./iframe-DjTsTlya.js";import{O as u}from"./object-table-BH4m2DVb.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DOwvcOZH.js";import"./Table-DeDjgQkN.js";import"./index-CRTtk6ac.js";import"./Dialog-CJA--hLR.js";import"./cross-Cvq5D40f.js";import"./svgIconContainer-xPgA_yJ1.js";import"./useBaseUiId-BzNc-3Ql.js";import"./InternalBackdrop-pUIcFmU-.js";import"./composite-0nzRqKiC.js";import"./index-y5c47ww6.js";import"./index-DqxuM6At.js";import"./index-BHnNwPKM.js";import"./useEventCallback-B8IjVnQ6.js";import"./SkeletonBar-CR9uI5kM.js";import"./LoadingCell-KFngOTg4.js";import"./ColumnConfigDialog-BdmQ5e1p.js";import"./DraggableList-C_6AaAoA.js";import"./search-Bt_OBQnD.js";import"./Input-D8ax6gQv.js";import"./useControlled-BVHEmv7i.js";import"./Button-DyYtieLu.js";import"./small-cross-CKizW9rD.js";import"./ActionButton-BZbmOJWh.js";import"./Checkbox-DRakJNAH.js";import"./useValueChanged-B-nMYLan.js";import"./CollapsiblePanel-BpE-bZTw.js";import"./MultiColumnSortDialog-CMuXKD4i.js";import"./MenuTrigger-Caw-fYwa.js";import"./CompositeItem-BuvWaDdm.js";import"./ToolbarRootContext-DfW4g7RO.js";import"./getDisabledMountTransitionStyles-BA0waCP-.js";import"./getPseudoElementBounds-DKRYw-Sa.js";import"./chevron-down-Crh_WC6g.js";import"./index-C3payG2R.js";import"./error-DgpTog1A.js";import"./BaseCbacBanner-BB7djwNT.js";import"./makeExternalStore-Dm9B4aPC.js";import"./Tooltip-H4kLk5D5.js";import"./PopoverPopup-CH71VGBG.js";import"./debounce-DVG0b2wL.js";import"./useOsdkClient-BaZTHlJk.js";import"./tick-CbhTJk3v.js";import"./DropdownField-BBpsDicP.js";import"./isEqual-BsYIHLNh.js";import"./withOsdkMetrics-BW3QL-zG.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
