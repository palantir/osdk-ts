import{f as b,j as a,r as i}from"./iframe-YXA8sZf2.js";import{O as u}from"./object-table-Da4pnK_q.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BbZxoWgu.js";import"./Table-BeCqc3eo.js";import"./index-Dvhc_Ual.js";import"./Dialog--MGAqlRd.js";import"./cross-eT7KFiF7.js";import"./svgIconContainer-mXWoL_ON.js";import"./useBaseUiId-DzvBIhKt.js";import"./InternalBackdrop-CTjGBE5C.js";import"./composite--po3qHs9.js";import"./index-D7dVf2bs.js";import"./index-BOyaXysV.js";import"./index-DLIJxSt4.js";import"./useEventCallback-DI6hx6I6.js";import"./SkeletonBar-BLL0FvSp.js";import"./LoadingCell-DmkGGiwn.js";import"./ColumnConfigDialog-A8-CFuQX.js";import"./DraggableList-DWOhPhpH.js";import"./search-BQODvkCZ.js";import"./Input-BtqwlxVC.js";import"./useControlled-2qyM_vP7.js";import"./Button-D4SV1QwU.js";import"./small-cross-B74IhWgO.js";import"./ActionButton-DKo7T2o6.js";import"./Checkbox-B__58Qvq.js";import"./minus-CMkvhA4f.js";import"./tick-Czdt0WzH.js";import"./useValueChanged-D5K3sjZT.js";import"./caret-down-BifQrtDv.js";import"./CollapsiblePanel-CX0zR31N.js";import"./MultiColumnSortDialog-BD1X-5gl.js";import"./MenuTrigger-BoCXIDKt.js";import"./CompositeItem-9rkDuYhF.js";import"./ToolbarRootContext-BDdl37FF.js";import"./getDisabledMountTransitionStyles-CHX--7aQ.js";import"./getPseudoElementBounds-m9tec1d_.js";import"./chevron-down-DjrBjvP3.js";import"./index-mIv9kygz.js";import"./error-DxL-Zrkb.js";import"./BaseCbacBanner-CO2emBWl.js";import"./makeExternalStore-nLOTqvq6.js";import"./Tooltip-BheJqc3m.js";import"./PopoverPopup-CyQevCXl.js";import"./toNumber-BIzmEfXe.js";import"./useOsdkClient-DN3DIVmp.js";import"./DropdownField-BXCHBgLt.js";import"./withOsdkMetrics-CDbdP1ws.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
