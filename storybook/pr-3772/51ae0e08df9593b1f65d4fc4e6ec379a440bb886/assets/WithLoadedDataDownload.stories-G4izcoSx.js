import{f as b,j as a,r as i}from"./iframe-DQ03zKaw.js";import{O as u}from"./object-table-D0TV_B21.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DsOAMWP6.js";import"./Table-kOw5nmNT.js";import"./index-stdVkj-k.js";import"./Dialog-C66CAyKR.js";import"./cross-CJiMy_ZW.js";import"./svgIconContainer--Sopw3_S.js";import"./useBaseUiId-BcwXn3JA.js";import"./InternalBackdrop-BDQCmvGI.js";import"./composite-DzzU_ZlD.js";import"./index-qXGo-ysy.js";import"./index-V5lc2XuU.js";import"./index-DCGK3uWk.js";import"./useEventCallback-BXioPfMh.js";import"./SkeletonBar-BOLkzmdO.js";import"./LoadingCell-BCDUUXR0.js";import"./ColumnConfigDialog-CPqmG5YS.js";import"./DraggableList-B-tT0o9J.js";import"./search-B-4oOix2.js";import"./Input-whmgHMtV.js";import"./useControlled-CbhFopnc.js";import"./isEqual-DZJnDX0x.js";import"./isObject-CgqEtJAk.js";import"./Button-BC8511vo.js";import"./ActionButton-Br0z02Qg.js";import"./Checkbox-BMVyta3Q.js";import"./useValueChanged-Cz9X6_0h.js";import"./CollapsiblePanel--bspc30W.js";import"./MultiColumnSortDialog-CI82RZPT.js";import"./MenuTrigger-CmdoQsfw.js";import"./CompositeItem-B8vFY17A.js";import"./ToolbarRootContext-C2wgqXfe.js";import"./getDisabledMountTransitionStyles-B5rqwZz-.js";import"./getPseudoElementBounds-oUZpb_YO.js";import"./chevron-down-DcVCbfRt.js";import"./index-DFJwtzJK.js";import"./error-Len1bRu3.js";import"./BaseCbacBanner-wd6jVkbW.js";import"./makeExternalStore-Dc9gfDBF.js";import"./Tooltip-BmyXrIl8.js";import"./PopoverPopup-Dnkp6fPn.js";import"./toNumber-BQKjpdMy.js";import"./useOsdkClient-CE2i0WO2.js";import"./tick-xWM0VnDx.js";import"./DropdownField-C9zy3zTJ.js";import"./withOsdkMetrics-DUJdTBYY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
