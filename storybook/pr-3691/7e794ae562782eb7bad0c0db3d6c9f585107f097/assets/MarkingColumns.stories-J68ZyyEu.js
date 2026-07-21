import{f as n,j as t}from"./iframe-BHqX_OjB.js";import{O as p}from"./object-table-BeGG1yKZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-iJZi-ya6.js";import"./Table-CwENpcCk.js";import"./index-BA2wo7jA.js";import"./Dialog-DPWWin87.js";import"./cross-DEJmigHM.js";import"./svgIconContainer-B7mFK-8J.js";import"./useBaseUiId-DGxwLPNF.js";import"./InternalBackdrop-Ce2HZFva.js";import"./composite-Dhxcl_Lf.js";import"./index-BhHOMf9A.js";import"./index-Bd0Tj_WK.js";import"./index-BZ_hJmKL.js";import"./useEventCallback-nQEPuB4K.js";import"./SkeletonBar-rjm4iN-a.js";import"./LoadingCell-CpJFSFAc.js";import"./ColumnConfigDialog-9uJvyGk7.js";import"./DraggableList-CqicDbWr.js";import"./search-BuNoiZLv.js";import"./Input-BHTNGOiI.js";import"./useControlled-CXhfBr_j.js";import"./Button-DKSmXupo.js";import"./small-cross-DMT1m2P-.js";import"./ActionButton-Cqo-APX_.js";import"./Checkbox-BM7P_0bn.js";import"./useValueChanged-BPWZsOWI.js";import"./CollapsiblePanel-CTlDLNE5.js";import"./MultiColumnSortDialog-Lsr9H_jg.js";import"./MenuTrigger-DyvzUeWR.js";import"./CompositeItem-foV6VRcu.js";import"./ToolbarRootContext-B5O_h2j5.js";import"./getDisabledMountTransitionStyles-ekMd1RGG.js";import"./getPseudoElementBounds-CO2RR8Oa.js";import"./chevron-down-pZMjawWL.js";import"./index-Dlpbs8yg.js";import"./error-Beb7Ue--.js";import"./BaseCbacBanner-BkrwLBMH.js";import"./makeExternalStore-DzepmK8L.js";import"./Tooltip-D-B7-JDL.js";import"./PopoverPopup-oDCsWMcp.js";import"./toNumber-C-r4ZWJv.js";import"./useOsdkClient-B9PErzj6.js";import"./tick-DP0tKAlL.js";import"./DropdownField-_pgdngP6.js";import"./withOsdkMetrics-mlBDJhuk.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "property",
        id: "classificationMarking"
      }
    }, {
      locator: {
        type: "property",
        id: "clearanceMarking"
      }
    }]
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
