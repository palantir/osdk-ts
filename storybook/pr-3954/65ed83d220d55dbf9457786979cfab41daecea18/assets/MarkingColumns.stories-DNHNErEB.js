import{f as p,j as e}from"./iframe-CUxo3m6Y.js";import{O as i}from"./object-table-BS58DboR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-l6s3tcls.js";import"./Table-qL21JEKz.js";import"./index-DTuBVR6H.js";import"./Dialog-uyxpEbmE.js";import"./cross-BrW7tcZq.js";import"./svgIconContainer-CNkl-Wwt.js";import"./useBaseUiId-Cfk1xeZo.js";import"./InternalBackdrop-CXN_RL2H.js";import"./composite-QDblzbOe.js";import"./index-CDPyuaTW.js";import"./index-DKD0s-Lm.js";import"./index-CxjaSFPP.js";import"./useEventCallback-BBqjvofg.js";import"./SkeletonBar-CR7zsgrH.js";import"./LoadingCell-DDQm7hjH.js";import"./ColumnConfigDialog-588ltJBa.js";import"./DraggableList-CjixxHVo.js";import"./search-C5XD9rFV.js";import"./Input-n5RT_2o8.js";import"./useControlled-CW8X9itX.js";import"./Button-Bp7sJ37u.js";import"./small-cross-hdXmMZce.js";import"./ActionButton-Ct3Qs2F9.js";import"./Checkbox-BnFqe7-w.js";import"./useValueChanged-IyyMTw5T.js";import"./CollapsiblePanel-3fNyZBpC.js";import"./MultiColumnSortDialog-B6xXiDA_.js";import"./MenuTrigger-5HtqAP9x.js";import"./CompositeItem-BVjd-TkC.js";import"./ToolbarRootContext-CJO8_3PY.js";import"./getDisabledMountTransitionStyles-BjaR6nL7.js";import"./getPseudoElementBounds-DRWqtKnl.js";import"./chevron-down-BOa4nBg1.js";import"./index-BEOdQoLT.js";import"./error-D3zX7u9C.js";import"./BaseCbacBanner-D4YJPV0D.js";import"./makeExternalStore-D-euk5kW.js";import"./Tooltip-CvOvAKov.js";import"./PopoverPopup-DCQkL0P-.js";import"./debounce-CUJDM8i3.js";import"./useOsdkClient-Du0bLm1o.js";import"./tick-BGs9034q.js";import"./DropdownField-BfLkyoOe.js";import"./isEqual-pGl1yIuH.js";import"./withOsdkMetrics-CSx29j57.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
