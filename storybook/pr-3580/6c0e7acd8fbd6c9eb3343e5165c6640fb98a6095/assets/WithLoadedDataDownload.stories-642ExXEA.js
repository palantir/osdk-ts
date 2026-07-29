import{f as b,j as a,r as i}from"./iframe-DjNcwtyF.js";import{O as u}from"./object-table-BaeKZjZt.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BlurYcsu.js";import"./Table-D5G-OBdw.js";import"./index-DlfDEuMy.js";import"./Dialog-CfYZ-g2f.js";import"./cross-CAGDORQd.js";import"./svgIconContainer-BloETKks.js";import"./useBaseUiId-DtQ8itjz.js";import"./InternalBackdrop-Iq764F0E.js";import"./composite-_Zi5hsVn.js";import"./index-Wa1RvSxW.js";import"./index-C10Nkt1X.js";import"./index-a2omIe2r.js";import"./useEventCallback-Cfa1IApQ.js";import"./SkeletonBar-DG-FYrcp.js";import"./LoadingCell-NfUq9pVA.js";import"./ColumnConfigDialog-CYes7v2Y.js";import"./DraggableList-UuL8N_9f.js";import"./search-BkTLS9-p.js";import"./Input-Bab10rEQ.js";import"./useControlled-BCOo9PsH.js";import"./Button-Cq8fAgAs.js";import"./small-cross-Cy_nI018.js";import"./ActionButton-aZBjFxis.js";import"./Checkbox-DZgsMLwP.js";import"./useValueChanged-CaGHpMGt.js";import"./CollapsiblePanel-Cj8bovHV.js";import"./MultiColumnSortDialog-ZI2tYe1c.js";import"./MenuTrigger-DgfieLCd.js";import"./CompositeItem-p5N-XohV.js";import"./ToolbarRootContext-B_JSm_wM.js";import"./getDisabledMountTransitionStyles-6qLgX2Vy.js";import"./getPseudoElementBounds-C808Q2xQ.js";import"./chevron-down-BxaO6vl0.js";import"./index-D7aQe20D.js";import"./error-BlJ5qp7I.js";import"./BaseCbacBanner-BCRTkMbf.js";import"./makeExternalStore-C1qBq1rw.js";import"./Tooltip-CqjPwpVO.js";import"./PopoverPopup-BQ1F2XWc.js";import"./toNumber-WLlXrll9.js";import"./useOsdkClient-CD6rIL0k.js";import"./tick-ChhbHNW5.js";import"./DropdownField-KTYV65tq.js";import"./withOsdkMetrics-BrijnFac.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
