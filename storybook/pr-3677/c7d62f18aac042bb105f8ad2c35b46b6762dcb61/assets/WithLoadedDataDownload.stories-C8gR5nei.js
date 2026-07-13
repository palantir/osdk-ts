import{f as b,j as a,r as i}from"./iframe-DD_zVPyH.js";import{O as u}from"./object-table-JAdZOu4S.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C3tVYw5k.js";import"./Table-DIFZ8Uba.js";import"./index-CV8rnQll.js";import"./Dialog-DWDs1wVa.js";import"./cross-DMz3hSHv.js";import"./svgIconContainer-Dy9DsSKT.js";import"./useBaseUiId-BCgB4FUp.js";import"./InternalBackdrop-DMUIEgcH.js";import"./composite-Dfzn9W6B.js";import"./index-CZvpBUlr.js";import"./index-D4iQYxTA.js";import"./index-CEiGZ32V.js";import"./useEventCallback-Bi0rodtT.js";import"./SkeletonBar-Dl2Q0Wn7.js";import"./LoadingCell-xDWohKJI.js";import"./ColumnConfigDialog-BhGg9waa.js";import"./DraggableList-WVrY_2P5.js";import"./search-DsagKYBy.js";import"./Input-CT0A1psx.js";import"./useControlled-S61qNiWf.js";import"./Button-CYr4vSHb.js";import"./small-cross-BFS926f4.js";import"./ActionButton-C_odmLt4.js";import"./Checkbox-BERtah9R.js";import"./useValueChanged-BNzQvX80.js";import"./CollapsiblePanel-kfv86N3j.js";import"./MultiColumnSortDialog-CLDKedP8.js";import"./MenuTrigger-BOw5EXLV.js";import"./CompositeItem-aMP4Zzfd.js";import"./ToolbarRootContext-q9XcflU-.js";import"./getDisabledMountTransitionStyles-oIJTT0M6.js";import"./getPseudoElementBounds-C4eOBbKl.js";import"./chevron-down-Caji2Yuh.js";import"./index-CCbJn7f3.js";import"./error-DzSBvb9G.js";import"./BaseCbacBanner-Cg9INklY.js";import"./makeExternalStore-BGwMDnSW.js";import"./Tooltip-_pXvKyNf.js";import"./PopoverPopup-B1-4fSjz.js";import"./toNumber-BGHq0wws.js";import"./useOsdkClient-TVtWP486.js";import"./tick-B-eexi08.js";import"./DropdownField-C4Qpl51V.js";import"./withOsdkMetrics-B4fnFgyi.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
