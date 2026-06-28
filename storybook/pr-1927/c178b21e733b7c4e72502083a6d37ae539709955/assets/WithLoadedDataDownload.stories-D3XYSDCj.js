import{f as b,j as a,r as i}from"./iframe-BSrJtMAy.js";import{O as u}from"./object-table-DHHswVCM.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CJ0uGEBt.js";import"./Table-BajYqP7w.js";import"./index-D1GbiRQS.js";import"./Dialog-C0fPursl.js";import"./cross-DvQ_aeLX.js";import"./svgIconContainer-L-5RtQyd.js";import"./useBaseUiId-CUfq4dGh.js";import"./InternalBackdrop-DtGuxSow.js";import"./composite-D2xreuW7.js";import"./index-BfAdvFUY.js";import"./index-DbG9wyxz.js";import"./index-DstKjMFq.js";import"./useEventCallback-zVj5NeXk.js";import"./SkeletonBar-BlOti7zV.js";import"./LoadingCell-B6gxrU-g.js";import"./ColumnConfigDialog-0HMwBwpi.js";import"./DraggableList-DuP_SeWd.js";import"./search-CvD5xe0-.js";import"./Input-BFEhrf0Y.js";import"./useControlled-Csgps4qR.js";import"./Button-B9oa49Hr.js";import"./small-cross-BWS6eRZj.js";import"./ActionButton-2RxpvHsZ.js";import"./Checkbox-CGmCWYWV.js";import"./minus-CaWrYx75.js";import"./tick-B2DOF4fq.js";import"./useValueChanged-CvlNXU2B.js";import"./caret-down-C6iHkg4_.js";import"./CollapsiblePanel-DcxhJcfU.js";import"./MultiColumnSortDialog-DNTGzXD3.js";import"./MenuTrigger-DruE6YCM.js";import"./CompositeItem-DfM-WWMx.js";import"./ToolbarRootContext-Id_3yl_o.js";import"./getDisabledMountTransitionStyles-DhhDrx95.js";import"./getPseudoElementBounds-DUsuz1Hu.js";import"./chevron-down-BS5lzpW9.js";import"./index-CjIn5qeG.js";import"./error-BRgYatE1.js";import"./BaseCbacBanner-D6zmzc2G.js";import"./makeExternalStore-BWgMKoPI.js";import"./Tooltip-C0yFzXj0.js";import"./PopoverPopup-C7htB5Ya.js";import"./toNumber-v5IjwS6U.js";import"./useOsdkClient-BO4qkv8H.js";import"./DropdownField-yV618VEW.js";import"./withOsdkMetrics-CzBzDarn.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
