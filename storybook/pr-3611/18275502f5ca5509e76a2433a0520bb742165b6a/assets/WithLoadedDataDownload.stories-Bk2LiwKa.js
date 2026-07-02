import{f as b,j as a,r as i}from"./iframe-B5sOYknB.js";import{O as u}from"./object-table-CHPv9jR7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D9dw2WPS.js";import"./Table-BFyTAKen.js";import"./index-DXa5xaN7.js";import"./Dialog-CXijEAbp.js";import"./cross-C8QYKCz4.js";import"./svgIconContainer-Bm-AvMZM.js";import"./useBaseUiId-Dx-UmPey.js";import"./InternalBackdrop-yHLthWOx.js";import"./composite-Bh5IviOX.js";import"./index-KsrOMrxo.js";import"./index-7_8bNiOK.js";import"./index-DFnpba0h.js";import"./useEventCallback-BPTk_SJQ.js";import"./SkeletonBar-DHRo2ej-.js";import"./LoadingCell-uAg3zkBm.js";import"./ColumnConfigDialog-CgFa-Bv8.js";import"./DraggableList-DIm6pc8i.js";import"./search-DmDl6Qzn.js";import"./Input-DPBiEFk6.js";import"./useControlled-CCPUp8nx.js";import"./Button-g0uUMokr.js";import"./small-cross-CZ0z80oK.js";import"./ActionButton-CTBSe4oh.js";import"./Checkbox-Bp9OBdYB.js";import"./minus-C3pu2Lvz.js";import"./tick-Dc-vLbxO.js";import"./useValueChanged-IJ1e42bV.js";import"./caret-down-DbMUYhpY.js";import"./CollapsiblePanel-DKg2RSo7.js";import"./MultiColumnSortDialog-9j7HsuNb.js";import"./MenuTrigger-BTsc3mhP.js";import"./CompositeItem-BVRs5M7S.js";import"./ToolbarRootContext-CaQpawgI.js";import"./getDisabledMountTransitionStyles-CAEvBXDN.js";import"./getPseudoElementBounds-CCIRnoEX.js";import"./chevron-down-Bfpbv1f0.js";import"./index-Cslg85HU.js";import"./error-C1B8oH3J.js";import"./BaseCbacBanner-Lodu9hcu.js";import"./makeExternalStore-A3NBjC7P.js";import"./Tooltip-DsuPiTGx.js";import"./PopoverPopup-YQW6Ui96.js";import"./toNumber-Czb3XD4o.js";import"./useOsdkClient-B8LMQtTV.js";import"./DropdownField-C9Af1g4H.js";import"./withOsdkMetrics-DNYDo4hY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
