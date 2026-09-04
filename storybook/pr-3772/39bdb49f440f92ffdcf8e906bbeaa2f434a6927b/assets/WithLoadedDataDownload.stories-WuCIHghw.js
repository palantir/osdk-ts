import{f as b,j as a,r as i}from"./iframe-C8SPWzFD.js";import{O as u}from"./object-table-CEVvWNl8.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-0-zjDLXH.js";import"./Table-Sy8XZYjj.js";import"./index-CGimpnDA.js";import"./Dialog-sJbwuz-W.js";import"./cross-yQkVXtk-.js";import"./svgIconContainer-B40AAOuO.js";import"./useBaseUiId-C57VmH3J.js";import"./InternalBackdrop-DxF2V30r.js";import"./composite-DPxUJccb.js";import"./index-VKcShZXo.js";import"./index-BwAo9-Ip.js";import"./index-DI8w2Wrl.js";import"./useEventCallback-DjuFsSbR.js";import"./SkeletonBar-o-eg2SlE.js";import"./LoadingCell-D10QJ8hN.js";import"./ColumnConfigDialog-DgDCdwV7.js";import"./DraggableList-DBkiK7wC.js";import"./search-bHMR0YBt.js";import"./Input-B7RJGze7.js";import"./useControlled-Yy6Nm7q-.js";import"./Button-BSl9QmF1.js";import"./small-cross-94u2Um9w.js";import"./ActionButton-BkWFOmHW.js";import"./Checkbox-DPCHiLIB.js";import"./useValueChanged-DPIPHUs8.js";import"./CollapsiblePanel-BSR-rgRE.js";import"./MultiColumnSortDialog-DM-SV7VS.js";import"./MenuTrigger-DYJhdpX_.js";import"./CompositeItem--Cz5F4Xa.js";import"./ToolbarRootContext-BVFmYY-d.js";import"./getDisabledMountTransitionStyles-XmNCU5wP.js";import"./getPseudoElementBounds-ckCn8Eoc.js";import"./chevron-down-C45MQu-J.js";import"./index-7TRVPqPj.js";import"./error-B5OE4NvJ.js";import"./BaseCbacBanner-WRiAVdzF.js";import"./makeExternalStore-C93JHYzf.js";import"./Tooltip-BOvX8lE8.js";import"./PopoverPopup-D5c_P4sS.js";import"./debounce-B5Hx5zW4.js";import"./useOsdkClient-Gc4DZ-CV.js";import"./tick-Dd7xtzHi.js";import"./DropdownField-C8LjKSnS.js";import"./isEqual-C4Xo_KzQ.js";import"./withOsdkMetrics-jd8u8gq8.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
