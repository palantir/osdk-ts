import{f as b,j as a,r as i}from"./iframe-Da42tfo0.js";import{O as u}from"./object-table-btuI5mIo.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DAikJXZa.js";import"./Table-BVmL8K-n.js";import"./index-Bomen_f9.js";import"./Dialog-n-frkQpt.js";import"./cross-DG6Fu1MX.js";import"./svgIconContainer-C1uFDFQ-.js";import"./useBaseUiId-BeAjw0Pz.js";import"./InternalBackdrop-B0vh3c6g.js";import"./composite-BM8dnVYH.js";import"./index-CMocEMCd.js";import"./index-B31UFyDN.js";import"./index-Dneb3Ic8.js";import"./useEventCallback-DQIdBA5X.js";import"./SkeletonBar-BqNP19Zt.js";import"./LoadingCell-CTpBTWdO.js";import"./ColumnConfigDialog-CnzK0MCb.js";import"./DraggableList-DW5qQcgn.js";import"./search-CMGFB0Gl.js";import"./Input-CsGs3Ea-.js";import"./useControlled-tfkpEIEU.js";import"./isEqual-CldZjGbQ.js";import"./isObject-GrzurbJg.js";import"./Button-DNGlddJW.js";import"./ActionButton-BvqT7-oi.js";import"./Checkbox-DBtl7JMw.js";import"./useValueChanged-Cr9sCKBo.js";import"./CollapsiblePanel-DPDXkpk-.js";import"./MultiColumnSortDialog-Dyqnc-DK.js";import"./MenuTrigger-DELKHcn5.js";import"./CompositeItem-BgwdEem5.js";import"./ToolbarRootContext-BmwtS_AT.js";import"./getDisabledMountTransitionStyles-BcsBiRAn.js";import"./getPseudoElementBounds-BkbDXquO.js";import"./chevron-down-B9ztHwbJ.js";import"./index-CUDqNzSs.js";import"./error-C20szSnY.js";import"./BaseCbacBanner-C-QMNaaF.js";import"./makeExternalStore-DY6l4t0Z.js";import"./Tooltip-s5Zvo8l1.js";import"./PopoverPopup-B2KF4r0_.js";import"./toNumber-B2CaCxn8.js";import"./useOsdkClient-BxBRpG4B.js";import"./tick-Djt3HCnR.js";import"./DropdownField-lD6ZutwA.js";import"./withOsdkMetrics-DcVf3U6k.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
