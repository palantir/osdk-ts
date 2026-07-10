import{f as b,j as a,r as i}from"./iframe-CyxSYkSk.js";import{O as u}from"./object-table-BQrTTO1U.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DBpszJXl.js";import"./Table-CUuD_yed.js";import"./index-0yOzlcUJ.js";import"./Dialog-DsyD-ahv.js";import"./cross-j4qUAPs7.js";import"./svgIconContainer-C7MqzwhO.js";import"./useBaseUiId-bn-y7br3.js";import"./InternalBackdrop-Da_mVGm3.js";import"./composite-enLB4Ka2.js";import"./index-DII4TUgV.js";import"./index-C2GlS_zI.js";import"./index-Dn9h67Xb.js";import"./useEventCallback-DYWUDJ99.js";import"./SkeletonBar-CbZvZgx8.js";import"./LoadingCell-B_zHn35b.js";import"./ColumnConfigDialog-D8oL8Mww.js";import"./DraggableList-DH2v3uy2.js";import"./search-BE1YWkMj.js";import"./Input-DUGKsc-x.js";import"./useControlled-C88ZdskF.js";import"./Button-w8fSFCzy.js";import"./small-cross-DHlkM0cj.js";import"./ActionButton-Ch2ZGJYT.js";import"./Checkbox-DKFzBN7E.js";import"./useValueChanged-BlWuoYhy.js";import"./CollapsiblePanel-CsQAfhDg.js";import"./MultiColumnSortDialog-Jm4NyyHY.js";import"./MenuTrigger-As1SY0EJ.js";import"./CompositeItem-v_3aPTjT.js";import"./ToolbarRootContext-C6YIsUhu.js";import"./getDisabledMountTransitionStyles-Cc9hoZpx.js";import"./getPseudoElementBounds-b8SphpHN.js";import"./chevron-down-ljdNq6bJ.js";import"./index-BuQG7SNg.js";import"./error-BlqOe69A.js";import"./BaseCbacBanner-B8Heyh1J.js";import"./makeExternalStore-BcXeLiDJ.js";import"./Tooltip-DeAh8h8k.js";import"./PopoverPopup-CvzhjT3o.js";import"./toNumber-B0ouGizM.js";import"./useOsdkClient-B6CSG8p7.js";import"./tick-DA5H2mKQ.js";import"./DropdownField-F8LzgPd3.js";import"./withOsdkMetrics-Duy0EoDC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
