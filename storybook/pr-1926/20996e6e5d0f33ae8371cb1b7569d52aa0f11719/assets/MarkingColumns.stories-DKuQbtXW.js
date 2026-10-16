import{f as p,j as e}from"./iframe-BatTRwfa.js";import{O as i}from"./object-table-Dsf1CmcX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-1dO9BeYB.js";import"./Table-UGxGyS0c.js";import"./index-DOW0CwQC.js";import"./Dialog-CAUjG_JD.js";import"./cross-BDeJmnrY.js";import"./svgIconContainer-BEJ8Uc8u.js";import"./useBaseUiId-DvfpcKJo.js";import"./InternalBackdrop-Zmd-LiLm.js";import"./composite-BBv4613M.js";import"./index-CjHrbaV9.js";import"./index-zVbC2njb.js";import"./index-H8QjAumC.js";import"./useEventCallback-YevN6u6r.js";import"./SkeletonBar-qWyKnZi_.js";import"./LoadingCell-81BR8Q6M.js";import"./ColumnConfigDialog-CVJ-Cu2x.js";import"./DraggableList-CLyslS_q.js";import"./search-CZvhHXAJ.js";import"./Input-C5LDgX9X.js";import"./useControlled-STn9JHtw.js";import"./Button-Du5jWjff.js";import"./small-cross-BPhAxJ8u.js";import"./ActionButton-BpZcQi9r.js";import"./Checkbox-DTGFBCTS.js";import"./useValueChanged-EUrHxfvD.js";import"./CollapsiblePanel--VPjmuy-.js";import"./MultiColumnSortDialog-Cion4ZU5.js";import"./MenuTrigger-CDiim23S.js";import"./CompositeItem-5Yv0-9Y-.js";import"./ToolbarRootContext-DNGFWytt.js";import"./getDisabledMountTransitionStyles-OE1kchG2.js";import"./getPseudoElementBounds-BD9k5WkF.js";import"./chevron-down-DrwZYKMn.js";import"./index-DAlaDr9m.js";import"./error-D_Nf9rBh.js";import"./BaseCbacBanner-CeTOgFrI.js";import"./makeExternalStore-CnkPGtRT.js";import"./Tooltip-IQeYH35x.js";import"./PopoverPopup-D35Mz83O.js";import"./debounce-BtG4PIwW.js";import"./useOsdkClient-xL_Zv1WO.js";import"./tick-DUFPZnzG.js";import"./DropdownField-CnB7jcM7.js";import"./isEqual-CZr5_eZA.js";import"./withOsdkMetrics-C5QyIn2v.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
