import{f as b,j as a,r as i}from"./iframe-BLtbB9yL.js";import{O as u}from"./object-table-BMOcHco8.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-NY6L4APl.js";import"./Table-BcF0PcB9.js";import"./index-Dzu4b_IB.js";import"./Dialog-Cl6rHvFZ.js";import"./cross-C7Pfqsgy.js";import"./svgIconContainer-cTxegse7.js";import"./useBaseUiId-DmOmCKZO.js";import"./InternalBackdrop-DMzDeexZ.js";import"./composite-Cypvm6OB.js";import"./index-Dq2eIlq8.js";import"./index-u2zPfote.js";import"./index-SyXOuBxU.js";import"./useEventCallback-Iu0smDrU.js";import"./SkeletonBar-Gao4JZhU.js";import"./LoadingCell-CuZwbcdJ.js";import"./ColumnConfigDialog-bCiOL-fS.js";import"./DraggableList-DoyHD0VZ.js";import"./search-1AInKOFa.js";import"./Input-BiA-3KH_.js";import"./useControlled-WQcnYS8e.js";import"./Button-B6pZtsky.js";import"./small-cross-8u8HOGrz.js";import"./ActionButton-CFQJm7v4.js";import"./Checkbox-CmQMT6Zx.js";import"./useValueChanged-BZ3-3RtY.js";import"./CollapsiblePanel-PGaxeolw.js";import"./MultiColumnSortDialog-D-y_hAG-.js";import"./MenuTrigger-Br0ibyRy.js";import"./CompositeItem-DNKgQIaZ.js";import"./ToolbarRootContext-DdGg-Lfa.js";import"./getDisabledMountTransitionStyles-KNC7oIQb.js";import"./getPseudoElementBounds-DaOCuufP.js";import"./chevron-down-BhpG0rg7.js";import"./index-DcUVdUbh.js";import"./error-BGqP2VaS.js";import"./BaseCbacBanner-R2Kh6ldg.js";import"./makeExternalStore-Bw178tiK.js";import"./Tooltip-BEj70Lhq.js";import"./PopoverPopup-DUjFzwE3.js";import"./debounce-DSB8VkTp.js";import"./useOsdkClient-kJp2DoWV.js";import"./tick-3ZiA6yfA.js";import"./DropdownField-DbhYDUVf.js";import"./isEqual-RjjK8BdL.js";import"./withOsdkMetrics-CFSyk5hC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
