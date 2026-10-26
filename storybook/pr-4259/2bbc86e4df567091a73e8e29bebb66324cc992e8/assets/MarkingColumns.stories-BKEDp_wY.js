import{f as p,j as e}from"./iframe-DgHq46dL.js";import{O as i}from"./object-table-B1bhT_Ev.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-2OibLDKZ.js";import"./Table-BW-cZJps.js";import"./index-BhPwX7yA.js";import"./Dialog-CfUAJ5Id.js";import"./cross-kmyKn-Hd.js";import"./svgIconContainer-D-eVzjwP.js";import"./useBaseUiId-DraHxLhq.js";import"./InternalBackdrop-BUAi9chw.js";import"./composite-B03IEoiJ.js";import"./index-pFDv9Z-0.js";import"./index-oCxycBs6.js";import"./index-BRwM8whp.js";import"./useEventCallback-xbbbX8qB.js";import"./SkeletonBar-_tavPjlr.js";import"./LoadingCell-Dt4wFO8Z.js";import"./ColumnConfigDialog-mKt1jQlT.js";import"./DraggableList-CN2YLXt6.js";import"./search-DW3-Ki40.js";import"./Input-o88S38RY.js";import"./useControlled-C_PKKkAE.js";import"./Button-CSx6Joum.js";import"./small-cross-DhXPHsHQ.js";import"./ActionButton-DUzQV33t.js";import"./Checkbox-CQr_pjeY.js";import"./useValueChanged-ENf__CxN.js";import"./CollapsiblePanel-CZZTgzig.js";import"./MultiColumnSortDialog-CfT6ktlR.js";import"./MenuTrigger-XgVinso0.js";import"./CompositeItem-BY7KoFBl.js";import"./ToolbarRootContext-CNYHni6P.js";import"./getDisabledMountTransitionStyles-Ce2xSAU9.js";import"./getPseudoElementBounds-DBFuRRXN.js";import"./chevron-down-BFQTfWqg.js";import"./index-Jhdjr3A-.js";import"./error-D8zFMP2p.js";import"./BaseCbacBanner-Co-b00WN.js";import"./makeExternalStore-D1CTkdeT.js";import"./Tooltip-b-GnJ4b5.js";import"./PopoverPopup-Bpii6JB2.js";import"./debounce-gBlNcefK.js";import"./useOsdkClient-Cx_VxcYG.js";import"./tick-BcwK5wdE.js";import"./DropdownField-B3ISwKsz.js";import"./isEqual-C1tKOgi9.js";import"./withOsdkMetrics-CAH3qcfi.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
