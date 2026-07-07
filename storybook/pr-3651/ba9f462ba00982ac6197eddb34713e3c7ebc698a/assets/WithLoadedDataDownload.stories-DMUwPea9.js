import{f as b,j as a,r as i}from"./iframe-ChzRP_PG.js";import{O as u}from"./object-table-9jSq0lTQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BY8T86v_.js";import"./Table-1H3i_ucU.js";import"./index-B47von1n.js";import"./Dialog-jGn8GaEZ.js";import"./cross-BRhKDmms.js";import"./svgIconContainer-COgTYdBs.js";import"./useBaseUiId-CfZ4GhDt.js";import"./InternalBackdrop-C7trBeMH.js";import"./composite-BnmWIAYG.js";import"./index-Ccn-hEdM.js";import"./index-C2zHuJ2V.js";import"./index-1wjlU9-6.js";import"./useEventCallback-CUUxh5Jn.js";import"./SkeletonBar-DlXUQlI2.js";import"./LoadingCell-D9B1KNOI.js";import"./ColumnConfigDialog-i-TmDuTF.js";import"./DraggableList-CXaZ5qlt.js";import"./search-eGelwxV8.js";import"./Input-DJIKe_uT.js";import"./useControlled-BsSki-l6.js";import"./Button-iJkQhw47.js";import"./small-cross-BZfq27_W.js";import"./ActionButton-Bt4IezM3.js";import"./Checkbox-Ce6MTQdf.js";import"./useValueChanged-DG3J_jpB.js";import"./CollapsiblePanel-DEyzLnGS.js";import"./MultiColumnSortDialog-DQO6VMFx.js";import"./MenuTrigger-D7GqRTOS.js";import"./CompositeItem-DnUU1iS-.js";import"./ToolbarRootContext-Bt3g8dZ6.js";import"./getDisabledMountTransitionStyles-BcyS8nIA.js";import"./getPseudoElementBounds-BOvExhUn.js";import"./chevron-down-CTRK-m5O.js";import"./index-DBwXrdpF.js";import"./error-CUVOC1L9.js";import"./BaseCbacBanner-CRVC6k2W.js";import"./makeExternalStore-DxtNI3-p.js";import"./Tooltip-DWQItAoS.js";import"./PopoverPopup-BQALRE0-.js";import"./toNumber-EI7JgeoZ.js";import"./useOsdkClient-k7cJmt3O.js";import"./tick-DQXp8v--.js";import"./DropdownField-DI73TTOe.js";import"./withOsdkMetrics-D9h9tKkS.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
