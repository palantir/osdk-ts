import{f as b,j as a,r as i}from"./iframe-C3sKw2cL.js";import{O as u}from"./object-table-1ngyaRdS.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D7ozKbCq.js";import"./Table-DXkTtuoa.js";import"./index-wGL4M1dj.js";import"./Dialog-DNd7m5Gs.js";import"./cross-Bu18Q5FU.js";import"./svgIconContainer-C1lOjXyd.js";import"./useBaseUiId-DkTIqUVt.js";import"./InternalBackdrop-CREw7QLK.js";import"./composite-DODBKXpG.js";import"./index-BDLfxrJj.js";import"./index-s1MtgtJR.js";import"./index-BJGZijRP.js";import"./useEventCallback-NfZykPAO.js";import"./SkeletonBar-B8WHnp7i.js";import"./LoadingCell-BMKXKnNB.js";import"./ColumnConfigDialog-DNFVelbj.js";import"./DraggableList-Drc8YOGN.js";import"./search-BdUx-yB5.js";import"./Input-KoETOEYa.js";import"./useControlled-E83E5YYd.js";import"./Button-65aITwDG.js";import"./small-cross-C14IIHQX.js";import"./ActionButton-C6yfBQXX.js";import"./Checkbox-C7B1_vll.js";import"./useValueChanged-Dw0zLy25.js";import"./CollapsiblePanel-Pz8vokeW.js";import"./MultiColumnSortDialog-DntNNQJF.js";import"./MenuTrigger-CCVvE7kO.js";import"./CompositeItem-Bl2bPt1U.js";import"./ToolbarRootContext-jQ-Q_Ur2.js";import"./getDisabledMountTransitionStyles-D4BUlwZ6.js";import"./getPseudoElementBounds-CbXQ2lOM.js";import"./chevron-down-DFO6kUAt.js";import"./index-CS3EOsxC.js";import"./error-B2CSn4Mi.js";import"./BaseCbacBanner-DXG1qZE3.js";import"./makeExternalStore-CjpzJSnl.js";import"./Tooltip-CEzb1PKx.js";import"./PopoverPopup-Y5DzECwv.js";import"./debounce-DgY9oPON.js";import"./useOsdkClient-CzcQ1v9M.js";import"./tick-BGf1Cc8_.js";import"./DropdownField-BF3n0ykt.js";import"./isEqual-COrmyPn8.js";import"./withOsdkMetrics-BIO2bqJF.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
