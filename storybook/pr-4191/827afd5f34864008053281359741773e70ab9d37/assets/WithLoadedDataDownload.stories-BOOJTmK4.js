import{f as b,j as a,r as i}from"./iframe-B5lqcjqD.js";import{O as u}from"./object-table-CUi82Gz7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CRQgFnVN.js";import"./Table-BIOpUksl.js";import"./index-CRsh17Vx.js";import"./Dialog-pNi0EjWd.js";import"./cross-DHsl6guL.js";import"./svgIconContainer-D6KCVgJj.js";import"./useBaseUiId-oknajK1z.js";import"./InternalBackdrop-BvHcPsAz.js";import"./composite-Cre9O_Y6.js";import"./index-yNr1-X6F.js";import"./index-C8V2J7Cn.js";import"./index-ClLOYYyH.js";import"./useEventCallback-C8huiUaV.js";import"./SkeletonBar-DQfYLsyN.js";import"./LoadingCell-D7B8f3z3.js";import"./ColumnConfigDialog-DTZTcXlo.js";import"./DraggableList-CP9FYccH.js";import"./search-Be9RJwWO.js";import"./Input-CZpiyJ1w.js";import"./useControlled-Dh0gZz2O.js";import"./Button-BS6My4W_.js";import"./small-cross-CYPA47ez.js";import"./ActionButton-QVbQttp6.js";import"./Checkbox-CidKTG-Z.js";import"./useValueChanged-ah5CBoLN.js";import"./CollapsiblePanel-rMdaxvYS.js";import"./MultiColumnSortDialog-Bv5mhlIZ.js";import"./MenuTrigger-VcmxL_4h.js";import"./CompositeItem-DEsHBn0r.js";import"./ToolbarRootContext-LzdOjhLO.js";import"./getDisabledMountTransitionStyles-BOwpTiKH.js";import"./getPseudoElementBounds-TZ-hmbJ3.js";import"./chevron-down-BAMUeMPH.js";import"./index-DBPktzPX.js";import"./error-hbt_Js5f.js";import"./BaseCbacBanner-B-UrZJ5M.js";import"./makeExternalStore-D04mQ5d-.js";import"./Tooltip-DSNJDxmy.js";import"./PopoverPopup-cEQUdM63.js";import"./debounce-BxC1HvQJ.js";import"./useOsdkClient-mF5eaEzP.js";import"./tick-Cz1YHSYQ.js";import"./DropdownField-dMvSytG-.js";import"./isEqual-BvOtC8Tw.js";import"./withOsdkMetrics-J94G_2em.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
