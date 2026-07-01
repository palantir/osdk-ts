import{f as n,j as t}from"./iframe-CYzPhqNF.js";import{O as p}from"./object-table-BGcNvU1b.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-tzg7hJyQ.js";import"./Table-CVRzzXco.js";import"./index-aPgoDgP6.js";import"./Dialog-CIUQAJkY.js";import"./cross-WNLTNtZf.js";import"./svgIconContainer-DRztJJ-n.js";import"./useBaseUiId-CCxAf9XS.js";import"./InternalBackdrop-HN4dW1EW.js";import"./composite-D4ZsZXjU.js";import"./index-Dtstj2gu.js";import"./index-zTYoqu0b.js";import"./index-DMkvImbs.js";import"./useEventCallback-BiIbOPgo.js";import"./SkeletonBar-CjCNhNog.js";import"./LoadingCell-QDhB_wxN.js";import"./ColumnConfigDialog-DZkJRyEG.js";import"./DraggableList-QzZHWab-.js";import"./search-D7-70Oq1.js";import"./Input-BNKW669K.js";import"./useControlled-eQzq91Xt.js";import"./Button-BKbrB7tN.js";import"./small-cross-CsCAEuqM.js";import"./ActionButton-BDeIcuBU.js";import"./Checkbox-DI8nTYB2.js";import"./minus-DmVykcjm.js";import"./tick-_GIbCbqC.js";import"./useValueChanged-BcOgLdfN.js";import"./caret-down-CWcHbH1h.js";import"./CollapsiblePanel-DubLYoAI.js";import"./MultiColumnSortDialog-ZYg6sjnT.js";import"./MenuTrigger-CqD9hCkz.js";import"./CompositeItem-DaTODz3c.js";import"./ToolbarRootContext-DDnigm3W.js";import"./getDisabledMountTransitionStyles-DRGu8by7.js";import"./getPseudoElementBounds-BqLkewX9.js";import"./chevron-down-DqSk9KM1.js";import"./index-qCO_ViKL.js";import"./error-fLAgbys2.js";import"./BaseCbacBanner-cmKgJBr3.js";import"./makeExternalStore-rJo17vKy.js";import"./Tooltip-DBWlidVb.js";import"./PopoverPopup-BA77jJ8v.js";import"./toNumber-hu8SXtBA.js";import"./useOsdkClient-TtbX2q_j.js";import"./DropdownField-DAxU9ewq.js";import"./withOsdkMetrics-BQWndylE.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
