import{f as b,j as a,r as i}from"./iframe-O-bmwq56.js";import{O as u}from"./object-table-HATvRvuR.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-6pTVH5-1.js";import"./Table-BzaeSuLP.js";import"./index-C4WTlxbW.js";import"./Dialog-CzNl5D9v.js";import"./cross-CizIoSTz.js";import"./svgIconContainer-Ck6gQcV_.js";import"./useBaseUiId-CZlalpMb.js";import"./InternalBackdrop-D0hVs4S-.js";import"./composite-D_QdLVWO.js";import"./index-CC-chcDG.js";import"./index-BkAaa8ff.js";import"./index-MNStPi2c.js";import"./useEventCallback-DxLgqtGb.js";import"./SkeletonBar-DQPPXuHm.js";import"./LoadingCell-C2n5oLoD.js";import"./ColumnConfigDialog-CZjSikeV.js";import"./DraggableList-B9_L-7e9.js";import"./search-BcZ9FECg.js";import"./Input-By_d8TXu.js";import"./useControlled-CV44Tu2L.js";import"./isEqual-NGXBM-Wx.js";import"./isObject-DyvrnZzL.js";import"./Button-Dk1ohzyh.js";import"./ActionButton-PRi3OqHl.js";import"./Checkbox-D0V80GeS.js";import"./useValueChanged-B_0tW1wq.js";import"./CollapsiblePanel-CO39vAcp.js";import"./MultiColumnSortDialog-Cz1gVPRY.js";import"./MenuTrigger-lzRAnFH9.js";import"./CompositeItem-CMtOHnnd.js";import"./ToolbarRootContext-idxGzI-q.js";import"./getDisabledMountTransitionStyles-DSkNGmBo.js";import"./getPseudoElementBounds-DyX4xqAM.js";import"./chevron-down-C3iVKDWO.js";import"./index-DR49W70f.js";import"./error-B8Kd5ARc.js";import"./BaseCbacBanner-Fj1NUAfB.js";import"./makeExternalStore-CkoSDh27.js";import"./Tooltip-hz6cj3mC.js";import"./PopoverPopup-DrKw__9E.js";import"./toNumber-H__G6wZN.js";import"./useOsdkClient-B0y7KEBr.js";import"./tick-B6A71fOe.js";import"./DropdownField-BHxmjfLF.js";import"./withOsdkMetrics-C9XRYbxI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
