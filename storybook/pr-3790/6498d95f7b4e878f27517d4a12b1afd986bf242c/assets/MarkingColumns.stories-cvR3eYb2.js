import{f as p,j as e}from"./iframe-CDGAWL5z.js";import{O as i}from"./object-table-DtXQYtP2.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CI5YRKwA.js";import"./Table-DLf6dOM5.js";import"./index-3MCsyJen.js";import"./Dialog-Gmy4msys.js";import"./cross-BeVSOrEe.js";import"./svgIconContainer-Dcej3m5n.js";import"./useBaseUiId-DY77c4-A.js";import"./InternalBackdrop-BVMsH6hp.js";import"./composite-BFqrbf78.js";import"./index-BUnuXFxA.js";import"./index-CZEvu-cD.js";import"./index-DM6_L-S2.js";import"./useEventCallback-CurJQDBH.js";import"./SkeletonBar-B1robTcF.js";import"./LoadingCell-BnzujRh0.js";import"./ColumnConfigDialog-BzzNFXDq.js";import"./DraggableList-tWeCPBYW.js";import"./search-BrgQI2y6.js";import"./Input-B1WQ9LTD.js";import"./useControlled-xutsfVXO.js";import"./isEqual-Bja32Sem.js";import"./isObject-JyW4d2OA.js";import"./Button-XNbmfuiS.js";import"./ActionButton-C2x0RC9m.js";import"./Checkbox-XoF4FZ1X.js";import"./useValueChanged-CXVUyp3K.js";import"./CollapsiblePanel-D5hccQ-X.js";import"./MultiColumnSortDialog-DUYJZ_uN.js";import"./MenuTrigger-DpLR4WSl.js";import"./CompositeItem-Cl4JUDwX.js";import"./ToolbarRootContext-CTDwZ0pE.js";import"./getDisabledMountTransitionStyles-xoor5amX.js";import"./getPseudoElementBounds-WES_yW35.js";import"./chevron-down-dvsoYA_H.js";import"./index-CLEKU3H0.js";import"./error-q7YHjSp-.js";import"./BaseCbacBanner-Bqi4-Jcc.js";import"./makeExternalStore-ql6Iw7cR.js";import"./Tooltip-DfyX7Dwe.js";import"./PopoverPopup-HHAC8mLC.js";import"./toNumber-B7X19R9_.js";import"./useOsdkClient-Dkt3V3jM.js";import"./tick-Bf0agguz.js";import"./DropdownField-C3mpb7DV.js";import"./withOsdkMetrics-BT43AOFX.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
