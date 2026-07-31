import{f as b,j as a,r as i}from"./iframe-CVw8lT_p.js";import{O as u}from"./object-table-DX270X06.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-39HDiriG.js";import"./Table-Cm1zmFBp.js";import"./index-seJCcwx0.js";import"./Dialog-DiLz0XQ4.js";import"./cross-CKjM0IJA.js";import"./svgIconContainer-j0iPz0xP.js";import"./useBaseUiId-DX7AvzL6.js";import"./InternalBackdrop-BjPX4DaQ.js";import"./composite-02otrQol.js";import"./index-DOrwx4ox.js";import"./index-BV9_SaTX.js";import"./index-fcZuwg4_.js";import"./useEventCallback-DqnyWBUG.js";import"./SkeletonBar-DTCVeuOr.js";import"./LoadingCell-Cxdnzx9B.js";import"./ColumnConfigDialog-DnyF6P4z.js";import"./DraggableList-4bPUmXfn.js";import"./search-B9c9IUJL.js";import"./Input-aUjsDD_S.js";import"./useControlled-BjfgiGuC.js";import"./isEqual-vos-yDjT.js";import"./isObject-BikITpyp.js";import"./Button-DDnd28Ua.js";import"./ActionButton-To3utIpL.js";import"./Checkbox-CEm1K9hX.js";import"./useValueChanged-DF2Ro_hc.js";import"./CollapsiblePanel-BkJVDq8v.js";import"./MultiColumnSortDialog-BvdVoeew.js";import"./MenuTrigger-BWSPLmCS.js";import"./CompositeItem-DWFZqP11.js";import"./ToolbarRootContext-CDJpuj06.js";import"./getDisabledMountTransitionStyles-BjM-q0Kj.js";import"./getPseudoElementBounds-CZc1qxZw.js";import"./chevron-down-BYHRqgTY.js";import"./index-B0nXunlt.js";import"./error-70eabRvD.js";import"./BaseCbacBanner-C42BTLFx.js";import"./makeExternalStore-DJnA5Pzt.js";import"./Tooltip-pXyO8Ory.js";import"./PopoverPopup-Cm-CCz32.js";import"./toNumber-CvHAYR8q.js";import"./useOsdkClient-lbkGBCiM.js";import"./tick-BBlHqKx_.js";import"./DropdownField-CibN-iRH.js";import"./withOsdkMetrics-B0amdy6Q.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
