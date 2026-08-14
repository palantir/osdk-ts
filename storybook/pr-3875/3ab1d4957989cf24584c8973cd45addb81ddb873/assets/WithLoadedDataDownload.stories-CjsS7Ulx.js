import{f as b,j as a,r as i}from"./iframe-DMVoJ4iR.js";import{O as u}from"./object-table-Dr0nTY0j.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-2MgHTXqS.js";import"./Table-CvfpkPsu.js";import"./index-DMn9f8R_.js";import"./Dialog-DN0C0cMa.js";import"./cross-hEjpS1Bp.js";import"./svgIconContainer-DGDnniJF.js";import"./useBaseUiId-CxU24xuc.js";import"./InternalBackdrop-BsbQ6JQ-.js";import"./composite-DmDE7Rtt.js";import"./index-B7aWWKWU.js";import"./index-C4IlvH8x.js";import"./index-Ctlvw0jX.js";import"./useEventCallback-DFJ99Ojt.js";import"./SkeletonBar-BYsHWmWc.js";import"./LoadingCell-4BXysz7o.js";import"./ColumnConfigDialog-DYAZRZRV.js";import"./DraggableList-BCWDiRF_.js";import"./search-DV_7XP2q.js";import"./Input-B15zNfFM.js";import"./useControlled-DdseA8EX.js";import"./Button-BBvvoDF0.js";import"./small-cross-By6-ZMjH.js";import"./ActionButton-DfKUt1c2.js";import"./Checkbox-CuZM5I5x.js";import"./useValueChanged-BRKcdIOc.js";import"./CollapsiblePanel-DmdilWRt.js";import"./MultiColumnSortDialog-9DXQkG4F.js";import"./MenuTrigger-DI5RRHvY.js";import"./CompositeItem-CMnhxWHR.js";import"./ToolbarRootContext-f6svvjDU.js";import"./getDisabledMountTransitionStyles-FH_XwVyu.js";import"./getPseudoElementBounds-BLc1mo6k.js";import"./chevron-down-vsY3HQGw.js";import"./index-Bi0z85-I.js";import"./error-xQuPRzcR.js";import"./BaseCbacBanner-B6viF84h.js";import"./makeExternalStore-DIAkKSQj.js";import"./Tooltip-Bmw6xpWv.js";import"./PopoverPopup-CREvbd0l.js";import"./debounce-CPaL6Cll.js";import"./useOsdkClient-Clj1Y7ye.js";import"./tick-BQBN13wH.js";import"./DropdownField-DCBCG8s7.js";import"./isEqual-DYTmDhbT.js";import"./withOsdkMetrics-B2MB7rwG.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
