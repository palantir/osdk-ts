import{f as p,j as e}from"./iframe-B8G1jItW.js";import{O as i}from"./object-table-k-UfENXm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B1IURV7o.js";import"./Table-BwElsE2a.js";import"./index-DB13g_6W.js";import"./Dialog-CsnA13_u.js";import"./cross-CZEt4CQ9.js";import"./svgIconContainer-CB3cR2O2.js";import"./useBaseUiId-S4IVgEx3.js";import"./InternalBackdrop-C20G---M.js";import"./composite-DlSXVEG5.js";import"./index-ad9AYhfW.js";import"./index-COXmaWmi.js";import"./index-HEN-Pfmt.js";import"./useEventCallback-sCqLMStA.js";import"./SkeletonBar-DP27X8f1.js";import"./LoadingCell-8me7lGG_.js";import"./ColumnConfigDialog-BK8EX9Ja.js";import"./DraggableList-CKwGoZCZ.js";import"./search-GKgaZqTV.js";import"./Input-D7bf_syM.js";import"./useControlled-Bxr4Vh5_.js";import"./Button-Bq6MDfzu.js";import"./small-cross-DqO0yT6m.js";import"./ActionButton-avzkQ9at.js";import"./Checkbox-BTIiX3dV.js";import"./useValueChanged-DNSQAzpI.js";import"./CollapsiblePanel-Dh2wBANq.js";import"./MultiColumnSortDialog-Dw3NJlo9.js";import"./MenuTrigger-jLSwLtFH.js";import"./CompositeItem-DppqfLhH.js";import"./ToolbarRootContext-DNpt4PCI.js";import"./getDisabledMountTransitionStyles-BSxcypJ-.js";import"./getPseudoElementBounds-F1Xvk9J_.js";import"./chevron-down-CSSbm5fQ.js";import"./index-w8Xrn1oV.js";import"./error-BcGqswAb.js";import"./BaseCbacBanner-B1FxIqOJ.js";import"./makeExternalStore-ByyfvAII.js";import"./Tooltip-BSwHpWu9.js";import"./PopoverPopup-B695G3fz.js";import"./debounce-OG7_ZmsP.js";import"./useOsdkClient-DBY3KNGZ.js";import"./tick-Bs7VXaZc.js";import"./DropdownField-lFeyoiMB.js";import"./isEqual-BL8MlQOH.js";import"./withOsdkMetrics-Bg8xFEho.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
