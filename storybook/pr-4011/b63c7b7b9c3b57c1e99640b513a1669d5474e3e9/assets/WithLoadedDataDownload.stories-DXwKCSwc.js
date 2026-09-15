import{f as b,j as a,r as i}from"./iframe-DljkNNxK.js";import{O as u}from"./object-table-BRthzJfl.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cpo1q_i6.js";import"./Table-By3tnqQM.js";import"./index-D64RJmhP.js";import"./Dialog-DBv0k4xP.js";import"./cross-BC6Bgo8V.js";import"./svgIconContainer-CnhwGfa6.js";import"./useBaseUiId-BDewQ6nf.js";import"./InternalBackdrop-Bvu56fjL.js";import"./composite-GUx361Ly.js";import"./index-BwvPIv6E.js";import"./index-DVoFeU9w.js";import"./index-Bwjaz__m.js";import"./useEventCallback-kYW6J0ZS.js";import"./SkeletonBar-C5t-2Ut2.js";import"./LoadingCell-BC3NZk02.js";import"./ColumnConfigDialog-Ctnm6Zhp.js";import"./DraggableList-DgptIJm8.js";import"./search-CviN7Quw.js";import"./Input-C1T-Uord.js";import"./useControlled-Chg_haxJ.js";import"./Button-sFRd8YxN.js";import"./small-cross-uYb4a6-f.js";import"./ActionButton-WkEm3I4L.js";import"./Checkbox-D0824Hq2.js";import"./useValueChanged-DZsMbhXQ.js";import"./CollapsiblePanel-DYjSn6NE.js";import"./MultiColumnSortDialog-DDc1iF_d.js";import"./MenuTrigger-5WPZqihD.js";import"./CompositeItem-asw0sP3K.js";import"./ToolbarRootContext-DT3K0tIr.js";import"./getDisabledMountTransitionStyles-ClRtvzpg.js";import"./getPseudoElementBounds-0bgPiDkB.js";import"./chevron-down-TeUlP9Ri.js";import"./index-IcPHFoqD.js";import"./error-M6Q45Sy0.js";import"./BaseCbacBanner-BFqmynFx.js";import"./makeExternalStore-CQCn-_eJ.js";import"./Tooltip-DDI1N6qC.js";import"./PopoverPopup-ABlhCtw7.js";import"./debounce-v1jWqcH4.js";import"./useOsdkClient-BkCV2xv_.js";import"./tick-BHidfImn.js";import"./DropdownField-BJcI8ciq.js";import"./isEqual-DZhrb1Kx.js";import"./withOsdkMetrics-DgcAshrM.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
