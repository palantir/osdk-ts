import{f as b,j as a,r as i}from"./iframe-CM-gF3vE.js";import{O as u}from"./object-table-C32GMorJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-6RfIl02U.js";import"./Table-QO4nURij.js";import"./index-DP8egC0k.js";import"./Dialog-DGgbpeLl.js";import"./cross-YK-JeFcC.js";import"./svgIconContainer-PHQsggTT.js";import"./useBaseUiId-CaS2-N7q.js";import"./InternalBackdrop-BWQN2r6E.js";import"./composite-Cf4jE4TY.js";import"./index-BEBDzy14.js";import"./index-C3IUZqO9.js";import"./index-JlgGEqsp.js";import"./useEventCallback-DWaD4meR.js";import"./SkeletonBar-BEl30Own.js";import"./LoadingCell-DJ4wUhY2.js";import"./ColumnConfigDialog-CSs7gAfE.js";import"./DraggableList-DzEByvv8.js";import"./search-BtBkQ6yC.js";import"./Input-DqavlJne.js";import"./useControlled-BG8DwFhU.js";import"./Button-BzK-RFmN.js";import"./small-cross-BR7O7PTe.js";import"./ActionButton-ESMROX5N.js";import"./Checkbox-pu8Dy_Nr.js";import"./useValueChanged-CM10G8md.js";import"./CollapsiblePanel-CMWBQRO_.js";import"./MultiColumnSortDialog-D7Rvpo7x.js";import"./MenuTrigger-B0ayLht6.js";import"./CompositeItem-D8NXSqvh.js";import"./ToolbarRootContext-CtUDA1Sa.js";import"./getDisabledMountTransitionStyles-CA_1r-E1.js";import"./getPseudoElementBounds-du8OB8QR.js";import"./chevron-down-w3gTlyQy.js";import"./index-C3eh3scJ.js";import"./error-2hF2x4c1.js";import"./BaseCbacBanner-ByAGatso.js";import"./makeExternalStore-BT0R62z7.js";import"./Tooltip-Bwp1W_ff.js";import"./PopoverPopup-Bq82sjKK.js";import"./debounce-BZ1j8w7d.js";import"./useOsdkClient-BXUVBGsy.js";import"./tick-Cz70wbcO.js";import"./DropdownField-DO17CDFv.js";import"./isEqual-tjQhxROU.js";import"./withOsdkMetrics-CARAYaYa.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
