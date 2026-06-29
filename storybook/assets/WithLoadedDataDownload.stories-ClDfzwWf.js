import{f as b,j as a,r as i}from"./iframe-CT-1jnja.js";import{O as u}from"./object-table-BaAeSv8y.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-fmbwXZXk.js";import"./index-Dp1Xu9AX.js";import"./Dialog--6b_ZbNF.js";import"./cross-B1mq_08r.js";import"./svgIconContainer-BJs--o3z.js";import"./useBaseUiId-o5kNe8pZ.js";import"./InternalBackdrop-DDXQjZOx.js";import"./composite-BhEXYnty.js";import"./index-BJDjJ5Dv.js";import"./index-DAfTNcRo.js";import"./index-LxLSEELg.js";import"./useEventCallback-jA5anQnx.js";import"./SkeletonBar-BfJ8klFy.js";import"./LoadingCell-CeYsinIR.js";import"./ColumnConfigDialog-BZMGdIMl.js";import"./DraggableList-C9sfvP0A.js";import"./search-khumesqG.js";import"./Input-ONhZnySG.js";import"./useControlled-CfwEeH2c.js";import"./Button-BuPvUCGG.js";import"./small-cross-BvjSCIsY.js";import"./ActionButton-CON5KtLD.js";import"./Checkbox-jDxiLczv.js";import"./minus-DEaqRHBD.js";import"./tick-CDE-Ff5D.js";import"./useValueChanged-BA2Lu0hR.js";import"./caret-down-DAeDvFNl.js";import"./CollapsiblePanel-OYG70osH.js";import"./MultiColumnSortDialog-DlRiCi-_.js";import"./MenuTrigger-CZj3_ebr.js";import"./CompositeItem-DkyKhTZD.js";import"./ToolbarRootContext-DJ0L3jkE.js";import"./getDisabledMountTransitionStyles-DYYOAXDV.js";import"./getPseudoElementBounds-DoHLI3u9.js";import"./chevron-down-DyhuSJxa.js";import"./index-BXZ6zT4r.js";import"./error-Dz57Ovxk.js";import"./BaseCbacBanner-CaS3nDhT.js";import"./makeExternalStore-B8xcQUMo.js";import"./Tooltip-DoaWo_w_.js";import"./PopoverPopup-BAoXillR.js";import"./toNumber-BTELJemj.js";import"./useOsdkClient-DYD1tLip.js";import"./DropdownField-Ca_IyL6R.js";import"./withOsdkMetrics-CuyI_rrJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
