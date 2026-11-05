import{f as p,j as e}from"./iframe-CW0iR0MW.js";import{O as i}from"./object-table-CrA9n11I.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DPNRA16C.js";import"./Table-BDGBmK8s.js";import"./index-R4-e3PKI.js";import"./Dialog-CHAkM0Dh.js";import"./cross-CVgDD36J.js";import"./svgIconContainer-DRg1K7b0.js";import"./useBaseUiId-bY0lVTzO.js";import"./InternalBackdrop-Al1qNZ5B.js";import"./composite-CEDiNU-s.js";import"./index-Bj6P2ewC.js";import"./index-Wh16gVsR.js";import"./index-2WJCxASE.js";import"./useEventCallback-69j61YHl.js";import"./SkeletonBar-D-B4kIIV.js";import"./LoadingCell-SCdbsDKo.js";import"./ColumnConfigDialog-BbGcrO0V.js";import"./DraggableList-B9g0bCHY.js";import"./search-DRF2IcSw.js";import"./Input-CEvDm9oX.js";import"./useControlled-BZraJw4c.js";import"./Button-IemAbPn8.js";import"./small-cross-DgOHAIuf.js";import"./ActionButton-DRpKJjXE.js";import"./Checkbox-CKlutVsm.js";import"./useValueChanged-DMC3zyLc.js";import"./CollapsiblePanel-CvSxsX2O.js";import"./MultiColumnSortDialog-Bx89fbf_.js";import"./MenuTrigger-CM7WtocU.js";import"./CompositeItem-nFLipZIC.js";import"./ToolbarRootContext-Dfjrxij8.js";import"./getDisabledMountTransitionStyles-Do6amAXt.js";import"./getPseudoElementBounds-CdhAL6Na.js";import"./chevron-down-ChPXe2UO.js";import"./index-CQ_ZQBXs.js";import"./error-QdPzuwdp.js";import"./BaseCbacBanner-QNuKrHdU.js";import"./makeExternalStore-GoUNmYeo.js";import"./Tooltip-VY0XkLAP.js";import"./PopoverPopup-CHZlmgc5.js";import"./debounce-B76dCMlT.js";import"./useOsdkClient-D98LXdIX.js";import"./tick-D-TsA4-V.js";import"./DropdownField-CxC5gxxi.js";import"./isEqual-DV8lhnxQ.js";import"./withOsdkMetrics-CaRNNLKc.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
