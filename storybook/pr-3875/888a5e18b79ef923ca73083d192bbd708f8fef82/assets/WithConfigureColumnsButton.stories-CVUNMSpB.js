import{f as x,r as o,j as t}from"./iframe-6a_kvn9r.js";import{O as f}from"./object-table-gJ255PhT.js";import{E as I}from"./Employee-BAk2o20h.js";import{C as E}from"./ColumnConfigDialog-DumybdDg.js";import"./preload-helper-UmLrF_r9.js";import"./Table-XFNsRdvZ.js";import"./index-DZsq7FTs.js";import"./Dialog-CJHtM02i.js";import"./cross-ClFn7dec.js";import"./svgIconContainer-BMlsWZH7.js";import"./useBaseUiId-BwFLjng5.js";import"./InternalBackdrop-DESVWcn8.js";import"./composite-BqONz2GB.js";import"./index-De5jnlky.js";import"./index-BA8CMsKZ.js";import"./index-DdLLueEx.js";import"./useEventCallback-CzHH4T4L.js";import"./SkeletonBar-cjMH9Rpu.js";import"./LoadingCell-emwA1P9i.js";import"./MultiColumnSortDialog-BtmZ1yCk.js";import"./DraggableList-DkgUp4lG.js";import"./search-DOcCo1oD.js";import"./Input-BN6wpSvl.js";import"./useControlled-DlWAEbXA.js";import"./Button-BY6mG_TR.js";import"./small-cross-Bn2R2wbf.js";import"./ActionButton-Bi5m9DmB.js";import"./MenuTrigger-sr65K0My.js";import"./CompositeItem-r_UKZCPX.js";import"./ToolbarRootContext-8rOO4UX6.js";import"./getDisabledMountTransitionStyles-YFTqCi3r.js";import"./getPseudoElementBounds-CWsjtQ7H.js";import"./chevron-down-CWTTgj3w.js";import"./index-BGR9g80G.js";import"./error-C1tZ3x6V.js";import"./BaseCbacBanner-Cn-gJzjV.js";import"./makeExternalStore-B7ja9LyT.js";import"./Tooltip-CbdMy9JX.js";import"./PopoverPopup-C2WrfQ0J.js";import"./debounce-BQ6n828Z.js";import"./useOsdkClient-CGw7GANw.js";import"./tick-Ddpdailt.js";import"./useValueChanged-CcWLOV5o.js";import"./DropdownField-iDzYtBYA.js";import"./isEqual-By-mDykE.js";import"./Checkbox-BPX4OFc-.js";import"./withOsdkMetrics-D0t1junC.js";import"./CollapsiblePanel-CdhtTK8U.js";const On={title:"Components/ObjectTable/Features/Advanced",component:f,tags:["beta"],parameters:{msw:{handlers:[...x.handlers]}}},s={parameters:{docs:{source:{code:`const [isColumnConfigOpen, setIsColumnConfigOpen] = useState(false);
const [columnDefinitions, setColumnDefinitions] = useState(initialColumnDefinitions);

const handleApplyColumnConfig = useCallback(
  (columns: Array<{ columnId: string; isVisible: boolean }>) => {
    const newColumnDefinitions = [];
    columns.forEach(({ columnId, isVisible }) => {
      if (isVisible) {
        const colDef = initialColumnDefinitions.find(def => def.locator.id === columnId);
        if (colDef) {
          newColumnDefinitions.push(colDef);
        }
      }
    });
    setColumnDefinitions(newColumnDefinitions);
    setIsColumnConfigOpen(false);
  },
  [],
);

return (
  <>
    <button onClick={() => setIsColumnConfigOpen(true)}>
      Configure Columns
    </button>
    <ObjectTable
      objectType={Employee}
      columnDefinitions={columnDefinitions}
      enableColumnConfig={false}
    />
    <ColumnConfigDialog
      isOpen={isColumnConfigOpen}
      onClose={() => setIsColumnConfigOpen(false)}
      columnOptions={columnOptions}
      currentVisibility={currentVisibility}
      currentColumnOrder={currentColumnOrder}
      onApply={handleApplyColumnConfig}
    />
  </>
);`}}},render:()=>{const l=[{locator:{type:"property",id:"fullName"},columnName:"Full Name"},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job Title"},{locator:{type:"property",id:"department"},columnName:"Department"}],[C,r]=o.useState(!1),[i,d]=o.useState(l),D=o.useMemo(()=>l.map(n=>({id:n.locator.id,name:n.columnName||n.locator.id})),[]),b=o.useMemo(()=>{const n={};return l.forEach(e=>{n[e.locator.id]=i.some(m=>m.locator.id===e.locator.id)}),n},[i]),y=o.useMemo(()=>i.map(n=>n.locator.id),[i]),g=o.useCallback(n=>{const e=[];n.forEach(({columnId:m,isVisible:O})=>{if(O){const u=l.find(h=>h.locator.id===m);u&&e.push(u)}}),d(e),r(!1)},[]);return t.jsxs("div",{style:{height:"600px",display:"flex",flexDirection:"column"},children:[t.jsx("div",{style:{padding:"8px 0",marginBottom:8},children:t.jsx("button",{onClick:()=>r(!0),style:{padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Configure Columns"})}),t.jsx(f,{objectType:I,columnDefinitions:i,enableColumnConfig:!1}),t.jsx(E,{isOpen:C,onClose:()=>r(!1),columnOptions:D,currentVisibility:b,currentColumnOrder:y,onApply:g})]})}};var c,p,a;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const [isColumnConfigOpen, setIsColumnConfigOpen] = useState(false);
const [columnDefinitions, setColumnDefinitions] = useState(initialColumnDefinitions);

