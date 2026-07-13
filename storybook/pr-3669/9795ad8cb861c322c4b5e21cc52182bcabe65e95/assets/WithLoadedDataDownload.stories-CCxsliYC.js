import{f as b,j as a,r as i}from"./iframe-B58nOH3w.js";import{O as u}from"./object-table-DWsqSSWd.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-USapLSCa.js";import"./Table-D037DBB5.js";import"./index-DOZq4Nf6.js";import"./Dialog-RwWSuhVa.js";import"./cross-CpiknFZf.js";import"./svgIconContainer-DGWvjRiM.js";import"./useBaseUiId-DIjqosEe.js";import"./InternalBackdrop-DDs16YId.js";import"./composite-BTUagR_l.js";import"./index-BdW4SvKX.js";import"./index-DQfXbhII.js";import"./index-V1nhU3Fc.js";import"./useEventCallback-B6QE5SVK.js";import"./SkeletonBar-y7V3bggD.js";import"./LoadingCell-DG46eC5z.js";import"./ColumnConfigDialog-tI51evL-.js";import"./DraggableList-DUesyqxl.js";import"./search-CCBdM2yc.js";import"./Input-Ky8lOJ0y.js";import"./useControlled-Ci_r0JjH.js";import"./Button-Bn3eOMbk.js";import"./small-cross-8_3qTLSg.js";import"./ActionButton-Cjz_NkpQ.js";import"./Checkbox-DF0HrQVQ.js";import"./useValueChanged-iX_Wfdn7.js";import"./CollapsiblePanel-DMyKd1l7.js";import"./MultiColumnSortDialog-CRKuHULp.js";import"./MenuTrigger-BOP-KhLe.js";import"./CompositeItem-CYpH_Oj6.js";import"./ToolbarRootContext-B3AWpRJU.js";import"./getDisabledMountTransitionStyles-CcIQORoM.js";import"./getPseudoElementBounds-CsPTfnEQ.js";import"./chevron-down-C6W6J5P0.js";import"./index-DZH5jSGD.js";import"./error-H4f42mvW.js";import"./BaseCbacBanner-jY2tvlj6.js";import"./makeExternalStore-BNAkx2eX.js";import"./Tooltip-C-dVVzWA.js";import"./PopoverPopup-BvLhbaW1.js";import"./toNumber-CFnJixVd.js";import"./useOsdkClient-BBahcRDy.js";import"./tick-_-uAmmy5.js";import"./DropdownField-DRhdJBNv.js";import"./withOsdkMetrics-CPjS5Ta7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
