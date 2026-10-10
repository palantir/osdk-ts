import{f as b,j as a,r as i}from"./iframe-BqwIL6HW.js";import{O as u}from"./object-table-DMbi1Pvy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C2aBQR0i.js";import"./Table-bpA5xtcE.js";import"./index-Cae-eAYf.js";import"./Dialog-DuCy0N3k.js";import"./cross-BT2F3WaS.js";import"./svgIconContainer-COFarK7B.js";import"./useBaseUiId-BrjtMHRo.js";import"./InternalBackdrop-CgHzff8o.js";import"./composite-ByfMjDoy.js";import"./index-B_ClGvof.js";import"./index-D80ub2hK.js";import"./index-CNDTMQ3q.js";import"./useEventCallback-DCC9o1g_.js";import"./SkeletonBar-Cjqtl2vi.js";import"./LoadingCell-q9zY1XLH.js";import"./ColumnConfigDialog-GrepuD1S.js";import"./DraggableList-aOzgfBps.js";import"./search-B46OZpsx.js";import"./Input-5dPcAYXy.js";import"./useControlled-Cn8olvRX.js";import"./Button-DY9YVtH3.js";import"./small-cross-CrN3j_m1.js";import"./ActionButton-D68kU6Ew.js";import"./Checkbox-OHzaDy7X.js";import"./useValueChanged-CQ0JMvBl.js";import"./CollapsiblePanel-C-zhrpZe.js";import"./MultiColumnSortDialog-J1D7KJHQ.js";import"./MenuTrigger-B6yCrZ6W.js";import"./CompositeItem-CbgN92a5.js";import"./ToolbarRootContext-DUNP2109.js";import"./getDisabledMountTransitionStyles-Og5LYC2n.js";import"./getPseudoElementBounds-BNlxAt2r.js";import"./chevron-down-S5K5GEQg.js";import"./index-BkbUCulf.js";import"./error-rHIfSgQZ.js";import"./BaseCbacBanner-CTgoipjB.js";import"./makeExternalStore-CWQKdOgP.js";import"./Tooltip-BHtmGDUn.js";import"./PopoverPopup-Mlz_yO9l.js";import"./debounce-CjNb2h4-.js";import"./useOsdkClient-D1PnuLrI.js";import"./tick-gHUj1QgS.js";import"./DropdownField-DPc-zral.js";import"./isEqual-qyY3U0dF.js";import"./withOsdkMetrics-BCVV0LnC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
