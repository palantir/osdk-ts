import{f as b,j as a,r as i}from"./iframe-CTNzOQ9s.js";import{O as u}from"./object-table-CxPR0yWW.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DsFSaJDQ.js";import"./Table-hTC8RkuQ.js";import"./index-DRPEg90p.js";import"./Dialog-BCcBWg6Q.js";import"./cross-BFoVgfWv.js";import"./svgIconContainer-CXoapGnl.js";import"./useBaseUiId-Cq11xQXq.js";import"./InternalBackdrop-I-0IlH_Y.js";import"./composite-DwkHALDz.js";import"./index-DgKpQYO5.js";import"./index-BawSb6he.js";import"./index-lXwysK22.js";import"./useEventCallback-Dn5T_-YR.js";import"./SkeletonBar-B-1UU7Ib.js";import"./LoadingCell-DRW2tYpv.js";import"./ColumnConfigDialog-CSLmKDrS.js";import"./DraggableList-NyoOFC7X.js";import"./Input-B1wS8Yws.js";import"./useControlled-7QRHi1zA.js";import"./Button-BUqLG1Cm.js";import"./small-cross-AvIUsQOU.js";import"./ActionButton-B7iHugSe.js";import"./Checkbox-BzHAyZx4.js";import"./minus-BUOAMNzz.js";import"./useValueChanged-DyTnKZIk.js";import"./caret-down-C0ALeRyL.js";import"./CollapsiblePanel-BtuRhur0.js";import"./MultiColumnSortDialog-Wew8kTC6.js";import"./MenuTrigger-DST2G_Zy.js";import"./CompositeItem-D8NR5hxe.js";import"./ToolbarRootContext-CxcYMuqJ.js";import"./getDisabledMountTransitionStyles-BQCH_J9Y.js";import"./getPseudoElementBounds-252qpKR0.js";import"./chevron-down-BH7P-HUK.js";import"./index-Bh2vCdyB.js";import"./error-Icev8rRj.js";import"./BaseCbacBanner-D5u1Evu2.js";import"./makeExternalStore-CYxDp44O.js";import"./Tooltip-DfePDKye.js";import"./PopoverPopup-BxBaPW88.js";import"./toNumber-VixFY9Iw.js";import"./useOsdkClient-D2V_r5_J.js";import"./DropdownField-DQbBbbr1.js";import"./withOsdkMetrics-D3SbJ5bl.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
