import{f as b,j as a,r as i}from"./iframe-DTR6D-RF.js";import{O as u}from"./object-table-Bjfm0_ZT.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-a_j-25GL.js";import"./Table-B0acF-0Q.js";import"./index-D7jWhYyZ.js";import"./Dialog-DqgJLJgO.js";import"./cross-DUXytXdv.js";import"./svgIconContainer-CTdZIA2H.js";import"./useBaseUiId-CSnUW2G1.js";import"./InternalBackdrop-CY4cyQPU.js";import"./composite-DubVH8wK.js";import"./index-CIoynBUP.js";import"./index-CeaWSZor.js";import"./index-DwZqbG9c.js";import"./useEventCallback-CPGNRTIC.js";import"./SkeletonBar-DG2N76Ak.js";import"./LoadingCell-Dk35W7vs.js";import"./ColumnConfigDialog-CF6C06HS.js";import"./DraggableList-CjhpS4Hz.js";import"./search-CA4ezTkI.js";import"./Input-BfVNpYWX.js";import"./useControlled-BQyYOX0S.js";import"./Button-B369yMXX.js";import"./small-cross-_n8UDI8I.js";import"./ActionButton-odMXA6JR.js";import"./Checkbox-C4M9YdoL.js";import"./useValueChanged-uq3nMm5M.js";import"./CollapsiblePanel-Cb8omPWi.js";import"./MultiColumnSortDialog-COoHnAmD.js";import"./MenuTrigger-BPyZedSc.js";import"./CompositeItem-DiX4k7Pe.js";import"./ToolbarRootContext-CUq0HOW2.js";import"./getDisabledMountTransitionStyles-sZ7HosF-.js";import"./getPseudoElementBounds-Bk-aKJSe.js";import"./chevron-down-D061nHxl.js";import"./index-DOZx46pQ.js";import"./error-ComocNo0.js";import"./BaseCbacBanner-CYKrO8dC.js";import"./makeExternalStore-HP359Ggt.js";import"./Tooltip-M1ezUcrB.js";import"./isObject-BdCdgIbL.js";import"./debounce-C9Yqr-CS.js";import"./useOsdkClient-s4ovKcdr.js";import"./tick-MViIMcR9.js";import"./DropdownField-pISV7PG6.js";import"./isEqual-CGllARYm.js";import"./_baseIsEqual-Ds4CNB4I.js";import"./withOsdkMetrics-BM7BKbHu.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
