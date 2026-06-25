import{f as b,j as a,r as i}from"./iframe-BcY103pq.js";import{O as u}from"./object-table-MmXmLPq0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CJP2zoNP.js";import"./Table-epjG4XNw.js";import"./index-DA-g1Ciy.js";import"./Dialog-BdePHsVy.js";import"./cross-CM51o3Of.js";import"./svgIconContainer-WUryhlJd.js";import"./useBaseUiId-BoZrpPzk.js";import"./InternalBackdrop-CiW8cBjI.js";import"./composite-CLV6W6dc.js";import"./index-B1zie9Yb.js";import"./index-Cf6-jKZO.js";import"./index-DLoXvQUY.js";import"./useEventCallback-BkIp0-FI.js";import"./SkeletonBar-CRG7gb8h.js";import"./LoadingCell-rpLp5Ga9.js";import"./ColumnConfigDialog-Dgaop-Px.js";import"./DraggableList-CGI9CxKt.js";import"./Input-PTZNblo7.js";import"./useControlled-AOm1PlVZ.js";import"./Button-DGjow146.js";import"./small-cross-B8QI1y16.js";import"./ActionButton-CKICTav8.js";import"./Checkbox-DRcGotXQ.js";import"./minus-iLMQbXok.js";import"./useValueChanged-DskkBt9T.js";import"./caret-down-vjk_OpRE.js";import"./CollapsiblePanel-g_G-z8Ul.js";import"./MultiColumnSortDialog-BpM1nDIy.js";import"./MenuTrigger-DVhyzWYb.js";import"./CompositeItem-FyK97BZ9.js";import"./ToolbarRootContext-tHrQMUDQ.js";import"./getDisabledMountTransitionStyles-2W0eiVYv.js";import"./getPseudoElementBounds-CcD0GPdU.js";import"./chevron-down-B6g8Iii5.js";import"./index-HsmHBn9G.js";import"./error-GFWyuojU.js";import"./BaseCbacBanner-FQIAG65f.js";import"./makeExternalStore-BqdcM3fH.js";import"./Tooltip-B5iALqTg.js";import"./PopoverPopup-B2-oEIU5.js";import"./toNumber-CaJHY1Gr.js";import"./useOsdkClient-B-kDOsEl.js";import"./DropdownField-Dat0nMWG.js";import"./withOsdkMetrics-DHoq9PvA.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
