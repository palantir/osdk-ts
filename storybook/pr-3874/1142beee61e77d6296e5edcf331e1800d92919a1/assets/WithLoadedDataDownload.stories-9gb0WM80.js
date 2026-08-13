import{f as b,j as a,r as i}from"./iframe-BqWWYvNh.js";import{O as u}from"./object-table-D1i_MteR.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-xbJFiFoV.js";import"./Table-BX-SSoai.js";import"./index-CHmc-CZF.js";import"./Dialog-C-ikag1c.js";import"./cross-BaCDbzQm.js";import"./svgIconContainer-D7PWuspg.js";import"./useBaseUiId-L7xZvVKI.js";import"./InternalBackdrop-BOKLllZf.js";import"./composite-B43hsjOr.js";import"./index-CJAJ6Hem.js";import"./index-UQo3BLiH.js";import"./index-C0RuiYT6.js";import"./useEventCallback-C7SpahXs.js";import"./SkeletonBar-CglVjYVB.js";import"./LoadingCell-DezR9abp.js";import"./ColumnConfigDialog-Loanbrqk.js";import"./DraggableList-DZYCzNct.js";import"./search-BZ-aP0AE.js";import"./Input-CFZ5X7h6.js";import"./useControlled-3vqQ5CZv.js";import"./Button-Drs29Umo.js";import"./small-cross-9yRNchJC.js";import"./ActionButton-CbAlOb7R.js";import"./Checkbox-BTcuEy4-.js";import"./useValueChanged-Bph4xhtR.js";import"./CollapsiblePanel-DwW1Bs6d.js";import"./MultiColumnSortDialog-D6neb_LS.js";import"./MenuTrigger-BXX-G2Zm.js";import"./CompositeItem-CC_bbvNo.js";import"./ToolbarRootContext-DXJ8TGiF.js";import"./getDisabledMountTransitionStyles-gc3ASc_K.js";import"./getPseudoElementBounds-DQIHMp8o.js";import"./chevron-down-DlgsXnWQ.js";import"./index-i_nBIU9X.js";import"./error-B_VRdTx7.js";import"./BaseCbacBanner-DtrJgJpz.js";import"./makeExternalStore-Brum0TCo.js";import"./Tooltip-CbfSD75c.js";import"./PopoverPopup-BOEEd-B9.js";import"./debounce-uF2HrJP8.js";import"./useOsdkClient-HveXGpzo.js";import"./tick-DMZ_0kJh.js";import"./DropdownField-BdVf8YUK.js";import"./isEqual-D6LwsQsu.js";import"./withOsdkMetrics-BbVO6-6g.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
