import{f as b,j as a,r as i}from"./iframe-BQ-UFPab.js";import{O as u}from"./object-table-CkBdXWFx.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C2q6NCp1.js";import"./Table-CdiPIsG9.js";import"./index-CINCS_hH.js";import"./Dialog-paYnu4ay.js";import"./cross-Cn9a0bfk.js";import"./svgIconContainer-DSZHW2D1.js";import"./useBaseUiId-MrnhRuI7.js";import"./InternalBackdrop-BA-dh_Dq.js";import"./composite-AfrrArFw.js";import"./index-BhyjrTbC.js";import"./index-CHrjTCPO.js";import"./index-BFovtqXH.js";import"./useEventCallback-D2uLjwwK.js";import"./SkeletonBar-C6VggNIK.js";import"./LoadingCell-BYaxGteB.js";import"./ColumnConfigDialog-BHNUkg39.js";import"./DraggableList-B40QKnru.js";import"./search-D2BB4vzI.js";import"./Input-DOJCSaX4.js";import"./useControlled-DailpD-X.js";import"./Button-DcugvAgH.js";import"./small-cross-LUsUce0e.js";import"./ActionButton-cjPgoB9p.js";import"./Checkbox-CQj0pr7t.js";import"./minus-7qZczigh.js";import"./tick-BZP2nvHl.js";import"./useValueChanged-DjXIt3cg.js";import"./caret-down-iR9-OPRM.js";import"./CollapsiblePanel-C4j6LTmG.js";import"./MultiColumnSortDialog-CtezMS-O.js";import"./MenuTrigger-OVMwaJEO.js";import"./CompositeItem-TzTS48sK.js";import"./ToolbarRootContext-Bljw1WLR.js";import"./getDisabledMountTransitionStyles-DrrVoi2c.js";import"./getPseudoElementBounds-DJh1RA32.js";import"./chevron-down-BG90A_3d.js";import"./index-BW1k3ZVh.js";import"./error-_bIEfi5X.js";import"./BaseCbacBanner-0R5G5xhb.js";import"./makeExternalStore-CsvDjyll.js";import"./Tooltip-CoseQslT.js";import"./PopoverPopup-DQbSgkLA.js";import"./toNumber-CVV8ild9.js";import"./useOsdkClient-Dx8GM3be.js";import"./DropdownField-BZWxXcvS.js";import"./withOsdkMetrics-Ci7yXCHq.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
