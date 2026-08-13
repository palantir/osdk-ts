import{f as p,j as e}from"./iframe-DMEeR_A6.js";import{O as i}from"./object-table-DpPdg6rC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CSwxJ2Qu.js";import"./Table-BVtLGRs-.js";import"./index-BqSwH6BS.js";import"./Dialog-Bmg5t_Rv.js";import"./cross-D1DQ-gsn.js";import"./svgIconContainer-BjNsgw11.js";import"./useBaseUiId-C_keuJD_.js";import"./InternalBackdrop-Du4XsI-F.js";import"./composite-c9YX8hZx.js";import"./index-DfbVa9Ua.js";import"./index-BNsZDNUv.js";import"./index-D8V__r46.js";import"./useEventCallback-jLitOrjn.js";import"./SkeletonBar-fcVlNLZ8.js";import"./LoadingCell-Cz--n1SX.js";import"./ColumnConfigDialog-Cx9qj5Wo.js";import"./DraggableList-CYLi03tu.js";import"./search-C4awjolY.js";import"./Input-DNu0XTv_.js";import"./useControlled-JgK447yP.js";import"./isEqual-C5BtzEHg.js";import"./isObject-BwRGfctU.js";import"./Button-D8YP-W_J.js";import"./ActionButton-DBLagc9K.js";import"./Checkbox-BbDJ4RQ9.js";import"./useValueChanged-Snwakmnu.js";import"./CollapsiblePanel-k2iQjFFp.js";import"./MultiColumnSortDialog-Yn5zCMWH.js";import"./MenuTrigger-B1D8mTKr.js";import"./CompositeItem-BjD7sfVu.js";import"./ToolbarRootContext-DUcwU7Eq.js";import"./getDisabledMountTransitionStyles-CbEoBQbW.js";import"./getPseudoElementBounds-CSLBYaMJ.js";import"./chevron-down-CQJ4c2jJ.js";import"./index-BDKCNXPL.js";import"./error-B_Co1YFo.js";import"./BaseCbacBanner-BxYeTs4u.js";import"./makeExternalStore-lRhVC4OU.js";import"./Tooltip-CbgggMzF.js";import"./PopoverPopup-DprMQeHB.js";import"./debounce-D3f1Scy_.js";import"./useOsdkClient-CGfWHfWZ.js";import"./tick-BROod1D6.js";import"./DropdownField-CGgIhePw.js";import"./withOsdkMetrics-CPkWaZWg.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
