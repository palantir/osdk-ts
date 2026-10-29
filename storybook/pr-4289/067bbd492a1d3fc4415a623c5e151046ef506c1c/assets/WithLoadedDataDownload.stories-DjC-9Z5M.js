import{f as b,j as a,r as i}from"./iframe-BxJiroe5.js";import{O as u}from"./object-table-w9yz1IDQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DLdhLncI.js";import"./Table-CrHDgyUk.js";import"./index-D3_UFpM5.js";import"./Dialog-Bl6vHuaN.js";import"./cross-Bw3wvyRT.js";import"./svgIconContainer-C-ufoPHL.js";import"./useBaseUiId-CsOPh1qV.js";import"./InternalBackdrop-AN7PHPbY.js";import"./composite-BKj-HEYH.js";import"./index-nC3VniDk.js";import"./index-0CUe0U0r.js";import"./index-C_1QgYte.js";import"./useEventCallback-D4kZLjoj.js";import"./SkeletonBar-CGOwo2DD.js";import"./LoadingCell-CvdNH18k.js";import"./ColumnConfigDialog-DOlJ8-4o.js";import"./DraggableList-CD2xfPmV.js";import"./search-JlbJ_F58.js";import"./Input-DEdpGx6f.js";import"./useControlled-DfqnBr2w.js";import"./Button-Bo57TzJg.js";import"./small-cross-CYWa9OHl.js";import"./ActionButton-DQczrpII.js";import"./Checkbox-CePSClb6.js";import"./useValueChanged-Cp5QQiYs.js";import"./CollapsiblePanel-7oLCwys7.js";import"./MultiColumnSortDialog-Cirx4nz-.js";import"./MenuTrigger-VFGNWgnV.js";import"./CompositeItem-BT8yR1a5.js";import"./ToolbarRootContext--suhwR1X.js";import"./getDisabledMountTransitionStyles-DsPFGkAu.js";import"./getPseudoElementBounds-xDGWCFZp.js";import"./chevron-down-DjbhW8-h.js";import"./index-hrPqGcKI.js";import"./error-CmKYwFXp.js";import"./BaseCbacBanner-B2hkiRDH.js";import"./makeExternalStore-CSiVCh7w.js";import"./Tooltip-DMWyzbQ6.js";import"./PopoverPopup-BhS3yPpf.js";import"./debounce-ZBq--l-M.js";import"./useOsdkClient-DDpZHt2c.js";import"./tick-D-qLi4Dk.js";import"./DropdownField-DIb0z1YE.js";import"./isEqual-B9PqxiUA.js";import"./withOsdkMetrics-BDE5PqUj.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
