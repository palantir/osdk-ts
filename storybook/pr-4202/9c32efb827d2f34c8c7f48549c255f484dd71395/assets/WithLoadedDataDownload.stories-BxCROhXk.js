import{f as b,j as a,r as i}from"./iframe-CRdsH5HZ.js";import{O as u}from"./object-table-CUFv6UI4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CKZQslH7.js";import"./Table-DkkO-DrZ.js";import"./index-DTd5KXcK.js";import"./Dialog-CmlPK-gk.js";import"./cross-Ck_cirtk.js";import"./svgIconContainer-B82w1dNX.js";import"./useBaseUiId-CclOULO6.js";import"./InternalBackdrop-DJrTMBsF.js";import"./composite-83cwJd-q.js";import"./index-Cn4z51Ds.js";import"./index-CF0tZzS5.js";import"./index-DvUsnOXq.js";import"./useEventCallback-C0Ta6sLF.js";import"./SkeletonBar-DYF5X8SW.js";import"./LoadingCell-BN4n4qs-.js";import"./ColumnConfigDialog-C_h_kxKO.js";import"./DraggableList-BW5fwLS7.js";import"./search-BLamqbky.js";import"./Input-C5MZZ2uA.js";import"./useControlled-DWxXLpHB.js";import"./Button-DC0lWoOP.js";import"./small-cross-BreRJzoU.js";import"./ActionButton-D-BsxzSk.js";import"./Checkbox-CfBjCkTk.js";import"./useValueChanged-CX0FVdOs.js";import"./CollapsiblePanel-0dVMjFgS.js";import"./MultiColumnSortDialog-BmRwnaRM.js";import"./MenuTrigger-Bn3KvjTK.js";import"./CompositeItem-2Hw_8anp.js";import"./ToolbarRootContext-CqwjH-y3.js";import"./getDisabledMountTransitionStyles-C6LNjQ6D.js";import"./getPseudoElementBounds-CvnVVkY1.js";import"./chevron-down-0O9k5DT8.js";import"./index-IbJqJxEo.js";import"./error-Cy0mbDhX.js";import"./BaseCbacBanner-Dcb8iXmf.js";import"./makeExternalStore-DkeRNmA2.js";import"./Tooltip-BJFUBzvs.js";import"./PopoverPopup-B-cadNgq.js";import"./debounce-t2Bd0wd0.js";import"./useOsdkClient-DpUzM88Y.js";import"./tick-vhMtzz2I.js";import"./DropdownField-DNlPXkBE.js";import"./isEqual-BpGRYfyV.js";import"./withOsdkMetrics-CI0orLhd.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
