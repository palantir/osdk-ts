import{f as b,j as a,r as i}from"./iframe-CAO1B58s.js";import{O as u}from"./object-table-d1AklzUy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CvS8FU7B.js";import"./index-2SlFnaHE.js";import"./Dialog-BajRShuR.js";import"./cross-CLetBbcm.js";import"./svgIconContainer-M6SpqrlV.js";import"./useBaseUiId-D72lMfE_.js";import"./InternalBackdrop-CN2XFVRe.js";import"./composite-B06T-Azs.js";import"./index-CqYJuNzQ.js";import"./index-Dl9K5k5W.js";import"./index-DrLb19NA.js";import"./useEventCallback-BFrvc70H.js";import"./SkeletonBar-CKhg_xIZ.js";import"./LoadingCell-DpSjA57A.js";import"./ColumnConfigDialog-CNHqTBO9.js";import"./DraggableList-A-6hxvt-.js";import"./search-CpelYZyf.js";import"./Input-Z-O5GJkg.js";import"./useControlled-CMPDUvCd.js";import"./isEqual-CDSyWO-H.js";import"./isObject-DOOOShJo.js";import"./Button-Cpz-DPHy.js";import"./ActionButton-Dfye5dM1.js";import"./Checkbox-CRaDM2h7.js";import"./useValueChanged-Dd6Og4rm.js";import"./CollapsiblePanel-DJmpv6Yu.js";import"./MultiColumnSortDialog-3zOqwGU5.js";import"./MenuTrigger-BK4Dc-_7.js";import"./CompositeItem-BgYEKQXO.js";import"./ToolbarRootContext-BcxrhZv1.js";import"./getDisabledMountTransitionStyles-CR2Dsb_b.js";import"./getPseudoElementBounds-DpI9xC91.js";import"./chevron-down-p1qYsJXr.js";import"./index-D62FQFIO.js";import"./error-DCZY56Y1.js";import"./BaseCbacBanner-CMVLBd9d.js";import"./makeExternalStore-whgFatuo.js";import"./Tooltip-gkbvOz_7.js";import"./PopoverPopup-BAcjiyS8.js";import"./toNumber-BDArJ5Eh.js";import"./useOsdkClient-Bcf-xOjI.js";import"./tick-C11u5Lux.js";import"./DropdownField-CcY15Q6R.js";import"./withOsdkMetrics-CCe5tkcF.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
