import{f as b,j as a,r as i}from"./iframe-DYEsw9Jb.js";import{O as u}from"./object-table-DGFRiUTu.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CqTPAs1-.js";import"./Table-gthod9Cr.js";import"./index-rKpgFT4B.js";import"./Dialog-Zub-vuSE.js";import"./cross-CEJZ0QJE.js";import"./svgIconContainer-Ep4B-7k3.js";import"./useBaseUiId-R9XHVV5s.js";import"./InternalBackdrop-CJY7wN6v.js";import"./composite-BExUsQtH.js";import"./index-BB2HU14Y.js";import"./index-OKzGs_og.js";import"./index-CGHW13Mu.js";import"./useEventCallback-CIiU4_xH.js";import"./SkeletonBar-BuQGjEC2.js";import"./LoadingCell-Bwv-FS1q.js";import"./ColumnConfigDialog-BN55iGhp.js";import"./DraggableList-BZUZZFvj.js";import"./Input-DBujCEAt.js";import"./useControlled-DwOoZCA5.js";import"./Button-DL_BJkq8.js";import"./small-cross-D3VPhnGL.js";import"./ActionButton-DFPNSZAX.js";import"./Checkbox-D03tYB4u.js";import"./minus-CefI1boG.js";import"./useValueChanged-BEnYBh8A.js";import"./caret-down-BWanr_mJ.js";import"./CollapsiblePanel-d2D_q-NJ.js";import"./MultiColumnSortDialog-B1noJWSB.js";import"./MenuTrigger-DrJ3gme4.js";import"./CompositeItem-7-W7FaG8.js";import"./ToolbarRootContext-7fSwrXwn.js";import"./getDisabledMountTransitionStyles-B7rnSUFI.js";import"./getPseudoElementBounds-aq4NDIW8.js";import"./chevron-down-D8V8HxWq.js";import"./index-Dc_OOPzN.js";import"./error-BKxzXRUt.js";import"./BaseCbacBanner-D2Fyni5Y.js";import"./makeExternalStore-CK_bsYtR.js";import"./Tooltip-DnvP6EB_.js";import"./PopoverPopup-atP-rQCm.js";import"./toNumber-DDGJOv7N.js";import"./useOsdkClient-ClH-F4OD.js";import"./DropdownField-CXjoX74D.js";import"./withOsdkMetrics-CwTlLXct.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
