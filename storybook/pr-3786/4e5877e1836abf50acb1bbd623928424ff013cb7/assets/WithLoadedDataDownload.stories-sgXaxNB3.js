import{f as b,j as a,r as i}from"./iframe-MF63RCUZ.js";import{O as u}from"./object-table-B1Ypexgb.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DvQeEzbA.js";import"./Table-BWL-PW0S.js";import"./index-BsS8Ad6v.js";import"./Dialog-CBu8QmP7.js";import"./cross-C5H7VazR.js";import"./svgIconContainer-CzxYuxa2.js";import"./useBaseUiId-D7wMMgsQ.js";import"./InternalBackdrop-qC9vW87x.js";import"./composite-CBfzCsM2.js";import"./index-B1tq7kv6.js";import"./index-B06jfM7c.js";import"./index-BrI0R_vY.js";import"./useEventCallback-DOmeJx8A.js";import"./SkeletonBar-DU19Vxbe.js";import"./LoadingCell-DyARQyNi.js";import"./ColumnConfigDialog-HoXD5K7J.js";import"./DraggableList-CIawcaEC.js";import"./search-4dF9BFi8.js";import"./Input-B6hVPh5g.js";import"./useControlled-TaG5JPxa.js";import"./isEqual-LCBqTXxA.js";import"./isObject-1fyQf0iO.js";import"./Button-Bzl-gWe6.js";import"./ActionButton-Bjwv3Unh.js";import"./Checkbox-Bj0ZVhBK.js";import"./useValueChanged-DTIerqn2.js";import"./CollapsiblePanel-DpUXh9Ij.js";import"./MultiColumnSortDialog-Cxua4UI-.js";import"./MenuTrigger-DSBNJCan.js";import"./CompositeItem-ChERQduX.js";import"./ToolbarRootContext-BoLp0fCS.js";import"./getDisabledMountTransitionStyles-BqGXZg34.js";import"./getPseudoElementBounds-CFon9szC.js";import"./chevron-down-qOKU7sUg.js";import"./index-HZptSSoa.js";import"./error-CctGQP8r.js";import"./BaseCbacBanner-DF0iWHIL.js";import"./makeExternalStore-wceSjJpr.js";import"./Tooltip-Bdp1aQB1.js";import"./PopoverPopup-AmaOsHTk.js";import"./toNumber-Bn5OpuVG.js";import"./useOsdkClient-BEI3rOfS.js";import"./tick-6v28SiNQ.js";import"./DropdownField-C5RPpEqs.js";import"./withOsdkMetrics-Bxcv8v2w.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
