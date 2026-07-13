import{f as b,j as a,r as i}from"./iframe-DtBbG9ub.js";import{O as u}from"./object-table-Bb2lJtGy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CKqQHump.js";import"./Table-Cx79SsZ-.js";import"./index-BNVRawFZ.js";import"./Dialog-CD0VrbDR.js";import"./cross-DIyvJNHW.js";import"./svgIconContainer-BSDh2cSh.js";import"./useBaseUiId-tUXy-r9e.js";import"./InternalBackdrop-Ctuc6V-v.js";import"./composite-7sC3O7Er.js";import"./index-DvIS35-4.js";import"./index-BEnCWhpy.js";import"./index-D-Y9W4pM.js";import"./useEventCallback-B31xIQy4.js";import"./SkeletonBar-umJNN02Q.js";import"./LoadingCell-DeLl0c0M.js";import"./ColumnConfigDialog-DBc1v7gt.js";import"./DraggableList-CJowRZ4E.js";import"./search-Bsn7yrB3.js";import"./Input-CAYv7kt0.js";import"./useControlled-C7YYJ7SZ.js";import"./Button-Esowa-jc.js";import"./small-cross-BcrTif3u.js";import"./ActionButton-BmkBgDhp.js";import"./Checkbox-UBHMV01U.js";import"./useValueChanged-BXftvbE_.js";import"./CollapsiblePanel-D7kF0Mjz.js";import"./MultiColumnSortDialog-CNdeS0Kb.js";import"./MenuTrigger-s7z1UxN1.js";import"./CompositeItem-BzT3Jsrd.js";import"./ToolbarRootContext-htCg31Ng.js";import"./getDisabledMountTransitionStyles-FKuyrVtO.js";import"./getPseudoElementBounds-CUpPDhu7.js";import"./chevron-down-BtYcm6jh.js";import"./index-BIgVDJqH.js";import"./error-B45wk9AO.js";import"./BaseCbacBanner-CvNqhK-v.js";import"./makeExternalStore-DhJItYLX.js";import"./Tooltip-ArIiOhAv.js";import"./PopoverPopup-Dyi0j7Mk.js";import"./toNumber-4neA1TZq.js";import"./useOsdkClient-D8IXesWp.js";import"./tick-BCjEByk9.js";import"./DropdownField-FQymozOq.js";import"./withOsdkMetrics-AhCC2N-G.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
