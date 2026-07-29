import{f as b,j as a,r as i}from"./iframe-DW5haiqE.js";import{O as u}from"./object-table-U7i4Ks2g.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DVKA9px6.js";import"./Table-D1hqOYTj.js";import"./index-xjAgWE80.js";import"./Dialog-yqI1PCjD.js";import"./cross-Ce5L2vs3.js";import"./svgIconContainer-CEP856Ty.js";import"./useBaseUiId-CvU9jtB4.js";import"./InternalBackdrop-D8Nl1wTF.js";import"./composite-CbaFILzo.js";import"./index-_rIVvBJF.js";import"./index-BisFlCA8.js";import"./index-CilzRk4R.js";import"./useEventCallback-BoX992sc.js";import"./SkeletonBar-Ce6bjEL7.js";import"./LoadingCell-CHzBWt2v.js";import"./ColumnConfigDialog-BdDcClS-.js";import"./DraggableList-BVwXeQ9F.js";import"./Input-BldVSmgU.js";import"./useControlled-klrfy2e5.js";import"./Button-Dl8_S-nu.js";import"./small-cross-CwE1VUWN.js";import"./ActionButton-DWOH-1EL.js";import"./Checkbox-C8832iPx.js";import"./minus-BAU68G9T.js";import"./useValueChanged-Cf4eEP95.js";import"./caret-down-CisoYFST.js";import"./CollapsiblePanel-gMbrp4gW.js";import"./MultiColumnSortDialog-DnvRHefW.js";import"./MenuTrigger-D0OMDS-3.js";import"./CompositeItem-BTy4FVkA.js";import"./ToolbarRootContext-DxbxBlN-.js";import"./getDisabledMountTransitionStyles-Dbwf1Coz.js";import"./getPseudoElementBounds-BoSxbcSn.js";import"./chevron-down-CVV46y4F.js";import"./index-wvYSg08r.js";import"./error-BuErwVjw.js";import"./BaseCbacBanner-DQCOg9ZV.js";import"./makeExternalStore-CRp4eHSV.js";import"./Tooltip-1AG4YkwS.js";import"./PopoverPopup-Igb7F1B8.js";import"./toNumber-lpeY3mbR.js";import"./useOsdkClient-Diy5fZtY.js";import"./DropdownField-7KxmwqB2.js";import"./withOsdkMetrics-C_3kcjB2.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
