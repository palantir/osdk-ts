import{f as b,j as a,r as i}from"./iframe-BdNbAFle.js";import{O as u}from"./object-table-B8VDRNJQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BjV6E6gx.js";import"./Table-DzdTKJoa.js";import"./index-4fA03-91.js";import"./Dialog-Bqns7Cny.js";import"./cross-BSVbceJM.js";import"./svgIconContainer-Dyrfk8aF.js";import"./useBaseUiId-BGjT-Qmv.js";import"./InternalBackdrop-B4P9pOFD.js";import"./composite-DaC07jrL.js";import"./index-C9KIenbi.js";import"./index-CO-SFKBQ.js";import"./index-Cv9V_OhJ.js";import"./useEventCallback-axbciU-3.js";import"./SkeletonBar-BzG-PT6j.js";import"./LoadingCell-N5Ki9l1v.js";import"./ColumnConfigDialog-CqvfzrT6.js";import"./DraggableList-CwLGIfva.js";import"./search-Bs7peCHA.js";import"./Input-lS_WHl4g.js";import"./useControlled-CBZPBUlo.js";import"./Button-CfUv03Rp.js";import"./small-cross-CutI3SqV.js";import"./ActionButton-DKb0FJWo.js";import"./Checkbox-CbZ9YUjr.js";import"./useValueChanged-C-1RM3yJ.js";import"./CollapsiblePanel-mDwz27Ku.js";import"./MultiColumnSortDialog-nv-VEHdV.js";import"./MenuTrigger-DWHCEwjO.js";import"./CompositeItem-BDhhqbET.js";import"./ToolbarRootContext-Bnpwe4G1.js";import"./getDisabledMountTransitionStyles-Dbwrwhw7.js";import"./getPseudoElementBounds-DcblgtJP.js";import"./chevron-down-B8IA8ZhM.js";import"./index-QBUU6ayA.js";import"./error-D7NvUwWR.js";import"./BaseCbacBanner-B6JH6rjR.js";import"./makeExternalStore-DIquDnN6.js";import"./Tooltip-DsT4W0zu.js";import"./PopoverPopup-DTDkR26u.js";import"./toNumber-B-AY_Nn9.js";import"./useOsdkClient-B7VW7fY5.js";import"./tick-CPtnCvMC.js";import"./DropdownField-BgvYcw1K.js";import"./withOsdkMetrics-DPn6STul.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
