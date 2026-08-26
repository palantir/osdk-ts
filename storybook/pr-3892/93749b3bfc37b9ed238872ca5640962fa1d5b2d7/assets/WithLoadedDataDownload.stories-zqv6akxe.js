import{f as b,j as a,r as i}from"./iframe-BLZOZW6T.js";import{O as u}from"./object-table-DqxkZbgO.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BHT5lAru.js";import"./Table-dx6pwWIS.js";import"./index-Ahi5oMOt.js";import"./Dialog-GVs4rX3z.js";import"./cross-tEyjMRHD.js";import"./svgIconContainer-5vRPxuG5.js";import"./useBaseUiId-DZK7RG_f.js";import"./InternalBackdrop-iNO5Vei7.js";import"./composite-CRbvEibM.js";import"./index-DTxc1Osh.js";import"./index-ew_UyycK.js";import"./index-hsRhqC-3.js";import"./useEventCallback-DEsWc7Yx.js";import"./SkeletonBar-DMlEsaA0.js";import"./LoadingCell-C_e88Nbd.js";import"./ColumnConfigDialog-Ca0TTFpY.js";import"./DraggableList-DHxzUxXi.js";import"./search-FYqqa5v1.js";import"./Input-BOnD-W6r.js";import"./useControlled-COYf85Oy.js";import"./Button-DIO4S2kj.js";import"./small-cross-B3UhGftV.js";import"./ActionButton-C5lrJG63.js";import"./Checkbox-DNqoME2L.js";import"./useValueChanged-E7YHGw8y.js";import"./CollapsiblePanel-CTIviYDr.js";import"./MultiColumnSortDialog-B_1MQGgn.js";import"./MenuTrigger-KIj5uwST.js";import"./CompositeItem-C1uYFHLI.js";import"./ToolbarRootContext-J2Xa_TG-.js";import"./getDisabledMountTransitionStyles-CHVkErr4.js";import"./getPseudoElementBounds-BrWb8Yo6.js";import"./chevron-down-Cs3lx4vz.js";import"./index-DwKU9nYV.js";import"./error-BZramTgy.js";import"./BaseCbacBanner-cnlNeaYN.js";import"./makeExternalStore-M7RjktEr.js";import"./Tooltip-DphF3Fsm.js";import"./PopoverPopup-dw0h2vwP.js";import"./debounce-BZPHVZxa.js";import"./useOsdkClient-D8U812ID.js";import"./tick-C0OJoswb.js";import"./DropdownField-L_MoXsHP.js";import"./isEqual-DwVE72P3.js";import"./withOsdkMetrics-CD2XJjA_.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
