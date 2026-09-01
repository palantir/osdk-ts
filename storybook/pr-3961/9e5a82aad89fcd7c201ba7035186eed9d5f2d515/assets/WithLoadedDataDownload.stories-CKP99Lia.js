import{f as b,j as a,r as i}from"./iframe-BfbeS0O1.js";import{O as u}from"./object-table-DMoZrkMs.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BioSAIdn.js";import"./Table-4rJLhQOU.js";import"./index-DQRN7I9U.js";import"./Dialog-C_ulBudk.js";import"./cross-BrOuNhEK.js";import"./svgIconContainer-BWTo31o2.js";import"./useBaseUiId-CbE1yfdx.js";import"./InternalBackdrop-BErPu4sg.js";import"./composite-DdfbaPUy.js";import"./index-CXELN0N0.js";import"./index-Cj2nVCmE.js";import"./index-Dt5mzju3.js";import"./useEventCallback-CG5RiOcA.js";import"./SkeletonBar-DFnnrDMP.js";import"./LoadingCell-DxtP6Jr4.js";import"./ColumnConfigDialog-Omz9kY1N.js";import"./DraggableList-CnCXkZN1.js";import"./search-DrG1G0EY.js";import"./Input-Db7Q4YLm.js";import"./useControlled-C81GKmVH.js";import"./Button-UB2OACG0.js";import"./small-cross-C-vkxJdm.js";import"./ActionButton-I0vxcYpF.js";import"./Checkbox-EkG_t7q5.js";import"./useValueChanged-cA2be_Wp.js";import"./CollapsiblePanel-C_wVD-VC.js";import"./MultiColumnSortDialog-IBffDIpE.js";import"./MenuTrigger-BaL9sdl0.js";import"./CompositeItem-B4opeUeS.js";import"./ToolbarRootContext-DbCqNaiP.js";import"./getDisabledMountTransitionStyles-B6fdwBct.js";import"./getPseudoElementBounds-lVmoOwlf.js";import"./chevron-down-CR0bt--Q.js";import"./index-BgHNYcJW.js";import"./error-unCo8sRO.js";import"./BaseCbacBanner-CbOaezlM.js";import"./makeExternalStore-DN287DfU.js";import"./Tooltip-C2QbMAIO.js";import"./PopoverPopup-CGYU6k7m.js";import"./debounce-Dv7ZBlf-.js";import"./useOsdkClient-B8cCXMXJ.js";import"./tick-bWfj6Xg6.js";import"./DropdownField-BGKSMB7L.js";import"./isEqual-Cv25-UiM.js";import"./withOsdkMetrics-D7z9HYOb.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
