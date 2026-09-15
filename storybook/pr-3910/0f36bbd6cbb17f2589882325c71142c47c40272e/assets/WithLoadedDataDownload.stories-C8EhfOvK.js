import{f as b,j as a,r as i}from"./iframe-BJHQLm8B.js";import{O as u}from"./object-table-6Dmunot4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DNJi6hnI.js";import"./Table-0Gb2iOhx.js";import"./index-BUqmovkS.js";import"./Dialog-QIwxmnv_.js";import"./cross-DyhJ0eVv.js";import"./svgIconContainer-CExwBPXa.js";import"./useBaseUiId-DFBTpUkK.js";import"./InternalBackdrop-Ddz1w5Zi.js";import"./composite-BjkOmkjK.js";import"./index-CY3jAq3i.js";import"./index-BXhIsTqo.js";import"./index-nUnNg1dx.js";import"./useEventCallback-Dk3ZagH_.js";import"./SkeletonBar-BE2-lLRV.js";import"./LoadingCell-Dno7k0KU.js";import"./ColumnConfigDialog-dI9pN7C5.js";import"./DraggableList-CXkhvPtt.js";import"./search-CBF8qcQD.js";import"./Input--rxzAq78.js";import"./useControlled-91vTGa_9.js";import"./Button-hiBWk-nL.js";import"./small-cross-BaIKTF8-.js";import"./ActionButton-B06o1rGg.js";import"./Checkbox-DDOXzphd.js";import"./useValueChanged-Cznn-vr_.js";import"./CollapsiblePanel-BzpOhWpv.js";import"./MultiColumnSortDialog-jT1EKfyH.js";import"./MenuTrigger-74Ao9CwB.js";import"./CompositeItem-BhxoDlh7.js";import"./ToolbarRootContext-0Z3xHtAl.js";import"./getDisabledMountTransitionStyles-CygFqHiI.js";import"./getPseudoElementBounds-CLRJGPDW.js";import"./chevron-down-DOmpjpbt.js";import"./index-mWeNCZ3t.js";import"./error-msvagv_9.js";import"./BaseCbacBanner-DMhFZWt0.js";import"./makeExternalStore-CZ09MAHK.js";import"./Tooltip-DzCNOI3d.js";import"./PopoverPopup-VghyVGFq.js";import"./debounce-DLKN_1JY.js";import"./useOsdkClient-DHzp8GFD.js";import"./tick-pYb3XQje.js";import"./DropdownField-BmtwaVlS.js";import"./isEqual-BlhDqGkk.js";import"./withOsdkMetrics-CQ4A9sKP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
