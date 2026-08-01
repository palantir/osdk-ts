import{f as b,j as a,r as i}from"./iframe-D1BrYSgn.js";import{O as u}from"./object-table-Bj9JA1Xc.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-x1jfnViK.js";import"./Table-Dqc22tTG.js";import"./index-H1o4gMgc.js";import"./Dialog-CR1UIZo3.js";import"./cross-DKNlp0UL.js";import"./svgIconContainer-CQqlv9TI.js";import"./useBaseUiId-Dvap0bP_.js";import"./InternalBackdrop-DUf4EMeQ.js";import"./composite-D3X73IFC.js";import"./index-BZ-ZbQxZ.js";import"./index-i3VUUG_u.js";import"./index-BJAhCfnS.js";import"./useEventCallback-DIiO76cn.js";import"./SkeletonBar-C60U87_0.js";import"./LoadingCell-DF_FczQR.js";import"./ColumnConfigDialog-ubWDyr1h.js";import"./DraggableList-3I16ODhp.js";import"./search-CwESW8sH.js";import"./Input-C7rXISug.js";import"./useControlled-CefdKsdA.js";import"./isEqual-dQR431dZ.js";import"./isObject-D2ODchoK.js";import"./Button-BqE3w5dA.js";import"./ActionButton-Axn_JdZJ.js";import"./Checkbox-CS2akwig.js";import"./useValueChanged-BEvHhJ0_.js";import"./CollapsiblePanel-aDTeH6iG.js";import"./MultiColumnSortDialog-_IeECp3G.js";import"./MenuTrigger-3WsS15cK.js";import"./CompositeItem-Bb6lkocQ.js";import"./ToolbarRootContext-B-YNIawA.js";import"./getDisabledMountTransitionStyles-OzosozBh.js";import"./getPseudoElementBounds-CtaIpHjM.js";import"./chevron-down-YMA5FLRc.js";import"./index-nPGdI-1b.js";import"./error-Ccjv0zYu.js";import"./BaseCbacBanner-D1FlymIK.js";import"./makeExternalStore-COZpMJn9.js";import"./Tooltip-DQWY4I5i.js";import"./PopoverPopup-Bx9_RsE6.js";import"./toNumber-rHQjPixX.js";import"./useOsdkClient-Bm4EvmOB.js";import"./tick-CCRdabew.js";import"./DropdownField-isqQdDNF.js";import"./withOsdkMetrics-cOiQ1jpU.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
