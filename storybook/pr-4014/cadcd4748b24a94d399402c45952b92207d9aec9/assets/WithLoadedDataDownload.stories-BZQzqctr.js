import{f as b,j as a,r as i}from"./iframe-CUQ6pW6f.js";import{O as u}from"./object-table-BY2xmCUc.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-R0VkCi4m.js";import"./Table-B9k0d-uf.js";import"./index-h-DI9Lrm.js";import"./Dialog-SZ9zV0cP.js";import"./cross-DBScoIN6.js";import"./svgIconContainer-DgxjXUVD.js";import"./useBaseUiId-io2D7EyL.js";import"./InternalBackdrop-DeOAfNuf.js";import"./composite-DVURSZ_Q.js";import"./index-sOt4flAH.js";import"./index-B1pgXqxk.js";import"./index-BwGZQTcg.js";import"./useEventCallback-CBHs8zKc.js";import"./SkeletonBar-BRdyWD8N.js";import"./LoadingCell-GiHphTDn.js";import"./ColumnConfigDialog-BO_mXVOj.js";import"./DraggableList-hV8CyFWc.js";import"./search-NIM10vXd.js";import"./Input-BeRbTOIW.js";import"./useControlled-zbqpEGsi.js";import"./Button-C1Q3ab7J.js";import"./small-cross-IXjjZnoD.js";import"./ActionButton-fmMUa4gl.js";import"./Checkbox-CmojO_tp.js";import"./useValueChanged-DLbw96lb.js";import"./CollapsiblePanel-DptBjV9D.js";import"./MultiColumnSortDialog-R9mxJ5MY.js";import"./MenuTrigger-k5HlBQvB.js";import"./CompositeItem-BFFGDsSt.js";import"./ToolbarRootContext-Bu39Qel7.js";import"./getDisabledMountTransitionStyles-CQIeX0Ub.js";import"./getPseudoElementBounds-Ei-zDx44.js";import"./chevron-down-s1tgkNuZ.js";import"./index-DF9wOV2c.js";import"./error-hc0pOP7n.js";import"./BaseCbacBanner-Dg3AdP8h.js";import"./makeExternalStore-Bm8o0kSK.js";import"./Tooltip-Fo__1c0c.js";import"./PopoverPopup-D70TLWQP.js";import"./debounce-BSpE_UgL.js";import"./useOsdkClient-98hCJrJL.js";import"./tick-Bde80KdX.js";import"./DropdownField-OJ4m5ByP.js";import"./isEqual-DUoNzBVM.js";import"./withOsdkMetrics-C6sVCQ7L.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
