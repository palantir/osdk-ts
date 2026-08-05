import{f as p,j as e}from"./iframe-MV3gBuhb.js";import{O as i}from"./object-table-BFzb71oN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-c0smS1a0.js";import"./index-CPeLDKLC.js";import"./Dialog-lAXuBedk.js";import"./cross-D-dx7OQY.js";import"./svgIconContainer-C29zPRQZ.js";import"./useBaseUiId-DJc1IzLT.js";import"./InternalBackdrop-CqWsDzos.js";import"./composite-JnoI1v48.js";import"./index-DUyzW1cO.js";import"./index-DS4B-Z3C.js";import"./index-DixCBahy.js";import"./useEventCallback-CTXi7CF8.js";import"./SkeletonBar-BRlbBChd.js";import"./LoadingCell-CkEkP96h.js";import"./ColumnConfigDialog-BzgvzqRp.js";import"./DraggableList-BKEI068J.js";import"./search-Dx6v8zL9.js";import"./Input-CFAsB6-e.js";import"./useControlled-BAuu-oXX.js";import"./isEqual-BJwCsjI-.js";import"./isObject-BSAcuXqJ.js";import"./Button-BCOIsKOG.js";import"./ActionButton-6JWtFS74.js";import"./Checkbox-C3QVh5C1.js";import"./useValueChanged-DuPZkKLu.js";import"./CollapsiblePanel-0deNnNaL.js";import"./MultiColumnSortDialog-CCvPAeqZ.js";import"./MenuTrigger-DCv0W0ii.js";import"./CompositeItem-CqaTd4ET.js";import"./ToolbarRootContext-BV1tTkw1.js";import"./getDisabledMountTransitionStyles-D8sukNzL.js";import"./getPseudoElementBounds-bt3u7bQP.js";import"./chevron-down-Dq4ZWi7O.js";import"./index-CSUITZSY.js";import"./error-DZQYXIrZ.js";import"./BaseCbacBanner-Dngf4cbN.js";import"./makeExternalStore-BXBS29Jd.js";import"./Tooltip-vGIWKmaA.js";import"./PopoverPopup-_2BHXoEs.js";import"./toNumber-Dme5-GRS.js";import"./useOsdkClient-DGtMq_wB.js";import"./tick-CeYFwvYZ.js";import"./DropdownField-DL5_VC8k.js";import"./withOsdkMetrics-CCiJ9j-V.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
