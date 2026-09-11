import{f as b,j as a,r as i}from"./iframe-Cjq1ziW_.js";import{O as u}from"./object-table-D6EdSbIy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bu64T0VB.js";import"./Table-DX-6NG8S.js";import"./index-DYLMtBRZ.js";import"./Dialog-CUVldmmV.js";import"./cross-5C9tDAb9.js";import"./svgIconContainer-eE0nci6v.js";import"./useBaseUiId-BOmEy4R4.js";import"./InternalBackdrop-DVWahY-J.js";import"./composite-DKerRgJC.js";import"./index-jdj57Z6r.js";import"./index-BNrT0csI.js";import"./index-B4fNfQ4Q.js";import"./useEventCallback-hAeTEmUL.js";import"./SkeletonBar-CxWNqWqz.js";import"./LoadingCell-CEZ_xtS5.js";import"./ColumnConfigDialog-JWUub0AX.js";import"./DraggableList-BTT7l4Iu.js";import"./search-CW8m2x0D.js";import"./Input-CltcJXck.js";import"./useControlled-B86_FVha.js";import"./Button-Sk9sqn-x.js";import"./small-cross-DpmUsxoH.js";import"./ActionButton-Bkt5pjan.js";import"./Checkbox-DwFQfO_0.js";import"./useValueChanged-Dp6WnvdX.js";import"./CollapsiblePanel-DZj9a81F.js";import"./MultiColumnSortDialog-BgeVtZYK.js";import"./MenuTrigger-vwiILOdw.js";import"./CompositeItem-BkoI9BcF.js";import"./ToolbarRootContext-D9vPb_4g.js";import"./getDisabledMountTransitionStyles-Dcwh1Csu.js";import"./getPseudoElementBounds-DZitm35h.js";import"./chevron-down-BLZAfqaw.js";import"./index-BlBIR37s.js";import"./error-BTbs61-N.js";import"./BaseCbacBanner-BKFpuCn3.js";import"./makeExternalStore-MDXzkZI-.js";import"./Tooltip-BbVYH3II.js";import"./PopoverPopup-DmxPEDNt.js";import"./debounce-CGyXk-2p.js";import"./useOsdkClient-D16wWo5-.js";import"./tick-B9mB2gxh.js";import"./DropdownField-Bw_qvOxg.js";import"./isEqual-2eOY9j-u.js";import"./withOsdkMetrics-DX_450NL.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
