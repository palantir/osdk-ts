import{f as p,j as e}from"./iframe-CT0ueW5J.js";import{O as i}from"./object-table-CuIVWNvc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CJAqHn_u.js";import"./Table-DNWrt4ow.js";import"./index-BnCCNHc8.js";import"./Dialog-D0qPzayg.js";import"./cross-Cyv96KiS.js";import"./svgIconContainer-IfNYosH4.js";import"./useBaseUiId-sdgRlT1f.js";import"./InternalBackdrop-IMT1pB90.js";import"./composite-DKQtJrfK.js";import"./index-C9OqCYVT.js";import"./index-BjzTUR_u.js";import"./index-D9FtuD0I.js";import"./useEventCallback-CgkxQMVg.js";import"./SkeletonBar-BOkXS-5U.js";import"./LoadingCell-CNvEEV9y.js";import"./ColumnConfigDialog-DQ0S7ega.js";import"./DraggableList-CvAtHR4t.js";import"./search-LkIpH0hE.js";import"./Input-DATuNACb.js";import"./useControlled-FL95Cn3G.js";import"./Button-ICT0IjE_.js";import"./small-cross-B5bSG8T4.js";import"./ActionButton-DUhBWnTe.js";import"./Checkbox-apvi8FHa.js";import"./useValueChanged-BH-DNPTf.js";import"./CollapsiblePanel-C_pT0bYR.js";import"./MultiColumnSortDialog-Dumy50Un.js";import"./MenuTrigger-DBO5k-3Z.js";import"./CompositeItem-iZ_HyQEG.js";import"./ToolbarRootContext-B-rHXnnf.js";import"./getDisabledMountTransitionStyles-C5eHg9LA.js";import"./getPseudoElementBounds-CX5xt4_X.js";import"./chevron-down-CY0HcTjS.js";import"./index-BLIQsvSb.js";import"./error-D7Pe4Z66.js";import"./BaseCbacBanner-CrHErys3.js";import"./makeExternalStore-DU28tiTB.js";import"./Tooltip-C8DWe441.js";import"./PopoverPopup-wk_1VcH9.js";import"./debounce-D8sdisyq.js";import"./useOsdkClient-DaWrwNax.js";import"./tick-DafMeIZ7.js";import"./DropdownField-BRVEW7-m.js";import"./isEqual-DAtG9i0o.js";import"./withOsdkMetrics-HMzwH_1Q.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
