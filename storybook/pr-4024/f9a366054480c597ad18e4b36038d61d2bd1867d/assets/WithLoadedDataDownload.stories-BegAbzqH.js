import{f as b,j as a,r as i}from"./iframe-jMwYipi7.js";import{O as u}from"./object-table-DqCE7m8Q.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DuATZxWQ.js";import"./Table-Bco2QWZU.js";import"./index-Dz_M8fMm.js";import"./Dialog-BvewtxLp.js";import"./cross-D4s078tN.js";import"./svgIconContainer-C67djf6q.js";import"./useBaseUiId-CowvthfG.js";import"./InternalBackdrop-DMfDH2vS.js";import"./composite-CY5glQip.js";import"./index-_q0G2ZtV.js";import"./index-DEfzi2BY.js";import"./index-B-GHK9XU.js";import"./useEventCallback-BWoB4Eoe.js";import"./SkeletonBar-B0rvX527.js";import"./LoadingCell-CcW0Hh0k.js";import"./ColumnConfigDialog-DSsDrkGF.js";import"./DraggableList-DWqWm6Gb.js";import"./search-CZYRjLGu.js";import"./Input-yW4xW1y2.js";import"./useControlled-CkNav0ZD.js";import"./Button-CQ-F38oG.js";import"./small-cross-fIpnPilt.js";import"./ActionButton-DoLv7Bc0.js";import"./Checkbox-COWIvfzP.js";import"./useValueChanged-DU8GXm_T.js";import"./CollapsiblePanel--Covd7Se.js";import"./MultiColumnSortDialog-CTtUUKI-.js";import"./MenuTrigger-DWDMzYwZ.js";import"./CompositeItem-BFcshnAb.js";import"./ToolbarRootContext-CyHNucoq.js";import"./getDisabledMountTransitionStyles-CkP6dO--.js";import"./getPseudoElementBounds-Iu6zkRHv.js";import"./chevron-down-DoTJVfbo.js";import"./index-CLIDYXaA.js";import"./error-D1FCJ2D3.js";import"./BaseCbacBanner-C24i1Y0t.js";import"./makeExternalStore-DpRr9t8b.js";import"./Tooltip-CSvM8AX_.js";import"./PopoverPopup-DiKkC9qL.js";import"./debounce-DcYvAVr6.js";import"./useOsdkClient-BdINNOYX.js";import"./tick-B4Iihx0z.js";import"./DropdownField-lNbdtwFm.js";import"./isEqual-1uMDO8x-.js";import"./withOsdkMetrics-CY_PsP6V.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
