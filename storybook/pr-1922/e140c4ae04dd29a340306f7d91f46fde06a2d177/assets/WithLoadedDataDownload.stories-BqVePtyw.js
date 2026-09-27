import{f as b,j as a,r as i}from"./iframe-CY0l_yrm.js";import{O as u}from"./object-table-CScaSMmu.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DND0VgR5.js";import"./Table-BDLWhByo.js";import"./index-jD6aOkFv.js";import"./Dialog-CObaXXeO.js";import"./cross-Cx7CV6yi.js";import"./svgIconContainer-CS1jdY6Z.js";import"./useBaseUiId-CnQ31eNT.js";import"./InternalBackdrop-DpYJb7P7.js";import"./composite-CtsMuCZE.js";import"./index-BwcD2Xpb.js";import"./index-CYc2nEZM.js";import"./index-B7EOaFV2.js";import"./useEventCallback-CuUylEqe.js";import"./SkeletonBar-DHnB17DS.js";import"./LoadingCell-lgq4p-2w.js";import"./ColumnConfigDialog-BBVV5egm.js";import"./DraggableList-BSKvp16K.js";import"./search-pW8689hu.js";import"./Input-BSPMw6pL.js";import"./useControlled-C5au6PDu.js";import"./Button-BSjQUjCf.js";import"./small-cross-Lb1xubsF.js";import"./ActionButton-DOh4jQXf.js";import"./Checkbox-DoBGOSNN.js";import"./useValueChanged-DZx2OgZD.js";import"./CollapsiblePanel-qW1X9ES0.js";import"./MultiColumnSortDialog-DzqQq3Hc.js";import"./MenuTrigger-LbHnUghE.js";import"./CompositeItem-CBwjlwAY.js";import"./ToolbarRootContext-CxL7mdgL.js";import"./getDisabledMountTransitionStyles-CP-qJ1MY.js";import"./getPseudoElementBounds-DAo1H6Bx.js";import"./chevron-down-CevA26oJ.js";import"./index-Bc195Ow-.js";import"./error-CvxyrBuz.js";import"./BaseCbacBanner-DM8VXmB6.js";import"./makeExternalStore-DLJSnM06.js";import"./Tooltip-CaHDHcXi.js";import"./PopoverPopup-DVUI0Hkh.js";import"./debounce-BZTVhNsm.js";import"./useOsdkClient-Dpp4RHdN.js";import"./tick-D8A10Ahp.js";import"./DropdownField-BBmL-vGd.js";import"./isEqual-D3W4jYG0.js";import"./withOsdkMetrics-B5SRPOi7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
