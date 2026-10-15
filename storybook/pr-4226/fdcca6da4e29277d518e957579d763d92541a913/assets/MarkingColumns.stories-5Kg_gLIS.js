import{f as p,j as e}from"./iframe-B6ilqw57.js";import{O as i}from"./object-table-YvUTv0RO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D-9CJsjA.js";import"./Table-DxotyaED.js";import"./index-DbyNdYIV.js";import"./Dialog-C48tkAvG.js";import"./cross-DPKuiR4p.js";import"./svgIconContainer-cN2FPQGz.js";import"./useBaseUiId-DHE-id5O.js";import"./InternalBackdrop-CMe-Gh9-.js";import"./composite-DlL-mJ_3.js";import"./index-P1JTOsnm.js";import"./index-Df4HlJX1.js";import"./index-CVmOQE98.js";import"./useEventCallback-CpyAivRw.js";import"./SkeletonBar-DpcdXqqq.js";import"./LoadingCell-DdvMbUk8.js";import"./ColumnConfigDialog-B7V5mAol.js";import"./DraggableList-DfFj4dUH.js";import"./search-QZJd4Wc4.js";import"./Input-DWSs0FOD.js";import"./useControlled-B3abm0PF.js";import"./Button-dJtUFXII.js";import"./small-cross-D3G7vTv6.js";import"./ActionButton-BEqEK5Xi.js";import"./Checkbox-qSC09PM1.js";import"./useValueChanged-D5nzYuqC.js";import"./CollapsiblePanel-B7_nvTjp.js";import"./MultiColumnSortDialog-DWw4hToi.js";import"./MenuTrigger-BEldzrty.js";import"./CompositeItem-C4j1wUUU.js";import"./ToolbarRootContext-DC1oDeWo.js";import"./getDisabledMountTransitionStyles-DpUjid9g.js";import"./getPseudoElementBounds-CU-tnlvo.js";import"./chevron-down-CMdh2Fjb.js";import"./index-FPD_SzEe.js";import"./error-DqxELFjs.js";import"./BaseCbacBanner-Cp5mWgH0.js";import"./makeExternalStore-C_9OaqSF.js";import"./Tooltip-S82UM2K1.js";import"./PopoverPopup-B6N4zjBr.js";import"./debounce-Cr6ef7Zd.js";import"./useOsdkClient-CEMDVQcB.js";import"./tick-DFqE3VKw.js";import"./DropdownField-B2xi4c23.js";import"./isEqual-BaTqElux.js";import"./withOsdkMetrics-D8k6BHrp.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
