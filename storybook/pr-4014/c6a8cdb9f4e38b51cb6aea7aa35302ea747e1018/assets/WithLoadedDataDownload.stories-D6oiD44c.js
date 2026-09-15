import{f as b,j as a,r as i}from"./iframe-5SoalxB8.js";import{O as u}from"./object-table-DcytYsBJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B3AWIfbd.js";import"./Table-BhIfm7wU.js";import"./index-Cez1kwXk.js";import"./Dialog-Bdx_IH1I.js";import"./cross-C6M2F8_v.js";import"./svgIconContainer-ZIKM4LC1.js";import"./useBaseUiId-_hIxwWiU.js";import"./InternalBackdrop-BNnaRKAX.js";import"./composite-SE2iQFWF.js";import"./index-DT5Sidop.js";import"./index-OzD1TZjX.js";import"./index-DWklm5Nh.js";import"./useEventCallback-CoMxb96Z.js";import"./SkeletonBar-UdUH3l3g.js";import"./LoadingCell-Dy3t5IHW.js";import"./ColumnConfigDialog-CJ_Qxc9o.js";import"./DraggableList-D9zI9O9E.js";import"./search-7jKLWuvF.js";import"./Input-B7jz047V.js";import"./useControlled-WPjc1su4.js";import"./Button-C7yTVROs.js";import"./small-cross-BXQIwf9i.js";import"./ActionButton-vMTpem8c.js";import"./Checkbox-BxPwSiXj.js";import"./useValueChanged-BRgu9RH8.js";import"./CollapsiblePanel-BPbFINDF.js";import"./MultiColumnSortDialog-DG0uFl9D.js";import"./MenuTrigger-BhHI-4MQ.js";import"./CompositeItem-vz-X2T1a.js";import"./ToolbarRootContext-BawR_l4w.js";import"./getDisabledMountTransitionStyles-iftAt274.js";import"./getPseudoElementBounds-DeJjQFQA.js";import"./chevron-down-C4Jmkz2d.js";import"./index-DlMkNRxq.js";import"./error-_mgoiawP.js";import"./BaseCbacBanner-BMmA5ke7.js";import"./makeExternalStore-DfAT07Vb.js";import"./Tooltip-DyjzpvsB.js";import"./PopoverPopup-CZVBhwLf.js";import"./debounce-Cow5gaxU.js";import"./useOsdkClient-Ct6jxELr.js";import"./tick-b6pDkRL9.js";import"./DropdownField-B9xNR_1-.js";import"./isEqual-BBKpWkCo.js";import"./withOsdkMetrics-BjqDzNow.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
