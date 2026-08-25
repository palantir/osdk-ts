import{f as b,j as a,r as i}from"./iframe-wRPSG4iB.js";import{O as u}from"./object-table-8Y1JwUz1.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D848Ncme.js";import"./Table-0RQ3UVz4.js";import"./index-C8OWKbFz.js";import"./Dialog-HZy4ZPWl.js";import"./cross-CfaXio25.js";import"./svgIconContainer-D1tLpFWt.js";import"./useBaseUiId-SdltLqrh.js";import"./InternalBackdrop--tZLnzRh.js";import"./composite-DX6SXiPb.js";import"./index-DhSyQl07.js";import"./index-B7phL-s1.js";import"./index-B4-wl6ZX.js";import"./useEventCallback-CoPD8ert.js";import"./SkeletonBar-B6ZmtqXs.js";import"./LoadingCell-L2LhDV1f.js";import"./ColumnConfigDialog-DTp_0s94.js";import"./DraggableList-vhKE0lgH.js";import"./search-CQw0whIQ.js";import"./Input-DLUURi2W.js";import"./useControlled-Djv6iTti.js";import"./Button-DRSm3Zzs.js";import"./small-cross-BRd1V0oR.js";import"./ActionButton-Dc0JF2bX.js";import"./Checkbox-qB2r4ZEQ.js";import"./useValueChanged-BNL2zG0A.js";import"./CollapsiblePanel-DGJUMUDB.js";import"./MultiColumnSortDialog-BaJaZMYS.js";import"./MenuTrigger-DPSwAITp.js";import"./CompositeItem-T6bJ2JFd.js";import"./ToolbarRootContext-CvxpTeNo.js";import"./getDisabledMountTransitionStyles-CufHlIlT.js";import"./getPseudoElementBounds-BSmrwkT6.js";import"./chevron-down-DU-ii_Gy.js";import"./index-nYnrFckb.js";import"./error-jxE8jp2D.js";import"./BaseCbacBanner-BvtKjglS.js";import"./makeExternalStore-D9SKqMSw.js";import"./Tooltip-DHSBoY2T.js";import"./PopoverPopup-DKA0gpdC.js";import"./debounce-Bz2p_KJg.js";import"./useOsdkClient-QwNKQOaX.js";import"./tick-14QjOe4v.js";import"./DropdownField-kBSF9J4x.js";import"./isEqual-MwdxP9OB.js";import"./withOsdkMetrics-Duzkh8Hp.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
