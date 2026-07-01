import{f as b,j as a,r as i}from"./iframe-rYhliD8g.js";import{O as u}from"./object-table-3xb17fRt.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-X9sQiBTg.js";import"./Table-kZmlPSqF.js";import"./index-q1mgknhf.js";import"./Dialog-CjL3HKmK.js";import"./cross-CPr3MUaQ.js";import"./svgIconContainer-DJ8j44Ny.js";import"./useBaseUiId-CdgQVAaj.js";import"./InternalBackdrop-v-ylaNKC.js";import"./composite-BNI9ZcnX.js";import"./index-CzE9pYvT.js";import"./index-Bphild-4.js";import"./index-C9KouQEd.js";import"./useEventCallback-DVibYURh.js";import"./SkeletonBar-Ddd66Waw.js";import"./LoadingCell-CFpnbL2B.js";import"./ColumnConfigDialog-CzUG3O2r.js";import"./DraggableList-BdZMUqX4.js";import"./search-BzqQNgVY.js";import"./Input-WMLBvEyZ.js";import"./useControlled-Ogvj-xts.js";import"./Button-BN8r-qWP.js";import"./small-cross-DcEEND5Z.js";import"./ActionButton-BM81A1Gr.js";import"./Checkbox-fmGdxuLY.js";import"./minus-hJL7npDc.js";import"./tick-BZ_BapFN.js";import"./useValueChanged-BJKPb2oe.js";import"./caret-down-CvsEdzAQ.js";import"./CollapsiblePanel-BhyFek-j.js";import"./MultiColumnSortDialog-TTC4HpYB.js";import"./MenuTrigger-BCxaZTjX.js";import"./CompositeItem-BvHeJvz6.js";import"./ToolbarRootContext-C7pt0CP2.js";import"./getDisabledMountTransitionStyles-C48kiChS.js";import"./getPseudoElementBounds-BSWOq2tT.js";import"./chevron-down-CX05pV8G.js";import"./index-D3VtxeUF.js";import"./error-D4oWJjMt.js";import"./BaseCbacBanner-CNb8cRre.js";import"./makeExternalStore-Dntyn6J4.js";import"./Tooltip-D6UOhF4f.js";import"./PopoverPopup-B34GAHpX.js";import"./toNumber-DxeddJjJ.js";import"./useOsdkClient-CQ4POGj2.js";import"./DropdownField-Dq-9Xfi8.js";import"./withOsdkMetrics-B7rARLuJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
