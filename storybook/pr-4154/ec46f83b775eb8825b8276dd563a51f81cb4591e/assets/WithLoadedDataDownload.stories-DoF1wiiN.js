import{f as b,j as a,r as i}from"./iframe-i3f0VK7P.js";import{O as u}from"./object-table-S96oFubf.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CcQVXdAf.js";import"./Table-B3ADbA9t.js";import"./index-BSc8nCuA.js";import"./Dialog-gnB7Dkbr.js";import"./cross-U10SUwzd.js";import"./svgIconContainer-DpWasIbE.js";import"./useBaseUiId-3GNAAiBc.js";import"./InternalBackdrop-BzlNDOWb.js";import"./composite-GZoC5isN.js";import"./index-UuGZwwy8.js";import"./index-CrHn1Rne.js";import"./index-Dc_noU35.js";import"./useEventCallback-DEIVd39z.js";import"./SkeletonBar-DWNug-bk.js";import"./LoadingCell-CNgihZGh.js";import"./ColumnConfigDialog-0WMzoY99.js";import"./DraggableList-Dt6iazGC.js";import"./search-D1ajCeBe.js";import"./Input-BKCzKS6Z.js";import"./useControlled-BBd9b3hp.js";import"./Button-CM2JbGjZ.js";import"./small-cross-CaOVzuNS.js";import"./ActionButton-DHom0mZn.js";import"./Checkbox-_WMWLqhH.js";import"./useValueChanged-DQRztGVN.js";import"./CollapsiblePanel-D0rBf_Yr.js";import"./MultiColumnSortDialog-DGJSRujv.js";import"./MenuTrigger-owKOYRF_.js";import"./CompositeItem-C5NIgZsO.js";import"./ToolbarRootContext-DMZj-zjR.js";import"./getDisabledMountTransitionStyles-DlreV-Ph.js";import"./getPseudoElementBounds-BbqFlpXE.js";import"./chevron-down-BEmwBzIe.js";import"./index-B9C8GZw0.js";import"./error-Cm9VDJHx.js";import"./BaseCbacBanner-D_O2oYx8.js";import"./makeExternalStore-Ds3owEGg.js";import"./Tooltip--UELeF3n.js";import"./PopoverPopup-BilHat69.js";import"./debounce-CZjDoEnf.js";import"./useOsdkClient-eQiRfwbd.js";import"./tick-BdzI4Lm6.js";import"./DropdownField-CfwMrpRo.js";import"./isEqual-DUgfKGPN.js";import"./withOsdkMetrics-xRq5i0OL.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
