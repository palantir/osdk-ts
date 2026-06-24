import{f as b,j as a,r as i}from"./iframe-CaDUiDpH.js";import{O as u}from"./object-table-BJwF3s6K.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Cx3jnAaT.js";import"./index-MuJhHTtf.js";import"./Dialog-CsfpybyZ.js";import"./cross-DF6kM1f3.js";import"./svgIconContainer-Cw3X9CKz.js";import"./useBaseUiId-BKo_HpD6.js";import"./InternalBackdrop-DQNtE5xE.js";import"./composite-BwQRUn28.js";import"./index-BGWGzkWY.js";import"./index-CXadg3tD.js";import"./index-DL0ObBdG.js";import"./useEventCallback-xuRAC36_.js";import"./SkeletonBar-oJEPGzCl.js";import"./LoadingCell-B2MvGN9G.js";import"./ColumnConfigDialog-Cy2EWrVf.js";import"./DraggableList-CzKOi4jq.js";import"./Input-BbFz-q8u.js";import"./useControlled-CLUHwCf9.js";import"./Button-WEWRVaSe.js";import"./small-cross-Dm1nAcWD.js";import"./ActionButton-BTPSyOjV.js";import"./Checkbox-D-S31Woz.js";import"./minus-BCispyF-.js";import"./useValueChanged-Oc2MHuTo.js";import"./caret-down-D896W2wH.js";import"./CollapsiblePanel-B3EDHwlV.js";import"./MultiColumnSortDialog-B0LExIEF.js";import"./MenuTrigger-CFEBQixK.js";import"./CompositeItem-BMNtg4rr.js";import"./ToolbarRootContext-naKORRKd.js";import"./getDisabledMountTransitionStyles-cT1HZu31.js";import"./getPseudoElementBounds-CrNYx-X9.js";import"./chevron-down-Cb9Hg-wG.js";import"./index-C0IcmitN.js";import"./error-ds7oVFYZ.js";import"./BaseCbacBanner-DF3YFnLm.js";import"./makeExternalStore-Bsf5R0_k.js";import"./Tooltip-BzhslWmp.js";import"./PopoverPopup-BEZyxco5.js";import"./toNumber-BzltfZyA.js";import"./useOsdkClient-CBa7ZvPJ.js";import"./DropdownField-BTnkDyID.js";import"./withOsdkMetrics-BTbIrze-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
