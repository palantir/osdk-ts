import{f as b,j as a,r as i}from"./iframe-WZlHWuAl.js";import{O as u}from"./object-table-BS2yyFqB.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BqNO_kYB.js";import"./Table-DzYUOamN.js";import"./index-0vBrLGcy.js";import"./Dialog-61zk0m-2.js";import"./cross-8Hm1XohM.js";import"./svgIconContainer-B-i_bEns.js";import"./useBaseUiId-BixrlMbu.js";import"./InternalBackdrop-BwdMjQMe.js";import"./composite-B7hu--yZ.js";import"./index-BntjzrUj.js";import"./index-Bdw5YJLj.js";import"./index-DGEXx3lA.js";import"./useEventCallback-DDX_rz7n.js";import"./SkeletonBar-81KCyxnx.js";import"./LoadingCell-PjzYnJ5y.js";import"./ColumnConfigDialog-CXzLWyzJ.js";import"./DraggableList-C1734WlY.js";import"./search-BgC_pDzB.js";import"./Input-dA6DFlkG.js";import"./useControlled-DYsSBYkU.js";import"./isEqual-Qud4ubs9.js";import"./isObject-vLQbU_Zm.js";import"./Button--FVbK81A.js";import"./ActionButton-CCWCa9K1.js";import"./Checkbox-XzRZFc-W.js";import"./useValueChanged-BupysOrS.js";import"./CollapsiblePanel-DTEsxWXa.js";import"./MultiColumnSortDialog-CT0IyEHL.js";import"./MenuTrigger-CfrEf1Q3.js";import"./CompositeItem-CezuKAKD.js";import"./ToolbarRootContext-BAoi7Hqr.js";import"./getDisabledMountTransitionStyles-UJn44PGJ.js";import"./getPseudoElementBounds-ConDPen6.js";import"./chevron-down-YKEUt5BK.js";import"./index-D0Os6pCH.js";import"./error-Dm7h3fk8.js";import"./BaseCbacBanner-DncYBeT4.js";import"./makeExternalStore-otuFfb0r.js";import"./Tooltip-ChWSLUgR.js";import"./PopoverPopup-DQXEljrv.js";import"./toNumber-C9tQGy0i.js";import"./useOsdkClient-DaEGhStw.js";import"./tick-CpCiF0s6.js";import"./DropdownField-BkRnf6XA.js";import"./withOsdkMetrics-ClykSytW.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
