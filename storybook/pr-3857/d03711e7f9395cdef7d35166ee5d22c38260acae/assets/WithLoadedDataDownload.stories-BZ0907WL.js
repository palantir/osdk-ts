import{f as b,j as a,r as i}from"./iframe-TSCXHIvh.js";import{O as u}from"./object-table-g4jUaBrr.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CyN_qzqo.js";import"./Table-7IyhMdYF.js";import"./index-CGNWdjig.js";import"./Dialog-BrSEEWIj.js";import"./cross-qV010Wi5.js";import"./svgIconContainer-Bphs_oGH.js";import"./useBaseUiId-BRdTeBe9.js";import"./InternalBackdrop-zmDDK70c.js";import"./composite-C_xrzc_v.js";import"./index-DJNFZ_0Y.js";import"./index-CyvvuY01.js";import"./index-365hR3Tz.js";import"./useEventCallback-Q-BuKhlk.js";import"./SkeletonBar-Cn6bvStP.js";import"./LoadingCell-Dc7JZgB1.js";import"./ColumnConfigDialog-B_KblGDd.js";import"./DraggableList-BA7ztIjM.js";import"./search-CbBOTsc7.js";import"./Input-CKK_09LY.js";import"./useControlled-BlC2AddR.js";import"./isEqual-CUbPxmeV.js";import"./isObject-CdyqwF5E.js";import"./Button-DshrbGne.js";import"./ActionButton-BqiSBwhf.js";import"./Checkbox-BOW9gfJ4.js";import"./useValueChanged-D5zyQZ_8.js";import"./CollapsiblePanel-Bv1oor-z.js";import"./MultiColumnSortDialog-BfUJH6qF.js";import"./MenuTrigger-Dzncy3J5.js";import"./CompositeItem-0AIS0Bnl.js";import"./ToolbarRootContext-msQZFx_W.js";import"./getDisabledMountTransitionStyles-DAAaOP18.js";import"./getPseudoElementBounds-DZOzu6Xp.js";import"./chevron-down-BoPRMOEq.js";import"./index-CG_ja6Hi.js";import"./error-B7F78YrU.js";import"./BaseCbacBanner-DMzPVCj_.js";import"./makeExternalStore-B-opuCj0.js";import"./Tooltip-h74fXVzi.js";import"./PopoverPopup-CD6nvj94.js";import"./toNumber-DiHLMfvy.js";import"./useOsdkClient-BjJ_4Cbd.js";import"./tick-B8NR-l3z.js";import"./DropdownField-CA23MMyB.js";import"./withOsdkMetrics-q66YyN3A.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
