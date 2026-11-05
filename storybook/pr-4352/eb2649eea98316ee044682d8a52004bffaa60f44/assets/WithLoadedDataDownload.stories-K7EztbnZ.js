import{f as b,j as a,r as i}from"./iframe-cQ3f48MB.js";import{O as u}from"./object-table-CycBgw2h.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D6QOSXh4.js";import"./Table-DEKDqocf.js";import"./index-D1RuRedd.js";import"./Dialog-2_OY6EqA.js";import"./cross-DauAavmu.js";import"./svgIconContainer-CgizML4Q.js";import"./useBaseUiId-CMNXwzlb.js";import"./InternalBackdrop-DuDjQ0BZ.js";import"./composite-B6VOm6ZQ.js";import"./index-MlmEIZWp.js";import"./index-C8RTiPbx.js";import"./index-Bs-Z1Jgq.js";import"./useEventCallback-Y2QBMo-H.js";import"./SkeletonBar-D4mUM1vS.js";import"./LoadingCell-DNvez4my.js";import"./ColumnConfigDialog-BUoGlIi-.js";import"./DraggableList-DjVBxeH3.js";import"./search-iHipGmJb.js";import"./Input-BuFeTP1U.js";import"./useControlled-ByZlI-u7.js";import"./Button-DZgLeZFj.js";import"./small-cross-BObFe73S.js";import"./ActionButton-k9CcFnZX.js";import"./Checkbox-CpTiMr31.js";import"./useValueChanged-BQFlsv8-.js";import"./CollapsiblePanel-BS0BxhJu.js";import"./MultiColumnSortDialog-JnW_yKzW.js";import"./MenuTrigger-BzoDHwuv.js";import"./CompositeItem-684cCOtj.js";import"./ToolbarRootContext-DNEaNwHU.js";import"./getDisabledMountTransitionStyles-Bg1kr4yU.js";import"./getPseudoElementBounds-DKU8Ia-1.js";import"./chevron-down-CIrisS0y.js";import"./index-C-MPwgvx.js";import"./error-CsayxGJU.js";import"./BaseCbacBanner-Cfhd9GNF.js";import"./makeExternalStore-DtAasX45.js";import"./Tooltip-DsHuisIK.js";import"./isObject-saTum3J5.js";import"./debounce-Dl9ssa6I.js";import"./useOsdkClient-CamUyQ2y.js";import"./tick-nlg_x8OU.js";import"./DropdownField-CLQWIPME.js";import"./isEqual-C7bvgrWO.js";import"./_baseIsEqual-BGW9PiVU.js";import"./withOsdkMetrics-D1uLGy1n.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
