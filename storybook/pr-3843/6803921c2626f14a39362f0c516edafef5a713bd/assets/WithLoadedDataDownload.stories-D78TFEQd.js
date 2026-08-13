import{f as b,j as a,r as i}from"./iframe-CBr1o5iR.js";import{O as u}from"./object-table-CuJQ117O.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C74Zs9Qj.js";import"./Table-Cwim2QE1.js";import"./index-BUnoFm4T.js";import"./Dialog-XfW09A5R.js";import"./cross-COUmmIjR.js";import"./svgIconContainer-BfpQZBbK.js";import"./useBaseUiId-B-WY1xvV.js";import"./InternalBackdrop-BK9t79dJ.js";import"./composite-CjSMUHiF.js";import"./index-Bl6CdKL7.js";import"./index-D63as4vf.js";import"./index-BJUK4yUC.js";import"./useEventCallback-C1Y3Qpyp.js";import"./SkeletonBar-C0jy6f_e.js";import"./LoadingCell-B3zo1-Lq.js";import"./ColumnConfigDialog-DmwsYXZH.js";import"./DraggableList-DwIvpdSM.js";import"./search-DiTFA1qk.js";import"./Input-80YhWUbK.js";import"./useControlled-BvEl2Zx8.js";import"./isEqual-BLVz25eK.js";import"./isObject-D-X-xMro.js";import"./Button-BATNsIkC.js";import"./ActionButton-BfnSKlp2.js";import"./Checkbox-LYqyex1v.js";import"./useValueChanged-CYqSlkeM.js";import"./CollapsiblePanel-BQKTqvEi.js";import"./MultiColumnSortDialog-DAM3B_eA.js";import"./MenuTrigger-BddPBcWL.js";import"./CompositeItem-Bzks3A9T.js";import"./ToolbarRootContext-CAjQ8J-W.js";import"./getDisabledMountTransitionStyles-xPcadgCj.js";import"./getPseudoElementBounds-DhFt5lJS.js";import"./chevron-down-CeEcx8XI.js";import"./index-QEFR3hOZ.js";import"./error-BUZq3IDN.js";import"./BaseCbacBanner-Bomh_2PN.js";import"./makeExternalStore-B8_1tONR.js";import"./Tooltip-DhBv5yUJ.js";import"./PopoverPopup-D1AQ-qyT.js";import"./toNumber-ClLyCc0o.js";import"./useOsdkClient-DdlXi9P2.js";import"./tick-Cz1Ojot5.js";import"./DropdownField-DkcmVDs6.js";import"./withOsdkMetrics-BvV4fjpx.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
