import{f as x,r as o,j as t}from"./iframe-b0a69-Kg.js";import{O as f}from"./object-table-7DklcUJK.js";import{E as I}from"./Employee-BAk2o20h.js";import{C as E}from"./ColumnConfigDialog-DmIJ5lP4.js";import"./preload-helper-DummAPw7.js";import"./Table-DlhK0xIQ.js";import"./index-D4Xkm7FC.js";import"./Dialog-DHNY33je.js";import"./cross-CVVAhtIH.js";import"./svgIconContainer-DV9o6T8Y.js";import"./useBaseUiId-BAHSPach.js";import"./InternalBackdrop-CgM38rCe.js";import"./composite-C-1iZs8x.js";import"./index-Dq9LK0gI.js";import"./index-BCGssQuO.js";import"./index-BhJVrSQC.js";import"./useEventCallback-B7VGyjZz.js";import"./SkeletonBar-CcsNAgOv.js";import"./LoadingCell-DkcvOk9O.js";import"./MultiColumnSortDialog-ZgDH9_dy.js";import"./DraggableList-Xenxhlgo.js";import"./search-D_cjyHC2.js";import"./Input-BBJnalD-.js";import"./useControlled-DazDyppM.js";import"./Button-C9SSgyc6.js";import"./small-cross-B9TzsAKt.js";import"./ActionButton-CvBAfjnY.js";import"./MenuTrigger-CNg_k7K6.js";import"./CompositeItem-DAv1Ed90.js";import"./ToolbarRootContext-_XDLJscO.js";import"./getDisabledMountTransitionStyles-C4JFtLhi.js";import"./getPseudoElementBounds-Csl-Q8UW.js";import"./chevron-down-uIlArscK.js";import"./index-mlw8NCjc.js";import"./error-pyjmpYRO.js";import"./BaseCbacBanner-ByXvVPLR.js";import"./makeExternalStore-3K6ZodGD.js";import"./Tooltip-CR5Z6Ui_.js";import"./PopoverPopup-ZiNAjzDI.js";import"./debounce-Di9wyxlF.js";import"./useOsdkClient-Pv9IiTRg.js";import"./tick-Bsn4Wp7F.js";import"./useValueChanged-ya-iB3SU.js";import"./DropdownField-l9nhrIio.js";import"./isEqual-BQrSHnfW.js";import"./Checkbox-BV2ID8N4.js";import"./withOsdkMetrics-Dy8efZZr.js";import"./CollapsiblePanel-Dt5950Ep.js";const On={title:"Components/ObjectTable/Features/Advanced",component:f,tags:["beta"],parameters:{msw:{handlers:[...x.handlers]}}},s={parameters:{docs:{source:{code:`const [isColumnConfigOpen, setIsColumnConfigOpen] = useState(false);
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
