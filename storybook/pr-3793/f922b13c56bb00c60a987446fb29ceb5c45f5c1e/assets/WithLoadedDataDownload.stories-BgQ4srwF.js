import{f as b,j as a,r as i}from"./iframe-DZKZRMfI.js";import{O as u}from"./object-table-BsWjOEgt.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CyDM0kIy.js";import"./Table-U9dRKIWF.js";import"./index-UHNo6JXh.js";import"./Dialog-C9zFjDwL.js";import"./cross-7qoEAdfk.js";import"./svgIconContainer-C1JqEOuF.js";import"./useBaseUiId-BrAP3Vhg.js";import"./InternalBackdrop-Bd1Fm7m7.js";import"./composite-Wbt-b0Wx.js";import"./index-BcZyi5e5.js";import"./index-GUxQVV6o.js";import"./index-DuUfF7np.js";import"./useEventCallback-ZFvhVecb.js";import"./SkeletonBar-B4noTuJE.js";import"./LoadingCell-jvnZxHuU.js";import"./ColumnConfigDialog-CWL9Lvpm.js";import"./DraggableList-QUK3qw-p.js";import"./search-BMN_5avI.js";import"./Input-DAp8ZrwB.js";import"./useControlled-Dg2uTPRC.js";import"./isEqual-B35GUBBd.js";import"./isObject-CZrcnf8_.js";import"./Button-Clu6RzPE.js";import"./ActionButton-DV1gQ_3M.js";import"./Checkbox-DvrL_Cuc.js";import"./useValueChanged-CES4Mr1K.js";import"./CollapsiblePanel-ChxW3qwi.js";import"./MultiColumnSortDialog-Bnt2nhz5.js";import"./MenuTrigger-DM0YWJsi.js";import"./CompositeItem-BToRPTQx.js";import"./ToolbarRootContext-DRj1zGHd.js";import"./getDisabledMountTransitionStyles-BKGiXkNj.js";import"./getPseudoElementBounds-CnkNCKmG.js";import"./chevron-down-B-VJcggY.js";import"./index-CzSoEYKc.js";import"./error-BGz2U_dj.js";import"./BaseCbacBanner-DlYIXUuu.js";import"./makeExternalStore-BdBWg-q-.js";import"./Tooltip-m2lNKbbq.js";import"./PopoverPopup-rf4F-xS_.js";import"./toNumber-C0YbIGo7.js";import"./useOsdkClient-BeGqXuUC.js";import"./tick-Cf7fJ5Zm.js";import"./DropdownField-Cmzd4G9b.js";import"./withOsdkMetrics-hhq9mBBz.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
