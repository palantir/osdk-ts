import{f as b,j as a,r as i}from"./iframe-DieBzf9y.js";import{O as u}from"./object-table-CzgcEj7q.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-nfOhyenq.js";import"./Table-mgmK28yq.js";import"./index-CueLTBHP.js";import"./Dialog-CucEWtTN.js";import"./cross-t6O5j7uz.js";import"./svgIconContainer-C4rlmgrB.js";import"./useBaseUiId-Bxe_lFSq.js";import"./InternalBackdrop-BaJX2BYz.js";import"./composite-BvpzVpYi.js";import"./index-BSQeylJ3.js";import"./index-QupaIjGx.js";import"./index-aUc9Sjup.js";import"./useEventCallback-jKF40GPJ.js";import"./SkeletonBar-Bkw74uaU.js";import"./LoadingCell-Bn1mln2z.js";import"./ColumnConfigDialog-BfTmuxU1.js";import"./DraggableList-BrHzCLgw.js";import"./search-LxBHfv5l.js";import"./Input-Ckaolz8l.js";import"./useControlled-D4dAPTSV.js";import"./Button-C1caW-IN.js";import"./small-cross-jMIhgwaN.js";import"./ActionButton-CYr-60__.js";import"./Checkbox-U1Coys9e.js";import"./useValueChanged-DqTy5Eu1.js";import"./CollapsiblePanel-LFl_eO9r.js";import"./MultiColumnSortDialog-DpV27w9t.js";import"./MenuTrigger-s30URI7X.js";import"./CompositeItem-Bk12yzpP.js";import"./ToolbarRootContext-SW8tVZST.js";import"./getDisabledMountTransitionStyles-DXokCC_W.js";import"./getPseudoElementBounds-D6AwDuKV.js";import"./chevron-down-MpT91KZy.js";import"./index-BvOU7Oie.js";import"./error-BL3TgcOC.js";import"./BaseCbacBanner-D2rM26K6.js";import"./makeExternalStore-Bmuig1mM.js";import"./Tooltip-aV81X3rV.js";import"./PopoverPopup-BZdc9gni.js";import"./debounce-C1gLi99b.js";import"./useOsdkClient-DA_4AswE.js";import"./tick-DDUBOGMn.js";import"./DropdownField-B2xBQaH4.js";import"./isEqual-DMfYGbcT.js";import"./withOsdkMetrics-LkUW4C5C.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
