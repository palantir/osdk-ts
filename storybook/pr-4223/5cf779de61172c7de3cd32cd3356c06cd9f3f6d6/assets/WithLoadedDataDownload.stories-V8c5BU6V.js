import{f as b,j as a,r as i}from"./iframe-oUWpW2hj.js";import{O as u}from"./object-table-CLbmZn-l.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Yv6afaVL.js";import"./Table-CiWH93CS.js";import"./index-CgvqzYiy.js";import"./Dialog-v0v8UvAL.js";import"./cross-DH6uOwyM.js";import"./svgIconContainer-CfDlmTSN.js";import"./useBaseUiId-CNXzk4iF.js";import"./InternalBackdrop-DCSUOs2p.js";import"./composite-DXJqaJaP.js";import"./index-BbYayOBF.js";import"./index-Cg1Ec0a0.js";import"./index-DK-jKqOF.js";import"./useEventCallback-DZOwbbJq.js";import"./SkeletonBar-ClsJkh65.js";import"./LoadingCell-DIzFAauO.js";import"./ColumnConfigDialog-CSerDPBA.js";import"./DraggableList-h5SWgWuf.js";import"./search-OfzKiz9h.js";import"./Input-BW0wlw1T.js";import"./useControlled-C-y7Ct0C.js";import"./Button-D0GlSb4-.js";import"./small-cross-Dg6oYX1r.js";import"./ActionButton-vLUx2x9T.js";import"./Checkbox-D_wcUVzM.js";import"./useValueChanged-Dkm3d1mT.js";import"./CollapsiblePanel-BfXlQFaO.js";import"./MultiColumnSortDialog-C_wapD0-.js";import"./MenuTrigger-XqvrfEp0.js";import"./CompositeItem-mpma5yoQ.js";import"./ToolbarRootContext-CoDK9tvS.js";import"./getDisabledMountTransitionStyles-kmT_SUYl.js";import"./getPseudoElementBounds-BFXXGwBb.js";import"./chevron-down-B1zztQ-L.js";import"./index-Dr1tBJwO.js";import"./error-DWxhuhX7.js";import"./BaseCbacBanner-ChJpqQ0G.js";import"./makeExternalStore-DCxwJsFe.js";import"./Tooltip-u5Tt69vN.js";import"./PopoverPopup-BaCxp5C7.js";import"./debounce-iJ8ACcNG.js";import"./useOsdkClient-TI1xoQcl.js";import"./tick-CTaqXIni.js";import"./DropdownField-BXlACZnb.js";import"./isEqual-BB0Cq2Xm.js";import"./withOsdkMetrics-JDMrgbFb.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
