import{f as p,j as e}from"./iframe-vrerelee.js";import{O as i}from"./object-table-C77hH-X-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-EWJUa1-K.js";import"./Table-C0Y9cRlL.js";import"./index-CNxP3rjT.js";import"./Dialog-C-ycvXhr.js";import"./cross-Psx69AyP.js";import"./svgIconContainer-6n9cb0mN.js";import"./useBaseUiId-CAROlnX8.js";import"./InternalBackdrop-B2deliiX.js";import"./composite-DDTJeHL3.js";import"./index-yOPz6Uw0.js";import"./index-AmaRSzHC.js";import"./index-BxycLxmI.js";import"./useEventCallback-BGHzswty.js";import"./SkeletonBar-B5K6rZTn.js";import"./LoadingCell-Dpjt84nq.js";import"./ColumnConfigDialog-D8YDv3iE.js";import"./DraggableList-DThfYCrz.js";import"./search-Bhqmpp8a.js";import"./Input-C9Tgfj8O.js";import"./useControlled-CjkZ0zkX.js";import"./Button-y-WAAif2.js";import"./small-cross-BXp4fE6H.js";import"./ActionButton-DQ74GkZQ.js";import"./Checkbox-BtPLyCy5.js";import"./useValueChanged-BMbMl2pt.js";import"./CollapsiblePanel-Cx4OKjzZ.js";import"./MultiColumnSortDialog-D7Zb2Ynk.js";import"./MenuTrigger-BqPc4r3c.js";import"./CompositeItem-B4kVU38_.js";import"./ToolbarRootContext-CcUY96Hu.js";import"./getDisabledMountTransitionStyles-Cltm6V_7.js";import"./getPseudoElementBounds-Cn4A2pne.js";import"./chevron-down-7LzC2ZOe.js";import"./index-DyV40wfp.js";import"./error-BxHij2Hj.js";import"./BaseCbacBanner-Cc8lcT32.js";import"./makeExternalStore-CGm7b8F9.js";import"./Tooltip-ZywtbqPZ.js";import"./PopoverPopup-C7--kMEm.js";import"./debounce-B5fxBA0q.js";import"./useOsdkClient-CUb002RZ.js";import"./tick-ChAbTz2_.js";import"./DropdownField-DvW-d2ag.js";import"./isEqual-WV-XZln-.js";import"./withOsdkMetrics-CTLM5X88.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
