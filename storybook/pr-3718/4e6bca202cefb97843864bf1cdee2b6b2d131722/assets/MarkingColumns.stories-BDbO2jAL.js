import{f as p,j as e}from"./iframe-CC_FQYho.js";import{O as i}from"./object-table-DmvfGJZC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DiIN_j1k.js";import"./Table-CJTvPjff.js";import"./index-C0RXL92K.js";import"./Dialog-IadtkuAK.js";import"./cross-BZu72TED.js";import"./svgIconContainer-BHhva7Vx.js";import"./useBaseUiId-BJp4kyZW.js";import"./InternalBackdrop-MSrFzou7.js";import"./composite-CMNQ5-0t.js";import"./index-DgKdSWzb.js";import"./index-CHlIoM3S.js";import"./index-jZYQSq3J.js";import"./useEventCallback-Qe5jYPYR.js";import"./SkeletonBar-BzLhW4b7.js";import"./LoadingCell-Bii1lNSL.js";import"./ColumnConfigDialog-CeMdXelO.js";import"./DraggableList-DoeSxRpD.js";import"./search-oI4OCDZz.js";import"./Input-DXqjRZ2w.js";import"./useControlled-JgdiNZlV.js";import"./isEqual-BDTY1jMq.js";import"./isObject-BfBfuX78.js";import"./Button-CK-svcRR.js";import"./ActionButton-BG5oAfJ5.js";import"./Checkbox-CtnnyD6q.js";import"./useValueChanged-PiFXb1qB.js";import"./CollapsiblePanel-J34I97ve.js";import"./MultiColumnSortDialog-x6AEd89y.js";import"./MenuTrigger-CrSDETgS.js";import"./CompositeItem-DFRdygCM.js";import"./ToolbarRootContext-CzrsBDV_.js";import"./getDisabledMountTransitionStyles-CxdlSMO8.js";import"./getPseudoElementBounds-CLZmhZEX.js";import"./chevron-down-C7BZNBxd.js";import"./index-Cjx3k7Vi.js";import"./error-C55d3W4_.js";import"./BaseCbacBanner-OT_xhNb7.js";import"./makeExternalStore-VD__KGN8.js";import"./Tooltip-W74_HsT6.js";import"./PopoverPopup-Dn1CxdJF.js";import"./toNumber-Dw0uXPPm.js";import"./useOsdkClient-WsBZSC7A.js";import"./tick-DBWM5nL1.js";import"./DropdownField-BnXO-UEY.js";import"./withOsdkMetrics-B118lpyL.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
