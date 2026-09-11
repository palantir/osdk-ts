import{f as b,j as a,r as i}from"./iframe-CZuJk2mr.js";import{O as u}from"./object-table-Sr4UqiK-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D-OLzWEl.js";import"./Table-CiJXIyql.js";import"./index-DDksSLCw.js";import"./Dialog-Cu0NEvtn.js";import"./cross-cMU2e2iq.js";import"./svgIconContainer-D_03U5sn.js";import"./useBaseUiId-oT1O9JCt.js";import"./InternalBackdrop-D7By8IzE.js";import"./composite-sxVd7y-x.js";import"./index-Db51obv8.js";import"./index-CwqMcoP9.js";import"./index-CchHo8N5.js";import"./useEventCallback-C-Y_eJLU.js";import"./SkeletonBar-KIkU-F0P.js";import"./LoadingCell-Dy5QT2-j.js";import"./ColumnConfigDialog-BJnqXzXJ.js";import"./DraggableList-DMKsNBrH.js";import"./search-2YrO29UM.js";import"./Input-CRD7X-5R.js";import"./useControlled-Bv0HDfXo.js";import"./Button-8AWdZuBH.js";import"./small-cross-Cks8he4h.js";import"./ActionButton-Y1hJnLuM.js";import"./Checkbox-BHgBtR90.js";import"./useValueChanged-B3gY-jcJ.js";import"./CollapsiblePanel-BSzHq4mN.js";import"./MultiColumnSortDialog-CoP8N9Nr.js";import"./MenuTrigger-DpjNDmx1.js";import"./CompositeItem-CuTnwCK-.js";import"./ToolbarRootContext-DCv4bsB-.js";import"./getDisabledMountTransitionStyles-wKWoptbs.js";import"./getPseudoElementBounds-B7h64O9N.js";import"./chevron-down-CxdBBEPV.js";import"./index-J1vMkA6U.js";import"./error-BX22AwHJ.js";import"./BaseCbacBanner-Cdj36LJA.js";import"./makeExternalStore-BxStD-Ll.js";import"./Tooltip-pvJM2LHO.js";import"./PopoverPopup-Cbun7Jdd.js";import"./debounce-BD5a1j86.js";import"./useOsdkClient-BPa-6pZZ.js";import"./tick-DsvM9X65.js";import"./DropdownField-v7pGuAWY.js";import"./isEqual-xDcqCKe9.js";import"./withOsdkMetrics-D7T9qYjs.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
