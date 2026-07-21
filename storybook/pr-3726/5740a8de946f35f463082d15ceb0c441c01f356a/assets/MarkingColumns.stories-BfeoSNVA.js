import{f as p,j as e}from"./iframe-DaH--uhd.js";import{O as i}from"./object-table-BO7_ricY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DvIIoUzm.js";import"./Table-DtX-f1a6.js";import"./index-BMAlonby.js";import"./Dialog-o5XTpuaF.js";import"./cross-BpuWeFt4.js";import"./svgIconContainer-DgPHag9Q.js";import"./useBaseUiId-B7uZjrGK.js";import"./InternalBackdrop-DZjNC2DD.js";import"./composite-DX-GZFZ7.js";import"./index-Db03BdH7.js";import"./index-D4iMbXkN.js";import"./index-HaGwiIi6.js";import"./useEventCallback-BlxveXxH.js";import"./SkeletonBar-Ca70FBml.js";import"./LoadingCell-PtkJxnlb.js";import"./ColumnConfigDialog-D_bhk-PS.js";import"./DraggableList-CHEctx2A.js";import"./search-By5kcg3e.js";import"./Input-3kt0-xJW.js";import"./useControlled-D1CRiWBA.js";import"./isEqual-B2zPFb5D.js";import"./isObject-BSCVoUkP.js";import"./Button-BZrLDah9.js";import"./ActionButton-CzcfrHDA.js";import"./Checkbox-B3mTGWAE.js";import"./useValueChanged-AUG9-tcC.js";import"./CollapsiblePanel-B47kBLBo.js";import"./MultiColumnSortDialog-CshpFTc0.js";import"./MenuTrigger-Di1Xo9P5.js";import"./CompositeItem-D7o3XeFm.js";import"./ToolbarRootContext-NQxvR3jh.js";import"./getDisabledMountTransitionStyles-QzdwD5AJ.js";import"./getPseudoElementBounds-Oz7ulX1z.js";import"./chevron-down-D1uqpDzw.js";import"./index-Bl6bztV4.js";import"./error-EuQ7YeVu.js";import"./BaseCbacBanner-17nPQaS7.js";import"./makeExternalStore-POweBG66.js";import"./Tooltip-CPHNqP_Z.js";import"./PopoverPopup-CN2aCQDk.js";import"./toNumber-BuPrL4yQ.js";import"./useOsdkClient-CBevTDA8.js";import"./tick-BXBrjP1E.js";import"./DropdownField-qXUeEbBG.js";import"./withOsdkMetrics-DuOgLxTw.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
