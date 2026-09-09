import{f as b,j as a,r as i}from"./iframe-XZT6dXfR.js";import{O as u}from"./object-table-BQSE7qsB.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bq4RjIN3.js";import"./Table-BS9XaZPa.js";import"./index-DBmC_ZXQ.js";import"./Dialog-B2xCcXCg.js";import"./cross-DhoAWiHd.js";import"./svgIconContainer-CU7rRNTz.js";import"./useBaseUiId-B8UoJpnF.js";import"./InternalBackdrop-CIqXcp3k.js";import"./composite-8to6_dHI.js";import"./index-CNzOt5rB.js";import"./index-DBvBEYmO.js";import"./index-CwmKjwjW.js";import"./useEventCallback-CrcHZf2i.js";import"./SkeletonBar-QCqk1NFT.js";import"./LoadingCell-B5xITLxa.js";import"./ColumnConfigDialog-D5p_98S6.js";import"./DraggableList-B9SHbjAV.js";import"./search-JQ5a7a7P.js";import"./Input-ieeoajuX.js";import"./useControlled-eor914uw.js";import"./Button-CFmpzwcx.js";import"./small-cross-Bs01bh1t.js";import"./ActionButton-tWe0lZ3U.js";import"./Checkbox-CAfM_O_2.js";import"./useValueChanged-BiHw7QxN.js";import"./CollapsiblePanel-B1faMpX3.js";import"./MultiColumnSortDialog-BsF5urer.js";import"./MenuTrigger-BxQzviuH.js";import"./CompositeItem-CFpArZRZ.js";import"./ToolbarRootContext-DmE1Zvel.js";import"./getDisabledMountTransitionStyles-DOuJdwmK.js";import"./getPseudoElementBounds-yKX43mtP.js";import"./chevron-down-7slW-jes.js";import"./index-CAFrt6ka.js";import"./error-CE5bRqvK.js";import"./BaseCbacBanner-Ca9YHGdr.js";import"./makeExternalStore-DkP425EE.js";import"./Tooltip-COCJMSAT.js";import"./PopoverPopup-BDOMby4V.js";import"./debounce-DSg_tuNC.js";import"./useOsdkClient-JmfcqbuF.js";import"./tick-wmOq-VtM.js";import"./DropdownField-r6GmTP-a.js";import"./isEqual-DhcMgsNP.js";import"./withOsdkMetrics-waGd8POl.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
