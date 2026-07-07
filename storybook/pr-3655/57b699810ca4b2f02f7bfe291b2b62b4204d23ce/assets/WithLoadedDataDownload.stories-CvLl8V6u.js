import{f as b,j as a,r as i}from"./iframe-VIUjn1eL.js";import{O as u}from"./object-table-BIW8hcCk.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ajOtfN6a.js";import"./Table-BsA31qn1.js";import"./index-Au1uUuUe.js";import"./Dialog-D2DRpcwl.js";import"./cross-CLapw4bX.js";import"./svgIconContainer-ERmnaq0G.js";import"./useBaseUiId-B1kN4XqW.js";import"./InternalBackdrop-C08YOsMb.js";import"./composite-BDYOoxUc.js";import"./index-rsvx8CnG.js";import"./index-DymheiCL.js";import"./index-A9RvTqZN.js";import"./useEventCallback-Ddv_2BmO.js";import"./SkeletonBar-QPQlvQbG.js";import"./LoadingCell-5QHpxaVH.js";import"./ColumnConfigDialog-ItZkdeTE.js";import"./DraggableList-C-9su03e.js";import"./search-CmgKahmk.js";import"./Input-yUu2PjNk.js";import"./useControlled-DegTIbWT.js";import"./Button-DezfWdgT.js";import"./small-cross-4JHj2OC6.js";import"./ActionButton-DCu6Be1w.js";import"./Checkbox-t9bS1h_s.js";import"./useValueChanged-7ncITRpi.js";import"./CollapsiblePanel-0CTMDAI0.js";import"./MultiColumnSortDialog-DmsI9YCY.js";import"./MenuTrigger-CGMEiQe5.js";import"./CompositeItem-DZC3pl9A.js";import"./ToolbarRootContext-Mx44cl2Z.js";import"./getDisabledMountTransitionStyles-C-JS1VCS.js";import"./getPseudoElementBounds-BCMQjBmc.js";import"./chevron-down-DBFJhWrj.js";import"./index-CpLBKENT.js";import"./error-D_2MdKNg.js";import"./BaseCbacBanner--_0KDW9m.js";import"./makeExternalStore-BrmSoAw8.js";import"./Tooltip-C6p-oYbL.js";import"./PopoverPopup-BftsaL2Z.js";import"./toNumber-IO5BMyQA.js";import"./useOsdkClient-arH3PT0K.js";import"./tick-Dy3u5ocZ.js";import"./DropdownField-DOrGRBuZ.js";import"./withOsdkMetrics-DDmeV7Nc.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
