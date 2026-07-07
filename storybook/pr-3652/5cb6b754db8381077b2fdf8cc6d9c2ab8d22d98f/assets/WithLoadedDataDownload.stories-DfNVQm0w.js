import{f as b,j as a,r as i}from"./iframe-DlAjljC0.js";import{O as u}from"./object-table-8vVzJXWJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-qM9rHgtE.js";import"./Table-BlbJunnq.js";import"./index-Mg2TGXTy.js";import"./Dialog-BI9KXEg5.js";import"./cross-CJWcF_W0.js";import"./svgIconContainer-BHhVW6zb.js";import"./useBaseUiId-BMQIEJ1D.js";import"./InternalBackdrop-B1Lh1cyI.js";import"./composite-C4Fq0xLo.js";import"./index-DXFrDNW6.js";import"./index-cp2LK2bn.js";import"./index-CWko2P3h.js";import"./useEventCallback-C3Is6FM6.js";import"./SkeletonBar-Doq4MMzv.js";import"./LoadingCell-DK0mBrRw.js";import"./ColumnConfigDialog-B7AlhhIX.js";import"./DraggableList-BY0s8Lv7.js";import"./search-CVyvDaT4.js";import"./Input-Cy4Rxry4.js";import"./useControlled-B5yElq7p.js";import"./Button-UAaeeS_0.js";import"./small-cross-BsOxa2ei.js";import"./ActionButton-DoyybYl2.js";import"./Checkbox-ZQq3Jua0.js";import"./useValueChanged-BZizANrj.js";import"./CollapsiblePanel-IC_-o2Kq.js";import"./MultiColumnSortDialog-DztaBBfV.js";import"./MenuTrigger-DBeLiW6N.js";import"./CompositeItem-BU_QHlMO.js";import"./ToolbarRootContext-DVfDCItW.js";import"./getDisabledMountTransitionStyles-DLQ5Q4Xh.js";import"./getPseudoElementBounds-1TMzqq0l.js";import"./chevron-down-D5cZouFY.js";import"./index-BSfAJcTr.js";import"./error---M2JlJ0.js";import"./BaseCbacBanner-CXkqhyJb.js";import"./makeExternalStore-0TiH5D2E.js";import"./Tooltip-Ya7HSKwo.js";import"./PopoverPopup-D3jPRwwZ.js";import"./toNumber-CQU81w4R.js";import"./useOsdkClient-CjO2LINr.js";import"./tick-BUzgGmyL.js";import"./DropdownField-BU4Rp2Ng.js";import"./withOsdkMetrics-DtsYymFj.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
