import{f as b,j as a,r as i}from"./iframe-Do-VpOjh.js";import{O as u}from"./object-table-BwRPkyFs.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-5MNjctgv.js";import"./Table-DlXnM-uc.js";import"./index-guBT-Q22.js";import"./Dialog-7E7RidgZ.js";import"./cross-ogJb6_71.js";import"./svgIconContainer-Daa0qYJx.js";import"./useBaseUiId-NGuXhXtm.js";import"./InternalBackdrop-CAfbe648.js";import"./composite-XuPIjsZ0.js";import"./index-BPQdlCoY.js";import"./index-Bl0nKd-v.js";import"./index-6QJ451ri.js";import"./useEventCallback-BfN-usbW.js";import"./SkeletonBar-DEQbvDAC.js";import"./LoadingCell-TR-8Cewx.js";import"./ColumnConfigDialog-CZtIpYKX.js";import"./DraggableList-DCsvageq.js";import"./search-CUVFG7hS.js";import"./Input-DBYDuVVL.js";import"./useControlled-Bktt7DnW.js";import"./Button-CyEQqHyS.js";import"./small-cross-BbsWtOmh.js";import"./ActionButton-CGqklm4n.js";import"./Checkbox-X0ByKMK-.js";import"./useValueChanged-BWy_YmP2.js";import"./CollapsiblePanel-DU8jndzx.js";import"./MultiColumnSortDialog-BG5mZIhG.js";import"./MenuTrigger-Bx9xsw3l.js";import"./CompositeItem-tVccsBIo.js";import"./ToolbarRootContext-ABr2rsL3.js";import"./getDisabledMountTransitionStyles-DJ-_H-jY.js";import"./getPseudoElementBounds-Dn4RekYY.js";import"./chevron-down-CEDyHpu0.js";import"./index-BCFomdyL.js";import"./error-CfZglkqO.js";import"./BaseCbacBanner-Bgyzasq9.js";import"./makeExternalStore-C6Ji6_pQ.js";import"./Tooltip-iQ-POIkn.js";import"./PopoverPopup-Bu1yL2u-.js";import"./debounce-BXhlOus3.js";import"./useOsdkClient-ClIl2h3b.js";import"./tick-De1F-M9u.js";import"./DropdownField-Ds_qQON0.js";import"./isEqual-C845QIj_.js";import"./withOsdkMetrics-C1OJVKTR.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
