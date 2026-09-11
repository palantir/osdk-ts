import{f as b,j as a,r as i}from"./iframe-BzQifrbm.js";import{O as u}from"./object-table-CDq4I_Kj.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CfkbdYt3.js";import"./Table-ShVLN_Dh.js";import"./index-DmrXmCsp.js";import"./Dialog-CQbyHCUs.js";import"./cross-BtXGESXa.js";import"./svgIconContainer-eTPVDcxE.js";import"./useBaseUiId-6fIHZX7k.js";import"./InternalBackdrop-DxY1hq72.js";import"./composite-Bm8VjQnK.js";import"./index-DRwqomtN.js";import"./index-C6mlQsvu.js";import"./index-qmPNzRKp.js";import"./useEventCallback-63f5yGFn.js";import"./SkeletonBar-cD86ls7w.js";import"./LoadingCell-BP04Gi6r.js";import"./ColumnConfigDialog-CP6HVMxA.js";import"./DraggableList-DjQr70Oz.js";import"./search-i0ScbyPC.js";import"./Input-D_KI0oie.js";import"./useControlled-D0PoBQGG.js";import"./Button-DGOVPU6o.js";import"./small-cross-BhH4Yfcj.js";import"./ActionButton-CgR-hyHr.js";import"./Checkbox-CVDiDgCd.js";import"./useValueChanged-DiLiLELv.js";import"./CollapsiblePanel-B1A-vb9Z.js";import"./MultiColumnSortDialog-D9Mo6dF2.js";import"./MenuTrigger-B2J7aceC.js";import"./CompositeItem-CA5vFsEl.js";import"./ToolbarRootContext-CUQpKqWY.js";import"./getDisabledMountTransitionStyles-B7tYoP6C.js";import"./getPseudoElementBounds-DWmaTZ67.js";import"./chevron-down-DgIB0DB7.js";import"./index-YkT_3P70.js";import"./error-C5OE11e3.js";import"./BaseCbacBanner-fX8smd7K.js";import"./makeExternalStore-CKMY6uVx.js";import"./Tooltip-BLUAc2Lq.js";import"./PopoverPopup-D0vD4SOK.js";import"./debounce-Sps1lGtX.js";import"./useOsdkClient-0x6uRQKq.js";import"./tick-XeSdjeFz.js";import"./DropdownField-DraiChM8.js";import"./isEqual-B5oOCPd5.js";import"./withOsdkMetrics-QrXZuSy4.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
