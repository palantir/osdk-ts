import{f as b,j as a,r as i}from"./iframe-DNE97pGZ.js";import{O as u}from"./object-table-Ch4_sTh9.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BahKFp3m.js";import"./Table-BD9ncpKN.js";import"./index-Bp-5OsF-.js";import"./Dialog-Cm_ILZ3B.js";import"./cross-Dx5ZxZuM.js";import"./svgIconContainer-CRfNt06m.js";import"./useBaseUiId-Cp65BJC6.js";import"./InternalBackdrop-BxL756Oz.js";import"./composite-CzLwjv4f.js";import"./index-Dp0A1Fy8.js";import"./index-D5b6Elzx.js";import"./index-BAUv7mXt.js";import"./useEventCallback-BaQLMphi.js";import"./SkeletonBar-Co-Wxcoj.js";import"./LoadingCell-BBXYQi2G.js";import"./ColumnConfigDialog-BJA0l5H2.js";import"./DraggableList-CwyZFsMX.js";import"./search-BNuo8zTf.js";import"./Input-BzjIqYHe.js";import"./useControlled-B0ujXEQq.js";import"./isEqual-D4o4vl7l.js";import"./isObject-DMCyQLYZ.js";import"./Button-DHAmSgJm.js";import"./ActionButton-C282nnu4.js";import"./Checkbox-DhzT-hSX.js";import"./useValueChanged-CY7hmMGH.js";import"./CollapsiblePanel-BcSoQpGZ.js";import"./MultiColumnSortDialog-Cy2FrPls.js";import"./MenuTrigger-CW7TDS3C.js";import"./CompositeItem-Bs6wEv0j.js";import"./ToolbarRootContext-DBqoJQeM.js";import"./getDisabledMountTransitionStyles-DrWPn2zD.js";import"./getPseudoElementBounds-BeRBlX2G.js";import"./chevron-down-DzX2K_Xp.js";import"./index-BrQsf66R.js";import"./error-Cc9LB0hd.js";import"./BaseCbacBanner-aK3rWsBf.js";import"./makeExternalStore-BUUHdmfH.js";import"./Tooltip-1mDazhLH.js";import"./PopoverPopup-XyeYTvL6.js";import"./toNumber-CL_SRDQ3.js";import"./useOsdkClient-BrXtYIpC.js";import"./tick-DKvNgte2.js";import"./DropdownField-BkAFc6vL.js";import"./withOsdkMetrics-B6lPkcGy.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
