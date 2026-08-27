import{f as b,j as a,r as i}from"./iframe-DtbzkEzs.js";import{O as u}from"./object-table-K5GTM802.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CL2kdIiG.js";import"./index-Cdl7LtxY.js";import"./Dialog-DXYzGD4Z.js";import"./cross-CkY96ER9.js";import"./svgIconContainer-B1X0MJ2V.js";import"./useBaseUiId-D9GVHSAs.js";import"./InternalBackdrop-uFAfuBcA.js";import"./composite-BCd6_VbD.js";import"./index-CAGi0i5x.js";import"./index-BuXzcc8v.js";import"./index-CQLgKLql.js";import"./useEventCallback-hJNWOq4v.js";import"./SkeletonBar-DurJhUjh.js";import"./LoadingCell-C0RXbiXJ.js";import"./ColumnConfigDialog-BDreHfee.js";import"./DraggableList-D2NHg1n7.js";import"./search-tpVGv-bq.js";import"./Input-CLvZmI34.js";import"./useControlled-D6veSbC8.js";import"./Button-wQYjXV7W.js";import"./small-cross-DcWkxxec.js";import"./ActionButton-DzPIBKy7.js";import"./Checkbox-_PeJjaQL.js";import"./useValueChanged-BzIGSXmS.js";import"./CollapsiblePanel-BQz4jwXH.js";import"./MultiColumnSortDialog-Z7WhS9Nf.js";import"./MenuTrigger-BLzPHP1n.js";import"./CompositeItem-CrrqQtnx.js";import"./ToolbarRootContext-jyIYtAkE.js";import"./getDisabledMountTransitionStyles-Bxj-okW1.js";import"./getPseudoElementBounds-BAZhnTL4.js";import"./chevron-down-BkbtkYMp.js";import"./index-CvbQmAxO.js";import"./error-DdI77Vqv.js";import"./BaseCbacBanner-Cd7_oS2n.js";import"./makeExternalStore-BZkRjIzK.js";import"./Tooltip-DvyWT7G6.js";import"./PopoverPopup-DXMZwimF.js";import"./debounce-DDPZphKn.js";import"./useOsdkClient-B9lCYv0I.js";import"./tick-COKHk2-s.js";import"./DropdownField-CFYYtDEI.js";import"./isEqual-FgnwAmNG.js";import"./withOsdkMetrics-Ad1iX_N9.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
