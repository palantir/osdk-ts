import{f as b,j as a,r as i}from"./iframe-DYVamJ0c.js";import{O as u}from"./object-table-DblF4JDE.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BKQhuHFM.js";import"./Table-DP--Ko5L.js";import"./index-DDVzKPeS.js";import"./Dialog-BdGRGrER.js";import"./cross-ZvvnBvAW.js";import"./svgIconContainer-DDKAKQ5N.js";import"./useBaseUiId-Dp5szWtR.js";import"./InternalBackdrop-Y7EEmORf.js";import"./composite-DvVYIwpT.js";import"./index-CS_faMAq.js";import"./index-4i5nJL9N.js";import"./index-D6PjjnI1.js";import"./useEventCallback-It5AU2GK.js";import"./SkeletonBar-U_6zsVeg.js";import"./LoadingCell-B68td28d.js";import"./ColumnConfigDialog-DjgJXpSK.js";import"./DraggableList-Dzg79a4e.js";import"./search-CNj8TXQm.js";import"./Input-BJ9fIVV-.js";import"./useControlled-rbncU9dQ.js";import"./isEqual-D9FM6jV5.js";import"./isObject-CWjh4YEm.js";import"./Button-B0mGoHRN.js";import"./ActionButton--6p0rxTX.js";import"./Checkbox-qhAqN2iD.js";import"./useValueChanged-BLJdW2rA.js";import"./CollapsiblePanel-CwNM9_AI.js";import"./MultiColumnSortDialog-BR-X1BMR.js";import"./MenuTrigger-B11uQSdh.js";import"./CompositeItem-BBaNk5MK.js";import"./ToolbarRootContext-1-HwXect.js";import"./getDisabledMountTransitionStyles-B41_0Tyr.js";import"./getPseudoElementBounds-BnEX3Sqz.js";import"./chevron-down-CDvyxAm0.js";import"./index-ClMUYth_.js";import"./error-BsbpZONe.js";import"./BaseCbacBanner-BqnpFmEE.js";import"./makeExternalStore-Ci8gWGJ6.js";import"./Tooltip-RCvIwlHR.js";import"./PopoverPopup-jsI3MN-h.js";import"./toNumber-58R2wJ1m.js";import"./useOsdkClient-DZnVKV7U.js";import"./tick-D-N2RUy5.js";import"./DropdownField-5xkyWwwi.js";import"./withOsdkMetrics-DIqDKAks.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
