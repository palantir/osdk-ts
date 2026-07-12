import{f as b,j as a,r as i}from"./iframe-CJ1k9s2s.js";import{O as u}from"./object-table-BIIzuX-9.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-xGEu8B2E.js";import"./Table-Cv4zI1MX.js";import"./index-BDnFjOlH.js";import"./Dialog-Cs_sQyHQ.js";import"./cross-D470-lej.js";import"./svgIconContainer-ChwrX5Lf.js";import"./useBaseUiId-DRFVnBda.js";import"./InternalBackdrop-BCkmE3Pa.js";import"./composite-CyTvAPVt.js";import"./index-C06RO_Su.js";import"./index-JosqavAX.js";import"./index-D4TxaTBR.js";import"./useEventCallback-DExgDMFD.js";import"./SkeletonBar-DfiHRzYw.js";import"./LoadingCell-Dvkvqsth.js";import"./ColumnConfigDialog-Kvkc2gQU.js";import"./DraggableList-DiTm8S8t.js";import"./search-f2QUDm-t.js";import"./Input-DCQ9YCGs.js";import"./useControlled-Bq1q_8CB.js";import"./Button-i-vyX_VJ.js";import"./small-cross-BQfJzVSj.js";import"./ActionButton-CR64bhzy.js";import"./Checkbox-CrRcULaR.js";import"./useValueChanged-yQrbeR_M.js";import"./CollapsiblePanel-BW6og0en.js";import"./MultiColumnSortDialog-Cap5ovi8.js";import"./MenuTrigger-C4hauMUT.js";import"./CompositeItem-Bp61A018.js";import"./ToolbarRootContext-DANNGKFY.js";import"./getDisabledMountTransitionStyles-ip5b1aJf.js";import"./getPseudoElementBounds-KzXbuBjp.js";import"./chevron-down-gslDsfHA.js";import"./index-B4n_eF_o.js";import"./error-BjfPp1E9.js";import"./BaseCbacBanner-DqYugKkF.js";import"./makeExternalStore-D_hniRDO.js";import"./Tooltip-bx7MNMvi.js";import"./PopoverPopup-B1AJKiCK.js";import"./toNumber-BAbZVJDC.js";import"./useOsdkClient-BaSnKZfU.js";import"./tick-CDYdi_vM.js";import"./DropdownField-BJ48uJBA.js";import"./withOsdkMetrics-CUAcaiOz.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
