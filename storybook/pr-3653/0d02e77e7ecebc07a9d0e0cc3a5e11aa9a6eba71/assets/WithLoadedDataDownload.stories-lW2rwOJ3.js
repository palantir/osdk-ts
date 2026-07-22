import{f as b,j as a,r as i}from"./iframe-CHTHF7Wz.js";import{O as u}from"./object-table-C4cnrev0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-fcSkQvlK.js";import"./Table-Dby1zPzA.js";import"./index-6RQT7j61.js";import"./Dialog-CNxDRr24.js";import"./cross-Chwfou75.js";import"./svgIconContainer-Cb8zoJ-1.js";import"./useBaseUiId-Ch2-CeLc.js";import"./InternalBackdrop-BPcRrE87.js";import"./composite-4oYZf1BU.js";import"./index-doIRobQ8.js";import"./index-Uz2jciBY.js";import"./index-DHyt8FqQ.js";import"./useEventCallback-DvFPRzko.js";import"./SkeletonBar-DNI1Tp5D.js";import"./LoadingCell-BwWcNNvu.js";import"./ColumnConfigDialog-8yl7eGqw.js";import"./DraggableList-yhgmesrg.js";import"./search-CJPgSgzn.js";import"./Input-BAkGNhfG.js";import"./useControlled-DEeFI2m8.js";import"./isEqual-DuR2ouBx.js";import"./isObject-AkzbV96k.js";import"./Button-BFlkmOoI.js";import"./ActionButton-Bvd-fj8-.js";import"./Checkbox-DrvnQ83m.js";import"./useValueChanged-o9mb4C3W.js";import"./CollapsiblePanel-BaE_PrLj.js";import"./MultiColumnSortDialog-BIc1lp_h.js";import"./MenuTrigger-DXs0uCZU.js";import"./CompositeItem-B1d4G5Ee.js";import"./ToolbarRootContext-znMy6l6h.js";import"./getDisabledMountTransitionStyles-DOr3HfBo.js";import"./getPseudoElementBounds-100hF_4G.js";import"./chevron-down--pbLBBRz.js";import"./index-DthgxF2u.js";import"./error-BgtANkmb.js";import"./BaseCbacBanner-q-2Ylmow.js";import"./makeExternalStore-kE9T3YbL.js";import"./Tooltip-BV7lr5i5.js";import"./PopoverPopup-tYge4Exu.js";import"./toNumber-BE2RRh97.js";import"./useOsdkClient-BuxaAPMc.js";import"./tick-DlX7oEaM.js";import"./DropdownField-C9o_s7lg.js";import"./withOsdkMetrics-DlMzQx9P.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
