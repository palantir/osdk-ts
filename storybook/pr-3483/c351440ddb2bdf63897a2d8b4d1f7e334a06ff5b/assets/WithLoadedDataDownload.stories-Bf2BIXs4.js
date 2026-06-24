import{f as b,j as a,r as i}from"./iframe-CkQZcnH2.js";import{O as u}from"./object-table-D-R6iScK.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CljnlcDv.js";import"./Table-wZX2CstT.js";import"./index-VVlN0jvd.js";import"./Dialog-CPovDKfQ.js";import"./cross-DZ7IUewz.js";import"./svgIconContainer-Br1nC1Of.js";import"./useBaseUiId-DVZXOiRt.js";import"./InternalBackdrop-CmWjXUl2.js";import"./composite-u2NZBRF_.js";import"./index-DsjiD0wB.js";import"./index-vfid0is-.js";import"./index-BrHai-1b.js";import"./useEventCallback-D_6Y4mFR.js";import"./SkeletonBar-CJcBRWrJ.js";import"./LoadingCell-CpEGVHuY.js";import"./ColumnConfigDialog-D-3ElpZk.js";import"./DraggableList-CsEndDUw.js";import"./Input-Crju91xE.js";import"./useControlled-D3yTP8QU.js";import"./Button-2issX0HJ.js";import"./small-cross-bGENFntV.js";import"./ActionButton-CdvRrwE7.js";import"./Checkbox-BaDVnoJX.js";import"./minus-ANa26wQM.js";import"./useValueChanged-sKFfM3Ng.js";import"./caret-down-D-Ci3kCT.js";import"./CollapsiblePanel-C76F_By1.js";import"./MultiColumnSortDialog-hJptd3-W.js";import"./MenuTrigger-B1cympyY.js";import"./CompositeItem-vowMVFYI.js";import"./ToolbarRootContext-D2z5WJh1.js";import"./getDisabledMountTransitionStyles-0hfkh-73.js";import"./getPseudoElementBounds-DSBOnB5Y.js";import"./chevron-down-CASSpbpI.js";import"./index-DqOl1-jR.js";import"./error-CQhWb91W.js";import"./Tooltip-CK9NyL9g.js";import"./PopoverPopup-Bjb8pY3V.js";import"./toNumber-C9-LPFy2.js";import"./useOsdkClient-DX65UjCd.js";import"./DropdownField-BNRHWkiG.js";import"./makeExternalStore-DEJLLiQC.js";import"./withOsdkMetrics-BtHjUR6o.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],be={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const he=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,he as __namedExportsOrder,be as default};
