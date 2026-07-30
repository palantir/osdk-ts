import{f as b,j as a,r as i}from"./iframe-Do-wqPAG.js";import{O as u}from"./object-table-UJDj7Pip.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DHrLiF_n.js";import"./Table-BZ642NUv.js";import"./index-Cy5rkzVX.js";import"./Dialog-CA5QjSY1.js";import"./cross-CvbnaeZH.js";import"./svgIconContainer-B89O08Vs.js";import"./useBaseUiId-Cgco29RD.js";import"./InternalBackdrop-DAEAk3PQ.js";import"./composite-CTJiCA6q.js";import"./index-DSZYY9yk.js";import"./index-Bs0rsg0r.js";import"./index-Dgbj4Zle.js";import"./useEventCallback-BCn0kh8o.js";import"./SkeletonBar-CgBocCWF.js";import"./LoadingCell-CH8O2fMl.js";import"./ColumnConfigDialog-DnldAJIK.js";import"./DraggableList-Jbf3dttK.js";import"./search-DfQ-5ttz.js";import"./Input-C7FUOEIR.js";import"./useControlled-BtQf2Mdn.js";import"./isEqual-Bx02XkV9.js";import"./isObject-56Ux56Kw.js";import"./Button-B4RKA1pV.js";import"./ActionButton-BP759aJc.js";import"./Checkbox-BwPxHa9w.js";import"./useValueChanged-BVaiV3kA.js";import"./CollapsiblePanel-DaFAODqE.js";import"./MultiColumnSortDialog-DJw8x3NY.js";import"./MenuTrigger-CjUQpjMe.js";import"./CompositeItem-BVuMRAPI.js";import"./ToolbarRootContext-DVSI0mCZ.js";import"./getDisabledMountTransitionStyles-BRGxIDFh.js";import"./getPseudoElementBounds-y3XhV5qP.js";import"./chevron-down-DEIKb6Ni.js";import"./index-DZMhpjfz.js";import"./error-B7QP6y9O.js";import"./BaseCbacBanner-BUyAOuoM.js";import"./makeExternalStore-1XgCgHrd.js";import"./Tooltip-JgW5ULFO.js";import"./PopoverPopup-CNKh6j6z.js";import"./toNumber-DD6BW-qV.js";import"./useOsdkClient-CURfGYsm.js";import"./tick-CxfWNdz3.js";import"./DropdownField-Bs1JY16h.js";import"./withOsdkMetrics-CZzkghnK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
