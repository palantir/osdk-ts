import{f as b,j as a,r as i}from"./iframe-C03US_I6.js";import{O as u}from"./object-table-BZlG6oo3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C_hpKMU_.js";import"./Table-pVuoTnHq.js";import"./index-C0TeYPg1.js";import"./Dialog-CzJGcRjs.js";import"./cross-B_4MYCZ_.js";import"./svgIconContainer-EwnPmkII.js";import"./useBaseUiId-D-uzqdoM.js";import"./InternalBackdrop-DPKQbzSG.js";import"./composite-UEsmsm-V.js";import"./index-YgCpM4My.js";import"./index-nwRvsWdy.js";import"./index-4tl9fbw5.js";import"./useEventCallback-BTvWob_8.js";import"./SkeletonBar-Cpm1ZtWz.js";import"./LoadingCell--4NBS1L8.js";import"./ColumnConfigDialog-Bmmkpv58.js";import"./DraggableList-Do8dQmK7.js";import"./search-tIkv7nJO.js";import"./Input-kXzLNjp1.js";import"./useControlled-Ce_eW3Tc.js";import"./isEqual-CkSrUxTo.js";import"./isObject-LLr9FPm1.js";import"./Button-Cia6mCYi.js";import"./ActionButton-CbbLCAxW.js";import"./Checkbox-DsQLhhy7.js";import"./useValueChanged-Ccsz7UbU.js";import"./CollapsiblePanel-DW8Rz6WZ.js";import"./MultiColumnSortDialog-BuGwf2kg.js";import"./MenuTrigger-BEuF51J5.js";import"./CompositeItem-5t-e12Jc.js";import"./ToolbarRootContext-BcfMYFrd.js";import"./getDisabledMountTransitionStyles-CGKROOJp.js";import"./getPseudoElementBounds-UOKVWr3N.js";import"./chevron-down-DSf6y05Z.js";import"./index-BcDzzwMS.js";import"./error-BY2GZ9CK.js";import"./BaseCbacBanner-B4Oqgm8C.js";import"./makeExternalStore-Cj2cBj8H.js";import"./Tooltip-Cwgqdokn.js";import"./PopoverPopup-DACaeaPi.js";import"./toNumber-CKVj-TJi.js";import"./useOsdkClient-BzWhRUai.js";import"./tick-ClJNL60R.js";import"./DropdownField-Ja7wn_To.js";import"./withOsdkMetrics-n1LItz_B.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
