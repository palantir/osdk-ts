import{f as b,j as a,r as i}from"./iframe-Cx4Ki0JG.js";import{O as u}from"./object-table-KIYmD8vF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D2p_ObaP.js";import"./Table-DHg8T9nw.js";import"./index-HnQbfWf4.js";import"./Dialog-Dp3ul1Sg.js";import"./cross-DY4qmy__.js";import"./svgIconContainer-CsN3cDK3.js";import"./useBaseUiId-BUi4NF8Q.js";import"./InternalBackdrop-CRD_XdlA.js";import"./composite-B6vW5PwB.js";import"./index-BpfDO8te.js";import"./index-BqpatvoO.js";import"./index-DSOvRsd-.js";import"./useEventCallback-CFSMqNt0.js";import"./SkeletonBar-CnL4ia99.js";import"./LoadingCell-Bu6rJPe8.js";import"./ColumnConfigDialog-CllSb7SU.js";import"./DraggableList-C7jxuUyU.js";import"./search-epSbqOXw.js";import"./Input-DV3d6RQh.js";import"./useControlled-D7I_6zSS.js";import"./Button-CEafUq7E.js";import"./small-cross-C8hl4Qtf.js";import"./ActionButton-DdbmGvNS.js";import"./Checkbox-Cwq_CA04.js";import"./minus-a4vDQSG5.js";import"./tick-Db3KzbVe.js";import"./useValueChanged-Bx_jvtHU.js";import"./caret-down-DiFr3ifQ.js";import"./CollapsiblePanel-DDXTYfe5.js";import"./MultiColumnSortDialog-u8ImQsb0.js";import"./MenuTrigger-DXiN1CCF.js";import"./CompositeItem-C8Jrf0jR.js";import"./ToolbarRootContext-BirgvTm4.js";import"./getDisabledMountTransitionStyles-DZe9SMT8.js";import"./getPseudoElementBounds-BMfQuLdy.js";import"./chevron-down-CTViWNjd.js";import"./index-CdXFAStN.js";import"./error-DpG7omXV.js";import"./BaseCbacBanner-DTeY0Vse.js";import"./makeExternalStore-CWOgYEOJ.js";import"./Tooltip-BmniHvpm.js";import"./PopoverPopup-7_Mcfitl.js";import"./toNumber-Cyvuaxgc.js";import"./useOsdkClient-DCXVh-Td.js";import"./DropdownField-BwCLgZR6.js";import"./withOsdkMetrics-neHI8iGf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
