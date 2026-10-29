import{f as b,j as a,r as i}from"./iframe-Dnji8ErS.js";import{O as u}from"./object-table-BcZuD4QU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DBdP8Q4o.js";import"./Table-B3iD-gZe.js";import"./index-BNoiE65C.js";import"./Dialog-C-SVK6-Y.js";import"./cross-BWKDw-8_.js";import"./svgIconContainer-B0znNA-B.js";import"./useBaseUiId-ScNjevUP.js";import"./InternalBackdrop-9jtE3fb7.js";import"./composite-Bo0dFacb.js";import"./index-Calwhz4q.js";import"./index-BVgNOwgs.js";import"./index-Bka3S9OK.js";import"./useEventCallback-56O3ZT4v.js";import"./SkeletonBar-gGwHwvfg.js";import"./LoadingCell-DEtBbjKP.js";import"./ColumnConfigDialog-D2x2SSdm.js";import"./DraggableList-Cm9hxWQ5.js";import"./search-C5sdVGIt.js";import"./Input-DyynrLgV.js";import"./useControlled-DmavZ4hp.js";import"./Button-D-1VZnj-.js";import"./small-cross-wM2Fg1Ze.js";import"./ActionButton-B5ftVOcR.js";import"./Checkbox-IsH8M5rS.js";import"./useValueChanged-GZrrpvDZ.js";import"./CollapsiblePanel-BYjZCBYa.js";import"./MultiColumnSortDialog-CYJMBYTR.js";import"./MenuTrigger-oZZDVCJq.js";import"./CompositeItem-YgQK4Acr.js";import"./ToolbarRootContext-BPwepJKC.js";import"./getDisabledMountTransitionStyles-DeZ02XBV.js";import"./getPseudoElementBounds-C5houf6l.js";import"./chevron-down-r7E6FDSt.js";import"./index-Cj0RyZw2.js";import"./error-CpTRDjda.js";import"./BaseCbacBanner-C1c3Q8Aj.js";import"./makeExternalStore-BNNlgyK5.js";import"./Tooltip-DMaI5dDd.js";import"./PopoverPopup-DmROoIcA.js";import"./debounce-BAxkMmEn.js";import"./useOsdkClient-CR7GyxlC.js";import"./tick-PvaRxYp4.js";import"./DropdownField-Lc5xugId.js";import"./isEqual-B5K4ZASA.js";import"./withOsdkMetrics-DdDqJJvP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
