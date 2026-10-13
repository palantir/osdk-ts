import{f as b,j as a,r as i}from"./iframe-DTTjhdqf.js";import{O as u}from"./object-table-uXbSHh1x.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DLuwwicB.js";import"./Table-C6La8mwf.js";import"./index-C_u0ZD76.js";import"./Dialog-BH3cxv0J.js";import"./cross-Biqxkz0W.js";import"./svgIconContainer-BQTxrAHk.js";import"./useBaseUiId-DAXCLwKK.js";import"./InternalBackdrop-DfoV1fwg.js";import"./composite-DmV5qlv-.js";import"./index-BF1qraTR.js";import"./index-BZqSoOPp.js";import"./index-V7CuNiQt.js";import"./useEventCallback-D0JHLFLo.js";import"./SkeletonBar-CkQh5tX-.js";import"./LoadingCell-DRnc6ZbW.js";import"./ColumnConfigDialog-CrVc4g8l.js";import"./DraggableList-BqAME9U3.js";import"./search-DqqzOunc.js";import"./Input-DIq0Mf7R.js";import"./useControlled-DnFxapfF.js";import"./Button-CVsxv-I0.js";import"./small-cross-q1eH4ZRy.js";import"./ActionButton-Be-L3Hsv.js";import"./Checkbox-DmPGieXK.js";import"./useValueChanged-hEMYJH-e.js";import"./CollapsiblePanel-BLwcFyFu.js";import"./MultiColumnSortDialog-BH_7yvK9.js";import"./MenuTrigger-B2GTQxPn.js";import"./CompositeItem-NevsqKCs.js";import"./ToolbarRootContext-Dcs6ty2M.js";import"./getDisabledMountTransitionStyles-2dTRJBXv.js";import"./getPseudoElementBounds-Ddv_miud.js";import"./chevron-down-DMQn8YNS.js";import"./index-cabLRwho.js";import"./error-9LOJa28H.js";import"./BaseCbacBanner-BYlW8R_8.js";import"./makeExternalStore-FJoYAOnh.js";import"./Tooltip-CYAeZ-OK.js";import"./PopoverPopup-B67nRi_h.js";import"./debounce-DybENE3y.js";import"./useOsdkClient-gEWansJz.js";import"./tick-CjabrPw4.js";import"./DropdownField-7-WH0W2E.js";import"./isEqual-DZ8BxMaa.js";import"./withOsdkMetrics-BVdsAVYy.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
