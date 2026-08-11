import{f as b,j as a,r as i}from"./iframe-DYDbEQjg.js";import{O as u}from"./object-table-BCZcuYAt.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-SJ9dZZVr.js";import"./Table-jlOvRX6Y.js";import"./index-DIR1geUe.js";import"./Dialog-BlDW67rF.js";import"./cross-D_scKixK.js";import"./svgIconContainer-C1TqWZyS.js";import"./useBaseUiId-BR9O5v-S.js";import"./InternalBackdrop-D_zpUOVQ.js";import"./composite-uzlB0y27.js";import"./index-0N5Un70a.js";import"./index-BG296H4M.js";import"./index-XBluGdqc.js";import"./useEventCallback-ZA-7jmPZ.js";import"./SkeletonBar-DztZ_7hK.js";import"./LoadingCell-C4rYAYsL.js";import"./ColumnConfigDialog--r3n0gLY.js";import"./DraggableList-BmmAomr4.js";import"./search-tc_uXOKh.js";import"./Input-HmPeHjJ0.js";import"./useControlled-CZkLI-xA.js";import"./isEqual-CNt8kgZ5.js";import"./isObject-UV1vgElv.js";import"./Button-CAwJXN2j.js";import"./ActionButton-pWQQMavn.js";import"./Checkbox-VhktoMZM.js";import"./useValueChanged-1kQHKx55.js";import"./CollapsiblePanel-BiF0HPtO.js";import"./MultiColumnSortDialog-W7nPKGnq.js";import"./MenuTrigger-DSWiBjxt.js";import"./CompositeItem-BZwtU7Zd.js";import"./ToolbarRootContext-BmRDBYMy.js";import"./getDisabledMountTransitionStyles-BCvw-dnC.js";import"./getPseudoElementBounds-CLG8begh.js";import"./chevron-down-PWwO_bbr.js";import"./index-1nIkSE_C.js";import"./error-DNHX8GsG.js";import"./BaseCbacBanner-C1t1v-iZ.js";import"./makeExternalStore-CGR7TrJA.js";import"./Tooltip-DZTD2XTO.js";import"./PopoverPopup-D8L2GGi3.js";import"./toNumber-C5Y5isVa.js";import"./useOsdkClient-D9j3w30H.js";import"./tick-CkP52Rdl.js";import"./DropdownField-Q5qj9W2N.js";import"./withOsdkMetrics-Bxa30ZAo.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
