import{f as p,j as e}from"./iframe-Ccq8LnzR.js";import{O as i}from"./object-table-BwNQP79J.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BNfCu1B_.js";import"./index-ibpVN2lt.js";import"./Dialog-Dd9tli1K.js";import"./cross-D61Z2HA7.js";import"./svgIconContainer-B3MTQTZk.js";import"./useBaseUiId-ChrZBL00.js";import"./InternalBackdrop-C6KEc4k3.js";import"./composite-CUDUHPUL.js";import"./index-CsxRvKms.js";import"./index-DSa7XzaC.js";import"./index-BjFrub02.js";import"./useEventCallback-BTtlCNNb.js";import"./SkeletonBar-D--J-NXf.js";import"./LoadingCell-B1A6ARPD.js";import"./ColumnConfigDialog-D7TjP6l5.js";import"./DraggableList-DqIyDI4r.js";import"./search-fYPHsLc6.js";import"./Input-CDUlKefO.js";import"./useControlled-BDMchsxG.js";import"./Button-ZG1qj9kz.js";import"./small-cross-X50wsIgk.js";import"./ActionButton-BCy4f3fN.js";import"./Checkbox-wr4CrvWc.js";import"./useValueChanged-DAinPMBg.js";import"./CollapsiblePanel-CZQxSMBU.js";import"./MultiColumnSortDialog-BGMzVDz6.js";import"./MenuTrigger-gpcrY7AQ.js";import"./CompositeItem-oGACzHps.js";import"./ToolbarRootContext-C39odqBG.js";import"./getDisabledMountTransitionStyles-DQQWGbDa.js";import"./getPseudoElementBounds-ThTpZrh5.js";import"./chevron-down-CcArFodd.js";import"./index-CoeZrPs6.js";import"./error-DHq6tj_T.js";import"./BaseCbacBanner-BwNweq9C.js";import"./makeExternalStore-_f2hnKfG.js";import"./Tooltip-CxZiJ6KQ.js";import"./PopoverPopup-o-m8jew_.js";import"./debounce-DECuEKDc.js";import"./useOsdkClient-DOH5uFok.js";import"./tick-CdTACpR9.js";import"./DropdownField-DGqy8Ho_.js";import"./isEqual-Bo4M0cTA.js";import"./withOsdkMetrics-B2PLhQzs.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
