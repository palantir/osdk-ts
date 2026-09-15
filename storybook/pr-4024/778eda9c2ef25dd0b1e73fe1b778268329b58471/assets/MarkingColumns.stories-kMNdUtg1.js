import{f as p,j as e}from"./iframe-BCQQ5idH.js";import{O as i}from"./object-table-CiAWSjw6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-coqosfEI.js";import"./Table-BjsGcEug.js";import"./index-nevoWaco.js";import"./Dialog-C5qQPBcK.js";import"./cross-CEa64cbV.js";import"./svgIconContainer-CKj1NjbI.js";import"./useBaseUiId-DiDvWzye.js";import"./InternalBackdrop-N2Ue8An6.js";import"./composite-D0UtEOtq.js";import"./index-B3YRQCj_.js";import"./index-D04-iFGI.js";import"./index-BzNe3PgQ.js";import"./useEventCallback-Ba_k9sT5.js";import"./SkeletonBar-C04_QzCc.js";import"./LoadingCell-CxctrIdy.js";import"./ColumnConfigDialog-9haTRGzY.js";import"./DraggableList-BbZm-3gx.js";import"./search-BBu7BPS5.js";import"./Input-C6nfWZbz.js";import"./useControlled-Cq_GfurO.js";import"./Button-CEig4mHb.js";import"./small-cross-BGKOGZvf.js";import"./ActionButton-DHvPjza2.js";import"./Checkbox-B6jpZoN4.js";import"./useValueChanged-D3kLtDwA.js";import"./CollapsiblePanel-GdXVEA_b.js";import"./MultiColumnSortDialog-CtgSOTwj.js";import"./MenuTrigger-C0kxST0T.js";import"./CompositeItem-ldRXr3Bh.js";import"./ToolbarRootContext-BXYKMrbO.js";import"./getDisabledMountTransitionStyles-BQ29FsW-.js";import"./getPseudoElementBounds-Ckqa6CIQ.js";import"./chevron-down-DUkETYvc.js";import"./index-CLw5_nKq.js";import"./error-CJVmwm75.js";import"./BaseCbacBanner-8gebQmnF.js";import"./makeExternalStore-DUkSZpJS.js";import"./Tooltip-O_DZ5X_J.js";import"./PopoverPopup-dla5XZcT.js";import"./debounce-C1U5cA8k.js";import"./useOsdkClient-B5gZh-Vy.js";import"./tick--0MwaCEo.js";import"./DropdownField-DO1VI0xx.js";import"./isEqual-BbjsSR4E.js";import"./withOsdkMetrics-SGz3lb0q.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
