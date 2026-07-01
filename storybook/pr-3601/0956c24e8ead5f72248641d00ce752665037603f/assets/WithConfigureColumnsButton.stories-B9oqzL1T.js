import{f as x,r as o,j as t}from"./iframe-Dp1CRu6c.js";import{O as f}from"./object-table-BQbRUBVy.js";import{E as I}from"./Employee-BAk2o20h.js";import{C as E}from"./ColumnConfigDialog-uO8-npG2.js";import"./preload-helper-CWkOsMkG.js";import"./Table-kXiAzrVw.js";import"./index-DDVLxBOy.js";import"./Dialog-Ct47gwOa.js";import"./cross-CG-DeC47.js";import"./svgIconContainer-BC_0vX_e.js";import"./useBaseUiId-CWccYlZs.js";import"./InternalBackdrop-BKqn0-3A.js";import"./composite-BycuXxpQ.js";import"./index-vVu9ASLZ.js";import"./index-DQ0ad4Rd.js";import"./index-uDlakMiO.js";import"./useRole-D754jaaZ.js";import"./useEventCallback-mhA_0l5h.js";import"./SkeletonBar-CWLc9YwP.js";import"./LoadingCell-Cw9DXaSk.js";import"./MultiColumnSortDialog-DQXMez7K.js";import"./DraggableList-yXZoFYuZ.js";import"./Input-DTQu9GLN.js";import"./useControlled-CKURD5_M.js";import"./Button-Izn2a-Gf.js";import"./small-cross-Capthggd.js";import"./ActionButton-D4OZ4fs0.js";import"./MenuTrigger-C2n9VC45.js";import"./useCompositeListItem-CF6DL62K.js";import"./ToolbarRootContext-BrIGoR_-.js";import"./getDisabledMountTransitionStyles-BGWbjSuz.js";import"./safePolygon-OCeT35xw.js";import"./getPseudoElementBounds-CfE7TmeC.js";import"./CompositeItem-NxCGTSTJ.js";import"./caret-down-DRUruF7z.js";import"./chevron-down-B9cqEQ-9.js";import"./index-CP_-7Y5q.js";import"./error-CWPx4DGJ.js";import"./BaseCbacBanner-C6buC9fu.js";import"./makeExternalStore-CJ4XjwYU.js";import"./Tooltip-BCkIs-vs.js";import"./PopoverPopup-DyQd4niR.js";import"./toNumber-OIxVTfR-.js";import"./useOsdkClient-CUe5WpHW.js";import"./Combobox--GdejMfV.js";import"./useValueChanged-b9NOXpdt.js";import"./DropdownField-BarpcyK5.js";import"./useOsdkObjects-DK1g3PEn.js";import"./Checkbox-Cod3lSpW.js";import"./minus-DAstrPpS.js";import"./FieldItemContext-ZxrciBuj.js";import"./withOsdkMetrics-XOhFJDlT.js";import"./CollapsiblePanel-B9J4Se8X.js";const jn={title:"Components/ObjectTable/Recipes",component:f,tags:["beta"],parameters:{msw:{handlers:[...x.handlers]}}},s={parameters:{docs:{source:{code:`const [isColumnConfigOpen, setIsColumnConfigOpen] = useState(false);
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
}`,...(a=(p=s.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const An=["WithConfigureColumnsButton"];export{s as WithConfigureColumnsButton,An as __namedExportsOrder,jn as default};
