import{f as b,j as a,r as i}from"./iframe-BKT26ECK.js";import{O as u}from"./object-table-x2w3LtIb.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-fzvI_Owm.js";import"./Table-Cw4wO_Bs.js";import"./index-BJVY7skd.js";import"./Dialog-DhXyA_cn.js";import"./cross-BSfVnQTo.js";import"./svgIconContainer-JLeCzNrF.js";import"./useBaseUiId-CkXejorF.js";import"./InternalBackdrop-Ds1Vs2WH.js";import"./composite-B4I_gF8q.js";import"./index-t7JpEJ0Y.js";import"./index-B88WqkHq.js";import"./index-VrYGyuu7.js";import"./useEventCallback-sHZKw_gs.js";import"./SkeletonBar-D_t3Dt5n.js";import"./LoadingCell-DLgyQtl8.js";import"./ColumnConfigDialog-u9dv2Ly5.js";import"./DraggableList-DWL3tyoz.js";import"./search-Bf-ECdYs.js";import"./Input-CRHPegXc.js";import"./useControlled-XWGO9wxj.js";import"./isEqual-DMcuELws.js";import"./isObject-D2wJ0QdN.js";import"./Button-CoUSpzUJ.js";import"./ActionButton-wuhy4zvB.js";import"./Checkbox-CL3sZhbe.js";import"./useValueChanged-IHzUeZUw.js";import"./CollapsiblePanel-DhCcuAYe.js";import"./MultiColumnSortDialog-Bi50xfb7.js";import"./MenuTrigger-CyUGkSSs.js";import"./CompositeItem-DcxV0Jb0.js";import"./ToolbarRootContext-DwHWuq0m.js";import"./getDisabledMountTransitionStyles-S-dXebFE.js";import"./getPseudoElementBounds-CUK9mrPI.js";import"./chevron-down-Bndan05g.js";import"./index-e8V1myKy.js";import"./error-CRxd3DRb.js";import"./BaseCbacBanner-CYZysUWB.js";import"./makeExternalStore-CIXu0gOP.js";import"./Tooltip-oeF80ZMG.js";import"./PopoverPopup-CU0FrlBz.js";import"./toNumber-DsDar9qW.js";import"./useOsdkClient-D7HKqmcJ.js";import"./tick--T_SqTho.js";import"./DropdownField-DQPM9pPe.js";import"./withOsdkMetrics-c0sdVgaD.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
