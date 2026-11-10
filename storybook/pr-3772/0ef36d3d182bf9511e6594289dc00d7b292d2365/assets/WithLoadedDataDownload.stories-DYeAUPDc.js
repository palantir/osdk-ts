import{f as b,j as a,r as i}from"./iframe-B4QLcSZV.js";import{O as u}from"./object-table-TmS98yQc.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bo3Ha5vh.js";import"./Table-CUL-p863.js";import"./index-CU2p5LDV.js";import"./Dialog-DWf3MPjd.js";import"./cross-DnvIeiSW.js";import"./svgIconContainer-Dh-Zaef4.js";import"./useBaseUiId-BSZdLkOo.js";import"./InternalBackdrop-uUiSI24W.js";import"./composite-CgB6Of8a.js";import"./index-B8xzy7Yy.js";import"./index-CX5vZraN.js";import"./index-gAGpFD5r.js";import"./useEventCallback-DPBUZYhA.js";import"./SkeletonBar-BC4f_AtB.js";import"./LoadingCell-CExaaW-4.js";import"./ColumnConfigDialog-BYqwTb39.js";import"./DraggableList-aVeantjG.js";import"./search-eHSn6FPQ.js";import"./Input-CSlKlom8.js";import"./useControlled-BC3YGi64.js";import"./Button-Buk5h-ut.js";import"./small-cross-DCQk5yBJ.js";import"./ActionButton-d6fkUWG8.js";import"./Checkbox-b_blCxhg.js";import"./useValueChanged-VkzDJT1T.js";import"./CollapsiblePanel-BG51YQ8C.js";import"./MultiColumnSortDialog-ABdCwbqA.js";import"./MenuTrigger-DMDEMWwK.js";import"./CompositeItem-CpoTinek.js";import"./ToolbarRootContext-CQfevRIV.js";import"./getDisabledMountTransitionStyles-DmmMgL1o.js";import"./getPseudoElementBounds-B-_TxDI7.js";import"./chevron-down-DwcY0-Tx.js";import"./index-In1SvQxE.js";import"./error-DsKpT3Ih.js";import"./BaseCbacBanner-RbdcKH8U.js";import"./makeExternalStore-Dm5zWOFv.js";import"./Tooltip-yCjMXIIG.js";import"./isObject-DJnDAPtu.js";import"./debounce-B9U4OBQQ.js";import"./useOsdkClient-B-uzLvHR.js";import"./tick-f-G-5w7P.js";import"./DropdownField-DIllcogd.js";import"./isEqual-DL7tfxNk.js";import"./_baseIsEqual-y-2kiQl4.js";import"./withOsdkMetrics-BGZuYz8s.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
