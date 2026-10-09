import{f as p,j as e}from"./iframe-DX-l5oxf.js";import{O as i}from"./object-table-CMeRtf6m.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BOWhuEYI.js";import"./Table-D8LXq3-7.js";import"./index-hUdVkOSF.js";import"./Dialog-C1obDNrb.js";import"./cross-DToDNxNQ.js";import"./svgIconContainer-DSaf8hGr.js";import"./useBaseUiId-BTelihs1.js";import"./InternalBackdrop-DD9gAX9c.js";import"./composite-DHW7DpWZ.js";import"./index-CvzBQu91.js";import"./index-DKU9qBjC.js";import"./index-BDesfFDk.js";import"./useEventCallback-lUzYahFI.js";import"./SkeletonBar-Dxx28Vqn.js";import"./LoadingCell-ByCc7EKm.js";import"./ColumnConfigDialog-BPZNMrlq.js";import"./DraggableList-CJwwr4Yf.js";import"./search-DT7eSnzT.js";import"./Input-CqfuiCDH.js";import"./useControlled-CE0B1UP9.js";import"./Button-Bia0gDW5.js";import"./small-cross-uN8t5TW7.js";import"./ActionButton-C9oV7lmY.js";import"./Checkbox-B7wFdEVK.js";import"./useValueChanged-Daouhnb_.js";import"./CollapsiblePanel-BHApUmp_.js";import"./MultiColumnSortDialog-BJ890ujW.js";import"./MenuTrigger-C67nlkhF.js";import"./CompositeItem-BsouXCK9.js";import"./ToolbarRootContext-PE3H7k4f.js";import"./getDisabledMountTransitionStyles-CoQlRch0.js";import"./getPseudoElementBounds-Ifrg8lN5.js";import"./chevron-down-D6qpfBFJ.js";import"./index-DoliQ3t-.js";import"./error-BJoLJTeb.js";import"./BaseCbacBanner-iBkMCvPn.js";import"./makeExternalStore-Djn3Ds7r.js";import"./Tooltip-DVY46vFo.js";import"./PopoverPopup-D_QYRjKS.js";import"./debounce-C3gGtxAY.js";import"./useOsdkClient-PSxxWjKh.js";import"./tick-B4vi0CcG.js";import"./DropdownField-BbcYs9HM.js";import"./isEqual-BvWz3r_F.js";import"./withOsdkMetrics-DEq0VNPe.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
