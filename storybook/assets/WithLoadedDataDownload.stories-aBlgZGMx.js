import{f as b,j as a,r as i}from"./iframe-DSXXK9ry.js";import{O as u}from"./object-table-BqaM-26H.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Dmy7KmTb.js";import"./index-BLfmppkP.js";import"./Dialog-Bm2MsVOX.js";import"./cross-BKiGnt2y.js";import"./svgIconContainer-Db6mLLA4.js";import"./useBaseUiId-DVrjiokY.js";import"./InternalBackdrop-1oCmQolD.js";import"./composite-Dw9cnuQF.js";import"./index-C1mA0BVO.js";import"./index-DgE5owWV.js";import"./index-DVr6FuT6.js";import"./useEventCallback-CHHkDI_M.js";import"./SkeletonBar-CcKOl6Qe.js";import"./LoadingCell-CN0IElMI.js";import"./ColumnConfigDialog-Dklxze3_.js";import"./DraggableList-B3nP9x_c.js";import"./search-Tcwj5nHq.js";import"./Input-BTsoeB1X.js";import"./useControlled-BNp0JE7f.js";import"./Button-ZlZC0ijy.js";import"./small-cross-YFO1e4B1.js";import"./ActionButton-C3ddu0oN.js";import"./Checkbox-CuK6oRAj.js";import"./useValueChanged-B83lwOzW.js";import"./CollapsiblePanel-BqnavrKK.js";import"./MultiColumnSortDialog-CBk279Xb.js";import"./MenuTrigger-DtfMiAxZ.js";import"./CompositeItem-dShEfX7Q.js";import"./ToolbarRootContext-fozDRqMP.js";import"./getDisabledMountTransitionStyles-GhTyZ9RS.js";import"./getPseudoElementBounds-Chmn5JhO.js";import"./chevron-down-7ro0SSz_.js";import"./index-BleiAz0O.js";import"./error-nGhhG5OL.js";import"./BaseCbacBanner-BCa7fgac.js";import"./makeExternalStore-Rp2wgwyK.js";import"./Tooltip-Cg1ThzJm.js";import"./PopoverPopup-xlfEGBMu.js";import"./toNumber-C4wB9kBT.js";import"./useOsdkClient-BwjyvIvZ.js";import"./tick-9A-SdkRi.js";import"./DropdownField-CvfHYl8Y.js";import"./withOsdkMetrics-Ca3HcGIG.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
