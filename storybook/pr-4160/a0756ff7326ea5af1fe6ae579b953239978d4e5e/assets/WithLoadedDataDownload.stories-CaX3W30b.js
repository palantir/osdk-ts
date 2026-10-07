import{f as b,j as a,r as i}from"./iframe-BMLtitQA.js";import{O as u}from"./object-table-y9i5UT5J.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B7zvwNzg.js";import"./Table-DH-wZ72m.js";import"./index-BKoaBi8s.js";import"./Dialog-3laZpvVQ.js";import"./cross-B9AlOyDj.js";import"./svgIconContainer-DG_uvfKl.js";import"./useBaseUiId-Bv7ijZL9.js";import"./InternalBackdrop-CHrkdZLj.js";import"./composite-0pBAMAMm.js";import"./index-1wGhlHyg.js";import"./index-G040djXj.js";import"./index-AqEp1dK7.js";import"./useEventCallback-DBFZ4mZ7.js";import"./SkeletonBar-BrybbI32.js";import"./LoadingCell-C_9ZXwvH.js";import"./ColumnConfigDialog-nYNMKvUs.js";import"./DraggableList-BaEa-CAp.js";import"./search-CINj6xtb.js";import"./Input-D3mEoBXJ.js";import"./useControlled-BSRFoePA.js";import"./Button-eAAIImFA.js";import"./small-cross-Cu-xAWUl.js";import"./ActionButton-BE8P3Fn6.js";import"./Checkbox-BR1FtCPB.js";import"./useValueChanged-3DIww79j.js";import"./CollapsiblePanel-DJu6yMtL.js";import"./MultiColumnSortDialog-llKG8jOZ.js";import"./MenuTrigger-y3laeChq.js";import"./CompositeItem-FfLXXCMg.js";import"./ToolbarRootContext-C3i3QER6.js";import"./getDisabledMountTransitionStyles-CmHRQiW3.js";import"./getPseudoElementBounds-C6QupuvE.js";import"./chevron-down-BmGdKwgH.js";import"./index-Dq5rNNxI.js";import"./error-DwpvxQx3.js";import"./BaseCbacBanner--wPp9JQT.js";import"./makeExternalStore-6yj2j-8e.js";import"./Tooltip-Bk1044gE.js";import"./PopoverPopup-CFeC_ntr.js";import"./debounce-CQ_Rs17S.js";import"./useOsdkClient-DL7Kf8Sx.js";import"./tick-BiexrdJO.js";import"./DropdownField-Dinvefr-.js";import"./isEqual-B25MsUYt.js";import"./withOsdkMetrics-Bco6NPuI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
