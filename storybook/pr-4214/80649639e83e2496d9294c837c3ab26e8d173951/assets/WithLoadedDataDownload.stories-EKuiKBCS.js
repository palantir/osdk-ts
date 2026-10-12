import{f as b,j as a,r as i}from"./iframe-EQYHZGCW.js";import{O as u}from"./object-table-D9hNiE1B.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D0iBIgcV.js";import"./Table-Cf4en3W7.js";import"./index-DcRUH42g.js";import"./Dialog-D9xIFL2n.js";import"./cross-C8-00d-y.js";import"./svgIconContainer-D1wDh7_l.js";import"./useBaseUiId-B-jRpzmU.js";import"./InternalBackdrop-eYIHjnQ3.js";import"./composite-CIqX99J4.js";import"./index-CKjEOO1w.js";import"./index-CIgaZG3c.js";import"./index-D0Wo5FO3.js";import"./useEventCallback-BSME_xf2.js";import"./SkeletonBar-3kB07n5e.js";import"./LoadingCell-lCcSsnES.js";import"./ColumnConfigDialog-DXmrsezo.js";import"./DraggableList-BL7JJ4PT.js";import"./search-BVTqMz5e.js";import"./Input-C4K0OIlf.js";import"./useControlled-D8_Vw_1O.js";import"./Button-DiwOmMcV.js";import"./small-cross-CbxvG1Lp.js";import"./ActionButton-3hxbNss0.js";import"./Checkbox-ERk9uuCO.js";import"./useValueChanged-DhKLyqGQ.js";import"./CollapsiblePanel-BfN11z03.js";import"./MultiColumnSortDialog-Cze2u-4H.js";import"./MenuTrigger-CEzznRiL.js";import"./CompositeItem-Bzt8qu7P.js";import"./ToolbarRootContext-DFyHSe1V.js";import"./getDisabledMountTransitionStyles-DstXpz2X.js";import"./getPseudoElementBounds-B45YCg5U.js";import"./chevron-down-HP5bea9D.js";import"./index-DVNPKMaj.js";import"./error-Cd2sdUKV.js";import"./BaseCbacBanner-B4yymivw.js";import"./makeExternalStore-CxRQlBs2.js";import"./Tooltip-D1rS0CVa.js";import"./PopoverPopup-wEOR7HLL.js";import"./debounce-EHAoHJMy.js";import"./useOsdkClient-CuIzd9gl.js";import"./tick-DTY36Y1v.js";import"./DropdownField-Dyd5qMS9.js";import"./isEqual-D4DzFFxH.js";import"./withOsdkMetrics-Dwt30EQ7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
