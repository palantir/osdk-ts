import{f as b,j as a,r as i}from"./iframe-29gR9XhZ.js";import{O as u}from"./object-table-B_Rv7_z1.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DlT-mGxO.js";import"./Table-8XFDe7Kt.js";import"./index-CrsEpx0M.js";import"./Dialog-CjGGuHXe.js";import"./cross-CuUhPQxd.js";import"./svgIconContainer-B81IYS8r.js";import"./useBaseUiId-s8FPLP5u.js";import"./InternalBackdrop-BprBEkhL.js";import"./composite-C-osCGVl.js";import"./index-DdlQpJHG.js";import"./index-BVNMC1S5.js";import"./index-Cch7mQ8a.js";import"./useEventCallback-DBhYM9Hy.js";import"./SkeletonBar-C37AZzuf.js";import"./LoadingCell-CwQHZBtp.js";import"./ColumnConfigDialog-aevR0De2.js";import"./DraggableList-D3CO-Yut.js";import"./search-DAxbo9jb.js";import"./Input-5lsFnUBK.js";import"./useControlled-DH4JcH5f.js";import"./Button-DYk_F-qJ.js";import"./small-cross-B-y2x7T0.js";import"./ActionButton-DBsW9PSK.js";import"./Checkbox-DVxcG_YL.js";import"./useValueChanged-B5seCtbl.js";import"./CollapsiblePanel-CQQxgaFT.js";import"./MultiColumnSortDialog-ClDrcpFd.js";import"./MenuTrigger-B8Mb7Vam.js";import"./CompositeItem-7um1p8gd.js";import"./ToolbarRootContext-Vw1tC3hX.js";import"./getDisabledMountTransitionStyles-D9EBmjTC.js";import"./getPseudoElementBounds-BV3Dd7LZ.js";import"./chevron-down-C2ebRgMi.js";import"./index-DG-eMoMu.js";import"./error-C8ioQ8xA.js";import"./BaseCbacBanner-CiBPlSfz.js";import"./makeExternalStore-CAnIClXP.js";import"./Tooltip-BXN6Rclk.js";import"./PopoverPopup-CIsYphuH.js";import"./debounce-DxHc7Ker.js";import"./useOsdkClient-CwzE6u8u.js";import"./tick-T4_w1PlJ.js";import"./DropdownField-BNL8L0v5.js";import"./isEqual-0bZjIzta.js";import"./withOsdkMetrics-B8queKnp.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
