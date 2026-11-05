import{f as b,j as a,r as i}from"./iframe-DbsqonCE.js";import{O as u}from"./object-table-DA5jSnwV.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-j-tWLxPO.js";import"./Table-MNCymP4D.js";import"./index-BcP7gLrZ.js";import"./Dialog-0nGf99oK.js";import"./cross-CjgfYmIf.js";import"./svgIconContainer-dTQS0Q1O.js";import"./useBaseUiId-mLSoMawn.js";import"./InternalBackdrop-BBrETTbv.js";import"./composite-CWSSZekk.js";import"./index-BeGCx8DT.js";import"./index-sTgTffNL.js";import"./index-CPbyyhi1.js";import"./useEventCallback-C5plIhZm.js";import"./SkeletonBar-Cqg3iKwl.js";import"./LoadingCell-D9cR1_vu.js";import"./ColumnConfigDialog-C0IgpjCM.js";import"./DraggableList-D79YeOIz.js";import"./search-CKNMsX_Q.js";import"./Input-CUOKus6W.js";import"./useControlled-DjGJelPK.js";import"./Button-CuTOWFQU.js";import"./small-cross-Bz1qN0Fj.js";import"./ActionButton-eD9eoVja.js";import"./Checkbox-D2q5FQlq.js";import"./useValueChanged-DhjL6tSV.js";import"./CollapsiblePanel-CeGg5-MP.js";import"./MultiColumnSortDialog-DsApXviW.js";import"./MenuTrigger-BlokuDW_.js";import"./CompositeItem-ClfgExBb.js";import"./ToolbarRootContext-Dy_E221D.js";import"./getDisabledMountTransitionStyles-DjGsekTm.js";import"./getPseudoElementBounds-DTkCd2MG.js";import"./chevron-down-C_Jq6VbG.js";import"./index-CXVkt83A.js";import"./error-Cdk7CynS.js";import"./BaseCbacBanner-Bjo_DyOc.js";import"./makeExternalStore-C9jMv8gA.js";import"./Tooltip-DXmh_6cJ.js";import"./PopoverPopup-hUOJJqgD.js";import"./debounce-BsTQJeH4.js";import"./useOsdkClient-5br-viQH.js";import"./tick-Dw_xLuw5.js";import"./DropdownField-jTLe7uIN.js";import"./isEqual-C-a0ZU60.js";import"./withOsdkMetrics-D9Ly-VH2.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
