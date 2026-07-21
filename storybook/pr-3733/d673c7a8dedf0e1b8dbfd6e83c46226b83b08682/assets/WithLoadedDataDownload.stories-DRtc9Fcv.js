import{f as b,j as a,r as i}from"./iframe-4BKOAzHX.js";import{O as u}from"./object-table-31eC33Iy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BO4QJwpQ.js";import"./Table-DyFcFs3_.js";import"./index-DJ53Sv_K.js";import"./Dialog-B4AL5wFm.js";import"./cross-CpJvS5n9.js";import"./svgIconContainer-AOe-YNRh.js";import"./useBaseUiId-BYyHLbuZ.js";import"./InternalBackdrop-B-2GGlwz.js";import"./composite-KvIfntCm.js";import"./index-B6wYYUZ5.js";import"./index-CypjQWnn.js";import"./index-D6j1DPFw.js";import"./useEventCallback-Dat-ABtJ.js";import"./SkeletonBar-CftuyukT.js";import"./LoadingCell-bTRzVfWs.js";import"./ColumnConfigDialog-BZKASZkh.js";import"./DraggableList-Dj1Ffkkd.js";import"./search-CM3cO5Mi.js";import"./Input-D8FH1XsG.js";import"./useControlled-B7yq0oZo.js";import"./Button-DlKA6KYJ.js";import"./small-cross-N4o5ypSk.js";import"./ActionButton-B_icVaJy.js";import"./Checkbox-D1EIOZyQ.js";import"./useValueChanged-BNrjEFIe.js";import"./CollapsiblePanel-Bo2IXsmD.js";import"./MultiColumnSortDialog-BkwnFagj.js";import"./MenuTrigger-CzBJ__xA.js";import"./CompositeItem-BHqnQa5y.js";import"./ToolbarRootContext-BcRvDpZg.js";import"./getDisabledMountTransitionStyles-BDKMNHMo.js";import"./getPseudoElementBounds-BrUNL0mO.js";import"./chevron-down-CKliXFAW.js";import"./index-CCAGlBy6.js";import"./error-CuEUY6i9.js";import"./BaseCbacBanner-8nAsbhyk.js";import"./makeExternalStore-lVt5fFow.js";import"./Tooltip-Swq8m-0x.js";import"./PopoverPopup-DZxnw2F-.js";import"./toNumber-BBveFLZx.js";import"./useOsdkClient-iSY5V5v7.js";import"./tick-CtNlitw_.js";import"./DropdownField-BCDTEpwB.js";import"./withOsdkMetrics-BlEyaYx5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
