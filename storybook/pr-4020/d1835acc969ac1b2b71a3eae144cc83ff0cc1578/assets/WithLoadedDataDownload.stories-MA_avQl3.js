import{f as b,j as a,r as i}from"./iframe-KzcVBCRi.js";import{O as u}from"./object-table-BskToQWp.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BHEHcaci.js";import"./Table-BkmXv9h9.js";import"./index-CzXxEHHr.js";import"./Dialog-Bg6StrtK.js";import"./cross-C3McpADX.js";import"./svgIconContainer-59d154vN.js";import"./useBaseUiId-DZF9dUKs.js";import"./InternalBackdrop-DU_2I3T6.js";import"./composite-5RWCdSN2.js";import"./index-k64aStbd.js";import"./index-2DqsNDep.js";import"./index-DjI5xhOO.js";import"./useEventCallback-C8Tozf_J.js";import"./SkeletonBar-Cjrbehp8.js";import"./LoadingCell-CB-JnvM9.js";import"./ColumnConfigDialog-oYSxjE5e.js";import"./DraggableList-CV6ahxMz.js";import"./search-CflGQf1d.js";import"./Input-Cd7kdMt2.js";import"./useControlled-uli5q6ql.js";import"./Button-CBd10Xxd.js";import"./small-cross-DS-iYFW3.js";import"./ActionButton-IdIQB2NM.js";import"./Checkbox-Cc_wqZbm.js";import"./useValueChanged-WxAxKP7S.js";import"./CollapsiblePanel-Bw4ONZWv.js";import"./MultiColumnSortDialog-DyVxfK2i.js";import"./MenuTrigger-BVsiP-tY.js";import"./CompositeItem-BzuuDXx0.js";import"./ToolbarRootContext-BWXPXzbU.js";import"./getDisabledMountTransitionStyles-VJ04QHXq.js";import"./getPseudoElementBounds-B5CJHYyN.js";import"./chevron-down-DpGps272.js";import"./index-BCuz_Fvw.js";import"./error-BAN-C5Cp.js";import"./BaseCbacBanner-CmTZFDnE.js";import"./makeExternalStore-DCqqAOa1.js";import"./Tooltip-CutkRXXV.js";import"./PopoverPopup-CndzA1oj.js";import"./debounce-NVX7x4-3.js";import"./useOsdkClient-B5kzp8lo.js";import"./tick-BnZkTXtc.js";import"./DropdownField-CLCiF7Rm.js";import"./isEqual-D7ffYgj9.js";import"./withOsdkMetrics-DIAhwg3C.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
