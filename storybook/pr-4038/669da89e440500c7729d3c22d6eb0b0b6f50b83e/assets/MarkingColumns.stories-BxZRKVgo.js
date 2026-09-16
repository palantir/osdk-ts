import{f as p,j as e}from"./iframe-CFSd_ghT.js";import{O as i}from"./object-table-C-erOY28.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ZllT-xST.js";import"./Table-Kg2JFIUp.js";import"./index-BVC2DtDE.js";import"./Dialog-D1UeKJjR.js";import"./cross-Pk2YzKDQ.js";import"./svgIconContainer-CuLuTWV9.js";import"./useBaseUiId-Bi512Q4g.js";import"./InternalBackdrop-KQmr3-ne.js";import"./composite-rhm-ES_j.js";import"./index-CX8cSHY9.js";import"./index-PmO53gZu.js";import"./index-CeP15cDX.js";import"./useEventCallback-DwcyWwyP.js";import"./SkeletonBar-DjQkHXkX.js";import"./LoadingCell-CEBP-9hU.js";import"./ColumnConfigDialog-BudUXmYY.js";import"./DraggableList-DiKHUeGr.js";import"./search-CiZh2SnD.js";import"./Input-B266R5K5.js";import"./useControlled-CUIixQM1.js";import"./Button-CII42J6y.js";import"./small-cross-DefbWUHG.js";import"./ActionButton-DyXI2aTY.js";import"./Checkbox-BCew5jIG.js";import"./useValueChanged-D-s1qoWy.js";import"./CollapsiblePanel-D8d1ogGm.js";import"./MultiColumnSortDialog-LJp1m9Qr.js";import"./MenuTrigger-MZrC_UOb.js";import"./CompositeItem-DvZYqwOH.js";import"./ToolbarRootContext-87swm1F0.js";import"./getDisabledMountTransitionStyles-LtEOHvLP.js";import"./getPseudoElementBounds-GHyUotEa.js";import"./chevron-down-CkZ0acRz.js";import"./index-C6yQCaVG.js";import"./error-QrCIC66e.js";import"./BaseCbacBanner-DorfSfUc.js";import"./makeExternalStore-BPSbFC_f.js";import"./Tooltip-Qcx9gV6X.js";import"./PopoverPopup-CZqjkl0j.js";import"./debounce-Cqi7OFEi.js";import"./useOsdkClient-C-wItY3f.js";import"./tick-Bd_VGJ-8.js";import"./DropdownField-BXoQO-Qa.js";import"./isEqual-D5p16SRy.js";import"./withOsdkMetrics-D3lDS6Ow.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