const handleApplyColumnConfig = useCallback(
  (columns: Array<{ columnId: string; isVisible: boolean }>) => {
    const newColumnDefinitions = [];
    columns.forEach(({ columnId, isVisible }) => {
      if (isVisible) {
        const colDef = initialColumnDefinitions.find(def => def.locator.id === columnId);
        if (colDef) {
          newColumnDefinitions.push(colDef);
        }
      }
    });
    setColumnDefinitions(newColumnDefinitions);
    setIsColumnConfigOpen(false);
  },
  [],
);

return (
  <>
    <button onClick={() => setIsColumnConfigOpen(true)}>
      Configure Columns
    </button>
    <ObjectTable
      objectType={Employee}
      columnDefinitions={columnDefinitions}
      enableColumnConfig={false}
    />
    <ColumnConfigDialog
      isOpen={isColumnConfigOpen}
      onClose={() => setIsColumnConfigOpen(false)}
      columnOptions={columnOptions}
      currentVisibility={currentVisibility}
      currentColumnOrder={currentColumnOrder}
      onApply={handleApplyColumnConfig}
    />
  </>
);\`
      }
    }
  },
  render: () => {
    const initialColumnDefinitions: Array<ColumnDefinition<Employee, {}, {}>> = [{
      locator: {
        type: "property",
        id: "fullName"
      },
      columnName: "Full Name"
    }, {
      locator: {
        type: "property",
        id: "emailPrimaryWork"
      },
      columnName: "Email"
    }, {
      locator: {
        type: "property",
        id: "jobTitle"
      },
      columnName: "Job Title"
    }, {
      locator: {
        type: "property",
        id: "department"
      },
      columnName: "Department"
    }];
    const [isColumnConfigOpen, setIsColumnConfigOpen] = useState(false);
    const [columnDefinitions, setColumnDefinitions] = useState<Array<ColumnDefinition<Employee, {}, {}>>>(initialColumnDefinitions);
    const columnOptions = useMemo(() => initialColumnDefinitions.map(colDef => ({
      id: colDef.locator.id,
      name: colDef.columnName || colDef.locator.id
    })), []);
    const currentVisibility = useMemo(() => {
      const visibility: Record<string, boolean> = {};
      initialColumnDefinitions.forEach(colDef => {
        visibility[colDef.locator.id] = columnDefinitions.some(def => def.locator.id === colDef.locator.id);
      });
      return visibility;
    }, [columnDefinitions]);
    const currentColumnOrder = useMemo(() => columnDefinitions.map(colDef => colDef.locator.id), [columnDefinitions]);
    const handleApplyColumnConfig = useCallback((columns: Array<{
      columnId: string;
      isVisible: boolean;
    }>) => {
      const newColumnDefinitions: Array<ColumnDefinition<Employee, {}, {}>> = [];
      columns.forEach(({
        columnId,
        isVisible
      }) => {
        if (isVisible) {
          const colDef = initialColumnDefinitions.find(def => def.locator.id === columnId);
          if (colDef) {
            newColumnDefinitions.push(colDef);
          }
        }
      });
      setColumnDefinitions(newColumnDefinitions);
      setIsColumnConfigOpen(false);
    }, []);
    return <div style={{
      height: "600px",
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        padding: "8px 0",
        marginBottom: 8
      }}>
          <button onClick={() => setIsColumnConfigOpen(true)} style={{
          padding: "8px 16px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}>
            Configure Columns
          </button>
        </div>
        <ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} enableColumnConfig={false} />
        <ColumnConfigDialog isOpen={isColumnConfigOpen} onClose={() => setIsColumnConfigOpen(false)} columnOptions={columnOptions} currentVisibility={currentVisibility} currentColumnOrder={currentColumnOrder} onApply={handleApplyColumnConfig} />
      </div>;
  }
}`,...(a=(p=s.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const hn=["WithConfigureColumnsButton"];export{s as WithConfigureColumnsButton,hn as __namedExportsOrder,On as default};
