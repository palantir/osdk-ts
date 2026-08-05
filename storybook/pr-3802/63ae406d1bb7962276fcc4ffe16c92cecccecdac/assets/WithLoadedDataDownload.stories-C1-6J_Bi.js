import{f as b,j as a,r as i}from"./iframe-DjO1Y5KD.js";import{O as u}from"./object-table-BXEabZx_.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DHosF_Vr.js";import"./Table-CXPmdf4i.js";import"./index-Da8z7oEc.js";import"./Dialog-BvkiDU_U.js";import"./cross-tGA7XqzW.js";import"./svgIconContainer-D6HUiu07.js";import"./useBaseUiId-Cn6_ygUf.js";import"./InternalBackdrop-DC3S6jXh.js";import"./composite-Bd626ASs.js";import"./index-BUxTRb1k.js";import"./index-D93f91Ms.js";import"./index-Dw_Bxqsc.js";import"./useEventCallback-C7x6nWmr.js";import"./SkeletonBar-C-t-5D7v.js";import"./LoadingCell-I1lAaO0m.js";import"./ColumnConfigDialog-D0FmGrhU.js";import"./DraggableList-FCV6IGLZ.js";import"./search-1bd_RPWo.js";import"./Input-DiRNvOoy.js";import"./useControlled-ai9ga_yt.js";import"./isEqual-4uG8zWUg.js";import"./isObject-kNaBNgmh.js";import"./Button-BNxBvJnR.js";import"./ActionButton-BIZrEYUh.js";import"./Checkbox-W-lD-xoQ.js";import"./useValueChanged-KhncHdx6.js";import"./CollapsiblePanel-Dh7E4-x5.js";import"./MultiColumnSortDialog-CpFd9R_l.js";import"./MenuTrigger-OMzSeneh.js";import"./CompositeItem-CRMRF0tg.js";import"./ToolbarRootContext-B8x2s3ZI.js";import"./getDisabledMountTransitionStyles-BRX2szHm.js";import"./getPseudoElementBounds-BDK5ESci.js";import"./chevron-down-pR2fh_mT.js";import"./index-BFpVUcDF.js";import"./error-a7j3r22v.js";import"./BaseCbacBanner--QhyR6T3.js";import"./makeExternalStore-Cp0-nqWS.js";import"./Tooltip-BhgqSq7E.js";import"./PopoverPopup-26HR0rR7.js";import"./toNumber-sv9WmTId.js";import"./useOsdkClient-2X6mK27g.js";import"./tick-CQ81Odyk.js";import"./DropdownField-BItJqzBd.js";import"./withOsdkMetrics-DNr9JQQP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
