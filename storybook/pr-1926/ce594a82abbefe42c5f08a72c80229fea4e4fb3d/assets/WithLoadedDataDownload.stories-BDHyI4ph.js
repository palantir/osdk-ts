import{f as b,j as a,r as i}from"./iframe-DhlbjbeZ.js";import{O as u}from"./object-table-C8nDhfH0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B3ZbJ-bP.js";import"./Table-embaBjrz.js";import"./index-kWv8s-4z.js";import"./Dialog-BGSHwo-W.js";import"./cross-B1OAvnP_.js";import"./svgIconContainer-BJqj6PDa.js";import"./useBaseUiId-B9Y_8LY0.js";import"./InternalBackdrop-CqmW82gT.js";import"./composite-C9hedtre.js";import"./index-t6f6IwGx.js";import"./index-BjXaHPcG.js";import"./index-CGRvi5ZA.js";import"./useEventCallback-BzDinzsO.js";import"./SkeletonBar-D6exssjq.js";import"./LoadingCell-DvngwTuw.js";import"./ColumnConfigDialog-C9Z118mT.js";import"./DraggableList-DsUyCW9A.js";import"./search-BIxqLZiv.js";import"./Input-D0rK2bUF.js";import"./useControlled-K9ko4WNA.js";import"./isEqual-BRxuW1NH.js";import"./isObject-B-pcJKyf.js";import"./Button-xxtzF2yJ.js";import"./ActionButton-CKZ-vgTW.js";import"./Checkbox-D5wg6kc_.js";import"./useValueChanged-Bs2x0KyM.js";import"./CollapsiblePanel-BNOg5Mz1.js";import"./MultiColumnSortDialog-L67CEFXN.js";import"./MenuTrigger-DEXLRaJ3.js";import"./CompositeItem-Bv4DEkpZ.js";import"./ToolbarRootContext-BvbVuNMG.js";import"./getDisabledMountTransitionStyles-2r_tzCMn.js";import"./getPseudoElementBounds-BBVTS-aJ.js";import"./chevron-down-CVGBo-H-.js";import"./index-CSOX7XNN.js";import"./error-DwtADrTi.js";import"./BaseCbacBanner-Bx0jmi4m.js";import"./makeExternalStore-CAKRXzbv.js";import"./Tooltip-C339oC4A.js";import"./PopoverPopup-Difabenz.js";import"./toNumber-B4WWmduY.js";import"./useOsdkClient-CeUHuBqw.js";import"./tick-sc-wTqG-.js";import"./DropdownField-S_rrnk6q.js";import"./withOsdkMetrics-DMzIZKlf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
