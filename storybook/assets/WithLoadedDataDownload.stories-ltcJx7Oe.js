import{f as b,j as a,r as i}from"./iframe-BlYZmXs9.js";import{O as u}from"./object-table-C8cUJffS.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C3ON6wtF.js";import"./index-BUL-lt5N.js";import"./Dialog-BVtveqs8.js";import"./cross-C982S9ak.js";import"./svgIconContainer-BVUo_9rP.js";import"./useBaseUiId-Blsog-e5.js";import"./InternalBackdrop-Dt8ssAPu.js";import"./composite-DHiHZOru.js";import"./index-cXUFybkK.js";import"./index-Dmn3z_9A.js";import"./index-k-BejRwY.js";import"./useEventCallback-BDSKfyIt.js";import"./SkeletonBar-CRjpB1HU.js";import"./LoadingCell-5i2rZFZG.js";import"./ColumnConfigDialog-DkSHFGV5.js";import"./DraggableList-Bqh7CLnw.js";import"./search-BR33OvS9.js";import"./Input-DuGHEzfn.js";import"./useControlled-DjbwcFu1.js";import"./Button-BWp1RSGI.js";import"./small-cross-Dzy3HIKS.js";import"./ActionButton-eUEB-s-I.js";import"./Checkbox-DHbC2cFQ.js";import"./minus-BEgfNivH.js";import"./tick-BfkXiNmt.js";import"./useValueChanged-DssESrUT.js";import"./caret-down-BxJxGBs-.js";import"./CollapsiblePanel-C0wOnOJV.js";import"./MultiColumnSortDialog-BEWQJuhW.js";import"./MenuTrigger-mb7iiwp6.js";import"./CompositeItem-CICx_1t9.js";import"./ToolbarRootContext-D4buOrM_.js";import"./getDisabledMountTransitionStyles-BxuZRoLx.js";import"./getPseudoElementBounds-BYtUaBm3.js";import"./chevron-down-C2ZRVQYp.js";import"./index-CKXiJa5E.js";import"./error-CVQRILWw.js";import"./BaseCbacBanner-CnNzVX39.js";import"./makeExternalStore-C3CHSKkC.js";import"./Tooltip-aeNjUd6S.js";import"./PopoverPopup-CzDHpy7F.js";import"./toNumber-CGK3woSP.js";import"./useOsdkClient-DRHaKzCI.js";import"./DropdownField-GGX92r1J.js";import"./withOsdkMetrics-DCT1OPEB.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
