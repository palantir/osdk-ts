import{f as b,j as a,r as i}from"./iframe-ypGDbWmZ.js";import{O as u}from"./object-table-BLqoaWeA.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DOKq-ADj.js";import"./Table-CulZMLU9.js";import"./index-Bb1fXhg6.js";import"./Dialog-B94zlqNn.js";import"./cross-BLrUbUvw.js";import"./svgIconContainer-DhmJGll4.js";import"./useBaseUiId-C3R3oVzO.js";import"./InternalBackdrop-C0bGJO9q.js";import"./composite-OPXoirfb.js";import"./index-Bz5FfFNw.js";import"./index-raFGnCfX.js";import"./index-BVfGFksJ.js";import"./useEventCallback-C-1d3yF2.js";import"./SkeletonBar-D4ufo65y.js";import"./LoadingCell-91Up5hyb.js";import"./ColumnConfigDialog-BkR9UzlO.js";import"./DraggableList-C_SdCB6N.js";import"./search-C-NpwX8I.js";import"./Input-BNwGntRi.js";import"./useControlled-BuHWxoI9.js";import"./isEqual-ZNB5jZBd.js";import"./isObject-rs-CAWBW.js";import"./Button-DGelSHBk.js";import"./ActionButton-DaDdkYzT.js";import"./Checkbox-BXWHAgfz.js";import"./useValueChanged-Bhv2IVu3.js";import"./CollapsiblePanel-BcxyJj68.js";import"./MultiColumnSortDialog-DtPRZvLt.js";import"./MenuTrigger-Dd5kqUMV.js";import"./CompositeItem-B2ZiZyws.js";import"./ToolbarRootContext-DKmaOtqD.js";import"./getDisabledMountTransitionStyles-CPJWweJg.js";import"./getPseudoElementBounds-B-gat87m.js";import"./chevron-down-Cl0J7uZD.js";import"./index-DkFWgfXu.js";import"./error-DNRz_71B.js";import"./BaseCbacBanner-CX9DhMMV.js";import"./makeExternalStore-CuxCTWSG.js";import"./Tooltip-Di4wCyUW.js";import"./PopoverPopup-QVu25NbU.js";import"./toNumber-lVujfo0b.js";import"./useOsdkClient-BzxrzH_M.js";import"./tick-Q9yCmvvA.js";import"./DropdownField-DlGwKjQ6.js";import"./withOsdkMetrics-G3X7P_JF.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
