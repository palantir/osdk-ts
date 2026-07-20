import{f as b,j as a,r as i}from"./iframe-_wCc84hx.js";import{O as u}from"./object-table-BDMMG_v5.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dm5WLx_b.js";import"./Table-DV8FgymG.js";import"./index-DKGQe5X-.js";import"./Dialog-c3FQDK-H.js";import"./cross-C35-7HOl.js";import"./svgIconContainer-B_16lQ24.js";import"./useBaseUiId-B9evOHrm.js";import"./InternalBackdrop-B0VAQ47t.js";import"./composite-DMhUlR38.js";import"./index-F8Pq7Dsa.js";import"./index-CCKK8zB9.js";import"./index-B8q3zAdK.js";import"./useEventCallback-COSao2Kd.js";import"./SkeletonBar-Tp0RZmJp.js";import"./LoadingCell-B0xV7dN3.js";import"./ColumnConfigDialog-D8cIRF7j.js";import"./DraggableList-DDrAvnCq.js";import"./search-JAM6YWr2.js";import"./Input-GI5hTKCN.js";import"./useControlled-CJeKOPI7.js";import"./isEqual-qEJ4CUIL.js";import"./isObject-CmL0LJBI.js";import"./Button-DwFfVQT6.js";import"./ActionButton-B6V8gZBb.js";import"./Checkbox-66-h2NJq.js";import"./useValueChanged-BFi2Ldgw.js";import"./CollapsiblePanel-BxdaKAca.js";import"./MultiColumnSortDialog-BsVJZPNv.js";import"./MenuTrigger-Cifp6h13.js";import"./CompositeItem-BQxw9byX.js";import"./ToolbarRootContext-C3MJIkPW.js";import"./getDisabledMountTransitionStyles-C8IcNrcm.js";import"./getPseudoElementBounds-DaVmNr2e.js";import"./chevron-down-diHGh1BL.js";import"./index-CpLBa3i0.js";import"./error-BTPve98s.js";import"./BaseCbacBanner-tlk2qkB4.js";import"./makeExternalStore-DW-4lsmm.js";import"./Tooltip-DnVxTI2l.js";import"./PopoverPopup-BpMvdbI9.js";import"./toNumber-CnYfMg9w.js";import"./useOsdkClient-E_AJxnLH.js";import"./tick-B7MwIG9N.js";import"./DropdownField-DsInxVG1.js";import"./withOsdkMetrics-CHeDrLzK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
