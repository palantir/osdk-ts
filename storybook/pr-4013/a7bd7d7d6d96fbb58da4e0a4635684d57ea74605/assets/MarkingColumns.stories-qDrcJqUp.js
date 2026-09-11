import{f as p,j as e}from"./iframe-q73h-SNz.js";import{O as i}from"./object-table-KjuvFoNU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BvXISORE.js";import"./Table-BS6ZxxSV.js";import"./index-CNgILQVN.js";import"./Dialog-X4SIqq2i.js";import"./cross-UurqhnpQ.js";import"./svgIconContainer-BnJjPefi.js";import"./useBaseUiId-BT4TVIMU.js";import"./InternalBackdrop-3dmgnm-B.js";import"./composite-DsUUOBpL.js";import"./index-CmcHR3Mh.js";import"./index-GTDJrYHL.js";import"./index-CE_isF10.js";import"./useEventCallback-DHiiVSQq.js";import"./SkeletonBar-CyVdL5QR.js";import"./LoadingCell-BKwB91ug.js";import"./ColumnConfigDialog-Cuo6i1hm.js";import"./DraggableList-DYXgWAZz.js";import"./search-CyIDS8Xl.js";import"./Input-CUYY-XQS.js";import"./useControlled-CIDCJXAS.js";import"./Button-DMD0TrjN.js";import"./small-cross-KtqmkdiH.js";import"./ActionButton-DUEoS-Oq.js";import"./Checkbox-CnshtcrJ.js";import"./useValueChanged-vcJ35Sa1.js";import"./CollapsiblePanel-D1igOUIW.js";import"./MultiColumnSortDialog-chUbYR3p.js";import"./MenuTrigger-Dfchi1IP.js";import"./CompositeItem-8Q0GNXmT.js";import"./ToolbarRootContext-XN_eoe5I.js";import"./getDisabledMountTransitionStyles-dAfff5JR.js";import"./getPseudoElementBounds-BcUe90OX.js";import"./chevron-down-CcztAG1Q.js";import"./index-CgMWGLyW.js";import"./error-BBRDAF1W.js";import"./BaseCbacBanner-D5GS6fO6.js";import"./makeExternalStore-CvHnGZr3.js";import"./Tooltip-C1ULjr5P.js";import"./PopoverPopup-Djh0qu5C.js";import"./debounce-DSfFacxB.js";import"./useOsdkClient-CVuR42rF.js";import"./tick-CDEBgOjy.js";import"./DropdownField-DpBuPkD-.js";import"./isEqual-DRblV8Co.js";import"./withOsdkMetrics-mt0BkM0o.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
