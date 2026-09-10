import{f as b,j as a,r as i}from"./iframe-Bln2S2Hd.js";import{O as u}from"./object-table-0P7byv91.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D4XaSru4.js";import"./Table-BEkghpit.js";import"./index-D1Ietrlj.js";import"./Dialog-DEyvnXkc.js";import"./cross-wcRc-diA.js";import"./svgIconContainer-BTYpKb3Z.js";import"./useBaseUiId-DzFDj8Yr.js";import"./InternalBackdrop-KP_aOvQ9.js";import"./composite-BlSW-C1U.js";import"./index-BOpwrJ-W.js";import"./index-CnTqZcox.js";import"./index-C16meakn.js";import"./useEventCallback-Bj0pRbTX.js";import"./SkeletonBar-BdZdM1Th.js";import"./LoadingCell-B35XRP0_.js";import"./ColumnConfigDialog-CvyyVNgA.js";import"./DraggableList-DfRqf7-w.js";import"./search-DNt_4LqU.js";import"./Input-CVgkuK1P.js";import"./useControlled-BG_GY85e.js";import"./Button-B9XMX6ms.js";import"./small-cross-E68qj1jZ.js";import"./ActionButton-DDJblqxX.js";import"./Checkbox-BW1T9Qnp.js";import"./useValueChanged-D84JKHV4.js";import"./CollapsiblePanel-_dpQ2gCa.js";import"./MultiColumnSortDialog-DxPIIqla.js";import"./MenuTrigger-BFaGK2P0.js";import"./CompositeItem-D6F0jU5J.js";import"./ToolbarRootContext-z7yzW3tg.js";import"./getDisabledMountTransitionStyles-B2diP31Y.js";import"./getPseudoElementBounds-BoRsn9l4.js";import"./chevron-down-B_NZATAC.js";import"./index-BHIpZYxv.js";import"./error-wBBSXgAg.js";import"./BaseCbacBanner-Br3vpTnB.js";import"./makeExternalStore-CXv5fKfm.js";import"./Tooltip-DgYrqeUf.js";import"./PopoverPopup-C1scz7F7.js";import"./debounce-Chz3lEmw.js";import"./useOsdkClient-8Oo-BI0v.js";import"./tick-CX7gnba2.js";import"./DropdownField-B6DQXdcq.js";import"./isEqual-D-po6U1T.js";import"./withOsdkMetrics-BkrRXFvl.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
