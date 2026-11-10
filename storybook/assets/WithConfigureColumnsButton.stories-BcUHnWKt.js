import{f as x,r as o,j as t}from"./iframe-DlEUhHi7.js";import{O as f}from"./object-table-DzZUmoft.js";import{E as I}from"./Employee-BAk2o20h.js";import{C as E}from"./ColumnConfigDialog-BWyNlDY6.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CBMbmU_2.js";import"./index-BdObmdSk.js";import"./Dialog-BRxuTM7c.js";import"./cross-qXDV-79n.js";import"./svgIconContainer-Bju_1rFh.js";import"./useBaseUiId-tb0rTi4h.js";import"./InternalBackdrop-Dj4rbrk1.js";import"./composite-C8IR1RxG.js";import"./index-BZc9O5Mh.js";import"./index-BetcjBuf.js";import"./index-LGLGISh5.js";import"./useEventCallback-qQtofjUs.js";import"./SkeletonBar-DVU3TCkY.js";import"./LoadingCell-D9sJxZss.js";import"./MultiColumnSortDialog-VYovGg0N.js";import"./DraggableList-Dofm2fFK.js";import"./search-DpAuH-Nq.js";import"./Input-LD__uDdD.js";import"./useControlled-DUY1KYlM.js";import"./Button-B-c1jfrq.js";import"./small-cross-CReZphMa.js";import"./ActionButton-DcjyntQn.js";import"./MenuTrigger-DUnIRnsx.js";import"./CompositeItem-Ds-80rJN.js";import"./ToolbarRootContext-B2EyZNnQ.js";import"./getDisabledMountTransitionStyles-COXtAQgb.js";import"./getPseudoElementBounds-Ca9OCr_g.js";import"./chevron-down-DMneEgPP.js";import"./index-BpuBCpUI.js";import"./error-CpjEBkuC.js";import"./BaseCbacBanner-Cdn9GJ3S.js";import"./makeExternalStore-CQqAo0Kp.js";import"./Tooltip-B7ze2o3f.js";import"./PopoverPopup-CmFEZPXr.js";import"./Select-CRKcgbl8.js";import"./useOsdkClient-RXiRMbJA.js";import"./tick-554cqJa-.js";import"./useValueChanged-D-FJ2lNx.js";import"./DropdownField-Et1bzqkY.js";import"./useDebouncedCallback-1RUstQeW.js";import"./isEqual-CK8CnT9X.js";import"./_baseIsEqual-B3kSfXIp.js";import"./stableSerialize-5WUigpEg.js";import"./Checkbox-D0qtxLN5.js";import"./withOsdkMetrics-CgnK2w0k.js";import"./CollapsiblePanel-BGvjwfhf.js";const In={title:"Components/ObjectTable/Features/Advanced",component:f,tags:["beta"],parameters:{msw:{handlers:[...x.handlers]}}},s={parameters:{docs:{source:{code:`const [isColumnConfigOpen, setIsColumnConfigOpen] = useState(false);
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
}`,...(a=(p=s.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const En=["WithConfigureColumnsButton"];export{s as WithConfigureColumnsButton,En as __namedExportsOrder,In as default};
