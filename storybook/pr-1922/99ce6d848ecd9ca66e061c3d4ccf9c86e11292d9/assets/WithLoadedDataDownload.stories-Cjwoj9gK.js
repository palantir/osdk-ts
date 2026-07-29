import{f as b,j as a,r as i}from"./iframe-Cit8dWXp.js";import{O as u}from"./object-table-CLprNm-d.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CCWrzc8D.js";import"./Table-BVpt2fUo.js";import"./index-DjKRvWyY.js";import"./Dialog-Be2F3-FV.js";import"./cross-gQNsGHqK.js";import"./svgIconContainer-CnhTjGYI.js";import"./useBaseUiId-DYvasBbv.js";import"./InternalBackdrop-CHY-7UBX.js";import"./composite-BgoZwE_5.js";import"./index-keZnzdM5.js";import"./index-BWFrdUWl.js";import"./index-BVRufQb7.js";import"./useEventCallback-C9HAZCRG.js";import"./SkeletonBar-u4-76qTo.js";import"./LoadingCell-nBjE1ndy.js";import"./ColumnConfigDialog-BWi2X-eS.js";import"./DraggableList-D2uNEbk7.js";import"./search-BOSFG60z.js";import"./Input-D4pO2QO0.js";import"./useControlled-D1zi4BZe.js";import"./isEqual-CFsLy166.js";import"./isObject-DIwas83d.js";import"./Button-Dq2cEP2I.js";import"./ActionButton-4Aw8VsKu.js";import"./Checkbox-DHQAVcVh.js";import"./useValueChanged-nr9Fn3vC.js";import"./CollapsiblePanel-ChQIa99W.js";import"./MultiColumnSortDialog-C2OT4-v6.js";import"./MenuTrigger-uIFIt69N.js";import"./CompositeItem-BbrpyRMV.js";import"./ToolbarRootContext-N4iCvs8E.js";import"./getDisabledMountTransitionStyles-Cs5mf5KU.js";import"./getPseudoElementBounds-BK_ei7WU.js";import"./chevron-down-grDpNC0P.js";import"./index-DTPUrDLg.js";import"./error-CsqJDmzd.js";import"./BaseCbacBanner-BlBv9MrF.js";import"./makeExternalStore-DCWmOVk3.js";import"./Tooltip-DG1w5Z16.js";import"./PopoverPopup-BuX_5jbW.js";import"./toNumber-D-wCb8lw.js";import"./useOsdkClient-stsJawmz.js";import"./tick-Cn-ugVOT.js";import"./DropdownField-X_4V0sjX.js";import"./withOsdkMetrics-DjoWeLgm.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
