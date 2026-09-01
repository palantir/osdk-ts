import{f as b,j as a,r as i}from"./iframe-DkzbgSAD.js";import{O as u}from"./object-table-DERUT3qL.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BiwIe667.js";import"./Table-BjvAinYT.js";import"./index-DjIOOe4t.js";import"./Dialog-c7vLoh07.js";import"./cross-Cd4Ezf-o.js";import"./svgIconContainer-DSZ9Y-N3.js";import"./useBaseUiId-CdNYBUR5.js";import"./InternalBackdrop-CaeoLXWh.js";import"./composite-CynzhD0V.js";import"./index-CtmpuiHr.js";import"./index-DKOk24VN.js";import"./index-MiufCKVv.js";import"./useEventCallback-Dvazelct.js";import"./SkeletonBar-DLuntpKM.js";import"./LoadingCell-CP8OE6bF.js";import"./ColumnConfigDialog-BMcEiYrr.js";import"./DraggableList-YeaSyVSn.js";import"./search-DVRH7Lct.js";import"./Input-CAjIPIjE.js";import"./useControlled-C8Dvxw0_.js";import"./Button-BHYsrTUy.js";import"./small-cross-D9-XIEQD.js";import"./ActionButton-CX4x4__7.js";import"./Checkbox-DZ1dvYsR.js";import"./useValueChanged-DbcB2lMI.js";import"./CollapsiblePanel-lk9wXXL6.js";import"./MultiColumnSortDialog-t_1c5JLL.js";import"./MenuTrigger-DVn985mJ.js";import"./CompositeItem-B0TjqzOk.js";import"./ToolbarRootContext-Z-VSuc63.js";import"./getDisabledMountTransitionStyles-BKGL4WDU.js";import"./getPseudoElementBounds-CuBbtjn1.js";import"./chevron-down-D4koVRNt.js";import"./index-BSrr_0Jz.js";import"./error-CAfn1z7w.js";import"./BaseCbacBanner-DzF-LUX4.js";import"./makeExternalStore-CBYxH43f.js";import"./Tooltip-4k1X8Kbh.js";import"./PopoverPopup-jjunJ9hJ.js";import"./debounce-DuGr5rYC.js";import"./useOsdkClient-BN4CbGuS.js";import"./tick-BvW-N913.js";import"./DropdownField-mY-AIqk3.js";import"./isEqual-BiIWWaVa.js";import"./withOsdkMetrics-BhSP4CDN.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
