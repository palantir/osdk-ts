import{f as b,j as a,r as i}from"./iframe-BiX95vgM.js";import{O as u}from"./object-table-BNQm4Bsr.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DWnaR-1b.js";import"./Table-acSUwZXb.js";import"./index-BabfefxA.js";import"./Dialog-BDQ5_Bfx.js";import"./cross-C7wa8kmV.js";import"./svgIconContainer-BCrh5jbf.js";import"./useBaseUiId-CQekfIk1.js";import"./InternalBackdrop-CE-LWvCh.js";import"./composite-KUIWn9JP.js";import"./index-CqOEHXIi.js";import"./index-DsTIq2po.js";import"./index-k1PdwCZb.js";import"./useEventCallback-Cmi2IqX2.js";import"./SkeletonBar-B9Rdl8b0.js";import"./LoadingCell-CNYJZaMp.js";import"./ColumnConfigDialog-B8jLQSvW.js";import"./DraggableList-J8UJKRI9.js";import"./search-BRep0j7S.js";import"./Input-mW8oBDz9.js";import"./useControlled-B0weLlnb.js";import"./Button-DbzWoDvM.js";import"./small-cross-Boqia_iR.js";import"./ActionButton-BsI0HZIG.js";import"./Checkbox-DEa-GyN1.js";import"./useValueChanged-DAGoXpR0.js";import"./CollapsiblePanel-COHaPPM9.js";import"./MultiColumnSortDialog-CTF13iwp.js";import"./MenuTrigger-D5WFLw3j.js";import"./CompositeItem-BFJIxEVd.js";import"./ToolbarRootContext-DqKQJUCi.js";import"./getDisabledMountTransitionStyles-B3gRsSQK.js";import"./getPseudoElementBounds-wEO7NvSI.js";import"./chevron-down-Qcf4cgke.js";import"./index-BdjoCnA2.js";import"./error-Bo4C15lT.js";import"./BaseCbacBanner-9jPJRVZK.js";import"./makeExternalStore-BiSG9WI-.js";import"./Tooltip-CAv1GjkH.js";import"./PopoverPopup-BhUB52O1.js";import"./debounce-DvrF_ne3.js";import"./useOsdkClient-CBCEya-4.js";import"./tick-DJUMmsvK.js";import"./DropdownField-DzcwNOIS.js";import"./isEqual-6CvQLIm3.js";import"./withOsdkMetrics-Bu7X3_wp.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
