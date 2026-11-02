import{f as b,j as a,r as i}from"./iframe-C-gRhmL7.js";import{O as u}from"./object-table-BuNrcFUB.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BRnBMuxX.js";import"./Table-D1wEI7Jw.js";import"./index-BomyFAOQ.js";import"./Dialog-DORMEh_O.js";import"./cross-BgbLU6cP.js";import"./svgIconContainer-D3HKLOfp.js";import"./useBaseUiId-Dr0jpy2a.js";import"./InternalBackdrop-DAQFGGKN.js";import"./composite-abNLhxgk.js";import"./index-Cc3D0dS0.js";import"./index-CMgDy_5O.js";import"./index-Bn78Igy-.js";import"./useEventCallback-L7w5wNTM.js";import"./SkeletonBar-BrXfWJ3s.js";import"./LoadingCell-CGoqfSvN.js";import"./ColumnConfigDialog-CRQ1b3Zi.js";import"./DraggableList-DPdWpbia.js";import"./search-BQdh6WXo.js";import"./Input-D1XkMJrA.js";import"./useControlled-BYigcnNh.js";import"./Button-CE8V4pbx.js";import"./small-cross-QE8L2S61.js";import"./ActionButton-CtsB9LNj.js";import"./Checkbox-BoknC1gS.js";import"./useValueChanged-DfaHdTkd.js";import"./CollapsiblePanel-BKE8iGjK.js";import"./MultiColumnSortDialog-CMd7Ma2F.js";import"./MenuTrigger-B1zMt0LI.js";import"./CompositeItem-Dc0cRnHM.js";import"./ToolbarRootContext-tG5LuvDM.js";import"./getDisabledMountTransitionStyles-BmL3-adz.js";import"./getPseudoElementBounds-Cw9ZB0lo.js";import"./chevron-down-Cj7UC7sg.js";import"./index-CYurDmtO.js";import"./error-AkMr3-YU.js";import"./BaseCbacBanner-CFHgpu92.js";import"./makeExternalStore-s0ePZNdW.js";import"./Tooltip-DQzNOf2f.js";import"./PopoverPopup-BfjojjnZ.js";import"./debounce-DGWONp_t.js";import"./useOsdkClient-CVDU5GOE.js";import"./tick-CwSemnZF.js";import"./DropdownField-Br06tlrV.js";import"./isEqual-CM2lqVB7.js";import"./withOsdkMetrics-Dez2mISn.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
