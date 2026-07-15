import{f as b,j as a,r as i}from"./iframe-BFjDjldP.js";import{O as u}from"./object-table-DzHHOnDZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C4pZiwVf.js";import"./Table-3v_gwBWr.js";import"./index-CAZUQTDj.js";import"./Dialog-829lqEUK.js";import"./cross-BcaWw6F5.js";import"./svgIconContainer-CGD7gnUj.js";import"./useBaseUiId-CZ-M6IZx.js";import"./InternalBackdrop-BFL0ppWh.js";import"./composite-GlzD71Ug.js";import"./index-WnNqCI-y.js";import"./index-DoxA6u-7.js";import"./index-BIqccblu.js";import"./useEventCallback-G9rlIAQ1.js";import"./SkeletonBar-DZ-IjKaA.js";import"./LoadingCell-C_4hGxTc.js";import"./ColumnConfigDialog-D1Nenok-.js";import"./DraggableList-DmXDelyd.js";import"./search-BuWIhr19.js";import"./Input-CmdAyOYS.js";import"./useControlled-yW-lRQwM.js";import"./Button-cQOGqwaF.js";import"./small-cross-Cv21Vx3n.js";import"./ActionButton-C1ER4vI7.js";import"./Checkbox-ISYnRfKe.js";import"./useValueChanged-D1b0TeIc.js";import"./CollapsiblePanel-C9ZuFXDe.js";import"./MultiColumnSortDialog-CE0TBqfO.js";import"./MenuTrigger-BfegW3hw.js";import"./CompositeItem-PrDZaJD1.js";import"./ToolbarRootContext-D2niHTK6.js";import"./getDisabledMountTransitionStyles-CwbkB3BS.js";import"./getPseudoElementBounds-DvQGhbYr.js";import"./chevron-down-Bdbwp4Pa.js";import"./index-CUUG7iJB.js";import"./error-Ds7N_mns.js";import"./BaseCbacBanner-EbNQ6A37.js";import"./makeExternalStore-BeTIfd3z.js";import"./Tooltip-BH0Z4wSw.js";import"./PopoverPopup-DxETHebR.js";import"./toNumber-CbJrAcJX.js";import"./useOsdkClient-tCVr19c5.js";import"./tick-C2vnM4aw.js";import"./DropdownField-BGyw82nF.js";import"./withOsdkMetrics-CgiiyEtX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
