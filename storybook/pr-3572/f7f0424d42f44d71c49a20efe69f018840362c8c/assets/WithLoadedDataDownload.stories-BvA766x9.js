import{f as b,j as a,r as i}from"./iframe-FIKeu7rC.js";import{O as u}from"./object-table-CdXKvJ5t.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BYmwUabe.js";import"./Table-BtZYnuGk.js";import"./index-C8m-l_2B.js";import"./Dialog-CkLfXHAh.js";import"./cross-BvZ8T6Jx.js";import"./svgIconContainer-Btl_W2rg.js";import"./useBaseUiId-BHBJwszI.js";import"./InternalBackdrop-BOOfo-bC.js";import"./composite-FkhmDVAb.js";import"./index-fEwkxJCO.js";import"./index-DY_9CGdP.js";import"./index-BLiDqqII.js";import"./useEventCallback-BV81OWo6.js";import"./SkeletonBar-CVfh3EAr.js";import"./LoadingCell-a44lpMWC.js";import"./ColumnConfigDialog-DLMLhCOw.js";import"./DraggableList-B6-G5PLg.js";import"./search-_Y49WGbC.js";import"./Input-BxhzS_7f.js";import"./useControlled-VBj-g8FR.js";import"./Button-MV80I6nm.js";import"./small-cross-CqTYJvof.js";import"./ActionButton-BrNi7hJW.js";import"./Checkbox-JZvdgfQN.js";import"./minus-DE2Oc8L6.js";import"./tick-aQ3qzWOQ.js";import"./useValueChanged-DjD5OvVD.js";import"./caret-down-DZP6xskg.js";import"./CollapsiblePanel-spUL4ueS.js";import"./MultiColumnSortDialog-IE8p-488.js";import"./MenuTrigger-BVvJEou5.js";import"./CompositeItem-b0s0-9xu.js";import"./ToolbarRootContext-DxDDBzph.js";import"./getDisabledMountTransitionStyles-C1qVqbDU.js";import"./getPseudoElementBounds-UuzVbI_D.js";import"./chevron-down-afmMEC7e.js";import"./index-B_zCYSJl.js";import"./error-eMCCINaW.js";import"./BaseCbacBanner-BLWxsk10.js";import"./makeExternalStore-BhxepKXE.js";import"./Tooltip-CR7Qwzzm.js";import"./PopoverPopup-DMaPjTh1.js";import"./toNumber-CDiW1XSa.js";import"./useOsdkClient-ByfVn-0v.js";import"./DropdownField-WMfFlAFE.js";import"./withOsdkMetrics-CgsmUUPG.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
