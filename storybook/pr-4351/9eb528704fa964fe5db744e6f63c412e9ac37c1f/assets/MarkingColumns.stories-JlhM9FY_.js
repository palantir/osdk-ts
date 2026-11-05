import{f as p,j as e}from"./iframe-CCpQdKcM.js";import{O as i}from"./object-table-DR1wy5nV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BcC5NClT.js";import"./Table-DNG7-1A6.js";import"./index-D5kRSGTL.js";import"./Dialog-bwrhhn8j.js";import"./cross-BC47wddT.js";import"./svgIconContainer-D0YWtwPv.js";import"./useBaseUiId-wkrh1dan.js";import"./InternalBackdrop-0tCSKsfM.js";import"./composite-BPsF8oXT.js";import"./index-vQ0gYfTZ.js";import"./index-Da9G4TOJ.js";import"./index-BmXZZFpC.js";import"./useEventCallback-CsPxOccP.js";import"./SkeletonBar-BkJLIidD.js";import"./LoadingCell-CC1cY9v2.js";import"./ColumnConfigDialog-Bb79T2dQ.js";import"./DraggableList-CjjMI6hn.js";import"./search-Bo8XWJqp.js";import"./Input-DqLoo56V.js";import"./useControlled-D4_I-zYv.js";import"./Button-B4X_MUbo.js";import"./small-cross-CAUesoy1.js";import"./ActionButton-CHEJ8NBC.js";import"./Checkbox-7x6DDuqf.js";import"./useValueChanged-DJDOwxxY.js";import"./CollapsiblePanel-wkRu-vQO.js";import"./MultiColumnSortDialog-DNHdb5ol.js";import"./MenuTrigger-BOkD9n0V.js";import"./CompositeItem-BtN-TT4o.js";import"./ToolbarRootContext-Dxu4wH7j.js";import"./getDisabledMountTransitionStyles-DBiOGOcl.js";import"./getPseudoElementBounds-BEDo5e11.js";import"./chevron-down-DF5kUyWB.js";import"./index-BLKb_bgJ.js";import"./error-CnylztP4.js";import"./BaseCbacBanner-BR709oO7.js";import"./makeExternalStore-CdAfQAQ3.js";import"./Tooltip-VwjYwtbN.js";import"./PopoverPopup-CVqq9jQl.js";import"./debounce-Dbh2BnKn.js";import"./useOsdkClient-DPTADJgv.js";import"./tick-D7yVxnRA.js";import"./DropdownField-BU_Oq5Hk.js";import"./isEqual-3yoq74id.js";import"./withOsdkMetrics-Kob29Pb2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
