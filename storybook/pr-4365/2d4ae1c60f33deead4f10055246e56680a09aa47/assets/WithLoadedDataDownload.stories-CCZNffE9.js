import{f as b,j as a,r as i}from"./iframe-CwoOGB90.js";import{O as u}from"./object-table-BW9qhxFt.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-zjr9DTNv.js";import"./Table-CFVqUtVr.js";import"./index-CZrnOEge.js";import"./Dialog-rGFuYy_L.js";import"./cross-84LZ_c3o.js";import"./svgIconContainer-vpSdtZHg.js";import"./useBaseUiId-CG_HMXOZ.js";import"./InternalBackdrop-2kZ8nvu1.js";import"./composite-CQ1lSzH1.js";import"./index-BP83VGlc.js";import"./index-CtieK9tm.js";import"./index-CIs6h9pu.js";import"./useEventCallback-ByWQ63Gl.js";import"./SkeletonBar-B3HWXV5p.js";import"./LoadingCell-8n9ERDDX.js";import"./ColumnConfigDialog-CnguxUiQ.js";import"./DraggableList-Bso7ySjF.js";import"./search-B4Rhn5WX.js";import"./Input-Bfvllh0J.js";import"./useControlled-CyV_xO7n.js";import"./Button-CzS_tZvQ.js";import"./small-cross-CdfSHMjX.js";import"./ActionButton-BdjYmFRu.js";import"./Checkbox-CBh8ZgCe.js";import"./useValueChanged-d4U5lg5Y.js";import"./CollapsiblePanel-CzzEpLdL.js";import"./MultiColumnSortDialog-7OU1GsVB.js";import"./MenuTrigger-Ct25vTMs.js";import"./CompositeItem-uLTqCAuJ.js";import"./ToolbarRootContext-BHlqCq8I.js";import"./getDisabledMountTransitionStyles-CDwQ_97u.js";import"./getPseudoElementBounds-CxBwOVu1.js";import"./chevron-down-CzfXAkFG.js";import"./index-DRO4fLjt.js";import"./error-D1I108xZ.js";import"./BaseCbacBanner-sNaPb3A4.js";import"./makeExternalStore-BAl3wc3x.js";import"./Tooltip-DoSGgxMu.js";import"./isObject-DBuDBkaL.js";import"./debounce-DjU0zQzn.js";import"./useOsdkClient-CX_eol9_.js";import"./tick-B9GD-hKF.js";import"./DropdownField-DvlmGHHn.js";import"./isEqual-l3DFcAg6.js";import"./_baseIsEqual-By1SU2HG.js";import"./withOsdkMetrics-IkpPb6vj.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
