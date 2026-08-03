import{f as b,j as a,r as i}from"./iframe-HIMvOqvp.js";import{O as u}from"./object-table-D-WNchmf.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CEnOtJNC.js";import"./Table-DedP8waU.js";import"./index-BR1U-F-z.js";import"./Dialog-hMfZrTLx.js";import"./cross-CP4Lwknm.js";import"./svgIconContainer-D1UbEXN0.js";import"./useBaseUiId-CktUDHnZ.js";import"./InternalBackdrop-Dp8-zUCW.js";import"./composite-B18nZLbz.js";import"./index-q5lLjySj.js";import"./index-u6B6c4lm.js";import"./index-EPrc8SCg.js";import"./useEventCallback-DUOVZOFF.js";import"./SkeletonBar-BuEvimm7.js";import"./LoadingCell-CyCzRKtl.js";import"./ColumnConfigDialog-DgDt7beG.js";import"./DraggableList-BgEOUXK-.js";import"./search-BMnX-ou2.js";import"./Input-8GhwsC7r.js";import"./useControlled-BEIkGatI.js";import"./isEqual-DDn24rvx.js";import"./isObject-CWP39A5-.js";import"./Button-B-j85khL.js";import"./ActionButton-tMOref2G.js";import"./Checkbox-B_2ZiK-d.js";import"./useValueChanged-B-SGOTcO.js";import"./CollapsiblePanel-DFw3qCxp.js";import"./MultiColumnSortDialog-BnW2raxD.js";import"./MenuTrigger-Bbr9eKQr.js";import"./CompositeItem-_EU9HVH1.js";import"./ToolbarRootContext-CV8VtjXF.js";import"./getDisabledMountTransitionStyles-CxpC5Tat.js";import"./getPseudoElementBounds-DMIne3Mm.js";import"./chevron-down-BSoyp3dk.js";import"./index-VIT7olFA.js";import"./error-D_5Pa8ED.js";import"./BaseCbacBanner-DOuZWpnY.js";import"./makeExternalStore-BNFQB0ek.js";import"./Tooltip-BzrgJjB9.js";import"./PopoverPopup-CRg247ib.js";import"./toNumber-COT5YTsh.js";import"./useOsdkClient-CxXIQTjd.js";import"./tick-_LERK7Z8.js";import"./DropdownField-CyTwiJSz.js";import"./withOsdkMetrics-BHF9odaV.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
