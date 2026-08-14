import{f as b,j as a,r as i}from"./iframe-iQYe401C.js";import{O as u}from"./object-table-CQAKZvn7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BJxdJnS2.js";import"./Table-CZW6W3yy.js";import"./index-Cj4wtDol.js";import"./Dialog-CBrFYyiH.js";import"./cross-TYvUZ_zv.js";import"./svgIconContainer-D--fuUS3.js";import"./useBaseUiId-BaHVsYFy.js";import"./InternalBackdrop-S4bmd6Lm.js";import"./composite-XRaaCNpo.js";import"./index-CdUd9ljx.js";import"./index-CRQmWOJF.js";import"./index-BXM3Dfw8.js";import"./useEventCallback-DBxYjDu9.js";import"./SkeletonBar-DvhrPwLx.js";import"./LoadingCell-B7vN1qdl.js";import"./ColumnConfigDialog-4i9wvyxB.js";import"./DraggableList-COk6-1af.js";import"./search-B3fBbeLu.js";import"./Input-BwZPvKdY.js";import"./useControlled-DFWRskTz.js";import"./Button-Cg1RHP_F.js";import"./small-cross-CU5ZGaMO.js";import"./ActionButton-BGE_oPjS.js";import"./Checkbox-Dwil23Ps.js";import"./useValueChanged-Dc317jR-.js";import"./CollapsiblePanel-BZFSURwn.js";import"./MultiColumnSortDialog-CJozMRHX.js";import"./MenuTrigger-DN5oXxmx.js";import"./CompositeItem-CnHJu7Fq.js";import"./ToolbarRootContext-Qv2LHZju.js";import"./getDisabledMountTransitionStyles-BornKuZB.js";import"./getPseudoElementBounds-SeQsgf4Z.js";import"./chevron-down-CJ48f6Cy.js";import"./index-BtxoyDek.js";import"./error-5BtLRQh_.js";import"./BaseCbacBanner-CB5UjwFo.js";import"./makeExternalStore-CHwacdcE.js";import"./Tooltip-sxUSyvW-.js";import"./PopoverPopup-BxUICyhU.js";import"./debounce-BzmjoLzO.js";import"./useOsdkClient-CZTlJRJQ.js";import"./tick-BFnnzHdi.js";import"./DropdownField-BLF6TyfM.js";import"./isEqual-DiXstpw3.js";import"./withOsdkMetrics-BYb2lN1I.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
