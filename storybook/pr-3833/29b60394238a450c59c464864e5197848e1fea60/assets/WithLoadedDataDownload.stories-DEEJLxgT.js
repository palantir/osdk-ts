import{f as b,j as a,r as i}from"./iframe-DVYnRpdj.js";import{O as u}from"./object-table-D2LKbGoh.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-jWAjn0tL.js";import"./Table-Dxj1ILvb.js";import"./index-CH1L1VNU.js";import"./Dialog-CWjOSvXy.js";import"./cross-B9-dwz-Y.js";import"./svgIconContainer-CTL4p5cf.js";import"./useBaseUiId-BwB1POS7.js";import"./InternalBackdrop-N9SofBTy.js";import"./composite-C4ay5osQ.js";import"./index-CNxR8hD1.js";import"./index-5JSg7TKC.js";import"./index-D-sIGuKb.js";import"./useEventCallback-VFhsdas6.js";import"./SkeletonBar-C9zAaSl2.js";import"./LoadingCell-DN0DKMXJ.js";import"./ColumnConfigDialog-B55nyHVt.js";import"./DraggableList-DtigIKar.js";import"./search--hEGkwmt.js";import"./Input-qR3cLgNT.js";import"./useControlled-BTTM4wRl.js";import"./isEqual-BgqmPc7Z.js";import"./isObject-DKcO7n6l.js";import"./Button-BvmdrF_3.js";import"./ActionButton-C2gtk3D2.js";import"./Checkbox-xgTkB24d.js";import"./useValueChanged-Cxtk_s41.js";import"./CollapsiblePanel-BHoiEa8Y.js";import"./MultiColumnSortDialog-BzrGwEIf.js";import"./MenuTrigger-BxwoC8_m.js";import"./CompositeItem-C6n7AP2m.js";import"./ToolbarRootContext-DrMZ4IJS.js";import"./getDisabledMountTransitionStyles-DfQCDxjZ.js";import"./getPseudoElementBounds-CyipiQbQ.js";import"./chevron-down-KrczOSzf.js";import"./index-CFnWEuFo.js";import"./error-IFx71VBh.js";import"./BaseCbacBanner-BjCczzKS.js";import"./makeExternalStore-Cytkrsbu.js";import"./Tooltip-VzwiJ3X5.js";import"./PopoverPopup-Bz8q9iux.js";import"./toNumber-Ca0I2YME.js";import"./useOsdkClient-BJpIsQwT.js";import"./tick-BDn1wXHc.js";import"./DropdownField-DegXtX4D.js";import"./withOsdkMetrics-RqRZ8y66.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
