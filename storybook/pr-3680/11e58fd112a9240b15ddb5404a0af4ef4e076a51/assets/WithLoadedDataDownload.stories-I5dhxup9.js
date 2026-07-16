import{f as b,j as a,r as i}from"./iframe-DsROQhfc.js";import{O as u}from"./object-table-bPRQKbOi.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DxBIW_8v.js";import"./Table-DBvbtVZI.js";import"./index-BIXNysy_.js";import"./Dialog-DcrlOsHi.js";import"./cross-B0m__ea-.js";import"./svgIconContainer-BTibiieO.js";import"./useBaseUiId-CrcNeHF_.js";import"./InternalBackdrop-DeCsCWzC.js";import"./composite-4W_Eccup.js";import"./index-Bn6b70ni.js";import"./index-DAffi9fl.js";import"./index-BRCXCW61.js";import"./useEventCallback-HgQ2IoSf.js";import"./SkeletonBar-DJBNsVb2.js";import"./LoadingCell-CNOVcPEC.js";import"./ColumnConfigDialog-BVGgq8Uo.js";import"./DraggableList-CdvvRj23.js";import"./search-D1ImDZfx.js";import"./Input-gJoMs5d_.js";import"./useControlled-DMsIR7MQ.js";import"./Button-B8bKnUK4.js";import"./small-cross-VLZ8RsEr.js";import"./ActionButton-C6q70xBC.js";import"./Checkbox-DDylrYRB.js";import"./useValueChanged-DbRjnM2P.js";import"./CollapsiblePanel-B_foOnbH.js";import"./MultiColumnSortDialog-DaOLIos1.js";import"./MenuTrigger-COpQHCev.js";import"./CompositeItem-amjK_EwN.js";import"./ToolbarRootContext-JbUSN2gn.js";import"./getDisabledMountTransitionStyles-DfHW-lTJ.js";import"./getPseudoElementBounds-C-iQE8uJ.js";import"./chevron-down-c60nfWzK.js";import"./index-CVsL7sp0.js";import"./error-CeiSikDQ.js";import"./BaseCbacBanner-Cg-ohbnT.js";import"./makeExternalStore-CztNP472.js";import"./Tooltip-zETSkbyV.js";import"./PopoverPopup-D1xVOir3.js";import"./toNumber-Dx31cKSs.js";import"./useOsdkClient-CXXuiEMy.js";import"./tick-zjVvN5Bn.js";import"./DropdownField-BBbZ26Oy.js";import"./withOsdkMetrics-DdKqlAm-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
