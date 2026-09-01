import{f as p,j as e}from"./iframe-BmXghCn6.js";import{O as i}from"./object-table-D9UpOFZ4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DyEb50hU.js";import"./Table-BvFIt6FA.js";import"./index-CkP1S794.js";import"./Dialog-CcntKMNc.js";import"./cross-1G28DJ34.js";import"./svgIconContainer-CEabMecg.js";import"./useBaseUiId-BFdWkSa3.js";import"./InternalBackdrop-Bsr2VYjE.js";import"./composite-skjDbJuY.js";import"./index-XWjp_9x9.js";import"./index-C8vp91fy.js";import"./index-N47VdsYc.js";import"./useEventCallback-9K-ZHZHx.js";import"./SkeletonBar-BTg5UwSJ.js";import"./LoadingCell-BmVyf-pJ.js";import"./ColumnConfigDialog-cwJr_Bnc.js";import"./DraggableList-DToiNID5.js";import"./search-DYe5GpMI.js";import"./Input-D8XP268p.js";import"./useControlled-BKLzfLUK.js";import"./Button-Cs6CA2sl.js";import"./small-cross-CqK4fWdL.js";import"./ActionButton-CYwjsF9h.js";import"./Checkbox-BaarIBkE.js";import"./useValueChanged-DZMD6Hgy.js";import"./CollapsiblePanel-7FaH6Awn.js";import"./MultiColumnSortDialog-WSTGwkQu.js";import"./MenuTrigger-B5AdCMJX.js";import"./CompositeItem-Kpz015F9.js";import"./ToolbarRootContext-Bv4KJP5T.js";import"./getDisabledMountTransitionStyles-jOX9CoCu.js";import"./getPseudoElementBounds-BJaYajaT.js";import"./chevron-down-BKWNxeex.js";import"./index-Bl1gUBDd.js";import"./error-8I9DfYjI.js";import"./BaseCbacBanner-BjBp6vIF.js";import"./makeExternalStore-D8WVbSgH.js";import"./Tooltip-Dsq7FhXV.js";import"./PopoverPopup-MW8o7zfB.js";import"./debounce-3vdrVhMQ.js";import"./useOsdkClient-BSpvxK_2.js";import"./tick-DmjFFyYl.js";import"./DropdownField-BVMUqHL9.js";import"./isEqual-CoPM5EwX.js";import"./withOsdkMetrics-BALE--sz.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
