import{f as b,j as a,r as i}from"./iframe-YacpH74x.js";import{O as u}from"./object-table-CzLcdutJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-2LzXwrqd.js";import"./index-BEoxUJoA.js";import"./Dialog-DCpNjqMS.js";import"./cross-CMJXQf2R.js";import"./svgIconContainer-BUTn-dCB.js";import"./useBaseUiId-4SFOUSCG.js";import"./InternalBackdrop-DDtJr629.js";import"./composite-DelgFzsG.js";import"./index-C1Y9ReN9.js";import"./index-LgDXHTpd.js";import"./index-1dtThzIn.js";import"./useEventCallback-DDDkCV7z.js";import"./SkeletonBar-BBSYPOGa.js";import"./LoadingCell-DWVtc3pf.js";import"./ColumnConfigDialog-DA6q_x97.js";import"./DraggableList-DBygpyD8.js";import"./search-BkFAurUd.js";import"./Input-CU1bZoi8.js";import"./useControlled-CNlO3TEz.js";import"./Button-CZyYceU0.js";import"./small-cross-REHTtvDB.js";import"./ActionButton-DUE8wiZa.js";import"./Checkbox-D0RH7vMl.js";import"./useValueChanged-BoESC3Qa.js";import"./CollapsiblePanel-DjUqTnvZ.js";import"./MultiColumnSortDialog-CQ-vPwoW.js";import"./MenuTrigger-lR-8lec2.js";import"./CompositeItem-T4MrQSqM.js";import"./ToolbarRootContext-BntDugl_.js";import"./getDisabledMountTransitionStyles-B7EUIZcg.js";import"./getPseudoElementBounds-CG4o1vUb.js";import"./chevron-down-Ce1omtAP.js";import"./index-D-e4FuV7.js";import"./error-D9NpDKzr.js";import"./BaseCbacBanner-9NQw6BEw.js";import"./makeExternalStore-wqA1Cewh.js";import"./Tooltip-B6tb3JER.js";import"./isObject-WXcao9eA.js";import"./debounce-B9DyVsKD.js";import"./useOsdkClient-BV0fBL9y.js";import"./tick-GVLywL7s.js";import"./DropdownField-v0enRbIn.js";import"./isEqual-CRPrjyFp.js";import"./_baseIsEqual-DTo6H5VA.js";import"./withOsdkMetrics-nLoJ6ux7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
