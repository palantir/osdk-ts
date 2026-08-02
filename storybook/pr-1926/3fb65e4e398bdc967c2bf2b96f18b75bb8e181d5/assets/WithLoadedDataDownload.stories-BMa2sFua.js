import{f as b,j as a,r as i}from"./iframe-DytthAgf.js";import{O as u}from"./object-table-DJHUpA5d.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C_4BNbTz.js";import"./Table-CG8VK7f1.js";import"./index-D3tIM5sk.js";import"./Dialog-DL-uZSD8.js";import"./cross-BAoo9bRB.js";import"./svgIconContainer-B3UGUQMc.js";import"./useBaseUiId-Dkek2wV5.js";import"./InternalBackdrop-CKlfqC_d.js";import"./composite-BtiuVRIQ.js";import"./index-BoY2zDED.js";import"./index-lj4n_gzr.js";import"./index-Cg68QRb4.js";import"./useEventCallback-D5hjObTy.js";import"./SkeletonBar-BslgRjWc.js";import"./LoadingCell-CTG-LOZa.js";import"./ColumnConfigDialog-CQpKKnM6.js";import"./DraggableList-CGL30u5r.js";import"./search-DxqwfofF.js";import"./Input-Dmrm85gF.js";import"./useControlled-BiVwljs8.js";import"./isEqual-BI3vA7Ba.js";import"./isObject-DwNdKho2.js";import"./Button-COGmdSd7.js";import"./ActionButton-DIz3vx6C.js";import"./Checkbox-Rnnk1CNA.js";import"./useValueChanged-D2yo41HC.js";import"./CollapsiblePanel-CvnwF6oN.js";import"./MultiColumnSortDialog-zGAxeUw5.js";import"./MenuTrigger-CuvxcAIl.js";import"./CompositeItem-C2b15spo.js";import"./ToolbarRootContext-Tt4yBAJp.js";import"./getDisabledMountTransitionStyles-CW35Y1qZ.js";import"./getPseudoElementBounds-onXc2cOr.js";import"./chevron-down-D-EU7ysh.js";import"./index-Dufg7QH_.js";import"./error-C8qY1hME.js";import"./BaseCbacBanner-4HweScCj.js";import"./makeExternalStore-B--gn_oA.js";import"./Tooltip-t-5z9t1Y.js";import"./PopoverPopup-BIy-JnXN.js";import"./toNumber-Cs5Prda0.js";import"./useOsdkClient-BB_Qjreu.js";import"./tick-afCbX4dN.js";import"./DropdownField-C6kbYpb5.js";import"./withOsdkMetrics-Car_C0r4.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
