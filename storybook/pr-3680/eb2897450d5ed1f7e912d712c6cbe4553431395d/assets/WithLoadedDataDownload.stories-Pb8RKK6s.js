import{f as b,j as a,r as i}from"./iframe-CaGrV6Xd.js";import{O as u}from"./object-table-DhW4dd0r.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DqCnNMeF.js";import"./Table-hE84jpGk.js";import"./index-B-aXTXlp.js";import"./Dialog-C86q6AEF.js";import"./cross-DfvWr9nk.js";import"./svgIconContainer-BZhxiDrs.js";import"./useBaseUiId--GLX5y2o.js";import"./InternalBackdrop-BWxWz5uP.js";import"./composite-CYL0hfWS.js";import"./index-CrTn2rRx.js";import"./index-VCFFI3LD.js";import"./index-DbwFfXR1.js";import"./useEventCallback-Bl-fLD7c.js";import"./SkeletonBar-BcayRxPn.js";import"./LoadingCell-CseoMGkM.js";import"./ColumnConfigDialog-IY5BGA-_.js";import"./DraggableList-DTV7h4KE.js";import"./search-uAufuLh8.js";import"./Input-Gqvvia-z.js";import"./useControlled-DAOr6g1Y.js";import"./Button-BDtRlS-p.js";import"./small-cross-DKB2NuZd.js";import"./ActionButton-DsWU_Iia.js";import"./Checkbox-pFVI4RsT.js";import"./useValueChanged-DadbX9de.js";import"./CollapsiblePanel-DwQOkIVS.js";import"./MultiColumnSortDialog-Ccovknw4.js";import"./MenuTrigger-BKp-28zj.js";import"./CompositeItem-Dw6tm4Ht.js";import"./ToolbarRootContext-BOGK67MF.js";import"./getDisabledMountTransitionStyles-B7aTItff.js";import"./getPseudoElementBounds-DZF2CoYG.js";import"./chevron-down-BXQZftYu.js";import"./index-C6vZ_CqL.js";import"./error-CJalUTnk.js";import"./BaseCbacBanner-DzMC0W1p.js";import"./makeExternalStore-D3Dv41e5.js";import"./Tooltip-BBFzLAbn.js";import"./PopoverPopup-BUOzU6FV.js";import"./toNumber-C6aWC98D.js";import"./useOsdkClient-DL92QisK.js";import"./tick-DcIbKH2h.js";import"./DropdownField-B_z4Hfg9.js";import"./withOsdkMetrics--_Hp5D_u.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
