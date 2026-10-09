import{f as p,j as e}from"./iframe-C2bn1_9y.js";import{O as i}from"./object-table-CQxPAmKg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BKCOmGZc.js";import"./Table-C4R5ME31.js";import"./index-Rse0ui84.js";import"./Dialog-Diug7YE5.js";import"./cross-D3-SLGNH.js";import"./svgIconContainer-DPC29kub.js";import"./useBaseUiId-BEW7P3cF.js";import"./InternalBackdrop-DHxqqy0U.js";import"./composite-DfH2wcee.js";import"./index-pp8KWnVv.js";import"./index-Dvlf4PX0.js";import"./index-CIcHY6Ua.js";import"./useEventCallback-DVSHSqJV.js";import"./SkeletonBar-CjAl8nh4.js";import"./LoadingCell-VuLTzYHZ.js";import"./ColumnConfigDialog-DgjE8Rki.js";import"./DraggableList-CcVbWkep.js";import"./search-BCScHNOJ.js";import"./Input-M9Th-rY9.js";import"./useControlled-BN9CT1rQ.js";import"./Button-DYwf6UQE.js";import"./small-cross-BbD3VZXI.js";import"./ActionButton-C1OuBZSx.js";import"./Checkbox-BcechQff.js";import"./useValueChanged-CitzyAfL.js";import"./CollapsiblePanel-BM0qN9C1.js";import"./MultiColumnSortDialog-BkDE4zFt.js";import"./MenuTrigger-DJvbYVk1.js";import"./CompositeItem-Dhse_QgT.js";import"./ToolbarRootContext-C-eiR_Mr.js";import"./getDisabledMountTransitionStyles-Cw6nwd_1.js";import"./getPseudoElementBounds-jQ_Lb5TR.js";import"./chevron-down-BOQ5t9w6.js";import"./index-C2JbH2_9.js";import"./error-DBJpIi5X.js";import"./BaseCbacBanner-CXDqxbSv.js";import"./makeExternalStore-DeVLvyOh.js";import"./Tooltip-AZ5zh1rm.js";import"./PopoverPopup-CtnZgejC.js";import"./debounce-VRVIwWBB.js";import"./useOsdkClient-CRP05prZ.js";import"./tick-CkUSwppG.js";import"./DropdownField-Czf-9CkU.js";import"./isEqual-V1FkRnTw.js";import"./withOsdkMetrics-B5yrVNzh.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
