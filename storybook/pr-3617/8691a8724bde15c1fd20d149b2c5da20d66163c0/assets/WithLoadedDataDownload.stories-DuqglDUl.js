import{f as b,j as a,r as i}from"./iframe-B7ygTo9W.js";import{O as u}from"./object-table-DhTLQES4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CDqBt4yR.js";import"./Table-B-i3FtLX.js";import"./index-C5S5PNED.js";import"./Dialog-DxFyJc5q.js";import"./cross-LWZ52ovi.js";import"./svgIconContainer-CISnPs82.js";import"./useBaseUiId-BL8QwdSd.js";import"./InternalBackdrop-CXvccjwu.js";import"./composite-CKpqhrZy.js";import"./index-B3P4AJaW.js";import"./index-CHKj7ln1.js";import"./index-CGQUfxBN.js";import"./useEventCallback-13X3ATDb.js";import"./SkeletonBar-HLY_JWUQ.js";import"./LoadingCell-C6KHvTY3.js";import"./ColumnConfigDialog-BMpBMHI_.js";import"./DraggableList-BG7s-hdz.js";import"./search-rp6d_gvf.js";import"./Input-D14AIbfF.js";import"./useControlled-C8aPrRAZ.js";import"./Button-TKGMPkN8.js";import"./small-cross-VzE_-ZeK.js";import"./ActionButton-ap8XyJgv.js";import"./Checkbox-B10AkcRL.js";import"./minus-CKO-Xbst.js";import"./tick-D1hunxpG.js";import"./useValueChanged-Cw7xgqBp.js";import"./caret-down-C9D9pbar.js";import"./CollapsiblePanel-BZpNyJQy.js";import"./MultiColumnSortDialog-huuyH1AR.js";import"./MenuTrigger-CXEge_bG.js";import"./CompositeItem-CUibmTbJ.js";import"./ToolbarRootContext-BPlJHUij.js";import"./getDisabledMountTransitionStyles-CJM935fo.js";import"./getPseudoElementBounds-C_1oeJGE.js";import"./chevron-down-7Oeft8QW.js";import"./index-BWmqsa15.js";import"./error-TL5g5sOy.js";import"./BaseCbacBanner-rk0_gZJu.js";import"./makeExternalStore-Bv-s2QjN.js";import"./Tooltip-CxaU48aB.js";import"./PopoverPopup-sz6x1zop.js";import"./toNumber-DkQMtI-k.js";import"./useOsdkClient-BFg0b9k7.js";import"./DropdownField-CFDLeMNB.js";import"./withOsdkMetrics-EtNcQe-d.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
