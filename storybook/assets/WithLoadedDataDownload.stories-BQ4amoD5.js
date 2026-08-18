import{f as b,j as a,r as i}from"./iframe-bDlOvzCD.js";import{O as u}from"./object-table-Dl2lCGNZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BAmM5hSy.js";import"./index-VT2sHwDI.js";import"./Dialog-BzJJmA8W.js";import"./cross-TUS4Q6Ao.js";import"./svgIconContainer-Bqi1VJi0.js";import"./useBaseUiId-B2slyOHM.js";import"./InternalBackdrop-CRh9Bcm2.js";import"./composite-Dfe6WZ9B.js";import"./index-DP9iJ9Qp.js";import"./index-CGDkVQ7s.js";import"./index-_S-PXd8B.js";import"./useEventCallback-DZd0sCPQ.js";import"./SkeletonBar-DXXr_uD3.js";import"./LoadingCell-DwSKG4eX.js";import"./ColumnConfigDialog-deoJ9G1I.js";import"./DraggableList--_2oR74E.js";import"./search-Dh1zBfzB.js";import"./Input-CNxZ13Ar.js";import"./useControlled-5EwHNZlm.js";import"./Button-LYMOgFpv.js";import"./small-cross-iJKFa-ZD.js";import"./ActionButton-BXC4EPx5.js";import"./Checkbox-ilOHd6bp.js";import"./useValueChanged-DzFKc6r-.js";import"./CollapsiblePanel-ClrnquSS.js";import"./MultiColumnSortDialog-juD7Sd67.js";import"./MenuTrigger-CsbizqWt.js";import"./CompositeItem-I6D1Ck1D.js";import"./ToolbarRootContext-BvOSFjrz.js";import"./getDisabledMountTransitionStyles-CwJ-KzBN.js";import"./getPseudoElementBounds-BUF_kUes.js";import"./chevron-down-G50mjwg6.js";import"./index-DjjoI3KK.js";import"./error-DgyisaaS.js";import"./BaseCbacBanner-DqA6kCfr.js";import"./makeExternalStore-Oc969Yyb.js";import"./Tooltip-Cst3xVOs.js";import"./PopoverPopup-jWpQQnI7.js";import"./debounce-DjjsE8t-.js";import"./useOsdkClient-DqxOv284.js";import"./tick-DLToHhDG.js";import"./DropdownField-CeLtBIVJ.js";import"./isEqual-C7rAeOqh.js";import"./withOsdkMetrics-BflEGh-H.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
