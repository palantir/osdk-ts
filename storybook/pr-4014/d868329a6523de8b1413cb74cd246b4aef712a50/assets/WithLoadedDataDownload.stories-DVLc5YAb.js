import{f as b,j as a,r as i}from"./iframe-DUUN6t7i.js";import{O as u}from"./object-table-DTqnDN-H.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BzY2PQK8.js";import"./Table-DnFu5Qca.js";import"./index-CllJbB6n.js";import"./Dialog-BQe1t3O4.js";import"./cross-BL0CmC8v.js";import"./svgIconContainer-BiEJIKWJ.js";import"./useBaseUiId-DD-rnAgn.js";import"./InternalBackdrop-50xUnS5H.js";import"./composite-DXLhbd5q.js";import"./index-CF3EfJQa.js";import"./index-Cyo2_RId.js";import"./index-zmjPNORe.js";import"./useEventCallback-C8EWv1mM.js";import"./SkeletonBar-D_7uUrgz.js";import"./LoadingCell-BF9OtyKp.js";import"./ColumnConfigDialog-B_VPvCsk.js";import"./DraggableList-DDmZHPJs.js";import"./search-BOFS1DOk.js";import"./Input-eja5fv_S.js";import"./useControlled-OksHndqL.js";import"./Button-BiBj2Ngy.js";import"./small-cross-Brklb7bd.js";import"./ActionButton-Dc9XrfLH.js";import"./Checkbox-Bymh2P1S.js";import"./useValueChanged-DbYhsi4t.js";import"./CollapsiblePanel-DY2xqSav.js";import"./MultiColumnSortDialog-D1gQqu1j.js";import"./MenuTrigger-CrjuaHsp.js";import"./CompositeItem-C7oLwUzE.js";import"./ToolbarRootContext-sOFoFOUi.js";import"./getDisabledMountTransitionStyles-DUae_uwF.js";import"./getPseudoElementBounds-BVQl0rR8.js";import"./chevron-down-9ao4cWz0.js";import"./index-JYM0ZjgP.js";import"./error-Btl2ABt3.js";import"./BaseCbacBanner-pDJQtSGl.js";import"./makeExternalStore-DSCive7G.js";import"./Tooltip-2hA_c5uF.js";import"./PopoverPopup-Bh2SXv5G.js";import"./debounce-CCRuevd-.js";import"./useOsdkClient-BfrDVP7e.js";import"./tick-CVC53zOF.js";import"./DropdownField-DUhPo9yt.js";import"./isEqual-f8Z9Lb_j.js";import"./withOsdkMetrics-YnroKoAT.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
