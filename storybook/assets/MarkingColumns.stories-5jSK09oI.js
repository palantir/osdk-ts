import{f as p,j as e}from"./iframe-9OpC_N8y.js";import{O as i}from"./object-table-YQ6rNkeJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-B7sghAV5.js";import"./index-DSxditmY.js";import"./Dialog-DkBx-FR1.js";import"./cross-BfZJOFYH.js";import"./svgIconContainer-oJMft6mx.js";import"./useBaseUiId-DBqP-0QL.js";import"./InternalBackdrop-CpFIES9m.js";import"./composite-CrXso5kT.js";import"./index-BYheStGz.js";import"./index-BWMAAzDl.js";import"./index-OPaHrZDF.js";import"./useEventCallback-CZw_6uow.js";import"./SkeletonBar-O0q8dBq8.js";import"./LoadingCell-n49qRtbT.js";import"./ColumnConfigDialog-C7U7c6EQ.js";import"./DraggableList-lRzakoV6.js";import"./search-TnHR6DGv.js";import"./Input-22pjcFCD.js";import"./useControlled-B9BwmRqN.js";import"./Button-CEDTBjQ9.js";import"./small-cross-CDqdsFm-.js";import"./ActionButton-FY_WWuvt.js";import"./Checkbox-DE0s0SIE.js";import"./useValueChanged-hzDLPvi0.js";import"./CollapsiblePanel-ACU3l7Tu.js";import"./MultiColumnSortDialog-BwRCQV-y.js";import"./MenuTrigger-oZth-qms.js";import"./CompositeItem-BQvPBjhd.js";import"./ToolbarRootContext-D8Su1VOS.js";import"./getDisabledMountTransitionStyles-DmxHVaGO.js";import"./getPseudoElementBounds-DWUvgXva.js";import"./chevron-down-DRK_INXA.js";import"./index-BDwZVFt2.js";import"./error-BFjtkE9z.js";import"./BaseCbacBanner-8Bsxco84.js";import"./makeExternalStore-Dcb2I-X9.js";import"./Tooltip-BSdinWV1.js";import"./PopoverPopup-y0Wo_ssq.js";import"./debounce-CUmYTyYO.js";import"./useOsdkClient-nTvUHUDa.js";import"./tick-CTciLGmY.js";import"./DropdownField-D6KYcCTh.js";import"./isEqual-pgyVw8bX.js";import"./withOsdkMetrics-BMtD0lPR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
