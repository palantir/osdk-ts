import{f as b,j as a,r as i}from"./iframe-CHEKlg6X.js";import{O as u}from"./object-table-BP_zntdA.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bk_EBvkM.js";import"./Table-BuyJuU36.js";import"./index-BlVg7-ny.js";import"./Dialog-vP86KpqH.js";import"./cross-CLXDm_xy.js";import"./svgIconContainer-CkU_wGfW.js";import"./useBaseUiId-Dm5MMLjS.js";import"./InternalBackdrop-C-VD7cf_.js";import"./composite-CfCX0gh6.js";import"./index-D9r-VgWS.js";import"./index-B4M03-o8.js";import"./index-D-2F9sJ3.js";import"./useEventCallback-OPC9ZPah.js";import"./SkeletonBar-BRlkv3E0.js";import"./LoadingCell-CJCiWLh3.js";import"./ColumnConfigDialog-CriuUgSm.js";import"./DraggableList-C_pi7nFv.js";import"./search-C2zDUTqA.js";import"./Input-BQ285Nrh.js";import"./useControlled-YILXX2lb.js";import"./Button-BeqL8QWK.js";import"./small-cross-D0U4JMZD.js";import"./ActionButton-BEr53hKB.js";import"./Checkbox-CLYIDo-5.js";import"./useValueChanged-DpZywDla.js";import"./CollapsiblePanel-BhAp95bX.js";import"./MultiColumnSortDialog-Cu7uDp8D.js";import"./MenuTrigger-Bs3ieiYQ.js";import"./CompositeItem-BM163bD9.js";import"./ToolbarRootContext-Cjz1--hk.js";import"./getDisabledMountTransitionStyles-HaZ0LwJT.js";import"./getPseudoElementBounds-eH10EFit.js";import"./chevron-down-2mN8R6m0.js";import"./index-CaLR8Vgq.js";import"./error-DR3tFMqe.js";import"./BaseCbacBanner-BZvPs1fF.js";import"./makeExternalStore--de5UDab.js";import"./Tooltip-B-MZurAO.js";import"./PopoverPopup-lRNkVQdy.js";import"./debounce-L-eLPBO3.js";import"./useOsdkClient-D_1rD8l7.js";import"./tick-BxZLRw17.js";import"./DropdownField-DMVGeKqk.js";import"./isEqual-CfJ7iHOo.js";import"./withOsdkMetrics-CBYIB_jK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
