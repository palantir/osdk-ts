import{f as b,j as a,r as i}from"./iframe-DxJeula4.js";import{O as u}from"./object-table-l3wBDAkw.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bex38Dbe.js";import"./Table-DiYjT0Q2.js";import"./index-B9mL7-OE.js";import"./Dialog-BIZftzVJ.js";import"./cross-29GlH8F4.js";import"./svgIconContainer-CdQm-4ln.js";import"./useBaseUiId-Bj9j4N3u.js";import"./InternalBackdrop-BRqMmWX_.js";import"./composite-CgXRmyLY.js";import"./index-CXYfuw6V.js";import"./index-DPz1_94q.js";import"./index-D8Yuieai.js";import"./useEventCallback-DPsUrrVZ.js";import"./SkeletonBar-BtuQ9CiX.js";import"./LoadingCell-DWB5FMeJ.js";import"./ColumnConfigDialog-CSaZwsnj.js";import"./DraggableList-Fdtc1xiH.js";import"./search-D5t2DZQ7.js";import"./Input-BvgM9Kwf.js";import"./useControlled-C0VKQlkZ.js";import"./Button-DWVF-Ogj.js";import"./small-cross-D9HBzDp9.js";import"./ActionButton-D4fP_drj.js";import"./Checkbox-ZkI2nsFS.js";import"./useValueChanged-BCN_jjTG.js";import"./CollapsiblePanel-C-UeWGW2.js";import"./MultiColumnSortDialog-CbUB4pqP.js";import"./MenuTrigger--KsNlWSX.js";import"./CompositeItem-D_vZmQ8j.js";import"./ToolbarRootContext-B8UPYXOB.js";import"./getDisabledMountTransitionStyles-C2zs7LcV.js";import"./getPseudoElementBounds-CySecK6W.js";import"./chevron-down-Cj6YIXkn.js";import"./index-ca5R2I__.js";import"./error-DXjqFz8_.js";import"./BaseCbacBanner-DkA1yf8I.js";import"./makeExternalStore-DP3Eneq0.js";import"./Tooltip-yeO_ckgv.js";import"./PopoverPopup-7ufffWgk.js";import"./toNumber-j4PpbJef.js";import"./useOsdkClient-BhHhCLyl.js";import"./tick-CTYETe1v.js";import"./DropdownField-BePhyZ5g.js";import"./withOsdkMetrics-Cx4WeBFP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
