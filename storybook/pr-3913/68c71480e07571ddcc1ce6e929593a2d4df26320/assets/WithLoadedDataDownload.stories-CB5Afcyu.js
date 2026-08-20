import{f as b,j as a,r as i}from"./iframe-EjCpIKMB.js";import{O as u}from"./object-table-5fWdPkX7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CIUDHQF8.js";import"./Table-Cmb2wjQa.js";import"./index-B5U3ePJq.js";import"./Dialog-DssNMNSz.js";import"./cross-CnLBVn_q.js";import"./svgIconContainer-CP-Ry2TB.js";import"./useBaseUiId-CK7LAaP5.js";import"./InternalBackdrop-CLd2i4Az.js";import"./composite-BNMQjeVI.js";import"./index-BtHapzj-.js";import"./index-BoU3FokU.js";import"./index-CEQCP6Rz.js";import"./useEventCallback-CiuEYM0E.js";import"./SkeletonBar-xLEjW6F1.js";import"./LoadingCell-CmPbThS_.js";import"./ColumnConfigDialog-DkxNN9Yc.js";import"./DraggableList-B18NmC-W.js";import"./search-BuWn_4CG.js";import"./Input-B6qHKpOm.js";import"./useControlled-C1-AcGB5.js";import"./Button-i8gsI8dS.js";import"./small-cross-BO3dC5CT.js";import"./ActionButton-D9fM6-Ow.js";import"./Checkbox-rkPeMWtn.js";import"./useValueChanged-BrI5qHq7.js";import"./CollapsiblePanel-CT_Zqu4L.js";import"./MultiColumnSortDialog-CLWNn6M_.js";import"./MenuTrigger-7vF3udgH.js";import"./CompositeItem-DMMDITMV.js";import"./ToolbarRootContext-D7y3n011.js";import"./getDisabledMountTransitionStyles-DU_IFslq.js";import"./getPseudoElementBounds-CftZdi9Z.js";import"./chevron-down-BryEDF54.js";import"./index-C86moaIy.js";import"./error-COq5rtPP.js";import"./BaseCbacBanner-CTsIoRnR.js";import"./makeExternalStore-C3iPT6jS.js";import"./Tooltip-DvfNwL5O.js";import"./PopoverPopup-Bln9dMkk.js";import"./debounce-iiPmlamn.js";import"./useOsdkClient-BzX-SVEP.js";import"./tick-BsXgJ5Ai.js";import"./DropdownField-G8plP5wa.js";import"./isEqual-Dlpp4WAb.js";import"./withOsdkMetrics-BFKxMYaV.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
