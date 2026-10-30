import{f as b,j as a,r as i}from"./iframe-D1LXFBxc.js";import{O as u}from"./object-table-Dc6kWb2K.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BMGLbfqy.js";import"./Table-D0crwwGg.js";import"./index-1OI0nGkQ.js";import"./Dialog-5n5dGO1_.js";import"./cross-fpuOrCid.js";import"./svgIconContainer-bswbKgoA.js";import"./useBaseUiId-ps7HY4-v.js";import"./InternalBackdrop-DEpP5i29.js";import"./composite-DuREibPe.js";import"./index-BkZOFAl2.js";import"./index-DHKG1l8R.js";import"./index-CvkHqUxC.js";import"./useEventCallback-BzJZUjXz.js";import"./SkeletonBar-BEUy3yco.js";import"./LoadingCell-BuWFA09M.js";import"./ColumnConfigDialog-DkTHJgbS.js";import"./DraggableList-BFZHGTf-.js";import"./search-DbOA3UnO.js";import"./Input-Dcr7sH0u.js";import"./useControlled-BkSZr9vP.js";import"./Button-DQBtx8tI.js";import"./small-cross-dlZFFK_z.js";import"./ActionButton-Bn6Tlxi1.js";import"./Checkbox-BHZPfKNt.js";import"./useValueChanged-B2y-z1AW.js";import"./CollapsiblePanel-C5zeXEPd.js";import"./MultiColumnSortDialog-BWl5XeOe.js";import"./MenuTrigger-DNQaot3C.js";import"./CompositeItem-TBc75DhR.js";import"./ToolbarRootContext-BWtsBung.js";import"./getDisabledMountTransitionStyles-CUYWOYI-.js";import"./getPseudoElementBounds-D052xtfe.js";import"./chevron-down-BcP7YmhL.js";import"./index-BilF2CpV.js";import"./error-CxJnkhM-.js";import"./BaseCbacBanner-Dw8cKDh4.js";import"./makeExternalStore-BkL46d6x.js";import"./Tooltip-CXZWn5vA.js";import"./isObject-3yusRZvo.js";import"./debounce-CrOoXB7G.js";import"./useOsdkClient-CH0NV-pV.js";import"./tick-Dln8NHKp.js";import"./DropdownField-PSQxNdU1.js";import"./isEqual-DdJdcAmR.js";import"./_baseIsEqual-BvBA96bH.js";import"./withOsdkMetrics-BQyS4Ebn.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
