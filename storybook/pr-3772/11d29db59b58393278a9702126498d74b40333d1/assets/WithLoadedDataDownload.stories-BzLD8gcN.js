import{f as b,j as a,r as i}from"./iframe-BFuSGtb4.js";import{O as u}from"./object-table-DIDlqmGN.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-vKgnz1L2.js";import"./Table-D_tIUI_h.js";import"./index-BvJhM8Nl.js";import"./Dialog-Ba75vVzI.js";import"./cross-BgMco_KD.js";import"./svgIconContainer-BjNM3mFN.js";import"./useBaseUiId-r6vSLRg9.js";import"./InternalBackdrop-D7Zjn0JH.js";import"./composite-B2dxckkZ.js";import"./index-C9p7LPrR.js";import"./index-DuqoT3Af.js";import"./index-CtKwAVJH.js";import"./useEventCallback-b3jrFQtV.js";import"./SkeletonBar-C5xn974V.js";import"./LoadingCell-z1RIh6FB.js";import"./ColumnConfigDialog-8XqN-0j6.js";import"./DraggableList-BnOKpmts.js";import"./search-CmZO1BAH.js";import"./Input-2D_wjpim.js";import"./useControlled-HR5zxcvB.js";import"./Button-B6iuwea3.js";import"./small-cross-DyS1PJUB.js";import"./ActionButton-BodBsvDl.js";import"./Checkbox-hwN15EQ0.js";import"./useValueChanged-svOgCIYj.js";import"./CollapsiblePanel-BE3lHqTd.js";import"./MultiColumnSortDialog-CRH8YgbT.js";import"./MenuTrigger-B9gdjT_B.js";import"./CompositeItem-CfQdryXv.js";import"./ToolbarRootContext-infwX91F.js";import"./getDisabledMountTransitionStyles-AfkUr7I7.js";import"./getPseudoElementBounds-DFBrl2s7.js";import"./chevron-down-B0DZKVpj.js";import"./index-D9SzM9i_.js";import"./error-Cd0VNhT4.js";import"./BaseCbacBanner-DWkxryeY.js";import"./makeExternalStore-B3u7TgQ1.js";import"./Tooltip-BHcAgbri.js";import"./PopoverPopup-CUYl0njo.js";import"./debounce-kGXPhJ8y.js";import"./useOsdkClient-CmlJgVuI.js";import"./tick-D5bi3_r5.js";import"./DropdownField-DQ6QS32M.js";import"./isEqual-BmzUKNpD.js";import"./withOsdkMetrics-CJ-ARXZP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
