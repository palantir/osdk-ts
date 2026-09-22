import{f as p,j as e}from"./iframe-SIMpA4b3.js";import{O as i}from"./object-table-BB3Ya4ql.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-u9tSabE5.js";import"./Table-BjzMLano.js";import"./index-CgEuHlu2.js";import"./Dialog-BBRxEOgL.js";import"./cross-A4PXp8OO.js";import"./svgIconContainer-Bv-MZKBZ.js";import"./useBaseUiId-Cayh95iR.js";import"./InternalBackdrop-BjdByZt4.js";import"./composite-BiHSWJxn.js";import"./index-DIMo0kF5.js";import"./index-BOG0Gn7K.js";import"./index-DByXNkAP.js";import"./useEventCallback-ek73AKE3.js";import"./SkeletonBar-CONPnUxb.js";import"./LoadingCell-gqdEkAd9.js";import"./ColumnConfigDialog-DxA9qQeo.js";import"./DraggableList-BmNlZwM9.js";import"./search-94czUh6x.js";import"./Input-DI62ffjf.js";import"./useControlled-aXvE1NEk.js";import"./Button-DePizqiT.js";import"./small-cross-vpu9zUmA.js";import"./ActionButton-Cn9bBLTs.js";import"./Checkbox-DZGiW7UX.js";import"./useValueChanged-6XUEwvLB.js";import"./CollapsiblePanel-fOVUAOYi.js";import"./MultiColumnSortDialog-C_oWOlUB.js";import"./MenuTrigger-BiJqZYIa.js";import"./CompositeItem-CnRf7Dd6.js";import"./ToolbarRootContext-B55ymUvU.js";import"./getDisabledMountTransitionStyles-DJHymdjY.js";import"./getPseudoElementBounds-BOBP5ItM.js";import"./chevron-down-D2KA7jZq.js";import"./index-uzBTaDFQ.js";import"./error-CGNw4dMZ.js";import"./BaseCbacBanner-BP0Cqn0m.js";import"./makeExternalStore-DPGOJSPa.js";import"./Tooltip-CJ-HIpsM.js";import"./PopoverPopup-KmvLih8v.js";import"./debounce-DKuXkfuK.js";import"./useOsdkClient-BVwhdVV0.js";import"./tick-D3sBJRzy.js";import"./DropdownField-DrtQyHqD.js";import"./isEqual-B3AMbcSK.js";import"./withOsdkMetrics-DYZT3YgQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
