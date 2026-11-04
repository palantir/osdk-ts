import{f as b,j as a,r as i}from"./iframe-B8HV8iQM.js";import{O as u}from"./object-table-BmDs5ypl.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BJL_29SE.js";import"./Table-CN6tDEys.js";import"./index-DfArBtGw.js";import"./Dialog-CtwmlsVl.js";import"./cross-BUomV37k.js";import"./svgIconContainer-CSeiJgb1.js";import"./useBaseUiId-DIsSmRfw.js";import"./InternalBackdrop-D8Lv6NUu.js";import"./composite-Csop57qo.js";import"./index-6KHmLmfs.js";import"./index-UkSWMlbC.js";import"./index-BdGJVPhn.js";import"./useEventCallback-C4vCOB3Y.js";import"./SkeletonBar-IYKBkIS2.js";import"./LoadingCell-Ba-FKL6d.js";import"./ColumnConfigDialog-C9QzF-Qy.js";import"./DraggableList-BHV1EGi1.js";import"./search-NJ19wZoC.js";import"./Input-BDX0t5YK.js";import"./useControlled-Bmw28nji.js";import"./Button-C9_cOvqp.js";import"./small-cross-DIXE5x7P.js";import"./ActionButton-Be-vXg2-.js";import"./Checkbox-CvkNDLi6.js";import"./useValueChanged-B-_ytn6c.js";import"./CollapsiblePanel-SrwTh7HR.js";import"./MultiColumnSortDialog-BCwk3CPa.js";import"./MenuTrigger-BC9qF4S9.js";import"./CompositeItem-B4-eeroY.js";import"./ToolbarRootContext-CMP0qHsY.js";import"./getDisabledMountTransitionStyles-C_SsSajC.js";import"./getPseudoElementBounds-tj4TkaA0.js";import"./chevron-down-InHxZIxd.js";import"./index-BtUOZ1zx.js";import"./error-B8hDXUgK.js";import"./BaseCbacBanner-BQo3W4ga.js";import"./makeExternalStore-D-MiCBSb.js";import"./Tooltip-BdCeYLjB.js";import"./PopoverPopup-BOpxhme4.js";import"./debounce-3SAgyzFW.js";import"./useOsdkClient-D7UMSCqS.js";import"./tick-CnJDPiGK.js";import"./DropdownField-CHI-_Y2P.js";import"./isEqual-7IXkhA4A.js";import"./withOsdkMetrics-Qp2i-feo.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
