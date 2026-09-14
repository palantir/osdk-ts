import{f as b,j as a,r as i}from"./iframe-jYOV-b_F.js";import{O as u}from"./object-table-ER46Kqbv.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DU4dp1aN.js";import"./Table-CXyVPfAi.js";import"./index-Dy8g3oXx.js";import"./Dialog-DpEqyY2P.js";import"./cross-CihzmSlG.js";import"./svgIconContainer-CA_JwY2G.js";import"./useBaseUiId-D96OAV6j.js";import"./InternalBackdrop-DVW8uuqD.js";import"./composite-BzmrUUlD.js";import"./index-BeEj2nqC.js";import"./index-ClDKgmxW.js";import"./index-CukOFad8.js";import"./useEventCallback-CNXNkFCl.js";import"./SkeletonBar-DqT3CGGg.js";import"./LoadingCell-ZjH9jQZw.js";import"./ColumnConfigDialog-Dg5oJQCG.js";import"./DraggableList-stnRBhBr.js";import"./search-D-KgauV4.js";import"./Input-BMUKzcaw.js";import"./useControlled-BTG7h9NE.js";import"./Button-CWhgA2iR.js";import"./small-cross-D0bLxDZ1.js";import"./ActionButton-Dpswcr4W.js";import"./Checkbox-CVZRyAn3.js";import"./useValueChanged-DnbYI7cR.js";import"./CollapsiblePanel-BdQ-xqqb.js";import"./MultiColumnSortDialog-JSm3rIAr.js";import"./MenuTrigger-DXF12vt5.js";import"./CompositeItem-kjf0evVY.js";import"./ToolbarRootContext-Cv9is8EX.js";import"./getDisabledMountTransitionStyles-cOn0IGzp.js";import"./getPseudoElementBounds-aXTAgs7l.js";import"./chevron-down-CXyzKCEE.js";import"./index-DpuVJhHU.js";import"./error-DuFL7DmE.js";import"./BaseCbacBanner-DmrBjJVa.js";import"./makeExternalStore-DApOP_f0.js";import"./Tooltip-DJD3gADX.js";import"./PopoverPopup-BPI3lODj.js";import"./debounce-Cc847J6k.js";import"./useOsdkClient-vN6DzTqs.js";import"./tick-DkNi67AQ.js";import"./DropdownField-Zx-CWRyR.js";import"./isEqual-l4wrNuCJ.js";import"./withOsdkMetrics-D5SCgg1V.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
