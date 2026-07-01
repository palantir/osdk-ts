import{f as b,j as a,r as i}from"./iframe-DQvr3Jav.js";import{O as u}from"./object-table-B9L6alf-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ooBoNhn5.js";import"./Table-D2LWz6vJ.js";import"./index-BRCt6cxp.js";import"./Dialog-Dcyog95-.js";import"./cross-tGtcXHr6.js";import"./svgIconContainer-Ds2UL7bh.js";import"./useBaseUiId-LTESy3J9.js";import"./InternalBackdrop-Dk-UFsOZ.js";import"./composite-Ce57nFUb.js";import"./index-Cte7Z4aK.js";import"./index-Cnz5kJ0H.js";import"./index-DNoWe7V0.js";import"./useEventCallback-D79hwGDr.js";import"./SkeletonBar-x2w2024c.js";import"./LoadingCell-DpgJ6CrN.js";import"./ColumnConfigDialog-D3t4h60p.js";import"./DraggableList-CqrlPTeU.js";import"./search-BYW5nvbF.js";import"./Input-ByClYEaD.js";import"./useControlled-nB7_8tNr.js";import"./Button-68wzuZBE.js";import"./small-cross-DhXa_Rna.js";import"./ActionButton-DIY3pCd_.js";import"./Checkbox-izOG_FO4.js";import"./minus-C_9UKEBH.js";import"./tick-BvMDCgWS.js";import"./useValueChanged-BdCl9dqj.js";import"./caret-down-cOc3SO6v.js";import"./CollapsiblePanel-DSS250YF.js";import"./MultiColumnSortDialog-BdVCnlQJ.js";import"./MenuTrigger-DrYhO2tR.js";import"./CompositeItem-sAparfMV.js";import"./ToolbarRootContext-B3YjyvfT.js";import"./getDisabledMountTransitionStyles-BNJ4rgcA.js";import"./getPseudoElementBounds-D2yTYCyw.js";import"./chevron-down-Hj0rJYvj.js";import"./index-T0HFBwjj.js";import"./error-CEIJFE1k.js";import"./BaseCbacBanner-Cg7nLLQI.js";import"./makeExternalStore-B9TvfVcA.js";import"./Tooltip-COhdFvWD.js";import"./PopoverPopup-CF8Gl_GG.js";import"./toNumber-CwIApCEa.js";import"./useOsdkClient-CshpMI6P.js";import"./DropdownField-CrC7cxgl.js";import"./withOsdkMetrics-iyY5gpTp.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
