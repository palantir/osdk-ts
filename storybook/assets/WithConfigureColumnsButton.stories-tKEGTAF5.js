import{f as x,r as o,j as t}from"./iframe-qEFPpghE.js";import{O as f}from"./object-table-BHJ3czxR.js";import{E as I}from"./Employee-BAk2o20h.js";import{C as E}from"./ColumnConfigDialog-CChypS3K.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C4yL4Qmh.js";import"./index-BH9ELRZv.js";import"./Dialog-dWZ9u7DQ.js";import"./cross-CrQI27cl.js";import"./svgIconContainer-CQknLjCX.js";import"./useBaseUiId-v_A1mAU8.js";import"./InternalBackdrop-D5rmKUjx.js";import"./composite-DEeYGE6i.js";import"./index-BYmDYJlP.js";import"./index-DW-XX4vU.js";import"./index-Dz-dXwVN.js";import"./useEventCallback-BYQDS9uj.js";import"./SkeletonBar-yJWTc5ft.js";import"./LoadingCell-B42bnXLv.js";import"./MultiColumnSortDialog-Dj5WqPTW.js";import"./DraggableList-CsnH7LBp.js";import"./search-D09RX6LY.js";import"./Input-BablyCOK.js";import"./useControlled-CzEkdiJb.js";import"./Button--WxUXUTJ.js";import"./small-cross-D0luzVMu.js";import"./ActionButton-Di4a-gre.js";import"./MenuTrigger-CSyK8zi4.js";import"./CompositeItem-HOTCeKr0.js";import"./ToolbarRootContext-mJyuSkMG.js";import"./getDisabledMountTransitionStyles-TORQ_bbl.js";import"./getPseudoElementBounds-D1gaCrRx.js";import"./chevron-down-BYYCeXTI.js";import"./index-BoodJoCF.js";import"./error-AR1tV96Q.js";import"./BaseCbacBanner-TLh3mHe1.js";import"./makeExternalStore-AlhYZ7re.js";import"./Tooltip-0QhHY8T6.js";import"./PopoverPopup-Cb7HfMf8.js";import"./Select-DLArSuaB.js";import"./useOsdkClient-Aa7m3fKW.js";import"./tick-DmViAXqM.js";import"./useValueChanged-hy1rwhTW.js";import"./DropdownField-SZD2xT-o.js";import"./useDebouncedCallback-CLudjFmJ.js";import"./isEqual-hnu1wVCK.js";import"./_baseIsEqual-CsbRecuA.js";import"./stableSerialize-CmHN0ptm.js";import"./Checkbox-CawO4u45.js";import"./withOsdkMetrics-Ch_Qi-aF.js";import"./CollapsiblePanel-D3XrjZdW.js";const In={title:"Components/ObjectTable/Features/Advanced",component:f,tags:["beta"],parameters:{msw:{handlers:[...x.handlers]}}},s={parameters:{docs:{source:{code:`const [isColumnConfigOpen, setIsColumnConfigOpen] = useState(false);
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
