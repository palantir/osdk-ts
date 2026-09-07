import{f as b,j as a,r as i}from"./iframe-jVZSa0_O.js";import{O as u}from"./object-table-pRHX98Mv.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B0JsgF0Q.js";import"./Table-nVgjXAUi.js";import"./index-cz87o1u2.js";import"./Dialog-DVswX8WH.js";import"./cross-D_kf2VMY.js";import"./svgIconContainer-CCkoUGO-.js";import"./useBaseUiId-Dh7cbX1i.js";import"./InternalBackdrop-CNizCF8V.js";import"./composite-B1R1VOU-.js";import"./index-CFlWgQDO.js";import"./index-DRJcVra2.js";import"./index-D68UoJcu.js";import"./useEventCallback-BFzCFepw.js";import"./SkeletonBar-D52KZgWC.js";import"./LoadingCell-xEbKxsbK.js";import"./ColumnConfigDialog-CSIk7lHh.js";import"./DraggableList-gx-jNQAx.js";import"./search-y5GiQxVJ.js";import"./Input-DE-dqgbb.js";import"./useControlled-PPoFg-g2.js";import"./Button-ruj5eHNw.js";import"./small-cross-DW-_vWg4.js";import"./ActionButton-MDw6R0lF.js";import"./Checkbox-7WJWAj1Q.js";import"./useValueChanged-lRBuZxnF.js";import"./CollapsiblePanel-BwEkY4as.js";import"./MultiColumnSortDialog-DOQ54144.js";import"./MenuTrigger-ClD5MLDz.js";import"./CompositeItem-Bdw-jz1U.js";import"./ToolbarRootContext-W1O_4HxY.js";import"./getDisabledMountTransitionStyles-CPsauNSR.js";import"./getPseudoElementBounds-CZyxgjLi.js";import"./chevron-down-vgR9jQm9.js";import"./index-DprOP2mE.js";import"./error-BkWT_eOO.js";import"./BaseCbacBanner-DOO_uje4.js";import"./makeExternalStore-D0xCnJrG.js";import"./Tooltip-nvYgD8vA.js";import"./PopoverPopup-BkH3GWX-.js";import"./debounce-29zvw66V.js";import"./useOsdkClient-DXW6J2KM.js";import"./tick-y1p0xcrN.js";import"./DropdownField-B7ayEcBh.js";import"./isEqual-kMY5ydKZ.js";import"./withOsdkMetrics-C6vVTJkI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
