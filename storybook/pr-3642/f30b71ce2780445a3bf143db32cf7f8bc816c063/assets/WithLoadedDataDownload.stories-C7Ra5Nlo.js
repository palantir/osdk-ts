import{f as b,j as a,r as i}from"./iframe-PR70Nfar.js";import{O as u}from"./object-table-B3T3Sdu3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-1wD2feua.js";import"./Table-L6nqo5Pe.js";import"./index-Cy9aqFKo.js";import"./Dialog-Dh8Hb9d2.js";import"./cross-DxOZXdcd.js";import"./svgIconContainer-DKlv6AER.js";import"./useBaseUiId-F1N6rQmT.js";import"./InternalBackdrop-Ca-g06qo.js";import"./composite-EvjKCf2c.js";import"./index-Bj2z0IRA.js";import"./index-CWco9Po_.js";import"./index-BL11uJIT.js";import"./useEventCallback-rOJ6xsEp.js";import"./SkeletonBar-DHtbBnWm.js";import"./LoadingCell-B1NT3OCC.js";import"./ColumnConfigDialog-DSAKV-ql.js";import"./DraggableList-D6N_hSK_.js";import"./search-CHBS7e9v.js";import"./Input-C4A_k7Mc.js";import"./useControlled-Bc9n7-zI.js";import"./Button-UA7F1wyp.js";import"./small-cross-DQ4DF0p6.js";import"./ActionButton-CAt4cc_1.js";import"./Checkbox-mt_g5My_.js";import"./useValueChanged-DDM9CaLp.js";import"./CollapsiblePanel-Bwf_W8Dv.js";import"./MultiColumnSortDialog-DSJrwFtv.js";import"./MenuTrigger-DDGzG2zA.js";import"./CompositeItem-DSDXjTJN.js";import"./ToolbarRootContext-B02N7MTi.js";import"./getDisabledMountTransitionStyles-PUhrqsTX.js";import"./getPseudoElementBounds-CIBbcWo-.js";import"./chevron-down-VPL4wmWd.js";import"./index-BBVVzuz8.js";import"./error-3hbxlX1d.js";import"./BaseCbacBanner-B-rnNsIs.js";import"./makeExternalStore-BWwdQGLN.js";import"./Tooltip-DhZ92T4f.js";import"./PopoverPopup-COaVd-Rw.js";import"./toNumber-CBpERjJJ.js";import"./useOsdkClient-Cx1qdJIA.js";import"./tick-svySghO-.js";import"./DropdownField-hNg4CqXB.js";import"./withOsdkMetrics-GqCxNbCK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
