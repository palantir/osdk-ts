import{f as b,j as a,r as i}from"./iframe-D9lxuTZ1.js";import{O as u}from"./object-table-BcK9RPB-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Do7-tsr0.js";import"./Table-DD-tXUPx.js";import"./index-B7SuRf-V.js";import"./Dialog-VwCR0bPK.js";import"./cross-Dp8JFrXV.js";import"./svgIconContainer-B5cX7c4P.js";import"./useBaseUiId-C5fWipJz.js";import"./InternalBackdrop-zHLZ2Pg6.js";import"./composite-N1lpXgfE.js";import"./index-CMtfSI0z.js";import"./index-JW_r_biz.js";import"./index-B6rg5sLK.js";import"./useEventCallback-BXglCah1.js";import"./SkeletonBar-CX_rfoc0.js";import"./LoadingCell-BiFVTmAU.js";import"./ColumnConfigDialog-B6jCT6GQ.js";import"./DraggableList-COhsxiYh.js";import"./search-P4qKgx4r.js";import"./Input-JFvS6kPu.js";import"./useControlled-K8Wk1UIc.js";import"./isEqual-BDIfFjZC.js";import"./isObject-CYhijOxl.js";import"./Button-DfHA5hQa.js";import"./ActionButton-Bcj4bgB4.js";import"./Checkbox-DWY-RldS.js";import"./useValueChanged-DdwNqbLb.js";import"./CollapsiblePanel-DTcBmlQY.js";import"./MultiColumnSortDialog-287Y8HJj.js";import"./MenuTrigger-CfFIFz0j.js";import"./CompositeItem-DaRifkLs.js";import"./ToolbarRootContext-Btl_Kd9E.js";import"./getDisabledMountTransitionStyles-rVL7Pgrv.js";import"./getPseudoElementBounds-BliHZfBe.js";import"./chevron-down-BiZI_wPn.js";import"./index-DDrHGFl3.js";import"./error-C8UL0roA.js";import"./BaseCbacBanner-BU5Krxn-.js";import"./makeExternalStore-a81xtmQN.js";import"./Tooltip-CfbzUV6a.js";import"./PopoverPopup-CA3gyqQX.js";import"./toNumber-C8aPmDeg.js";import"./useOsdkClient-uX6j0ioZ.js";import"./tick-DVzgU-_7.js";import"./DropdownField-BPxbUD6Y.js";import"./withOsdkMetrics-CFrjKiMG.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
