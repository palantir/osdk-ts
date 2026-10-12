import{f as b,j as a,r as i}from"./iframe-DgffzXcd.js";import{O as u}from"./object-table-fY9Xd0yZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-cnms5IGS.js";import"./Table-CzDvDm7i.js";import"./index-BBLuu-Hq.js";import"./Dialog-BCwFL75a.js";import"./cross-BSsj-b40.js";import"./svgIconContainer-Blhk3Pl5.js";import"./useBaseUiId-D8q2NPVv.js";import"./InternalBackdrop-Bgldltbx.js";import"./composite-CF6w6iAh.js";import"./index-CAwd0aO9.js";import"./index-CeFEKlyx.js";import"./index-Cef6tpmG.js";import"./useEventCallback-DtRRBbn7.js";import"./SkeletonBar-CE1Y87-p.js";import"./LoadingCell-CsHmwUPd.js";import"./ColumnConfigDialog-astW80O7.js";import"./DraggableList-B1uaj-eR.js";import"./search-CJlxOI-X.js";import"./Input-c6SLv_Xy.js";import"./useControlled-BV_EXpzJ.js";import"./Button-UP0puh42.js";import"./small-cross-BBQkhsLR.js";import"./ActionButton-BaBnxcfR.js";import"./Checkbox-RB80j2cY.js";import"./useValueChanged-aTAAjdkj.js";import"./CollapsiblePanel-DXdXfeG6.js";import"./MultiColumnSortDialog-DDvpuTsH.js";import"./MenuTrigger-DCg3dPT6.js";import"./CompositeItem-BH2gdPXz.js";import"./ToolbarRootContext-DEjBOujG.js";import"./getDisabledMountTransitionStyles-Db73lXfO.js";import"./getPseudoElementBounds-DD-pb8mO.js";import"./chevron-down-B-BBWbod.js";import"./index-AOiW_Fy4.js";import"./error-C62WbJ6c.js";import"./BaseCbacBanner-tjiO2qm2.js";import"./makeExternalStore-FJNApXaM.js";import"./Tooltip-Ddt-e1A4.js";import"./PopoverPopup-YsjB_oA6.js";import"./debounce-KT7GVLZu.js";import"./useOsdkClient-DKu9s4PU.js";import"./tick-DXpn86OC.js";import"./DropdownField-FoaA7AiA.js";import"./isEqual-XaPl52Ec.js";import"./withOsdkMetrics-BMLt42BN.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
