import{f as b,j as a,r as i}from"./iframe-C8W_1yJa.js";import{O as u}from"./object-table-CfEXVxhw.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CTLXhaGl.js";import"./Table-CYPF32De.js";import"./index-BHosZjWC.js";import"./Dialog-CbnrLYcS.js";import"./cross-CZHInJK7.js";import"./svgIconContainer-BYaq9C4Y.js";import"./useBaseUiId-D9u19KRt.js";import"./InternalBackdrop-DJwuEZsI.js";import"./composite-D9vkqeMo.js";import"./index-A9PJi114.js";import"./index-Ckh3kz80.js";import"./index-DY7N8tg4.js";import"./useEventCallback-BQQwBwX-.js";import"./SkeletonBar-BMP97Bi7.js";import"./LoadingCell-x9q3_gtq.js";import"./ColumnConfigDialog-BwNIscIX.js";import"./DraggableList-_tdrOdNd.js";import"./search-DN1_1bJo.js";import"./Input-QwDU-OOH.js";import"./useControlled-BNicjJXr.js";import"./Button-BTdxh1PU.js";import"./small-cross-VRGJdYzw.js";import"./ActionButton-DQmOZQvx.js";import"./Checkbox-DhKrDZ9A.js";import"./useValueChanged-DKvAzyx9.js";import"./CollapsiblePanel-FwTNNP5Y.js";import"./MultiColumnSortDialog-BQD749yI.js";import"./MenuTrigger-CfEP9Xzr.js";import"./CompositeItem-ksibX-Pt.js";import"./ToolbarRootContext-B64BT2dX.js";import"./getDisabledMountTransitionStyles-AYk6J0dN.js";import"./getPseudoElementBounds-9jhDuj_I.js";import"./chevron-down-CTsGKY-w.js";import"./index-BDWszJ74.js";import"./error-DTe2-M69.js";import"./BaseCbacBanner-bPaBonGO.js";import"./makeExternalStore-Dkf4Frge.js";import"./Tooltip-DJOihC1O.js";import"./PopoverPopup-BJN7bFZl.js";import"./debounce-C0R7ONRw.js";import"./useOsdkClient-ud-o5HVE.js";import"./tick-CFChvKzW.js";import"./DropdownField-C0lsf-fP.js";import"./isEqual-EFg4idVR.js";import"./withOsdkMetrics-CU6eTpB7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
