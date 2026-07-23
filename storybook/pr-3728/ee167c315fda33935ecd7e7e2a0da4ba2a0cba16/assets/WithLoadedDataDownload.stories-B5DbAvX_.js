import{f as b,j as a,r as i}from"./iframe-CGHuNhZa.js";import{O as u}from"./object-table-DrWZT2Nm.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BFimkkay.js";import"./Table-CQrNn90p.js";import"./index-Cd9iBkhG.js";import"./Dialog-CRbbYyfg.js";import"./cross-DR5PTAdZ.js";import"./svgIconContainer-DSjk454u.js";import"./useBaseUiId-0kJLkjQb.js";import"./InternalBackdrop-CtaGFvnP.js";import"./composite-Owh1o6gR.js";import"./index-BKyQcedJ.js";import"./index-pZgEXI2B.js";import"./index-CcNoRayP.js";import"./useEventCallback-Dt1Kay_H.js";import"./SkeletonBar-BZ7g9rLJ.js";import"./LoadingCell-CqM3GqzJ.js";import"./ColumnConfigDialog-BzBUjZ_3.js";import"./DraggableList-FYws1vMl.js";import"./search-YesNjiEL.js";import"./Input-CAqJgJ9F.js";import"./useControlled-B1Q3SMM2.js";import"./isEqual-BVjchha_.js";import"./isObject-B9FMVunx.js";import"./Button-DTBh-eoN.js";import"./ActionButton-QH7XoIMy.js";import"./Checkbox-DjHi65G5.js";import"./useValueChanged-JPzgRQO1.js";import"./CollapsiblePanel-B8TEopPW.js";import"./MultiColumnSortDialog-Cd_eJ93S.js";import"./MenuTrigger-BdQ8Whf2.js";import"./CompositeItem-I7gIakhP.js";import"./ToolbarRootContext-ElOMa9PH.js";import"./getDisabledMountTransitionStyles-D5Y1Udrx.js";import"./getPseudoElementBounds-M6j3rYit.js";import"./chevron-down-BGSt3VIA.js";import"./index-BbrkUmtY.js";import"./error-Bz23TTWr.js";import"./BaseCbacBanner-CW42AOZO.js";import"./makeExternalStore-4ZWsXdY2.js";import"./Tooltip-D6Wrvry4.js";import"./PopoverPopup-CJ8yFEwO.js";import"./toNumber-Clr2KpgI.js";import"./useOsdkClient-0_lRx-wS.js";import"./tick-BxbnCpgl.js";import"./DropdownField-DmTYccjA.js";import"./withOsdkMetrics-CZFxDcvi.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
