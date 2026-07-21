import{f as b,j as a,r as i}from"./iframe-Oyh7YWVy.js";import{O as u}from"./object-table-YfyakQK1.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DzjYghL3.js";import"./Table-HFAeY48X.js";import"./index-xEo1ZlxZ.js";import"./Dialog-CQZds_wh.js";import"./cross-D3VIzmhf.js";import"./svgIconContainer-DOss5Ez0.js";import"./useBaseUiId-BvyYcN2c.js";import"./InternalBackdrop-DG3xWsog.js";import"./composite-_OL6DVDU.js";import"./index-Cc89UydO.js";import"./index-DP-E86sA.js";import"./index-B8YBElKK.js";import"./useEventCallback-EuLu3WWi.js";import"./SkeletonBar-DVpemjCt.js";import"./LoadingCell-B1IdkGkB.js";import"./ColumnConfigDialog-Boe9jFFY.js";import"./DraggableList-DKAL_qPi.js";import"./search-LRAlq_kr.js";import"./Input-Bv50XYYd.js";import"./useControlled-CqqqXdoU.js";import"./Button-DeDouW8J.js";import"./small-cross-CMaOmCVT.js";import"./ActionButton-C6GJ9AHy.js";import"./Checkbox-BZPG1ZXw.js";import"./useValueChanged-CC9BPWFL.js";import"./CollapsiblePanel-Cl03ZTxj.js";import"./MultiColumnSortDialog-BYeBnSmM.js";import"./MenuTrigger-h2ompmrZ.js";import"./CompositeItem-9J1_-fS5.js";import"./ToolbarRootContext-BaOGvdf2.js";import"./getDisabledMountTransitionStyles-BQxmAcay.js";import"./getPseudoElementBounds-BOsUaYkg.js";import"./chevron-down-DAtbsfww.js";import"./index-Cu_y1ZLF.js";import"./error-zQ5jpS7E.js";import"./BaseCbacBanner-D8Imwfzx.js";import"./makeExternalStore-BSTQoVfL.js";import"./Tooltip-BbWSU9mm.js";import"./PopoverPopup-CJ9Sgz76.js";import"./toNumber-DpZyQAsn.js";import"./useOsdkClient-hBc7mprP.js";import"./tick-B4gPvG-J.js";import"./DropdownField-52DLcoQZ.js";import"./withOsdkMetrics-p9AruliU.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
