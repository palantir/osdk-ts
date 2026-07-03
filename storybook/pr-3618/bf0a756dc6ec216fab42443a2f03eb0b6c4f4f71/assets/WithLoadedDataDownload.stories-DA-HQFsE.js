import{f as b,j as a,r as i}from"./iframe-BxdZkH6A.js";import{O as u}from"./object-table-AFRXuy8t.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-kyeI2UBP.js";import"./Table-B-3ZM6Hx.js";import"./index-BpFtrvBx.js";import"./Dialog-CntuE7dE.js";import"./cross-C7Vfl4hr.js";import"./svgIconContainer-DW8Dw9Bg.js";import"./useBaseUiId-BIFZVZoh.js";import"./InternalBackdrop-CMzNR6H8.js";import"./composite-BUhRqbHb.js";import"./index-hl-eFwnB.js";import"./index-CFu72cYJ.js";import"./index-SGGEt0vQ.js";import"./useEventCallback-BV6qBXQ-.js";import"./SkeletonBar-BIv7YF9T.js";import"./LoadingCell-Cjfk_8tS.js";import"./ColumnConfigDialog-DS4VBsYl.js";import"./DraggableList-W9nfHITm.js";import"./search-rKvDiiHV.js";import"./Input-CJnPWafs.js";import"./useControlled-C2uta6Np.js";import"./Button-DJoHiVcG.js";import"./small-cross-BiSG7fc8.js";import"./ActionButton-1E-wqB8r.js";import"./Checkbox-a71iIJUy.js";import"./useValueChanged-WcBnDaOd.js";import"./CollapsiblePanel-CPUx_A3a.js";import"./MultiColumnSortDialog-BKQOdeOH.js";import"./MenuTrigger-mNVbLufI.js";import"./CompositeItem-DwH973Jd.js";import"./ToolbarRootContext-CiIuJ2M6.js";import"./getDisabledMountTransitionStyles-uEAaVx1l.js";import"./getPseudoElementBounds-BgL0riCu.js";import"./chevron-down-lW7PZNMT.js";import"./index-CSJ77PwE.js";import"./error-DJDCeW5s.js";import"./BaseCbacBanner-CVb_V5A8.js";import"./makeExternalStore-B2S42JoF.js";import"./Tooltip-CgFL1FXY.js";import"./PopoverPopup-DI4WJJM-.js";import"./toNumber-B9nk268A.js";import"./useOsdkClient-B5jEcJnt.js";import"./tick-DxrYeZW0.js";import"./DropdownField-DIEFvzeV.js";import"./withOsdkMetrics-BVCViJi2.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
