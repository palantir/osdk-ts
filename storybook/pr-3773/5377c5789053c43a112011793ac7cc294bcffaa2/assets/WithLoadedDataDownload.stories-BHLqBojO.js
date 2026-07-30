import{f as b,j as a,r as i}from"./iframe-BLnZQotn.js";import{O as u}from"./object-table-6c5WKZhP.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DY9jpKUC.js";import"./Table-CP37JA88.js";import"./index-Br-sIVdK.js";import"./Dialog-B5z5pO7l.js";import"./cross-DScBbaG7.js";import"./svgIconContainer-4F-xtBaI.js";import"./useBaseUiId-mj7-YtUe.js";import"./InternalBackdrop-CJr0HIhe.js";import"./composite-BKQJBcnd.js";import"./index-B4OHcS41.js";import"./index-CZctS6MH.js";import"./index-5J9Ixf7O.js";import"./useEventCallback-DVmZABpv.js";import"./SkeletonBar-CkYIhZj8.js";import"./LoadingCell-CEWp7KDY.js";import"./ColumnConfigDialog-FpkupR4C.js";import"./DraggableList-DoR-tyVI.js";import"./search-XfyocaRu.js";import"./Input-BhzFnYGF.js";import"./useControlled-B6GUHUJM.js";import"./isEqual-CJHtwtni.js";import"./isObject-DLfBK2wg.js";import"./Button-BjgeWM_v.js";import"./ActionButton-D7Hs2uzo.js";import"./Checkbox-Cp9nxQ9c.js";import"./useValueChanged-EgQsYI_U.js";import"./CollapsiblePanel-BGeZbD5J.js";import"./MultiColumnSortDialog-4OOdrMWk.js";import"./MenuTrigger-V8m45X6w.js";import"./CompositeItem-DzcXIyhE.js";import"./ToolbarRootContext-C8cCGqF-.js";import"./getDisabledMountTransitionStyles-NJQ99kiK.js";import"./getPseudoElementBounds-D5Sm8-XT.js";import"./chevron-down-h1RtSMOg.js";import"./index-DFPaFGKs.js";import"./error-BjkGAX5r.js";import"./BaseCbacBanner-DRS4U5eU.js";import"./makeExternalStore-eh1oPVcU.js";import"./Tooltip-CxPTLfXU.js";import"./PopoverPopup-Ch34ozz9.js";import"./toNumber-Dx2WSPnF.js";import"./useOsdkClient-BizZoOjd.js";import"./tick-ErOtw_Kk.js";import"./DropdownField-yIY6syyK.js";import"./withOsdkMetrics-DPb2-OHp.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
