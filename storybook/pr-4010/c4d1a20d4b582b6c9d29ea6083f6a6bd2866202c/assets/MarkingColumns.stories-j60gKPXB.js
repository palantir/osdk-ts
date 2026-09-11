import{f as p,j as e}from"./iframe-B8lzwm22.js";import{O as i}from"./object-table-DShYpsaa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DZpogDck.js";import"./Table-GHKreUtP.js";import"./index-V8AdOqgd.js";import"./Dialog-B16dHLiM.js";import"./cross-BjwwvSsI.js";import"./svgIconContainer-CXVvUd5F.js";import"./useBaseUiId-9i5seKgC.js";import"./InternalBackdrop-Dm3w5lyn.js";import"./composite-BgrU9ffv.js";import"./index-B1F9PCAn.js";import"./index-DA6AQTMf.js";import"./index-DKCrzgsd.js";import"./useEventCallback-DeeBfsBF.js";import"./SkeletonBar-Bas3_Wlo.js";import"./LoadingCell-DpSvjykH.js";import"./ColumnConfigDialog-DQQey7lW.js";import"./DraggableList-C5_mqVtU.js";import"./search-CJEfvURK.js";import"./Input-CzpDwduI.js";import"./useControlled-9IIZJlu3.js";import"./Button-DINiSESc.js";import"./small-cross-hDui4OeT.js";import"./ActionButton-CU9gdIlX.js";import"./Checkbox-DJmQzDug.js";import"./useValueChanged-B5KtwkUp.js";import"./CollapsiblePanel-Y638CsIO.js";import"./MultiColumnSortDialog-fcEhEsp0.js";import"./MenuTrigger-DrDkL1AE.js";import"./CompositeItem-DEvZ_JsZ.js";import"./ToolbarRootContext-8Dlenei2.js";import"./getDisabledMountTransitionStyles-CgeJIM6-.js";import"./getPseudoElementBounds-CCplqQNV.js";import"./chevron-down-98nms22W.js";import"./index-CBtK7PVB.js";import"./error-D8O5Gu9w.js";import"./BaseCbacBanner-BSveluQ8.js";import"./makeExternalStore-BIgSRA9g.js";import"./Tooltip-B9fsMvs_.js";import"./PopoverPopup-CAo52PJc.js";import"./debounce-DS0sFmBW.js";import"./useOsdkClient-BOXKzBN3.js";import"./tick-CC6mSPPg.js";import"./DropdownField-DzdO8ho7.js";import"./isEqual-CD-pZhR5.js";import"./withOsdkMetrics-BRdTEDjT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
