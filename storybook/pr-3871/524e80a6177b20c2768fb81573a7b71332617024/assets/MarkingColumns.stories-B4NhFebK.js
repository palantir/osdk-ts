import{f as p,j as e}from"./iframe-C8W_1yJa.js";import{O as i}from"./object-table-CfEXVxhw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CTLXhaGl.js";import"./Table-CYPF32De.js";import"./index-BHosZjWC.js";import"./Dialog-CbnrLYcS.js";import"./cross-CZHInJK7.js";import"./svgIconContainer-BYaq9C4Y.js";import"./useBaseUiId-D9u19KRt.js";import"./InternalBackdrop-DJwuEZsI.js";import"./composite-D9vkqeMo.js";import"./index-A9PJi114.js";import"./index-Ckh3kz80.js";import"./index-DY7N8tg4.js";import"./useEventCallback-BQQwBwX-.js";import"./SkeletonBar-BMP97Bi7.js";import"./LoadingCell-x9q3_gtq.js";import"./ColumnConfigDialog-BwNIscIX.js";import"./DraggableList-_tdrOdNd.js";import"./search-DN1_1bJo.js";import"./Input-QwDU-OOH.js";import"./useControlled-BNicjJXr.js";import"./Button-BTdxh1PU.js";import"./small-cross-VRGJdYzw.js";import"./ActionButton-DQmOZQvx.js";import"./Checkbox-DhKrDZ9A.js";import"./useValueChanged-DKvAzyx9.js";import"./CollapsiblePanel-FwTNNP5Y.js";import"./MultiColumnSortDialog-BQD749yI.js";import"./MenuTrigger-CfEP9Xzr.js";import"./CompositeItem-ksibX-Pt.js";import"./ToolbarRootContext-B64BT2dX.js";import"./getDisabledMountTransitionStyles-AYk6J0dN.js";import"./getPseudoElementBounds-9jhDuj_I.js";import"./chevron-down-CTsGKY-w.js";import"./index-BDWszJ74.js";import"./error-DTe2-M69.js";import"./BaseCbacBanner-bPaBonGO.js";import"./makeExternalStore-Dkf4Frge.js";import"./Tooltip-DJOihC1O.js";import"./PopoverPopup-BJN7bFZl.js";import"./debounce-C0R7ONRw.js";import"./useOsdkClient-ud-o5HVE.js";import"./tick-CFChvKzW.js";import"./DropdownField-C0lsf-fP.js";import"./isEqual-EFg4idVR.js";import"./withOsdkMetrics-CU6eTpB7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
