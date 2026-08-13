import{f as b,j as a,r as i}from"./iframe-Brg_cLQb.js";import{O as u}from"./object-table-BWs_VCv5.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Y5XS6iK1.js";import"./Table-CXKxbRro.js";import"./index-CrF7Hfnz.js";import"./Dialog-CnyvFr3p.js";import"./cross-BM6OYU6g.js";import"./svgIconContainer-BRGYtCeZ.js";import"./useBaseUiId-DK5umTF8.js";import"./InternalBackdrop-BAArTL5Y.js";import"./composite-DXwrVJ8Z.js";import"./index-C82d9Hjp.js";import"./index-DAYKTTDO.js";import"./index-DWIdoxig.js";import"./useEventCallback-PcLKrdMT.js";import"./SkeletonBar-iXiA43LF.js";import"./LoadingCell-BxTPh0WF.js";import"./ColumnConfigDialog-CAvK7YVH.js";import"./DraggableList-DVewDeMa.js";import"./search-C4E6Jgg1.js";import"./Input-an-oiaSC.js";import"./useControlled-CT2yj4iv.js";import"./isEqual-D49SKO9i.js";import"./isObject-DS2RQay5.js";import"./Button-c0xcWgk4.js";import"./ActionButton-DohSud9u.js";import"./Checkbox-Dkcqx__k.js";import"./useValueChanged-Bm0RcCoh.js";import"./CollapsiblePanel-B3RKaBfX.js";import"./MultiColumnSortDialog-Tlv0fYfn.js";import"./MenuTrigger-CHlGD6Wx.js";import"./CompositeItem-0SA-C97C.js";import"./ToolbarRootContext-DJMC0sxm.js";import"./getDisabledMountTransitionStyles-6mhoIfPT.js";import"./getPseudoElementBounds-YNsuRSMp.js";import"./chevron-down-BdWX5g2Q.js";import"./index-BAbnckoF.js";import"./error-DhNgpSfu.js";import"./BaseCbacBanner-C9uPqEEi.js";import"./makeExternalStore-BTtAbm94.js";import"./Tooltip-CGc_VbY3.js";import"./PopoverPopup-BZFhHUwT.js";import"./debounce-BiADBLNL.js";import"./useOsdkClient-Cmb6R8ID.js";import"./tick-m0A6XvMW.js";import"./DropdownField-Cj3eFEyH.js";import"./withOsdkMetrics-p9hMVxev.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
