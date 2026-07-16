import{f as b,j as a,r as i}from"./iframe-BgcQ9h4y.js";import{O as u}from"./object-table-Bkiqa4d4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DtmsntH8.js";import"./Table-Cwnm-7vo.js";import"./index-BQd_JZY0.js";import"./Dialog-CiSLG898.js";import"./cross-BKkH7W-I.js";import"./svgIconContainer-Bte_bcu8.js";import"./useBaseUiId-Cy1K6eVD.js";import"./InternalBackdrop-Bk3PKhmB.js";import"./composite-BFXF1QD6.js";import"./index-DlQl1oZE.js";import"./index-82HpqR86.js";import"./index-DgoQ6iA2.js";import"./useEventCallback-1Y-EdcLq.js";import"./SkeletonBar-CJKCxE1k.js";import"./LoadingCell-CkFPgmrR.js";import"./ColumnConfigDialog-CNzmoZHq.js";import"./DraggableList-CK5zZYTs.js";import"./search-VzUopX3G.js";import"./Input-BDGeHby0.js";import"./useControlled-ByWRwYD5.js";import"./isEqual-CD6RvROS.js";import"./isObject-C3fle72f.js";import"./Button-CDKRHZ9u.js";import"./ActionButton-abT3qj5k.js";import"./Checkbox-B0AQR7BS.js";import"./useValueChanged-B7Obr-Dk.js";import"./CollapsiblePanel-BiVfLNg3.js";import"./MultiColumnSortDialog-D1rWuwgc.js";import"./MenuTrigger-CUvvbsdU.js";import"./CompositeItem-D0WL-5ct.js";import"./ToolbarRootContext-P5Z4VtM1.js";import"./getDisabledMountTransitionStyles-Dryq6z7f.js";import"./getPseudoElementBounds-DnFCdjwP.js";import"./chevron-down-JsT-GO6_.js";import"./index-BPS6XYpJ.js";import"./error-887l69um.js";import"./BaseCbacBanner-ChqbJxbi.js";import"./makeExternalStore-BKJUWcYF.js";import"./Tooltip-CvvSpmj6.js";import"./PopoverPopup-CossAgdC.js";import"./toNumber-DDhZzdsZ.js";import"./useOsdkClient-Bv9QxZHJ.js";import"./tick-DnaYfpln.js";import"./DropdownField-D1UES0Au.js";import"./withOsdkMetrics-C3WzTARe.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
