import{f as b,j as a,r as i}from"./iframe-CYldCnGD.js";import{O as u}from"./object-table-DDSn2UFU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D83jK9dp.js";import"./Table-BNcmDYbm.js";import"./index-Dk842-I6.js";import"./Dialog-Cukr5S6M.js";import"./cross-BSECteXn.js";import"./svgIconContainer-CIQly-CR.js";import"./useBaseUiId-3gcUh3x_.js";import"./InternalBackdrop-CGNn8QCI.js";import"./composite-C8RXtb6D.js";import"./index-oSG7gC6J.js";import"./index-DKy92Rhg.js";import"./index-7jWJhwgw.js";import"./useEventCallback-f5yIvlah.js";import"./SkeletonBar-DHK_ouX1.js";import"./LoadingCell-CQraBTCJ.js";import"./ColumnConfigDialog-CyWy3MMl.js";import"./DraggableList-ixce-GvH.js";import"./search-CTxjB9si.js";import"./Input-B40LOt8Z.js";import"./useControlled-_faCI7Qf.js";import"./Button-CN8pOJ9l.js";import"./small-cross-Bc-bcB4C.js";import"./ActionButton-D5nWBNES.js";import"./Checkbox-CBZGwAK2.js";import"./useValueChanged-C402cjzJ.js";import"./CollapsiblePanel-Dubvbhy2.js";import"./MultiColumnSortDialog-Dm30vEHW.js";import"./MenuTrigger-BAN0tGrY.js";import"./CompositeItem-BCxD5w-u.js";import"./ToolbarRootContext-zgHJbPne.js";import"./getDisabledMountTransitionStyles-BEYowYDh.js";import"./getPseudoElementBounds-3OWmYiM9.js";import"./chevron-down-B4mO7Rnp.js";import"./index-wm6d9Hb7.js";import"./error-ssch54vp.js";import"./BaseCbacBanner-D7Nu5WBL.js";import"./makeExternalStore-vFxxqEzr.js";import"./Tooltip-qFWWzNTU.js";import"./PopoverPopup-DNDyZQ3Z.js";import"./toNumber-Dq5OYsdE.js";import"./useOsdkClient-BSc7a6NV.js";import"./tick-8U5GqDOJ.js";import"./DropdownField-CVzsqnrF.js";import"./withOsdkMetrics-KwpXosWm.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
