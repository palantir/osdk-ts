import{f as b,j as a,r as i}from"./iframe-DNFazLRo.js";import{O as u}from"./object-table-AP66W_DC.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CSOKbrIj.js";import"./Table-BxtcZ7E1.js";import"./index-D8TskzeX.js";import"./Dialog-DGcnm95O.js";import"./cross-BIdaAy0r.js";import"./svgIconContainer-D3tpgr1_.js";import"./useBaseUiId-Bk1k55aA.js";import"./InternalBackdrop-DnZfkcan.js";import"./composite-SJWY6A2_.js";import"./index-Bwgkh0sx.js";import"./index-DGsBqEMa.js";import"./index-BUi3Bw9s.js";import"./useEventCallback-CXlnvJZE.js";import"./SkeletonBar-k7Kbv1T8.js";import"./LoadingCell-CF0Hy73G.js";import"./ColumnConfigDialog-sleq7Oeb.js";import"./DraggableList-CITdqsb5.js";import"./search-DafmKbOj.js";import"./Input-Bvkv7SHA.js";import"./useControlled-DqGw_9SJ.js";import"./isEqual-BUIYXWqW.js";import"./isObject-BWn2f4Ek.js";import"./Button-Dx6KadTF.js";import"./ActionButton-pxPx36n-.js";import"./Checkbox-CE6K5_Vj.js";import"./useValueChanged-BJKCNwE7.js";import"./CollapsiblePanel-DBAyJYmf.js";import"./MultiColumnSortDialog-DSv0ZuKM.js";import"./MenuTrigger-ChBkGuXs.js";import"./CompositeItem-f4mP3DUQ.js";import"./ToolbarRootContext-DiLS0IHp.js";import"./getDisabledMountTransitionStyles-D68KY3fK.js";import"./getPseudoElementBounds-B85mJiJQ.js";import"./chevron-down-SokcOk50.js";import"./index-VHSNuB9X.js";import"./error-B_y1x8OC.js";import"./BaseCbacBanner-BhQdxXZj.js";import"./makeExternalStore-Cya9wI0B.js";import"./Tooltip-bF5Tbs8Y.js";import"./PopoverPopup-CMyzTC-L.js";import"./toNumber-BEehHCJx.js";import"./useOsdkClient-DQMaEH14.js";import"./tick-CEHYeeOo.js";import"./DropdownField-CUXNOqAA.js";import"./withOsdkMetrics-Rac-iTvD.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
