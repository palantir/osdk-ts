import{f as b,j as a,r as i}from"./iframe-dxrUGHlK.js";import{O as u}from"./object-table-hg5iYLBs.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B9qIDFMl.js";import"./Table-BDJVErev.js";import"./index-DPQcu4-a.js";import"./Dialog-BdAvzbRZ.js";import"./cross-Dj8MH7yM.js";import"./svgIconContainer-D-3aEKZU.js";import"./useBaseUiId-BsvKb-r1.js";import"./InternalBackdrop-DlhtBUyp.js";import"./composite-Dw-SYZmG.js";import"./index-C0ofq-ja.js";import"./index-BY143isZ.js";import"./index-D5-q3DyH.js";import"./useEventCallback-ayjMMOqN.js";import"./SkeletonBar-C2WYuCYy.js";import"./LoadingCell-C3rYW6d3.js";import"./ColumnConfigDialog-C1UbL8k6.js";import"./DraggableList-C3qnRuj_.js";import"./search-CVhjqWpu.js";import"./Input-C2FrKznv.js";import"./useControlled-D5pah6Ut.js";import"./Button-v2rih8HU.js";import"./small-cross-DrUhNudg.js";import"./ActionButton-TJz4kjAm.js";import"./Checkbox-CaAY45uN.js";import"./useValueChanged-BsqSHN0m.js";import"./CollapsiblePanel-BHW3YOjn.js";import"./MultiColumnSortDialog-DJR1GnhR.js";import"./MenuTrigger-BpOuL8ih.js";import"./CompositeItem-BLdzDdC9.js";import"./ToolbarRootContext-Cm84R3Vn.js";import"./getDisabledMountTransitionStyles-6BSbBO0S.js";import"./getPseudoElementBounds-B_zagfDH.js";import"./chevron-down-Ci5voemn.js";import"./index-BZzuVaIM.js";import"./error-DiHcLZ6r.js";import"./BaseCbacBanner-ebOZnzxu.js";import"./makeExternalStore-DsTmi0Ui.js";import"./Tooltip-BsaNTiq4.js";import"./PopoverPopup-BA5CaoZf.js";import"./debounce-DSygVot5.js";import"./useOsdkClient-CDGZBRrB.js";import"./tick-BnzW6v2L.js";import"./DropdownField-B_Tlb7nO.js";import"./isEqual-DVT4JLDM.js";import"./withOsdkMetrics-C48cTPuA.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
