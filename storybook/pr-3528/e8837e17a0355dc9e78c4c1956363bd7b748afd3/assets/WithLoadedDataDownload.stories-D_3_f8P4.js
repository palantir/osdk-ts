import{f as b,j as a,r as i}from"./iframe-CuyoQOya.js";import{O as u}from"./object-table-BXhJ-i5l.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-YTbMogRT.js";import"./Table-BB5lxe1A.js";import"./index-BXWFq-Y-.js";import"./Dialog-BI9qN1z4.js";import"./cross-BtX7Kd8h.js";import"./svgIconContainer-BcEc_lav.js";import"./useBaseUiId-CISyD09v.js";import"./InternalBackdrop-Cp4SDgr2.js";import"./composite-C49KSaGC.js";import"./index-DPX2jSuM.js";import"./index-D4LuZEJc.js";import"./index-BocRgb_c.js";import"./useEventCallback-BpfebJex.js";import"./SkeletonBar-CGsXpy_m.js";import"./LoadingCell-CiRLUPMJ.js";import"./ColumnConfigDialog-kZH-tfrj.js";import"./DraggableList-DioWfgKH.js";import"./Input-BkA0C2c2.js";import"./useControlled-CEiAmGGr.js";import"./Button-BWnh3zgl.js";import"./small-cross-YMZ1bZZe.js";import"./ActionButton-B-DnSlXZ.js";import"./Checkbox-C3GGZkPO.js";import"./minus-C5-g-Rkr.js";import"./useValueChanged-Ca3WkigY.js";import"./caret-down-BL7WUeJj.js";import"./CollapsiblePanel-CEH0zRiP.js";import"./MultiColumnSortDialog-EJ4pacX_.js";import"./MenuTrigger-DQWK2n6D.js";import"./CompositeItem-U_GX9thw.js";import"./ToolbarRootContext-B531Nv74.js";import"./getDisabledMountTransitionStyles-Z8Z1Wksz.js";import"./getPseudoElementBounds-UZAVQ-D6.js";import"./chevron-down-Bn6S65PF.js";import"./index-pATCxWSy.js";import"./error-CMdxBd1R.js";import"./BaseCbacBanner-DjrW_pfk.js";import"./makeExternalStore-BF3EknRt.js";import"./Tooltip-DplMO14m.js";import"./PopoverPopup-BqXRzW4i.js";import"./toNumber-K0t9oDlb.js";import"./useOsdkClient-CjlSRjX1.js";import"./DropdownField-B-IeJ3Xq.js";import"./withOsdkMetrics-CuQYuHx_.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
