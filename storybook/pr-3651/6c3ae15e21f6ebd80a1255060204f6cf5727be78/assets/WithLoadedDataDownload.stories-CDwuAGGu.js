import{f as b,j as a,r as i}from"./iframe-D6LppXIC.js";import{O as u}from"./object-table-Bx2u0Rqd.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Xw5BUKDS.js";import"./Table-Bt_dncY2.js";import"./index-DsZIuXhx.js";import"./Dialog-DVgHZ2KB.js";import"./cross-BJkqWy7f.js";import"./svgIconContainer-MqRZ09_V.js";import"./useBaseUiId-VCJRl6vY.js";import"./InternalBackdrop-mMElmQXP.js";import"./composite-7hwSNArh.js";import"./index-BG5fCpyp.js";import"./index-CXm4l1ly.js";import"./index-CflgnpXX.js";import"./useEventCallback-Bd5MvVSc.js";import"./SkeletonBar-BOGUwr2W.js";import"./LoadingCell-DAMO2OWT.js";import"./ColumnConfigDialog-CTnvnO4S.js";import"./DraggableList-y7dpM4u2.js";import"./search-VSqqU_nb.js";import"./Input-CDpmfVIE.js";import"./useControlled--zDJdgut.js";import"./Button-07HtfNIy.js";import"./small-cross-DEV5SS6T.js";import"./ActionButton-5zTEsiYB.js";import"./Checkbox-DC70oVWe.js";import"./useValueChanged-B-jwimhj.js";import"./CollapsiblePanel-CIBVAJ69.js";import"./MultiColumnSortDialog-2eIcQ8_1.js";import"./MenuTrigger-DrIdbVu0.js";import"./CompositeItem-ClT8pN5y.js";import"./ToolbarRootContext-B7s4OP0L.js";import"./getDisabledMountTransitionStyles-BKxhPcFx.js";import"./getPseudoElementBounds-tD9gD0Yb.js";import"./chevron-down-CfICpT21.js";import"./index-fZ0re5SP.js";import"./error-CUJPO0AP.js";import"./BaseCbacBanner-B7MfrsTP.js";import"./makeExternalStore-DDp9HQ5i.js";import"./Tooltip-CnrsU9_z.js";import"./PopoverPopup-BYuQhioE.js";import"./toNumber-C_IGOufy.js";import"./useOsdkClient-Dk8G7huX.js";import"./tick-OgmCBH6C.js";import"./DropdownField-lA5RFBz-.js";import"./withOsdkMetrics-7qFi5qLQ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
