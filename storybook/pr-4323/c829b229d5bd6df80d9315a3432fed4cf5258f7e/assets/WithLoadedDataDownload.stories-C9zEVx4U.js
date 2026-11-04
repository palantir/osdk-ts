import{f as b,j as a,r as i}from"./iframe-DywpB1hE.js";import{O as u}from"./object-table-DSqGDhpz.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C9IGOhE9.js";import"./Table-BJyzRyQX.js";import"./index-DmgiNEb3.js";import"./Dialog-b8TWvGfl.js";import"./cross-aTqn6PnT.js";import"./svgIconContainer-BDFx6Zxn.js";import"./useBaseUiId-J99Ack0x.js";import"./InternalBackdrop-ilty_vzC.js";import"./composite-Cr11nkBG.js";import"./index-BtGsUy0O.js";import"./index-BtfNmnmI.js";import"./index-CkWqHjdx.js";import"./useEventCallback-B0JvgrbD.js";import"./SkeletonBar-CYjAwPZM.js";import"./LoadingCell-Dn8kxFfT.js";import"./ColumnConfigDialog-DENzayAM.js";import"./DraggableList-DNGNwkdW.js";import"./search-DVZ7S7-1.js";import"./Input-DaT49KS2.js";import"./useControlled-vk6jUFHs.js";import"./Button-Ctxa2jTP.js";import"./small-cross-DEhP5KVo.js";import"./ActionButton-j4A3JxyA.js";import"./Checkbox-C9Fq3_-7.js";import"./useValueChanged-DBM24efT.js";import"./CollapsiblePanel-QB2yvwOj.js";import"./MultiColumnSortDialog-BV5JkRYB.js";import"./MenuTrigger-B8-0Pn4M.js";import"./CompositeItem-D-O0kvjn.js";import"./ToolbarRootContext-DhYqu86z.js";import"./getDisabledMountTransitionStyles-hoTdldX2.js";import"./getPseudoElementBounds-CTvhJMZP.js";import"./chevron-down-B3UYxdX4.js";import"./index-CiTdpWDW.js";import"./error-zG4ckKPW.js";import"./BaseCbacBanner-030hm0gk.js";import"./makeExternalStore-CFrW1DiS.js";import"./Tooltip-BR9BNp9s.js";import"./PopoverPopup-9xYxalag.js";import"./debounce-DRpUcqeI.js";import"./useOsdkClient-BoCP8Ra0.js";import"./tick-dSuqEogv.js";import"./DropdownField-DhQOHxUk.js";import"./isEqual-CbNKEKf0.js";import"./withOsdkMetrics-BM9yLZRB.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
