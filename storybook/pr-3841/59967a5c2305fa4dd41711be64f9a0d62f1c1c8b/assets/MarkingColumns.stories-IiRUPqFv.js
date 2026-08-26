import{f as p,j as e}from"./iframe-C-Tx6HWi.js";import{O as i}from"./object-table-Cf5MFxaA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DGI0evEf.js";import"./Table-CZHeyD1o.js";import"./index-D83LHBrr.js";import"./Dialog-r1D42-Ux.js";import"./cross-1eBPB5o6.js";import"./svgIconContainer-B0ue0tIb.js";import"./useBaseUiId-DmObUJIN.js";import"./InternalBackdrop-BUrvlczT.js";import"./composite-Cc9l10TW.js";import"./index-Br_EbTHZ.js";import"./index-BZnuPb4P.js";import"./index-lRbbaMu8.js";import"./useEventCallback-Q-L5djZk.js";import"./SkeletonBar-DoUtLMSm.js";import"./LoadingCell-BCjONaSV.js";import"./ColumnConfigDialog-giesQaTM.js";import"./DraggableList-Dcmngyiz.js";import"./search-DE-tamAG.js";import"./Input-CIq38a5l.js";import"./useControlled-OhGlr_am.js";import"./Button-C5vL1jQD.js";import"./small-cross-BepHp4Xz.js";import"./ActionButton-D-i2pL5W.js";import"./Checkbox-anlJ1-A9.js";import"./useValueChanged-Bp_MYZXj.js";import"./CollapsiblePanel-B_JSdAcK.js";import"./MultiColumnSortDialog-C7J6eDlO.js";import"./MenuTrigger-BD2OxlOZ.js";import"./CompositeItem-CqPIIJ4M.js";import"./ToolbarRootContext-V5A_2QeJ.js";import"./getDisabledMountTransitionStyles-nsF5d56f.js";import"./getPseudoElementBounds-DT0mYvTC.js";import"./chevron-down-Co2dXPpt.js";import"./index-C9VJ4ZCw.js";import"./error-DRRLvBR9.js";import"./BaseCbacBanner-B9_VmhHF.js";import"./makeExternalStore-Cp2BBvmZ.js";import"./Tooltip-BjpU_Knk.js";import"./PopoverPopup-C0yBx_TL.js";import"./debounce-D71Y9sGY.js";import"./useOsdkClient-C2VOm62_.js";import"./tick-BvEUUXuE.js";import"./DropdownField-CSrtnpGB.js";import"./isEqual-CRRlnMab.js";import"./withOsdkMetrics-XUw2KNZ5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
