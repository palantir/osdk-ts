import{f as b,j as a,r as i}from"./iframe-DhaeZ5jA.js";import{O as u}from"./object-table-C49dl9EA.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-K2u40jh1.js";import"./Table-DtuaF1KF.js";import"./index-DeR24p_R.js";import"./Dialog-BdielFog.js";import"./cross-DClpwiSq.js";import"./svgIconContainer-D1A5TQ09.js";import"./useBaseUiId-SY6Ypglq.js";import"./InternalBackdrop-YSyW40Bm.js";import"./composite-Cgd0WX8p.js";import"./index-CzJm0BPp.js";import"./index-toHig1uh.js";import"./index-r4UUHJWf.js";import"./useEventCallback-DAZ3mmOB.js";import"./SkeletonBar-q71tbIuj.js";import"./LoadingCell-Dy8dkUBN.js";import"./ColumnConfigDialog-jmcQht-h.js";import"./DraggableList-DXD9a2YZ.js";import"./Input-1PVMAqzc.js";import"./useControlled-oeIdVPCz.js";import"./Button-fU95c8Zm.js";import"./small-cross-FOrpiinm.js";import"./ActionButton-CkAV_ALs.js";import"./Checkbox-CitcNguY.js";import"./minus-RQqZQWVu.js";import"./useValueChanged-YJqdV6te.js";import"./caret-down-CadaFI2j.js";import"./CollapsiblePanel-DSPCZ7td.js";import"./MultiColumnSortDialog-AtyvTEcA.js";import"./MenuTrigger-BuVNVofP.js";import"./CompositeItem-Bc8j5DYn.js";import"./ToolbarRootContext-DB3wgiWa.js";import"./getDisabledMountTransitionStyles-1sFT8hYK.js";import"./getPseudoElementBounds-Bh0PIHGi.js";import"./chevron-down-DfK3K9PO.js";import"./index-2zD_rf0t.js";import"./error-CSh6zJGP.js";import"./BaseCbacBanner-DXVaktqz.js";import"./makeExternalStore-k8detlbK.js";import"./Tooltip-xr8yJzni.js";import"./PopoverPopup-XkJstrhH.js";import"./toNumber-DodssQTN.js";import"./useOsdkClient-DDMxf_yF.js";import"./DropdownField-DEdCZRRM.js";import"./withOsdkMetrics-CuoiiQBR.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
