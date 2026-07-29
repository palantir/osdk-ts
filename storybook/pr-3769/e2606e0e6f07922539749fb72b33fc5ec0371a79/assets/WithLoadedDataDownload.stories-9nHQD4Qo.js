import{f as b,j as a,r as i}from"./iframe-hzfvyDmq.js";import{O as u}from"./object-table-DDyvSrvK.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CdJNp2PB.js";import"./Table-S-qrfXrQ.js";import"./index-f5Cgh3Nq.js";import"./Dialog-CLxh-kiC.js";import"./cross-CRChT_Fc.js";import"./svgIconContainer-Cb51Sm7i.js";import"./useBaseUiId-DmC4LGoz.js";import"./InternalBackdrop-BkhlETTr.js";import"./composite-BH-1n-px.js";import"./index-B1JvKBAi.js";import"./index-BLrf7TRG.js";import"./index-ECL9pzkS.js";import"./useEventCallback-BVaqhbZv.js";import"./SkeletonBar-Cydm-_bj.js";import"./LoadingCell-CIwAhsfk.js";import"./ColumnConfigDialog-BHJtrFKi.js";import"./DraggableList-VIA38x-Z.js";import"./search-Cx-34oit.js";import"./Input-j4WQNWPZ.js";import"./useControlled-DAR7PUt5.js";import"./isEqual-B_G078b5.js";import"./isObject-OBBwB0n7.js";import"./Button-B5teW1fu.js";import"./ActionButton-BhhnarQt.js";import"./Checkbox-CHj0Mzen.js";import"./useValueChanged-DaH9it3g.js";import"./CollapsiblePanel-DK_WmK5Z.js";import"./MultiColumnSortDialog-DGuzWOGX.js";import"./MenuTrigger-D9MLuSAC.js";import"./CompositeItem-CjjHoPXP.js";import"./ToolbarRootContext-BGTK6XuR.js";import"./getDisabledMountTransitionStyles-Dr6IxA0r.js";import"./getPseudoElementBounds-DMqUJd8Q.js";import"./chevron-down-CrjOKJrn.js";import"./index-DO9rqWWH.js";import"./error-D9W8A-KQ.js";import"./BaseCbacBanner-RGAxCGDZ.js";import"./makeExternalStore-DOrHHMWU.js";import"./Tooltip-DcRW6kP6.js";import"./PopoverPopup-Bdz3Tdg1.js";import"./toNumber-BII_8Zj6.js";import"./useOsdkClient-BROt0Prz.js";import"./tick-BCoclWAx.js";import"./DropdownField-BhHBwio3.js";import"./withOsdkMetrics-u8-t1UQo.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
