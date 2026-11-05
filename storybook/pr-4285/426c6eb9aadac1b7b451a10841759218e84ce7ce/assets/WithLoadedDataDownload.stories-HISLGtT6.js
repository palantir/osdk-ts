import{f as b,j as a,r as i}from"./iframe-DGqz47MG.js";import{O as u}from"./object-table-Bd4xscwF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cim2rGXh.js";import"./Table-BZiQqcrs.js";import"./index-Bd9LEkTw.js";import"./Dialog-CCWLfNS3.js";import"./cross-CEq_GdMU.js";import"./svgIconContainer-DOG7DxQy.js";import"./useBaseUiId-DUXwyBKc.js";import"./InternalBackdrop-CG21yzEz.js";import"./composite-Ba00gyVa.js";import"./index-D5J1M6Rk.js";import"./index-8Cs0qfIH.js";import"./index-CsvfS9SY.js";import"./useEventCallback-DSfQYw-a.js";import"./SkeletonBar-D8Tdd3Oo.js";import"./LoadingCell-CGAj37sN.js";import"./ColumnConfigDialog-DFDPI9aH.js";import"./DraggableList-C-osdfZa.js";import"./search-DRqVXkuQ.js";import"./Input-74xcLqWb.js";import"./useControlled-CzYzgIWX.js";import"./Button-BbcMUrJ0.js";import"./small-cross-DxaBc40t.js";import"./ActionButton-DTp5BPtP.js";import"./Checkbox-B49l5BI7.js";import"./useValueChanged-DHjlJWOI.js";import"./CollapsiblePanel-D3JnwVn4.js";import"./MultiColumnSortDialog-B2P3ZuoZ.js";import"./MenuTrigger-Dt6SVdup.js";import"./CompositeItem-DkRqlbxr.js";import"./ToolbarRootContext-CVWObsgJ.js";import"./getDisabledMountTransitionStyles-BhKGK1Dz.js";import"./getPseudoElementBounds-VHie68sa.js";import"./chevron-down-oASCfusG.js";import"./index-BsG8g24_.js";import"./error-CYx8FmP-.js";import"./BaseCbacBanner-CPVJF_5N.js";import"./makeExternalStore-B0og1Ieq.js";import"./Tooltip-BkDKAHSO.js";import"./isObject-lTxslFZd.js";import"./debounce-xenDYozX.js";import"./useOsdkClient-DMdK1qJo.js";import"./tick-CRlk3QC6.js";import"./DropdownField-Boby63HI.js";import"./isEqual-B6aP3hJm.js";import"./_baseIsEqual-Cf3-PdSX.js";import"./withOsdkMetrics-6EClZ-2k.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
