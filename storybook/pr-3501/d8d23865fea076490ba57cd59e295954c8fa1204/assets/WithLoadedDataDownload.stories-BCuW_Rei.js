import{f as b,j as a,r as i}from"./iframe-Nh0aerxW.js";import{O as u}from"./object-table-BEc8s0RR.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-YP4vgwcw.js";import"./Table-C5Xm5HQL.js";import"./index-DRutxzog.js";import"./Dialog-CWAAhgqP.js";import"./cross-DoRCRCae.js";import"./svgIconContainer-Cq5Vv4-8.js";import"./useBaseUiId-THJcA4gc.js";import"./InternalBackdrop-B1L0SK-d.js";import"./composite-DlRDzuGh.js";import"./index-32EFWuL-.js";import"./index-By6RMe6s.js";import"./index-DsqgQvLV.js";import"./useEventCallback-DeR51_h0.js";import"./SkeletonBar-cQSum6Bl.js";import"./LoadingCell-BR1mEvUy.js";import"./ColumnConfigDialog-Z2sbo01v.js";import"./DraggableList-C3OqANcR.js";import"./Input-pUjZoQO1.js";import"./useControlled-DagUJ5Qi.js";import"./Button-CH40khuz.js";import"./small-cross-Dd3x1h4Q.js";import"./ActionButton-Vy65wuML.js";import"./Checkbox-Bk9pW44k.js";import"./minus-DjpsqPqr.js";import"./useValueChanged-CKJnlBEn.js";import"./caret-down-Be_0V0_4.js";import"./CollapsiblePanel-1qPjlq0K.js";import"./MultiColumnSortDialog-CojHVQoM.js";import"./MenuTrigger-ZoZQWZdt.js";import"./CompositeItem-CwrwrlTN.js";import"./ToolbarRootContext-BECd8-y4.js";import"./getDisabledMountTransitionStyles-BYjDDo8j.js";import"./getPseudoElementBounds-BP_O18Te.js";import"./chevron-down-BL624FME.js";import"./index-2MVHZTil.js";import"./error-loM05YdI.js";import"./BaseCbacBanner-CdJzjNEB.js";import"./makeExternalStore-BSxtiBG-.js";import"./Tooltip-DiIcBWne.js";import"./PopoverPopup-DTmNO73x.js";import"./toNumber-yobwRJdY.js";import"./useOsdkClient-b8fajUSJ.js";import"./DropdownField-Dh-ZwPUh.js";import"./useStableShapeDefinition-DxS0arKw.js";import"./withOsdkMetrics-D7uQ6iMK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
