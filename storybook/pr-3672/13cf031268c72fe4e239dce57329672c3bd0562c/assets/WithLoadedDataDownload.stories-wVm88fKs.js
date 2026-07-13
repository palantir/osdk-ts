import{f as b,j as a,r as i}from"./iframe-Cj5kRxtc.js";import{O as u}from"./object-table-CcQV0xix.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-gv4OSTpO.js";import"./Table-D3x_-EBg.js";import"./index-h3U-6pk3.js";import"./Dialog-yFGiOgkk.js";import"./cross-BG55D_WO.js";import"./svgIconContainer-Cf4A2tFb.js";import"./useBaseUiId-DLWDq50N.js";import"./InternalBackdrop-DrKtgehN.js";import"./composite-cykJJ9WN.js";import"./index-DS9u3jBh.js";import"./index-a0FCqlaX.js";import"./index-DzAVE_hB.js";import"./useEventCallback-CzMnlFTg.js";import"./SkeletonBar-JczedoyL.js";import"./LoadingCell-Zn2tHYwb.js";import"./ColumnConfigDialog-DNxjOrJk.js";import"./DraggableList-DOB9ODad.js";import"./search-CmTqx7Sz.js";import"./Input-CkR9HP68.js";import"./useControlled-D0OderS4.js";import"./Button-wcLol09e.js";import"./small-cross-BKBXy0_v.js";import"./ActionButton-BkkPghA9.js";import"./Checkbox-BweQyyPe.js";import"./useValueChanged-dJbjOK5H.js";import"./CollapsiblePanel-D9nFR4He.js";import"./MultiColumnSortDialog-BxLlxg0X.js";import"./MenuTrigger-B8c-Gwjp.js";import"./CompositeItem-BLdfQxuH.js";import"./ToolbarRootContext-BWrS8Fbo.js";import"./getDisabledMountTransitionStyles-DtO3OzMa.js";import"./getPseudoElementBounds-BpOs4OtK.js";import"./chevron-down-qz7KlM0E.js";import"./index-CSR_UVHA.js";import"./error-CXDLgeUT.js";import"./BaseCbacBanner-Dy_BkQMU.js";import"./makeExternalStore-CxvPzi28.js";import"./Tooltip-CXe0dR9G.js";import"./PopoverPopup-DqWAJO1x.js";import"./toNumber-llLqEBkP.js";import"./useOsdkClient-doCtaKNi.js";import"./tick-D2XfOyTn.js";import"./DropdownField-D54eTit_.js";import"./withOsdkMetrics-Dx0BBnsy.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
