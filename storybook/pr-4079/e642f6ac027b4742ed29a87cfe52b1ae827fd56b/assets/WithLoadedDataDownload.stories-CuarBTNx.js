import{f as b,j as a,r as i}from"./iframe-C-JZ09HL.js";import{O as u}from"./object-table-eCdmFUXr.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Btqf0-MW.js";import"./Table-DMQ_nPm6.js";import"./index-BXkYmYaL.js";import"./Dialog-CWLeV2jh.js";import"./cross-CDvt64dz.js";import"./svgIconContainer-GnFqEV7J.js";import"./useBaseUiId-C6m1fY6X.js";import"./InternalBackdrop-DgDyp4Vo.js";import"./composite-BHrzkL3j.js";import"./index-B9W8VWla.js";import"./index-CWTT4E5c.js";import"./index-DyndQNLM.js";import"./useEventCallback-Is75DRLj.js";import"./SkeletonBar-DHUwfY6j.js";import"./LoadingCell-pQiUA7Bk.js";import"./ColumnConfigDialog-B7EAN3Um.js";import"./DraggableList-CxlXcFDc.js";import"./search-CRF0d4U_.js";import"./Input-9fM_pp7v.js";import"./useControlled-BnCuZsdw.js";import"./Button-DnUlyK7a.js";import"./small-cross-CQkeoWBO.js";import"./ActionButton-8JqznqV-.js";import"./Checkbox-DPup6C7p.js";import"./useValueChanged-hvB4Sogv.js";import"./CollapsiblePanel-BEbz9zc7.js";import"./MultiColumnSortDialog-qFPV76Nw.js";import"./MenuTrigger-C36tHorX.js";import"./CompositeItem-1x61Rlw0.js";import"./ToolbarRootContext-CcljaRm4.js";import"./getDisabledMountTransitionStyles-BaR3xwN0.js";import"./getPseudoElementBounds-DEDKJbcP.js";import"./chevron-down-l-lKjlka.js";import"./index-DKkkLjbn.js";import"./error-jL4dzDGt.js";import"./BaseCbacBanner-CWi2u_SR.js";import"./makeExternalStore-CHVbKC8p.js";import"./Tooltip-By6nOBFb.js";import"./PopoverPopup-tZcqIDwv.js";import"./debounce-DuRZaOgZ.js";import"./useOsdkClient-w30RoI3v.js";import"./tick-BF72g7TU.js";import"./DropdownField-VLHRRTtJ.js";import"./isEqual-D6XdnbH2.js";import"./withOsdkMetrics-Das8js_L.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
