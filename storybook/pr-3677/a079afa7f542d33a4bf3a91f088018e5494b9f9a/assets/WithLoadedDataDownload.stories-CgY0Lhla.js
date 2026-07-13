import{f as b,j as a,r as i}from"./iframe-BrEQ26tz.js";import{O as u}from"./object-table-CMKnpjQe.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CXuZccyG.js";import"./Table-Dm7p-KQO.js";import"./index-0puuYqU-.js";import"./Dialog-BRlHWrYi.js";import"./cross-DQ7HK-Xf.js";import"./svgIconContainer-J7EmXi3t.js";import"./useBaseUiId-1p3qHLXR.js";import"./InternalBackdrop-CLSafEy8.js";import"./composite-3K1Hj1a6.js";import"./index-vaMM0mYm.js";import"./index-CQhdakj7.js";import"./index-RrDi6-K3.js";import"./useEventCallback-C08Iq64S.js";import"./SkeletonBar-BtudFaG4.js";import"./LoadingCell-C6G2iXVM.js";import"./ColumnConfigDialog-xj42HCB5.js";import"./DraggableList-DlyOhVaZ.js";import"./search-sX3RsEDw.js";import"./Input-BksaE-tT.js";import"./useControlled-BfKXnzXK.js";import"./Button-Cwz5OZa6.js";import"./small-cross-BpiJkvBW.js";import"./ActionButton-BFbaayfC.js";import"./Checkbox-B20jyr2n.js";import"./useValueChanged-BJWRaf34.js";import"./CollapsiblePanel-DEpHRFQw.js";import"./MultiColumnSortDialog-DWZwnC0S.js";import"./MenuTrigger-CK-EL019.js";import"./CompositeItem-Beq2XUPk.js";import"./ToolbarRootContext-fodSfPt7.js";import"./getDisabledMountTransitionStyles-u0TFfZxv.js";import"./getPseudoElementBounds-B3EDcC_N.js";import"./chevron-down-DCizwKLE.js";import"./index-DxlA-ifY.js";import"./error-CjGSNoEY.js";import"./BaseCbacBanner-DyBQAp0Y.js";import"./makeExternalStore-DFRDjfb3.js";import"./Tooltip-DWyzqwkA.js";import"./PopoverPopup-BKs3H50d.js";import"./toNumber-DZAG3vvy.js";import"./useOsdkClient-B_D1P3QG.js";import"./tick-C_gAuhGm.js";import"./DropdownField-Bx0Dj1zQ.js";import"./withOsdkMetrics-BfTXVCQt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
