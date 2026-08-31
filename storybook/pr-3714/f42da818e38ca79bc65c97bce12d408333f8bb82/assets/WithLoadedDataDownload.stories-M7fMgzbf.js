import{f as b,j as a,r as i}from"./iframe-CJA1xNbf.js";import{O as u}from"./object-table-p5zSmE9I.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C2luW4zJ.js";import"./Table-DoSKpfQD.js";import"./index-C-8NmWLG.js";import"./Dialog-BOl7KEAj.js";import"./cross-CQqjvK9t.js";import"./svgIconContainer-CbX6k65p.js";import"./useBaseUiId-BvJ2qcSN.js";import"./InternalBackdrop-CFtyIHF7.js";import"./composite-DOttNt49.js";import"./index-DnzCeTgw.js";import"./index-COLkTz0A.js";import"./index-6fmeW7-6.js";import"./useEventCallback-BYhwn4pa.js";import"./SkeletonBar-DshquNDl.js";import"./LoadingCell-DmCyIN3R.js";import"./ColumnConfigDialog-DHP7XzNA.js";import"./DraggableList-C-5K3eKq.js";import"./search-BEFnIjoY.js";import"./Input-BEw3OBGr.js";import"./useControlled-Cw0VkJXd.js";import"./Button-vRCY7Tct.js";import"./small-cross-CJKlltL0.js";import"./ActionButton-Brl7quwo.js";import"./Checkbox-CrY7RfHX.js";import"./useValueChanged-B4sZueCD.js";import"./CollapsiblePanel-BnuzOBv2.js";import"./MultiColumnSortDialog-DjBNMJbv.js";import"./MenuTrigger-BM22BcfG.js";import"./CompositeItem-DEmGmvGp.js";import"./ToolbarRootContext-sfA9hU9w.js";import"./getDisabledMountTransitionStyles-DxG_dub5.js";import"./getPseudoElementBounds-LXwOsv9_.js";import"./chevron-down-CisS9nHL.js";import"./index-CoZeC-uo.js";import"./error-BRaZ14N8.js";import"./BaseCbacBanner-qP8CyVJW.js";import"./makeExternalStore-C0IKfOCn.js";import"./Tooltip-DfQvNW_E.js";import"./PopoverPopup-B5BKr__5.js";import"./debounce-BuqRMN8y.js";import"./useOsdkClient-BfQQJQSe.js";import"./tick-C06BStMP.js";import"./DropdownField-CzOk54o3.js";import"./isEqual-jR_iTTD8.js";import"./withOsdkMetrics-CqtplnYL.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
