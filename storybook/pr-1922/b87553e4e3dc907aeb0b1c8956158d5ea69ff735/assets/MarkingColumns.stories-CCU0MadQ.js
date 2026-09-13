import{f as p,j as e}from"./iframe-DBDT7cai.js";import{O as i}from"./object-table-DWATCIRa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CZUIUplp.js";import"./Table-Cdi5X52U.js";import"./index-DNPTs4g2.js";import"./Dialog-Ddy2ySQe.js";import"./cross-DXxcDe7j.js";import"./svgIconContainer-DGCHmuI4.js";import"./useBaseUiId-PRKCGqGz.js";import"./InternalBackdrop-BF5e8bQ9.js";import"./composite-L0L9oW-4.js";import"./index-BsC2sM8x.js";import"./index-kRLOqZpZ.js";import"./index-DCbu_JVG.js";import"./useEventCallback-Dl-swTIN.js";import"./SkeletonBar-DkOilBCf.js";import"./LoadingCell-DXk9-iPx.js";import"./ColumnConfigDialog-CUUOeaZ7.js";import"./DraggableList-C-Djqrfn.js";import"./search-CWHw7Uqg.js";import"./Input-CitZWzLR.js";import"./useControlled-BkrcSri5.js";import"./Button-DP4lNjcp.js";import"./small-cross-DnW6JuIQ.js";import"./ActionButton-DWWhEIcJ.js";import"./Checkbox-CL3C-6Dk.js";import"./useValueChanged-IVDgNvAJ.js";import"./CollapsiblePanel-lWl1OUcH.js";import"./MultiColumnSortDialog-BurrW54K.js";import"./MenuTrigger-DFZTen_H.js";import"./CompositeItem-LxcE4aIz.js";import"./ToolbarRootContext-CsenKUBi.js";import"./getDisabledMountTransitionStyles-BrqcKlYq.js";import"./getPseudoElementBounds-Nk1mGNF0.js";import"./chevron-down-BPXQkSQg.js";import"./index-CBFMIrtK.js";import"./error-OvuTWF-e.js";import"./BaseCbacBanner-BRlz0IYZ.js";import"./makeExternalStore-CP2a49qE.js";import"./Tooltip-Dhugh288.js";import"./PopoverPopup-BgEfDDqS.js";import"./debounce-COvZkwXR.js";import"./useOsdkClient-zmFqX8ua.js";import"./tick-C4TGfFfS.js";import"./DropdownField-CCG2cNMr.js";import"./isEqual-CcV2w9Lh.js";import"./withOsdkMetrics-C04fN_3L.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
