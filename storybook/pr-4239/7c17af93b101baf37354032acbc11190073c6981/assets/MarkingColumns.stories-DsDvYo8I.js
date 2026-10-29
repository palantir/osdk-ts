import{f as p,j as e}from"./iframe-BXMaRU6d.js";import{O as i}from"./object-table-DZwAmuc0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-m1fl9yzx.js";import"./Table-hCJx8EAj.js";import"./index-D34UCeFi.js";import"./Dialog-DyZjmmlP.js";import"./cross-MZH7NFlC.js";import"./svgIconContainer-M8lsqLmU.js";import"./useBaseUiId-CnVJ9pTQ.js";import"./InternalBackdrop-Cr2zqXSQ.js";import"./composite-CTlCsHkl.js";import"./index-C36yrfOW.js";import"./index-BtCN2h1R.js";import"./index-Cy-78AF4.js";import"./useEventCallback-Rp-dYNNH.js";import"./SkeletonBar-Bq1t_P3v.js";import"./LoadingCell-4BCksriU.js";import"./ColumnConfigDialog-B6uFBm9n.js";import"./DraggableList-NCX9u6Mi.js";import"./search-B6DdGciv.js";import"./Input-B62f65LS.js";import"./useControlled-CqKbYNY-.js";import"./Button-DtbuXO0-.js";import"./small-cross-DKwt6Bqu.js";import"./ActionButton-CE9KfMfn.js";import"./Checkbox-B0Dt0FcT.js";import"./useValueChanged-CcVyEc1Q.js";import"./CollapsiblePanel-D3ddVpva.js";import"./MultiColumnSortDialog-DdD2HwOZ.js";import"./MenuTrigger-D0vPsvrL.js";import"./CompositeItem-CxCbcCcw.js";import"./ToolbarRootContext-01ULS3om.js";import"./getDisabledMountTransitionStyles-BvsTv5-I.js";import"./getPseudoElementBounds-ChoJiaDP.js";import"./chevron-down-ByBb-_AI.js";import"./index-CLYhKnEi.js";import"./error-DqaLhFsi.js";import"./BaseCbacBanner-f48-IYcu.js";import"./makeExternalStore-DZLA8zoV.js";import"./Tooltip-Bn2GpGak.js";import"./PopoverPopup-mvEM4RXX.js";import"./debounce-Cu2khlmU.js";import"./useOsdkClient-D2KP4OFp.js";import"./tick-D0-iauHd.js";import"./DropdownField-lw-NWBQn.js";import"./isEqual-BvAueMPn.js";import"./withOsdkMetrics-DErkFYVR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
