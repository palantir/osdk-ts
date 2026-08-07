import{f as b,j as a,r as i}from"./iframe-DBzqrt56.js";import{O as u}from"./object-table-BJAjEQnJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BYRdJxme.js";import"./Table-DdCg30xp.js";import"./index-CGTJucPn.js";import"./Dialog-CQLSDy00.js";import"./cross-Bba8yQHb.js";import"./svgIconContainer-BQ8ude0X.js";import"./useBaseUiId-dLakDqSs.js";import"./InternalBackdrop-DZDDKVf0.js";import"./composite-B6PaBa-a.js";import"./index-CZmKTtfj.js";import"./index-B9IR710C.js";import"./index-CLCfciEQ.js";import"./useEventCallback-kfKpJfFv.js";import"./SkeletonBar-BIr2SSBQ.js";import"./LoadingCell-BYP6w5MW.js";import"./ColumnConfigDialog-Du1mc6KP.js";import"./DraggableList-B8w2fATq.js";import"./search-B2tTqhzE.js";import"./Input-giB4RCDX.js";import"./useControlled-BPRbm5-q.js";import"./isEqual-B8geApbv.js";import"./isObject-DkG1sVMZ.js";import"./Button-j0UCjDkN.js";import"./ActionButton-Xkbg_ODc.js";import"./Checkbox-Dh0wNNyr.js";import"./useValueChanged-D9QIFmpB.js";import"./CollapsiblePanel-ciJZfod4.js";import"./MultiColumnSortDialog-BZQNUgbw.js";import"./MenuTrigger-BTARNaQ8.js";import"./CompositeItem-jEqhJqZm.js";import"./ToolbarRootContext-BOGYc2wJ.js";import"./getDisabledMountTransitionStyles-BRTFh2Nu.js";import"./getPseudoElementBounds-DVx9Tcx1.js";import"./chevron-down-DuPl72ud.js";import"./index-k77pMsqi.js";import"./error-BgfO_Kt-.js";import"./BaseCbacBanner-C7o_u6S3.js";import"./makeExternalStore-LjuA8zll.js";import"./Tooltip-CGIc4ORz.js";import"./PopoverPopup-fztzUF8H.js";import"./toNumber-saNM3qnm.js";import"./useOsdkClient-07aQwNTa.js";import"./tick-CxeZHEv3.js";import"./DropdownField-CQaYn6cM.js";import"./withOsdkMetrics-lVYMKJO7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
