import{f as p,j as e}from"./iframe-DugxyHXW.js";import{O as i}from"./object-table-7pPwAMRd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-sKHH7dZZ.js";import"./Table-Fy8p0ukL.js";import"./index-BnymHSBX.js";import"./Dialog-hoMNh3xw.js";import"./cross-BSDPKBN8.js";import"./svgIconContainer-BhR3_WjC.js";import"./useBaseUiId-DXSoLqlj.js";import"./InternalBackdrop-C5PVGWxl.js";import"./composite-B6PfDTrv.js";import"./index-DEsgQO2-.js";import"./index-C1eIh-0N.js";import"./index-OCBhvrRs.js";import"./useEventCallback-BWN3beAb.js";import"./SkeletonBar-DTF20Ls3.js";import"./LoadingCell-Cs5Ui_Mh.js";import"./ColumnConfigDialog-BNfKn6pP.js";import"./DraggableList-Br-ROzH9.js";import"./search-HmVN54vs.js";import"./Input-D5dfXCf5.js";import"./useControlled-CrSksIZl.js";import"./Button-Dr2gNfRq.js";import"./small-cross-DLi0JibG.js";import"./ActionButton-PxTm-wqz.js";import"./Checkbox-DwqZQOlu.js";import"./useValueChanged-D8LItfM_.js";import"./CollapsiblePanel-EgTSYgZn.js";import"./MultiColumnSortDialog-CFQFDd5R.js";import"./MenuTrigger-CTsDP6tB.js";import"./CompositeItem-V75ZZ8Nq.js";import"./ToolbarRootContext-Cl7j9rKh.js";import"./getDisabledMountTransitionStyles-DB3JFAJ8.js";import"./getPseudoElementBounds-Ck5edXWa.js";import"./chevron-down-BHed8mrw.js";import"./index-BbAAxPka.js";import"./error-DAzclkpO.js";import"./BaseCbacBanner-BO6UZWW2.js";import"./makeExternalStore-WS2cTnp-.js";import"./Tooltip-GeR-nHC8.js";import"./PopoverPopup-lrG87DA3.js";import"./debounce-SsrRBLaw.js";import"./useOsdkClient-CjZHpbU9.js";import"./tick-BpCxOvMz.js";import"./DropdownField-Dd9c5Emh.js";import"./isEqual-8_9WHdsY.js";import"./withOsdkMetrics-x8dgsXC7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
