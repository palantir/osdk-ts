import{f as x,r as o,j as t}from"./iframe-BeCKStTi.js";import{O as f}from"./object-table-BuDALHzo.js";import{E as I}from"./Employee-BBLL99Vm.js";import{C as E}from"./ColumnConfigDialog-DdaKJmFv.js";import"./preload-helper-BICrzKRt.js";import"./Table-C5VSqhJw.js";import"./index-BfYzXW_3.js";import"./Dialog-sahsqXct.js";import"./cross-DDXI9CZ5.js";import"./svgIconContainer-D-9_AOAs.js";import"./useBaseUiId-COsIpFVh.js";import"./InternalBackdrop--cXN5sjO.js";import"./composite-U2ojCD3f.js";import"./index-BkJ0Lguu.js";import"./index-BPIvZm15.js";import"./index-ya4S42ZF.js";import"./useEventCallback-g6xh18Ck.js";import"./SkeletonBar-Cbjlo5SH.js";import"./LoadingCell-B04qx1eN.js";import"./MultiColumnSortDialog-JV7B42df.js";import"./DraggableList-CTKpXlM5.js";import"./search-CZf2_gwq.js";import"./Input-fr7UgVSn.js";import"./useControlled-5Cxw9uoZ.js";import"./Button-to0u69wN.js";import"./small-cross-BWK0DWdF.js";import"./ActionButton-BABms-rZ.js";import"./MenuTrigger-Boxj4qRh.js";import"./CompositeItem-DkAKuEhG.js";import"./ToolbarRootContext-HD-Y_-jz.js";import"./getDisabledMountTransitionStyles-CyUadLiF.js";import"./getPseudoElementBounds-DW-1RV5o.js";import"./chevron-down-BtABU6Ff.js";import"./index-DWv9wz-O.js";import"./error-DvUULirA.js";import"./BaseCbacBanner-DAo4gLE_.js";import"./makeExternalStore-WWCfiCZx.js";import"./Tooltip-CzbeK7mV.js";import"./PopoverPopup-eHRJK0-R.js";import"./toNumber-DLFKNsjO.js";import"./useOsdkClient-BYjQakhT.js";import"./tick-DR0G5XTI.js";import"./useValueChanged-BYmOXC78.js";import"./DropdownField-DPTs74yS.js";import"./Checkbox-B6cs6clj.js";import"./withOsdkMetrics-DoKVZacI.js";import"./CollapsiblePanel-DkIfNruL.js";const gn={component:f,parameters:{msw:{handlers:[...x.handlers]}},tags:["beta"],title:"Components/ObjectTable/Recipes"},s={parameters:{docs:{source:{code:`const [isColumnConfigOpen, setIsColumnConfigOpen] = useState(false);
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
);`}}},render:()=>{const l=[{columnName:"Full Name",locator:{id:"fullName",type:"property"}},{columnName:"Email",locator:{id:"emailPrimaryWork",type:"property"}},{columnName:"Job Title",locator:{id:"jobTitle",type:"property"}},{columnName:"Department",locator:{id:"department",type:"property"}}],[C,r]=o.useState(!1),[i,d]=o.useState(l),D=o.useMemo(()=>l.map(n=>({id:n.locator.id,name:n.columnName||n.locator.id})),[]),b=o.useMemo(()=>{const n={};return l.forEach(e=>{n[e.locator.id]=i.some(m=>m.locator.id===e.locator.id)}),n},[i]),y=o.useMemo(()=>i.map(n=>n.locator.id),[i]),g=o.useCallback(n=>{const e=[];n.forEach(({columnId:m,isVisible:O})=>{if(O){const u=l.find(h=>h.locator.id===m);u&&e.push(u)}}),d(e),r(!1)},[]);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"600px"},children:[t.jsx("div",{style:{marginBottom:8,padding:"8px 0"},children:t.jsx("button",{onClick:()=>r(!0),style:{backgroundColor:"#3b82f6",border:"none",borderRadius:"4px",color:"white",cursor:"pointer",padding:"8px 16px"},children:"Configure Columns"})}),t.jsx(f,{objectType:I,columnDefinitions:i,enableColumnConfig:!1}),t.jsx(E,{isOpen:C,onClose:()=>r(!1),columnOptions:D,currentVisibility:b,currentColumnOrder:y,onApply:g})]})}};var c,p,a;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
      columnName: "Full Name",
      locator: {
        id: "fullName",
        type: "property"
      }
    }, {
      columnName: "Email",
      locator: {
        id: "emailPrimaryWork",
        type: "property"
      }
    }, {
      columnName: "Job Title",
      locator: {
        id: "jobTitle",
        type: "property"
      }
    }, {
      columnName: "Department",
      locator: {
        id: "department",
        type: "property"
      }
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
      display: "flex",
      flexDirection: "column",
      height: "600px"
    }}>
        <div style={{
        marginBottom: 8,
        padding: "8px 0"
      }}>
          <button onClick={() => setIsColumnConfigOpen(true)} style={{
          backgroundColor: "#3b82f6",
          border: "none",
          borderRadius: "4px",
          color: "white",
          cursor: "pointer",
          padding: "8px 16px"
        }}>
            Configure Columns
          </button>
        </div>
        <ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} enableColumnConfig={false} />
        <ColumnConfigDialog isOpen={isColumnConfigOpen} onClose={() => setIsColumnConfigOpen(false)} columnOptions={columnOptions} currentVisibility={currentVisibility} currentColumnOrder={currentColumnOrder} onApply={handleApplyColumnConfig} />
      </div>;
  }
}`,...(a=(p=s.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const On=["WithConfigureColumnsButton"];export{s as WithConfigureColumnsButton,On as __namedExportsOrder,gn as default};
