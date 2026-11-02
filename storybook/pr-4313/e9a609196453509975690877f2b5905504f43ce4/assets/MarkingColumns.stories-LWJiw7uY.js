import{f as p,j as e}from"./iframe-CiI5PS6K.js";import{O as i}from"./object-table-t7PnOjZV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BScoV-ON.js";import"./Table-Bwu2eGJ5.js";import"./index-DTPqzTra.js";import"./Dialog-DnLyeJh7.js";import"./cross-DgjL-w3z.js";import"./svgIconContainer-tdqH8iqE.js";import"./useBaseUiId-DReynxDq.js";import"./InternalBackdrop-Coh6cB6j.js";import"./composite-BrOoGgaN.js";import"./index-CjZ-iEVj.js";import"./index-XzG81WZo.js";import"./index-CPJzMmpG.js";import"./useEventCallback-CyRG3rkJ.js";import"./SkeletonBar-BNIt8FzO.js";import"./LoadingCell-C75a2rZj.js";import"./ColumnConfigDialog-BuLkkFmQ.js";import"./DraggableList-DkKy9uqw.js";import"./search-BRtPHFLM.js";import"./Input-gM0suFmQ.js";import"./useControlled-C0rSVFZc.js";import"./Button-BP56zFTn.js";import"./small-cross-BvlJE0g7.js";import"./ActionButton-DmbyeOrm.js";import"./Checkbox-CURrvPm-.js";import"./useValueChanged-Dfh6smN1.js";import"./CollapsiblePanel-CL4hIKDt.js";import"./MultiColumnSortDialog-CM8G5v3Q.js";import"./MenuTrigger-Cgk5IHXF.js";import"./CompositeItem-D4PTMtSQ.js";import"./ToolbarRootContext-CTDjgR90.js";import"./getDisabledMountTransitionStyles-CRmjgyTc.js";import"./getPseudoElementBounds-CAN5gz0w.js";import"./chevron-down-F9mPI0PG.js";import"./index-DzwnFRrI.js";import"./error-Dp2Yeg1s.js";import"./BaseCbacBanner-CwxrNrzn.js";import"./makeExternalStore-BiFRWY5t.js";import"./Tooltip-RikTdx9n.js";import"./PopoverPopup-CME_dwGk.js";import"./debounce-DI-y3SNs.js";import"./useOsdkClient-DO_qV40A.js";import"./tick-NDqyjiXA.js";import"./DropdownField-D6IgbNva.js";import"./isEqual-Cza9X2E6.js";import"./withOsdkMetrics-BRB4GNZb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
