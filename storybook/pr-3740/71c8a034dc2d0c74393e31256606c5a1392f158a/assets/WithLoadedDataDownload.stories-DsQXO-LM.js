import{f as b,j as a,r as i}from"./iframe-B6-_QUtU.js";import{O as u}from"./object-table-Beyrgagy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BDRjb6OB.js";import"./Table-CaYuwbn8.js";import"./index-CAZGJab0.js";import"./Dialog-CtKZ3KtJ.js";import"./cross-D0oGkNoB.js";import"./svgIconContainer-DlKcWleM.js";import"./useBaseUiId-DZx6O2JG.js";import"./InternalBackdrop-APGrKctp.js";import"./composite-DjQ2yLAq.js";import"./index-DvgWcRwX.js";import"./index-BmjgV4Nn.js";import"./index-C6QdS4Xp.js";import"./useEventCallback-CjqjiulM.js";import"./SkeletonBar-CK-xBuVE.js";import"./LoadingCell-DSrkOA-6.js";import"./ColumnConfigDialog-CP0k-Jru.js";import"./DraggableList-DP6k3c64.js";import"./search-B9pHM3fF.js";import"./Input-CN4vw-S9.js";import"./useControlled-CPgNZq1w.js";import"./isEqual-Cysh_gUQ.js";import"./isObject-DU3fNQcc.js";import"./Button-15Cyb3e-.js";import"./ActionButton-DgMrOFUx.js";import"./Checkbox-BD_H-IKF.js";import"./useValueChanged-ClI3F0c3.js";import"./CollapsiblePanel-DZwLlfGP.js";import"./MultiColumnSortDialog-BQzqj-vw.js";import"./MenuTrigger-DRZeqkb_.js";import"./CompositeItem-B1nT4QUA.js";import"./ToolbarRootContext-qv2Bumaf.js";import"./getDisabledMountTransitionStyles-DZeYNS25.js";import"./getPseudoElementBounds-DdOIWP6y.js";import"./chevron-down-BW0wYSCd.js";import"./index-CVf23Dlc.js";import"./error-BmoFbwJM.js";import"./BaseCbacBanner-C8bSamus.js";import"./makeExternalStore-JvLL6ZRj.js";import"./Tooltip-L1oVj3Nu.js";import"./PopoverPopup-BipRmhvE.js";import"./toNumber-CI5PPp00.js";import"./useOsdkClient-Y8hi1mgN.js";import"./tick-BoOipAsX.js";import"./DropdownField-Ciw_6Gj5.js";import"./withOsdkMetrics-BRfC8hFs.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
