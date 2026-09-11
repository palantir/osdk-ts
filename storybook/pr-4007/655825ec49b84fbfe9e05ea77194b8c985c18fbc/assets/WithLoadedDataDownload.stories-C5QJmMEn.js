import{f as b,j as a,r as i}from"./iframe-B9P_guYe.js";import{O as u}from"./object-table-DRHuz0_X.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DZKvLzKM.js";import"./Table-DGeyv1ad.js";import"./index-BmU_yXsT.js";import"./Dialog-jWuaiD-I.js";import"./cross-B0jMy4Xj.js";import"./svgIconContainer-86dgqwTy.js";import"./useBaseUiId-4Ig60Xd8.js";import"./InternalBackdrop-DymGob4l.js";import"./composite-0HTyS9cl.js";import"./index-3EbL4LBn.js";import"./index-CucgTNc9.js";import"./index-BoCFIwDC.js";import"./useEventCallback-4v2rm6Uv.js";import"./SkeletonBar-DQJfJoRc.js";import"./LoadingCell-WwbEycft.js";import"./ColumnConfigDialog-BusJQA3j.js";import"./DraggableList-D2J35TZN.js";import"./search-_dMlLuUD.js";import"./Input-CexEAM7S.js";import"./useControlled-CCs_p_PA.js";import"./Button-BKlQWyYX.js";import"./small-cross-BEzF29wK.js";import"./ActionButton-39cEgkXv.js";import"./Checkbox-CPiNSmDf.js";import"./useValueChanged-BD6-HJ6i.js";import"./CollapsiblePanel-P4ySmzrR.js";import"./MultiColumnSortDialog-DFMlcDqx.js";import"./MenuTrigger-Db1xRho6.js";import"./CompositeItem-G1VIkMjr.js";import"./ToolbarRootContext-CMDQJiC4.js";import"./getDisabledMountTransitionStyles-Bqo4m5rG.js";import"./getPseudoElementBounds-BJ2IJ4R6.js";import"./chevron-down-CL_Pf9bS.js";import"./index-UwB-iCL8.js";import"./error-B_xrvVtR.js";import"./BaseCbacBanner-BTeEBxtL.js";import"./makeExternalStore-B4SarOE2.js";import"./Tooltip-CyCLgWwQ.js";import"./PopoverPopup-Cr6J1DLL.js";import"./debounce-C8ZI9wGu.js";import"./useOsdkClient-BUXnWXUj.js";import"./tick-B8u-WlBN.js";import"./DropdownField-2HC-0Khs.js";import"./isEqual-BER4d_e_.js";import"./withOsdkMetrics-C2y3Ga9u.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
