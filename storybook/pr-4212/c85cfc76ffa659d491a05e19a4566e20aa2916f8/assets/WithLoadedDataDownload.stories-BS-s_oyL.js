import{f as b,j as a,r as i}from"./iframe-8RY7zcAm.js";import{O as u}from"./object-table-CbV4Ilqn.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BGkfdM1d.js";import"./Table-CqiF0OH7.js";import"./index-F16GWZJ_.js";import"./Dialog-H50YXpLu.js";import"./cross-aMDWg1-0.js";import"./svgIconContainer-Bnw3Cx_6.js";import"./useBaseUiId-D3Is5SDV.js";import"./InternalBackdrop-CEKxxXVK.js";import"./composite-BDnjYEG7.js";import"./index-DR56g2UK.js";import"./index-CFR66S1o.js";import"./index-Cp_HTgiP.js";import"./useEventCallback-DbbrRawA.js";import"./SkeletonBar-Bkq728Iu.js";import"./LoadingCell-BcGa5QXD.js";import"./ColumnConfigDialog-DzrGm4d-.js";import"./DraggableList-CMpifBio.js";import"./search-C17XLT_W.js";import"./Input-CMi9rgRv.js";import"./useControlled-knRgQYvS.js";import"./Button-CAL7_9_d.js";import"./small-cross-BtCoVVKf.js";import"./ActionButton-D-4IyjVA.js";import"./Checkbox-BfbxkGOa.js";import"./useValueChanged-Do7jw3sZ.js";import"./CollapsiblePanel-C2F04vFW.js";import"./MultiColumnSortDialog-BovWGrT4.js";import"./MenuTrigger-D5_b2zNs.js";import"./CompositeItem-CgF-gvX4.js";import"./ToolbarRootContext-xvpkFEWT.js";import"./getDisabledMountTransitionStyles-C7O4Eqmv.js";import"./getPseudoElementBounds-Cf6FS6bo.js";import"./chevron-down-h5bw2Tva.js";import"./index-RRcFr7Yl.js";import"./error-DN4E4s-5.js";import"./BaseCbacBanner-BmgMkMuj.js";import"./makeExternalStore-C5QucHCB.js";import"./Tooltip-BlXoDKth.js";import"./PopoverPopup-BTcWcv1_.js";import"./debounce-B7Gynz3E.js";import"./useOsdkClient-P54WfxAq.js";import"./tick-5ikQBC0o.js";import"./DropdownField-0aYp1GEb.js";import"./isEqual-DlaxxFzG.js";import"./withOsdkMetrics-DZUKZj-t.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
