import{f as b,j as a,r as i}from"./iframe-Dhwk5ITi.js";import{O as u}from"./object-table-BJqi85zj.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DXH7Ji2G.js";import"./Table-DXVv-Xkz.js";import"./index-CqrX2hSZ.js";import"./Dialog-D7ArHBQX.js";import"./cross-BCTjTq5q.js";import"./svgIconContainer-DRo39Sdm.js";import"./useBaseUiId-CN9ap6QA.js";import"./InternalBackdrop-B16TXcDZ.js";import"./composite-Q4thQ8nQ.js";import"./index-Dqvhhr9j.js";import"./index-CQyEu1u7.js";import"./index-D-uqDeUc.js";import"./useEventCallback-CtBf5HaK.js";import"./SkeletonBar-BNjj6R1f.js";import"./LoadingCell-B1AXdpYe.js";import"./ColumnConfigDialog-Biqiolfe.js";import"./DraggableList-B-RBDkIm.js";import"./search-Be1zlQKz.js";import"./Input-BHNHysVZ.js";import"./useControlled-BzFCle-k.js";import"./Button-DQ5CRvak.js";import"./small-cross-BCB9roFn.js";import"./ActionButton-BKUAvIZF.js";import"./Checkbox-CGwy-5-U.js";import"./useValueChanged-BE0789MN.js";import"./CollapsiblePanel-DYfViWWc.js";import"./MultiColumnSortDialog-COFC3sIH.js";import"./MenuTrigger-BUD57go2.js";import"./CompositeItem-fUd5V9Oq.js";import"./ToolbarRootContext-tq1uYlSQ.js";import"./getDisabledMountTransitionStyles-DrXurUP0.js";import"./getPseudoElementBounds-BrIYTXPl.js";import"./chevron-down-Bi9ECMIR.js";import"./index-CTvXLxpd.js";import"./error--SrXy3UU.js";import"./BaseCbacBanner-DHZ3DNXo.js";import"./makeExternalStore-3kaAWetO.js";import"./Tooltip-B-otFcUC.js";import"./isObject-COnjlVPb.js";import"./debounce-D0JC05Tw.js";import"./useOsdkClient-Cu4fdH1j.js";import"./tick-cIKEoG11.js";import"./DropdownField-CNKhRnuu.js";import"./isEqual-BJTmeTes.js";import"./_baseIsEqual-_JiTCUc9.js";import"./withOsdkMetrics-Cikn35t1.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
