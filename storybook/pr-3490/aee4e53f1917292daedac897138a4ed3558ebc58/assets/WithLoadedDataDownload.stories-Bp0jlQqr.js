import{f as b,j as a,r as i}from"./iframe-4AGo0fHF.js";import{O as u}from"./object-table-Cbjx-ZUk.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BDAIYRA_.js";import"./Table-BLCF-iqT.js";import"./index-rqNsdX2H.js";import"./Dialog-BTy10SoX.js";import"./cross-B1_QLOud.js";import"./svgIconContainer-DuDvRxIP.js";import"./useBaseUiId-d_edq7Dv.js";import"./InternalBackdrop-B5Iy0lGE.js";import"./composite-BDe51bb2.js";import"./index-BLXYd6dz.js";import"./index-CaPMxUJ3.js";import"./index-DzzigdXq.js";import"./useEventCallback-BS1yTetA.js";import"./SkeletonBar-CxLr-0WP.js";import"./LoadingCell-Da6C7tef.js";import"./ColumnConfigDialog-vKLinxH-.js";import"./DraggableList-D4VQMzWc.js";import"./search-ATPUGaQZ.js";import"./Input-D2Q3J8aS.js";import"./useControlled-CsCWmXvE.js";import"./Button-D2xhFlGw.js";import"./small-cross-F2kjXfbX.js";import"./ActionButton-CnNqhyKE.js";import"./Checkbox-DZZw4HKe.js";import"./useValueChanged-CyANjxsT.js";import"./CollapsiblePanel-B64W-q5N.js";import"./MultiColumnSortDialog-Dt1aPuNt.js";import"./MenuTrigger-B18yJZ1y.js";import"./CompositeItem-CM84FkA3.js";import"./ToolbarRootContext-X15TOm6A.js";import"./getDisabledMountTransitionStyles-Bkse61JI.js";import"./getPseudoElementBounds-DJa8rKSZ.js";import"./chevron-down-BL45Hv7R.js";import"./index-J_OTmZ_H.js";import"./error-ikfBFfix.js";import"./BaseCbacBanner-CC9SNwDA.js";import"./makeExternalStore-CgN71ky-.js";import"./Tooltip-Du7ikPNT.js";import"./PopoverPopup-Dn1H88L0.js";import"./toNumber-BhaSdtQz.js";import"./useOsdkClient-D-UojcDm.js";import"./tick-Dzc0l5DV.js";import"./DropdownField-DUSwCxwp.js";import"./withOsdkMetrics-BP43R-Ep.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
