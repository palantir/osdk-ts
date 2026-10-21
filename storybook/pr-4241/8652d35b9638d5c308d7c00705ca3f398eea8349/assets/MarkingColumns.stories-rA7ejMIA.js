import{f as p,j as e}from"./iframe-q7KMYOTO.js";import{O as i}from"./object-table-DgO3tbVC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-6z_lVhDZ.js";import"./Table-D6GtNh9I.js";import"./index-Bu4qz67A.js";import"./Dialog-DyI3RKL7.js";import"./cross-GKTMVUJ_.js";import"./svgIconContainer-Lo22dyXX.js";import"./useBaseUiId-CDKYXFfl.js";import"./InternalBackdrop-SsdrZW55.js";import"./composite-msqnCEF7.js";import"./index-CbNuHbfY.js";import"./index-B07PL0k3.js";import"./index-DME5nm9i.js";import"./useEventCallback-DJZrmYeM.js";import"./SkeletonBar-Ccfu4MLI.js";import"./LoadingCell-CA6ibE3T.js";import"./ColumnConfigDialog-yv31C952.js";import"./DraggableList-UpJFnbaK.js";import"./search-BHHQGkAK.js";import"./Input-DS3b7656.js";import"./useControlled-wetohDUI.js";import"./Button-4IQspW2w.js";import"./small-cross-D3tEyg0V.js";import"./ActionButton-CNFIbDZG.js";import"./Checkbox-Cnr8ivVF.js";import"./useValueChanged-D5kaD1qi.js";import"./CollapsiblePanel-H_6Jafs5.js";import"./MultiColumnSortDialog-GqpWVh4K.js";import"./MenuTrigger-pX5S55rv.js";import"./CompositeItem-p-JPFChH.js";import"./ToolbarRootContext-Bn2kB8OQ.js";import"./getDisabledMountTransitionStyles-DhiQdtvX.js";import"./getPseudoElementBounds-BE8y4_SX.js";import"./chevron-down-CBifMXCi.js";import"./index-CPlC8aoM.js";import"./error-BS4T7RXs.js";import"./BaseCbacBanner-C8lw0HSZ.js";import"./makeExternalStore-CrT5GEV3.js";import"./Tooltip-CcU2cDQW.js";import"./PopoverPopup-DStAvLoC.js";import"./debounce-B7cPm2rs.js";import"./useOsdkClient-ZW2UQ2oM.js";import"./tick-DCE-nm-7.js";import"./DropdownField-BkshEdmJ.js";import"./isEqual-CLWJy1r7.js";import"./withOsdkMetrics-B9467pZU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
