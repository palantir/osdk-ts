import{f as b,j as a,r as i}from"./iframe-5sgXXUq2.js";import{O as u}from"./object-table-aOrhl4B7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cbn9zcHA.js";import"./Table-BgEDWebR.js";import"./index-CzwNxfu7.js";import"./Dialog-CaIF2dWF.js";import"./cross-Dl1YYoqq.js";import"./svgIconContainer-6O_QyJta.js";import"./useBaseUiId-DG_QbP_U.js";import"./InternalBackdrop-CjtV5ZAW.js";import"./composite-Ine8e3tf.js";import"./index-C3HPrqRk.js";import"./index-Dnj1V73h.js";import"./index-BBV34otm.js";import"./useEventCallback-BdN49Cxy.js";import"./SkeletonBar-BEL6Gir4.js";import"./LoadingCell-C1_I6sfl.js";import"./ColumnConfigDialog-BcHlPWgE.js";import"./DraggableList-D4fBscVn.js";import"./search-BYA2jSn3.js";import"./Input-CwUkFVhs.js";import"./useControlled-siu4g8xe.js";import"./Button-71PqqjpD.js";import"./small-cross-B4u9H8ya.js";import"./ActionButton-BO7jWeao.js";import"./Checkbox-DGdxwXIf.js";import"./useValueChanged-C7csg4cA.js";import"./CollapsiblePanel-Dcs-Jidu.js";import"./MultiColumnSortDialog-DGOxrWta.js";import"./MenuTrigger-BGZdYvp4.js";import"./CompositeItem-CIAR7LV4.js";import"./ToolbarRootContext-HX5a3LbS.js";import"./getDisabledMountTransitionStyles-CuDkESvM.js";import"./getPseudoElementBounds-DuTJjluI.js";import"./chevron-down-B4APaT5X.js";import"./index-BUovi2pL.js";import"./error-CIAmmsFo.js";import"./BaseCbacBanner-CHao_-T2.js";import"./makeExternalStore-D7x2N1Sq.js";import"./Tooltip-Bz_qehDJ.js";import"./PopoverPopup-BjatbugG.js";import"./debounce-D_ZNVjIE.js";import"./useOsdkClient-CvRRMyub.js";import"./tick-BcyhdjRi.js";import"./DropdownField-DDOypfNs.js";import"./isEqual-BD5xaPW8.js";import"./withOsdkMetrics-Dp93P8HI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
