import{f as p,j as e}from"./iframe-BApgeGXl.js";import{O as i}from"./object-table-L9Ky81ED.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B5SDrfLX.js";import"./Table-CYUy2OZk.js";import"./index-D1DKxRCC.js";import"./Dialog-BUikXbV8.js";import"./cross-ZTt9cbvY.js";import"./svgIconContainer-DsyE7o9I.js";import"./useBaseUiId-HvC3sL6i.js";import"./InternalBackdrop--ZTWLfQl.js";import"./composite-CfLZxk0Y.js";import"./index-D6GjFiH-.js";import"./index-T-rcUtZ2.js";import"./index-BjC4jF9D.js";import"./useEventCallback-BnHXtP8m.js";import"./SkeletonBar-CFo_1ayu.js";import"./LoadingCell-BHTZiZSs.js";import"./ColumnConfigDialog-CxHOLgQs.js";import"./DraggableList-iPa5GZpO.js";import"./search-DA1A23L5.js";import"./Input-JtvTue8M.js";import"./useControlled-DwtdN-yM.js";import"./Button-C7YfkSI7.js";import"./small-cross-Vh49dVTG.js";import"./ActionButton-juathNjQ.js";import"./Checkbox-C7tXqNxh.js";import"./useValueChanged-e4ysBGYq.js";import"./CollapsiblePanel-B5H4huYa.js";import"./MultiColumnSortDialog-Ch07S50J.js";import"./MenuTrigger-DHzhysiY.js";import"./CompositeItem-Di2z5EXS.js";import"./ToolbarRootContext-BucTdyIl.js";import"./getDisabledMountTransitionStyles-B5BYpj3H.js";import"./getPseudoElementBounds-ATfKY2eH.js";import"./chevron-down-DFCusqRp.js";import"./index-BZG1se71.js";import"./error-D3Ew2_Fi.js";import"./BaseCbacBanner-Bee4-SeT.js";import"./makeExternalStore-DvSdjbOg.js";import"./Tooltip-Ca9hBF2Y.js";import"./PopoverPopup-DGPJk_zW.js";import"./debounce-BnXt5WXY.js";import"./useOsdkClient-UetNUWte.js";import"./tick-CxJ8OjsD.js";import"./DropdownField-CITGD--l.js";import"./isEqual-uxWSHrgG.js";import"./withOsdkMetrics-RpuKM6nt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
