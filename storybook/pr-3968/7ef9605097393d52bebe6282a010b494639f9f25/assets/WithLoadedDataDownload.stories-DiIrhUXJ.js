import{f as b,j as a,r as i}from"./iframe-D07_tlNY.js";import{O as u}from"./object-table-mDZNy2eA.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BZ5VSi4J.js";import"./Table-DhmSo6kc.js";import"./index-BQ0PEMCN.js";import"./Dialog-zKwf6kcN.js";import"./cross-cfoeTeHb.js";import"./svgIconContainer-BLgeYPC8.js";import"./useBaseUiId-B0wQwkXS.js";import"./InternalBackdrop-B6N_TrYF.js";import"./composite-gwuj_Yg_.js";import"./index-EmEIjE8b.js";import"./index-Dy14VnsS.js";import"./index-Djr2tU3g.js";import"./useEventCallback-CacU8cTK.js";import"./SkeletonBar-Y8JMEaWt.js";import"./LoadingCell-Eyo1i6r7.js";import"./ColumnConfigDialog-CLjvnD13.js";import"./DraggableList-HRQfyvgY.js";import"./search-c3tWQKm6.js";import"./Input-C_nbkkcq.js";import"./useControlled-BOVJlk7U.js";import"./Button-xkyJItTT.js";import"./small-cross-ByB9N4b6.js";import"./ActionButton-C1-Qn1rI.js";import"./Checkbox-Cu6eiH4X.js";import"./useValueChanged-DGjiOWT_.js";import"./CollapsiblePanel-WfZDl8Bs.js";import"./MultiColumnSortDialog-CR7MeaoO.js";import"./MenuTrigger-DSHQ860W.js";import"./CompositeItem-B62DALdv.js";import"./ToolbarRootContext-A8nSy6Lb.js";import"./getDisabledMountTransitionStyles-BiaitSmC.js";import"./getPseudoElementBounds-De8tJeym.js";import"./chevron-down-Dm8M3XHE.js";import"./index-B2TS2X4n.js";import"./error-D7fddi8p.js";import"./BaseCbacBanner-C7-RK-oc.js";import"./makeExternalStore-DW0gV4Fp.js";import"./Tooltip-D43kVT1Z.js";import"./PopoverPopup-BogJF-KW.js";import"./debounce--cq45Syc.js";import"./useOsdkClient-Dp-gfOqY.js";import"./tick-D3lvgpVt.js";import"./DropdownField-Xg10lVkk.js";import"./isEqual-BPrEtiGy.js";import"./withOsdkMetrics-CK10C4kZ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
