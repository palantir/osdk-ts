import{f as b,j as a,r as i}from"./iframe-DpejOK4c.js";import{O as u}from"./object-table-AR0Pwkk_.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C2b2w7Jj.js";import"./index-W51RVY4l.js";import"./Dialog-7LuDM3Pk.js";import"./cross-0ZYG3eXQ.js";import"./svgIconContainer-BmZxXUXk.js";import"./useBaseUiId-CSdXwmil.js";import"./InternalBackdrop-Y68aDz1b.js";import"./composite-C3iA0BqW.js";import"./index-rd2vjabm.js";import"./index-CKT4n31R.js";import"./index-CzwHGXC6.js";import"./useEventCallback-CVHSn8be.js";import"./SkeletonBar-fzoQAq8E.js";import"./LoadingCell-BEpviPzu.js";import"./ColumnConfigDialog-CIC6cctX.js";import"./DraggableList-w-ejxlPI.js";import"./Input-Bc_ZLzpE.js";import"./useControlled-Dz5p3OTy.js";import"./Button-7n9M97Ed.js";import"./small-cross-G5W2zPad.js";import"./ActionButton-DXiuCcR4.js";import"./Checkbox-D6b1xrSi.js";import"./minus-BIokuXOY.js";import"./useValueChanged-DLkdyY6B.js";import"./caret-down-D-gIyXGP.js";import"./CollapsiblePanel-BzPYrrtt.js";import"./MultiColumnSortDialog-CUAz4TQX.js";import"./MenuTrigger-Cm4R9cRq.js";import"./CompositeItem-DS96bcji.js";import"./ToolbarRootContext-Dh9NoIeN.js";import"./getDisabledMountTransitionStyles-HbQrAkcx.js";import"./getPseudoElementBounds-DTuCRgn2.js";import"./chevron-down-t_eWS1Xp.js";import"./index-Bp9OeuKM.js";import"./error-CvcHcglF.js";import"./BaseCbacBanner-Gqm2s2Xm.js";import"./makeExternalStore-D7HNX_Xj.js";import"./Tooltip-CVAxFm3W.js";import"./PopoverPopup-B-rl2aOu.js";import"./toNumber-DtX3hWCb.js";import"./useOsdkClient-C72ASC9w.js";import"./DropdownField-CBeR9Sg0.js";import"./withOsdkMetrics-BRXUWDMJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
