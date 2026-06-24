import{f as D,j as r,r as c}from"./iframe-spd48L9e.js";import{O as b}from"./object-table-4zAc_DQg.js";import{E as C}from"./Employee-BAk2o20h.js";import"./preload-helper-BFjVmB4B.js";import"./Table-Dnht7T78.js";import"./index-D76FqBFx.js";import"./Dialog-BMaxN-dw.js";import"./cross-B_42C3x3.js";import"./svgIconContainer-dGho0Jkc.js";import"./useBaseUiId-DM99VqwW.js";import"./InternalBackdrop-CsXrvUm-.js";import"./composite-BAgBz66m.js";import"./index-BxdQnIFl.js";import"./index-WIu1AXsN.js";import"./index-DqCRma0O.js";import"./SkeletonBar-CxrzVd58.js";import"./LoadingCell-Cereq5oh.js";import"./ColumnConfigDialog-vuQgU1qY.js";import"./DraggableList-DcwGa7Ts.js";import"./Input-BV2tRR2B.js";import"./useControlled-CJw-Rypa.js";import"./Button-Dgp6H7LY.js";import"./small-cross-Camvb-sX.js";import"./ActionButton-DnXS_vpH.js";import"./Checkbox-DBTqgrJK.js";import"./minus-CkJvUZR4.js";import"./useValueChanged-D1tMRj-a.js";import"./caret-down-CJ6vkUD-.js";import"./CollapsiblePanel-CO_mxuFY.js";import"./MultiColumnSortDialog--UDlnDd7.js";import"./MenuTrigger-C9sVdEwt.js";import"./CompositeItem-C_U8l9iM.js";import"./ToolbarRootContext-C4qPqoAG.js";import"./getDisabledMountTransitionStyles-FOakMbK5.js";import"./getPseudoElementBounds-9oBVHTKV.js";import"./chevron-down-DJMO9Hg2.js";import"./index-CzWa6Irc.js";import"./error-OKMHhgjK.js";import"./Tooltip-CfRFcyjb.js";import"./PopoverPopup-BaHnJEaN.js";import"./toNumber-CmsPrq3j.js";import"./useOsdkClient-D3dsNUQk.js";import"./useEventCallback-DSvmAYS4.js";import"./makeExternalStore-DdoyYIi-.js";import"./withOsdkMetrics-DTrk7QK1.js";import"./useRegisterUserAgent-BDL4H1ns.js";const i=500,y=5,S=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:o=>r.jsx("strong",{children:o.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],yo={title:"Components/ObjectTable/Recipes",component:b,tags:["beta"],parameters:{msw:{handlers:[...D.handlers]}}},p={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from visible ObjectTable data. Passing a `rowLimit` explicitly fetches more rows before creating the CSV; it is a pagination threshold, so the snapshot can contain more rows when a full page crosses the threshold. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
const MAX_DOWNLOAD_ROWS = ${i};
const PAGE_SIZE = ${y};

const handleDownload = async () => {
  const snapshot = await tableRef.current?.getSnapshot();
  if (!snapshot) {
    return;
  }

  const csv = toCsv(snapshot.columns, snapshot.rows);
  downloadCsv(csv, "employees-loaded-rows.csv");
};

const handleDownloadUpToLimit = async () => {
  const snapshot = await tableRef.current?.getSnapshot({
    rowLimit: ${i},
  });
  if (!snapshot) {
    return;
  }

  const csv = toCsv(
    snapshot.columns,
    snapshot.rows.slice(0, ${i}),
  );
  downloadCsv(csv, "employees-loaded-rows-capped.csv");
};

return (
  <>
    <button onClick={handleDownload}>Download loaded rows as CSV</button>
    <button onClick={handleDownloadUpToLimit}>
      Download up to ${i} rows as CSV
    </button>
    <ObjectTable
      objectType={Employee}
      columnDefinitions={employeeColumns}
      pageSize={PAGE_SIZE}
      tableRef={tableRef}
    />
  </>
);`}}},render:()=>r.jsx(O,{})};function O(){const o=c.useRef(null),[t,e]=c.useState(!1),l=c.useCallback(async()=>{var a;e(!0);try{const s=await((a=o.current)==null?void 0:a.getSnapshot());if(!s)return;await u(m(s.columns,s.rows),"employees-loaded-rows.csv")}finally{e(!1)}},[]),n=c.useCallback(async()=>{var a;e(!0);try{const s=await((a=o.current)==null?void 0:a.getSnapshot({rowLimit:i}));if(!s)return;await u(m(s.columns,s.rows),"employees-loaded-rows-capped.csv")}finally{e(!1)}},[]);return r.jsxs("div",{className:"object-table-container",style:{height:"600px",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{padding:"8px 0",marginBottom:8},children:[r.jsx("button",{disabled:t,onClick:l,type:"button",children:"Download loaded rows as CSV"})," ",r.jsx("button",{disabled:t,onClick:n,type:"button",children:t?"Downloading…":`Download up to ${i} rows as CSV`})]}),r.jsx(b,{objectType:C,columnDefinitions:S,pageSize:y,tableRef:o})]})}function m(o,t){return[o.map(e=>d(e.name)).join(","),...t.map(e=>o.map(l=>d(g(e.getValue(l.id)))).join(","))].join(`
`)}function g(o){return o==null||o.status==="error"&&o.value==null?"":R(o.value)}function R(o){if(o==null)return"";if(typeof o=="string")return o;if(typeof o=="number"||typeof o=="boolean")return String(o);try{return JSON.stringify(o)??""}catch{return String(o)}}function d(o){return/[",\n\r]/.test(o)?`"${o.replaceAll('"','""')}"`:o}async function u(o,t){const e=new Blob([o],{type:"text/csv;charset=utf-8"}),l=URL.createObjectURL(e),n=document.createElement("a");n.href=l,n.download=t,document.body.append(n),n.click(),n.remove(),await new Promise(a=>setTimeout(a,0)),URL.revokeObjectURL(l)}var h,w,f;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Uses \`tableRef.current.getSnapshot()\` to build and download a CSV from visible ObjectTable data. Passing a \`rowLimit\` explicitly fetches more rows before creating the CSV; it is a pagination threshold, so the snapshot can contain more rows when a full page crosses the threshold. The Full name column uses \`renderCell\`, but the CSV reads the column's accessor value rather than the rendered React element."
      },
      source: {
        code: \`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
const MAX_DOWNLOAD_ROWS = \${MAX_DOWNLOAD_ROWS};
const PAGE_SIZE = \${PAGE_SIZE};

const handleDownload = async () => {
  const snapshot = await tableRef.current?.getSnapshot();
  if (!snapshot) {
    return;
  }

  const csv = toCsv(snapshot.columns, snapshot.rows);
  downloadCsv(csv, "employees-loaded-rows.csv");
};

const handleDownloadUpToLimit = async () => {
  const snapshot = await tableRef.current?.getSnapshot({
    rowLimit: \${MAX_DOWNLOAD_ROWS},
  });
  if (!snapshot) {
    return;
  }

  const csv = toCsv(
    snapshot.columns,
    snapshot.rows.slice(0, \${MAX_DOWNLOAD_ROWS}),
  );
  downloadCsv(csv, "employees-loaded-rows-capped.csv");
};

return (
  <>
    <button onClick={handleDownload}>Download loaded rows as CSV</button>
    <button onClick={handleDownloadUpToLimit}>
      Download up to \${MAX_DOWNLOAD_ROWS} rows as CSV
    </button>
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
}`,...(f=(w=p.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};const Do=["WithLoadedDataDownload"];export{p as WithLoadedDataDownload,Do as __namedExportsOrder,yo as default};
