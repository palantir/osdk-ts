import{f as b,j as a,r as i}from"./iframe-k4h-5zzl.js";import{O as u}from"./object-table-C2yKQEWd.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CtKZFjaH.js";import"./Table-BEzBRGaA.js";import"./index-BqMGnRYo.js";import"./Dialog-JSocsRSD.js";import"./cross-_-Hiavhb.js";import"./svgIconContainer-COv1P89T.js";import"./useBaseUiId-jXgPCs5e.js";import"./InternalBackdrop-E50mckX1.js";import"./composite-C8LN18L7.js";import"./index-CqUB9DPW.js";import"./index-CeeqzFnD.js";import"./index-BLgIIQqj.js";import"./useEventCallback-C3AU7ikd.js";import"./SkeletonBar-B8X7Dg-I.js";import"./LoadingCell-CVCKnx3u.js";import"./ColumnConfigDialog-DWERtKzT.js";import"./DraggableList-disF6sN5.js";import"./search-BfpwWXDM.js";import"./Input-BdF0e0te.js";import"./useControlled-lQPc9a7B.js";import"./isEqual-DmCchOke.js";import"./isObject-DNpkteE9.js";import"./Button-jv54QSri.js";import"./ActionButton-DEKn2Fl9.js";import"./Checkbox-D7U9KJV5.js";import"./useValueChanged-DYU7rwFM.js";import"./CollapsiblePanel-fBgkiNgc.js";import"./MultiColumnSortDialog-DMNX2-TD.js";import"./MenuTrigger-CTPTlFBs.js";import"./CompositeItem--mieVhVv.js";import"./ToolbarRootContext-DfExoWCc.js";import"./getDisabledMountTransitionStyles-B8ZfNRE7.js";import"./getPseudoElementBounds-BUffwn3y.js";import"./chevron-down-ChMPz-sA.js";import"./index-LVBzDTR0.js";import"./error-CSB6JE83.js";import"./BaseCbacBanner-CsOVPx00.js";import"./makeExternalStore-CzTCHZeg.js";import"./Tooltip-mS1EPd01.js";import"./PopoverPopup-CD-8joZi.js";import"./toNumber-MNRZo_Bl.js";import"./useOsdkClient-Bxt3gioy.js";import"./tick-CUi7ejXl.js";import"./DropdownField-ngKjr3WT.js";import"./withOsdkMetrics-DOza_dhj.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
