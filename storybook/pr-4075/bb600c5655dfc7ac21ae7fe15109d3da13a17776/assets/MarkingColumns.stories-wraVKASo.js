import{f as p,j as e}from"./iframe-C23O6NDH.js";import{O as i}from"./object-table-DEdNEfPN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C6QLezK5.js";import"./Table-BvvhMcgo.js";import"./index-X4EzQgBc.js";import"./Dialog-D5PenwcW.js";import"./cross-PRFvDACG.js";import"./svgIconContainer-CspjXoBM.js";import"./useBaseUiId-Dfg7k-g6.js";import"./InternalBackdrop-DdCETBpF.js";import"./composite-BUM50nEL.js";import"./index-CHGHLDNb.js";import"./index-CBgO55BO.js";import"./index-73jMkPGq.js";import"./useEventCallback-BABfShjI.js";import"./SkeletonBar-6dfzwPVF.js";import"./LoadingCell-BesO1jfE.js";import"./ColumnConfigDialog-BKagR6Mm.js";import"./DraggableList-BDrkDZc5.js";import"./search-Bu-mkKdB.js";import"./Input-Cu2UirtN.js";import"./useControlled-nFjFO6Es.js";import"./Button-jRCHNGhX.js";import"./small-cross-DA8JVgsF.js";import"./ActionButton-IxViueDP.js";import"./Checkbox-Dirazv5i.js";import"./useValueChanged-BcKOfJbz.js";import"./CollapsiblePanel-q28OJpfM.js";import"./MultiColumnSortDialog-CQWItabH.js";import"./MenuTrigger-N6PZJ6lD.js";import"./CompositeItem-MVk24y7z.js";import"./ToolbarRootContext-CCDSBvgO.js";import"./getDisabledMountTransitionStyles-B1tcXlHO.js";import"./getPseudoElementBounds-Buqsg_Bi.js";import"./chevron-down-BjdzvOWL.js";import"./index-BGnkTDfz.js";import"./error-OxS9nPVJ.js";import"./BaseCbacBanner-CtPyhDWU.js";import"./makeExternalStore-B3L7DbLk.js";import"./Tooltip-BrDwoO8-.js";import"./PopoverPopup-BppHB-6W.js";import"./debounce-CCGBaTA1.js";import"./useOsdkClient-BejxCbr-.js";import"./tick-BXFU__eB.js";import"./DropdownField-BxoAoPOe.js";import"./isEqual-B4H-XeQD.js";import"./withOsdkMetrics-B-NwsNBy.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
