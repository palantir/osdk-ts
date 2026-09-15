import{f as p,j as e}from"./iframe-W9lZ6KB9.js";import{O as i}from"./object-table-EVBvwLH1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-FRDH_-i6.js";import"./Table-BwylGEhj.js";import"./index-zvENON5K.js";import"./Dialog-B9eCYEci.js";import"./cross-BA2Nf7ni.js";import"./svgIconContainer-GBMBocam.js";import"./useBaseUiId-CM8bj9T3.js";import"./InternalBackdrop-CxePxxDd.js";import"./composite-Dds-kjO9.js";import"./index-Do1aQnY4.js";import"./index-CiBIb1Hm.js";import"./index-ChcUrjTS.js";import"./useEventCallback-D0v7edrX.js";import"./SkeletonBar-D_VpdDsY.js";import"./LoadingCell-DTNeNwbU.js";import"./ColumnConfigDialog-De6q3yEz.js";import"./DraggableList-DmrQs1J0.js";import"./search-DtUsUWlr.js";import"./Input-BE9q1hzT.js";import"./useControlled-BibYMAkB.js";import"./Button-Cgco6Fdx.js";import"./small-cross-C2YcwmE1.js";import"./ActionButton-D1zQD0P_.js";import"./Checkbox-DetNGzt5.js";import"./useValueChanged-CclPVhvR.js";import"./CollapsiblePanel-Cz6nNrqA.js";import"./MultiColumnSortDialog-zMiz0Q2L.js";import"./MenuTrigger-U49E4e1V.js";import"./CompositeItem-9LwIi5rO.js";import"./ToolbarRootContext-DwUbHsl_.js";import"./getDisabledMountTransitionStyles-DN13DrMz.js";import"./getPseudoElementBounds-DgIVsabS.js";import"./chevron-down-CPOSM9ve.js";import"./index-WuDXyzt9.js";import"./error-DJOARvPR.js";import"./BaseCbacBanner-DHDCpkMg.js";import"./makeExternalStore-Bh-hA2FN.js";import"./Tooltip-B0ah55oe.js";import"./PopoverPopup-BW5x1WJ1.js";import"./debounce-AKwKS-26.js";import"./useOsdkClient-CfTr_FGX.js";import"./tick-CTwnnC4O.js";import"./DropdownField-f_oplqdE.js";import"./isEqual-Bdk7YwEU.js";import"./withOsdkMetrics-BEDTYsPk.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
