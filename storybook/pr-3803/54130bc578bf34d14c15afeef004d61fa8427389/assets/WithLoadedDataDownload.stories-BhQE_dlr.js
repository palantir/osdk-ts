import{f as b,j as a,r as i}from"./iframe-S-vStvKN.js";import{O as u}from"./object-table-Bc2gw699.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BJgwrY7C.js";import"./Table-DpsOR7BT.js";import"./index-CbjwQjV5.js";import"./Dialog-BbuSvdGx.js";import"./cross-BYqG8NZ_.js";import"./svgIconContainer-BJmrTafn.js";import"./useBaseUiId-C0o_RGcW.js";import"./InternalBackdrop-CI81YycS.js";import"./composite-wryo-yVl.js";import"./index-BSoJFv-J.js";import"./index-BAYRy6lS.js";import"./index-B6dHyZSn.js";import"./useEventCallback-C_bR-xWa.js";import"./SkeletonBar-Cs7INo5x.js";import"./LoadingCell-j08RKrR3.js";import"./ColumnConfigDialog-CHXdiGh3.js";import"./DraggableList-CgAY9KZb.js";import"./search-C-pD2cWO.js";import"./Input-BSmAlFZc.js";import"./useControlled-C5Iajxos.js";import"./isEqual-yH-WgjXi.js";import"./isObject-x2M0ZODa.js";import"./Button-DDxw7Nns.js";import"./ActionButton-4oAoiF6k.js";import"./Checkbox-7UO3cE15.js";import"./useValueChanged-C55evCWa.js";import"./CollapsiblePanel-BbO6zUyk.js";import"./MultiColumnSortDialog-dXBnI24o.js";import"./MenuTrigger-IznJiQW7.js";import"./CompositeItem-DeNKjXbZ.js";import"./ToolbarRootContext-CfVJoQTt.js";import"./getDisabledMountTransitionStyles-v2KuCVJ-.js";import"./getPseudoElementBounds-DQxivtBW.js";import"./chevron-down-BMmYWNJW.js";import"./index-CPqJNuLS.js";import"./error-RAN2hlFn.js";import"./BaseCbacBanner-B8gv-HHs.js";import"./makeExternalStore-BfGL_RoB.js";import"./Tooltip-BSG9lXLM.js";import"./PopoverPopup-i_1rED1q.js";import"./toNumber-ByAmdGnI.js";import"./useOsdkClient-Df5LZUPp.js";import"./tick-DyJbbs-Q.js";import"./DropdownField-CQNS3HSI.js";import"./withOsdkMetrics-CLaWF8BQ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
