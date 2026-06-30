import{f as b,j as a,r as i}from"./iframe-DDx_hlPk.js";import{O as u}from"./object-table-DZjao0O7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CQ52MQVW.js";import"./Table-Cu98SK94.js";import"./index-B4s0gChR.js";import"./Dialog-Dj1zKCFP.js";import"./cross-DpfFZzYJ.js";import"./svgIconContainer-BGQv8xjx.js";import"./useBaseUiId-CduWqZHU.js";import"./InternalBackdrop-B4FPAhUM.js";import"./composite-DgQBI1ty.js";import"./index-DMxbBDvp.js";import"./index-DYSMImXi.js";import"./index-BLoH_DDk.js";import"./useEventCallback-CbEjovy8.js";import"./SkeletonBar-bj2kDFb_.js";import"./LoadingCell-BTIUEscn.js";import"./ColumnConfigDialog-DxDQ7UBW.js";import"./DraggableList-D6L-46jT.js";import"./search-B7xA9GeZ.js";import"./Input-D7efLwrT.js";import"./useControlled-BwjRINvz.js";import"./Button-O007gZS-.js";import"./small-cross-Bqik9n1C.js";import"./ActionButton-C_WEv-MD.js";import"./Checkbox-DAxvB34B.js";import"./minus-Ctt9PYTw.js";import"./tick-CwJu2LTK.js";import"./useValueChanged-DyNXlhqf.js";import"./caret-down-hxiQHVca.js";import"./CollapsiblePanel-Dat7vcQy.js";import"./MultiColumnSortDialog-fjlPi4FK.js";import"./MenuTrigger-C5dBGy2i.js";import"./CompositeItem-B5AEHnd_.js";import"./ToolbarRootContext-DWG9U5Or.js";import"./getDisabledMountTransitionStyles-B1co7UG1.js";import"./getPseudoElementBounds-DyVk-eGu.js";import"./chevron-down-DpqAF9h-.js";import"./index-CaGRleJC.js";import"./error-C9a23hTL.js";import"./BaseCbacBanner-BQibjgba.js";import"./makeExternalStore-SLV7h6Du.js";import"./Tooltip-ofj1b-IT.js";import"./PopoverPopup-vbQUhe0Y.js";import"./toNumber-CkWf7U-g.js";import"./useOsdkClient-B5GXVt16.js";import"./DropdownField-B06iodSe.js";import"./withOsdkMetrics-D01IaqkZ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
