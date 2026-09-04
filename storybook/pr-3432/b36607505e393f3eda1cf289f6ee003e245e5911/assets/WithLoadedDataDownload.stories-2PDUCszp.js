import{f as b,j as a,r as i}from"./iframe-D8UHlLM-.js";import{O as u}from"./object-table-DriLHpx0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B2drndpz.js";import"./Table-DIJzy73N.js";import"./index-2pZAxqQ8.js";import"./Dialog-LP3kER3w.js";import"./cross-zCnfpZEf.js";import"./svgIconContainer-Ckme5BEx.js";import"./useBaseUiId-B83MHcbd.js";import"./InternalBackdrop-BiFzgO2t.js";import"./composite-BYq1KtFB.js";import"./index-DrmX_pzR.js";import"./index-BrcjEskR.js";import"./index-CbaYF84n.js";import"./useEventCallback-BoHAEoDT.js";import"./SkeletonBar-BE_VQs-9.js";import"./LoadingCell-BIhXQH6G.js";import"./ColumnConfigDialog-DUp2kRps.js";import"./DraggableList-waEoSKM6.js";import"./search-DmARyhAU.js";import"./Input-BHmmIdQN.js";import"./useControlled-DT-SiHVq.js";import"./Button-SSlA87_g.js";import"./small-cross-LQUt3Gb7.js";import"./ActionButton-BScY58m0.js";import"./Checkbox-DGOEyl7w.js";import"./useValueChanged-BuBsDfgp.js";import"./CollapsiblePanel-CifK208E.js";import"./MultiColumnSortDialog-Cqg1dnup.js";import"./MenuTrigger-BfJ69Gas.js";import"./CompositeItem-DhPX7cGM.js";import"./ToolbarRootContext-Df4LXHpy.js";import"./getDisabledMountTransitionStyles-CbL9qvCd.js";import"./getPseudoElementBounds-Cr-VGz-T.js";import"./chevron-down-B03gIwVp.js";import"./index-CwPCwgJ9.js";import"./error-CsDtSshc.js";import"./BaseCbacBanner-Clb2sC9-.js";import"./makeExternalStore-CDgVz-Cr.js";import"./Tooltip-BSlgHJeE.js";import"./PopoverPopup-Dye_SGlA.js";import"./debounce-DEV0SMqr.js";import"./useOsdkClient-HNKtj353.js";import"./tick-CckWobbk.js";import"./DropdownField-BqKtTUT-.js";import"./isEqual-BKZS-MzX.js";import"./withOsdkMetrics-BtMau99A.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
