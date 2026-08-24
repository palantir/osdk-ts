import{f as p,j as e}from"./iframe-DzT5j6tC.js";import{O as i}from"./object-table-BCMniGH5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B-8AR-WS.js";import"./Table-BK9mPHED.js";import"./index-Du12mPUJ.js";import"./Dialog-Ddsywm3S.js";import"./cross-D85Hg8OP.js";import"./svgIconContainer-Bzq4qT7m.js";import"./useBaseUiId-CpQ8jfP-.js";import"./InternalBackdrop-BCahMtwn.js";import"./composite-BCA7ssjy.js";import"./index-DAVqPwR5.js";import"./index-CTNdmRCH.js";import"./index-C-UHVdd5.js";import"./useEventCallback-BqydB81L.js";import"./SkeletonBar-DNThCLH9.js";import"./LoadingCell-CpIup8j7.js";import"./ColumnConfigDialog-BLnr_Ssi.js";import"./DraggableList-Q1AkYwIE.js";import"./search-DpfM7OJ3.js";import"./Input-MtWlDuZi.js";import"./useControlled-dRwpZLWP.js";import"./Button-CbXsMpDo.js";import"./small-cross-BdXSABdt.js";import"./ActionButton-Bikf6G7r.js";import"./Checkbox-BK8rsuCR.js";import"./useValueChanged-D95RiMEI.js";import"./CollapsiblePanel-qsyp5uP7.js";import"./MultiColumnSortDialog-CrFxJwbI.js";import"./MenuTrigger-Cd_2Jq9c.js";import"./CompositeItem-BHaHERWU.js";import"./ToolbarRootContext-BTqh8qKL.js";import"./getDisabledMountTransitionStyles-q1RxA6aN.js";import"./getPseudoElementBounds-DUGfes6K.js";import"./chevron-down-DCGqt8p6.js";import"./index-DVvQaOMD.js";import"./error-DhCIc3En.js";import"./BaseCbacBanner-CSMzJcXJ.js";import"./makeExternalStore-B9-sDT_L.js";import"./Tooltip-DFuWFTMp.js";import"./PopoverPopup-DZI317gO.js";import"./debounce-Ble3VJ_v.js";import"./useOsdkClient-qXeZXSCS.js";import"./tick-Dk_XebTk.js";import"./DropdownField-CEnTX5QL.js";import"./isEqual-BHNs_CPb.js";import"./withOsdkMetrics-BwVYFtll.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
