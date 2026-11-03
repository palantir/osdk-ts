import{f as b,j as a,r as i}from"./iframe-BvgKvBTT.js";import{O as u}from"./object-table-C04Tld44.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-dVfNiIKn.js";import"./Table-BGGRw821.js";import"./index-C6P12W9x.js";import"./Dialog-BS5nOE0N.js";import"./cross-Dgfh0hI8.js";import"./svgIconContainer-BZvKBCv0.js";import"./useRenderElement-BFIknrE2.js";import"./InternalBackdrop-m0dkTmEO.js";import"./composite-DfJtFIGD.js";import"./useBaseUiId-DWfZ2Kad.js";import"./index-yqy4XRqT.js";import"./index-BzjqKOq7.js";import"./index-CbHQFypX.js";import"./useEventCallback-DNmABAT6.js";import"./SkeletonBar-CFhg6IWc.js";import"./LoadingCell-CkyPVhhc.js";import"./ColumnConfigDialog-D-sng6Hl.js";import"./DraggableList-if29BgfX.js";import"./search-B95gAtiZ.js";import"./Input-B8f6lg4l.js";import"./useControlled-B2MP0s-G.js";import"./Button-CZUmTkhK.js";import"./small-cross-Clug_Kd9.js";import"./ActionButton-Db7nx97v.js";import"./Checkbox-hWqlZ6BH.js";import"./useValueChanged-BPblXw96.js";import"./CollapsiblePanel-DMDnXz2U.js";import"./MultiColumnSortDialog-CU8CNUw8.js";import"./MenuTrigger-DiZ3O7sE.js";import"./CompositeItem-xDL0fAk1.js";import"./ToolbarRootContext-C5CAj_EH.js";import"./getDisabledMountTransitionStyles-DXQCvg3E.js";import"./getPseudoElementBounds-Cjaf3AfS.js";import"./chevron-down-Df3bql-T.js";import"./index-Da4z4C_A.js";import"./error-B-n6_xad.js";import"./BaseCbacBanner-D1FH96H4.js";import"./makeExternalStore-DebjiHh_.js";import"./Tooltip-CjqFaYRm.js";import"./PopoverPopup-P8XecnKG.js";import"./debounce-Kd32bTE8.js";import"./useOsdkClient-B-GUKLiD.js";import"./tick-UIVz0HQr.js";import"./DropdownField-DGHHzxif.js";import"./isEqual-m-6wbeTE.js";import"./withOsdkMetrics-D0FOqMKK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
