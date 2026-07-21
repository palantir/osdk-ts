import{f as b,j as a,r as i}from"./iframe-BzlYLQ-i.js";import{O as u}from"./object-table-DZwSXS8A.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Ch6_Jnnc.js";import"./Table-wlsI2hT9.js";import"./index-0NDkVbp8.js";import"./Dialog-DNv64uTw.js";import"./cross-CtsDX5u-.js";import"./svgIconContainer-CzqCBiqK.js";import"./useBaseUiId-Dr8TPlc3.js";import"./InternalBackdrop-DecYFjhO.js";import"./composite-Ca4ja29w.js";import"./index-CymzoPXI.js";import"./index-VloNGu1B.js";import"./index-D7fqZBgp.js";import"./useEventCallback-ByhDukM5.js";import"./SkeletonBar-_qxaSpur.js";import"./LoadingCell-he8RKOo8.js";import"./ColumnConfigDialog-B6VCeGeu.js";import"./DraggableList-Fpkuy5RU.js";import"./search-3vJQud9L.js";import"./Input-QoZRQCyF.js";import"./useControlled-Dp8h5goj.js";import"./Button-Bn3n_M--.js";import"./small-cross-CcM1sRD7.js";import"./ActionButton-gNqGFZZ_.js";import"./Checkbox-0qQsM7_K.js";import"./useValueChanged-CGaiwyxu.js";import"./CollapsiblePanel-D96YU18d.js";import"./MultiColumnSortDialog-BibnkhfC.js";import"./MenuTrigger-BjmtGjy4.js";import"./CompositeItem-DT554UZE.js";import"./ToolbarRootContext-SlT4-41c.js";import"./getDisabledMountTransitionStyles-BqLwDNMu.js";import"./getPseudoElementBounds-Ca3_tA3u.js";import"./chevron-down-DkEE_eX1.js";import"./index-Djutzn40.js";import"./error-BwoO0b5Y.js";import"./BaseCbacBanner-CZtYZuzk.js";import"./makeExternalStore-6MpUzXMo.js";import"./Tooltip-vD9O4Yku.js";import"./PopoverPopup-xInezTbI.js";import"./toNumber-BjGUkA-7.js";import"./useOsdkClient-DcQwJVGP.js";import"./tick-Bw3CrYCD.js";import"./DropdownField-CQbnvbW4.js";import"./withOsdkMetrics-DZsWQYqQ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
