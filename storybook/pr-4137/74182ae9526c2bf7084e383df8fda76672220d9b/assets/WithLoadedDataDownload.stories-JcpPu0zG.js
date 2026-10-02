import{f as b,j as a,r as i}from"./iframe-UiMnRuuf.js";import{O as u}from"./object-table-BQ_pa8qJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D9-KtqjS.js";import"./Table-CdT3G1Lh.js";import"./index-0Ixo6srr.js";import"./Dialog-CKhxJa7-.js";import"./cross-CN0okcjD.js";import"./svgIconContainer-Dm9tYT__.js";import"./useBaseUiId-BENer-r-.js";import"./InternalBackdrop-ETQR7T-n.js";import"./composite-jFy9GvzG.js";import"./index-e-D0c2mh.js";import"./index-DBgZ08g1.js";import"./index-DEITom6T.js";import"./useEventCallback-DXT4fJhK.js";import"./SkeletonBar-Dd8DJhB7.js";import"./LoadingCell-BIgqx3WX.js";import"./ColumnConfigDialog-CieizKEU.js";import"./DraggableList-qRNMWLPj.js";import"./search-Cp4CoIwR.js";import"./Input-CNfnK_9k.js";import"./useControlled-BRDQspVd.js";import"./Button-rRx38Mfg.js";import"./small-cross-R5-Dp5lp.js";import"./ActionButton-DuhhsnPX.js";import"./Checkbox-CY25dkni.js";import"./useValueChanged-DyztBfxc.js";import"./CollapsiblePanel-DFbxjutV.js";import"./MultiColumnSortDialog-B9ctl80s.js";import"./MenuTrigger-7RpD5ZTh.js";import"./CompositeItem-BAINckPf.js";import"./ToolbarRootContext-B5RqdBSK.js";import"./getDisabledMountTransitionStyles-D8Fbf3VT.js";import"./getPseudoElementBounds-DbDKue2D.js";import"./chevron-down-CpxF8NNT.js";import"./index-DHTqVbcd.js";import"./error-Cy2KrzuU.js";import"./BaseCbacBanner-D7i1GiXc.js";import"./makeExternalStore-pWUg2aV2.js";import"./Tooltip-Ci9SwqoQ.js";import"./PopoverPopup-BQIehYyb.js";import"./debounce-CO81sG8W.js";import"./useOsdkClient-BHPGD1cz.js";import"./tick-Cm7cC8fk.js";import"./DropdownField-CWywt0Av.js";import"./isEqual-Chza7bno.js";import"./withOsdkMetrics-D6UjXomb.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
