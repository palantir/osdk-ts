import{f as b,j as a,r as i}from"./iframe-B08I_oIU.js";import{O as u}from"./object-table-CRIT3Szf.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CYp3n9Wf.js";import"./Table-Bh-Icq-G.js";import"./index-DjD_i9Y1.js";import"./Dialog-BYCfre_v.js";import"./cross-A2crZg46.js";import"./svgIconContainer-Dfj-gwIK.js";import"./useBaseUiId-BfLV8qHe.js";import"./InternalBackdrop-CAckHjfs.js";import"./composite-1avW952g.js";import"./index-rVaYuNMF.js";import"./index-ilDnKNJf.js";import"./index-C-favTSN.js";import"./useEventCallback-BojH2JCQ.js";import"./SkeletonBar-Cz8UkOpa.js";import"./LoadingCell-42RkFO-E.js";import"./ColumnConfigDialog-BdKDH1OR.js";import"./DraggableList-Mccr0RsZ.js";import"./Input-C3sKRwNk.js";import"./useControlled-Dz-navvE.js";import"./Button-fFxUUkk-.js";import"./small-cross-sYDi-uyf.js";import"./ActionButton-CiYImLCH.js";import"./Checkbox-Dcj24Bgm.js";import"./minus-BvKWxqk4.js";import"./useValueChanged-ClGik_y2.js";import"./caret-down-RXzismjb.js";import"./CollapsiblePanel-Cj_0dGAF.js";import"./MultiColumnSortDialog-DwtQer9K.js";import"./MenuTrigger-CXcT7k9j.js";import"./CompositeItem-48nkjj0-.js";import"./ToolbarRootContext-0C4sNIoP.js";import"./getDisabledMountTransitionStyles-AgPSLeYe.js";import"./getPseudoElementBounds-DLd9d7kc.js";import"./chevron-down-DEoSn_IE.js";import"./index-Vm8Lh2K4.js";import"./error-CAjAjaMp.js";import"./BaseCbacBanner-C0LWCaCh.js";import"./makeExternalStore-B_ETMbJ0.js";import"./Tooltip-Bj8Tozlk.js";import"./PopoverPopup-BQy2EwB_.js";import"./toNumber-DapdDvYr.js";import"./useOsdkClient-CbGbYvwF.js";import"./DropdownField-Cn_zkzyp.js";import"./withOsdkMetrics-BbBc8s8p.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
