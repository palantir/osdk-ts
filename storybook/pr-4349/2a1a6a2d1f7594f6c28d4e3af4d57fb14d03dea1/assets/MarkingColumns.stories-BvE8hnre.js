import{f as p,j as e}from"./iframe-_xCtEPM4.js";import{O as i}from"./object-table-CX2vqi2p.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BvkLr_T8.js";import"./Table-Bpb1awiB.js";import"./index-BBF2nMyv.js";import"./Dialog-DAIDfao_.js";import"./cross-YJjC_kdM.js";import"./svgIconContainer-5YMx1lyC.js";import"./useBaseUiId-qq3Q_R-A.js";import"./InternalBackdrop-Dhb2Gme1.js";import"./composite-RG9aVNdC.js";import"./index-Ch2OG5I0.js";import"./index-oRHr0Ey_.js";import"./index-Czl8XPIs.js";import"./useEventCallback-jAZccFQT.js";import"./SkeletonBar-BWH5Ax4a.js";import"./LoadingCell-wQaM50Dl.js";import"./ColumnConfigDialog-BJ2OMihb.js";import"./DraggableList-W2XCxLEj.js";import"./search-EgEnIgJy.js";import"./Input-CbxbAG1i.js";import"./useControlled-BqnjfWyt.js";import"./Button-B5hG9nBO.js";import"./small-cross-CbC-3xN6.js";import"./ActionButton-C2zs3wiy.js";import"./Checkbox-BSNrs3M6.js";import"./useValueChanged-MMHfjh9x.js";import"./CollapsiblePanel-ZHKipLnY.js";import"./MultiColumnSortDialog-CTjvt41u.js";import"./MenuTrigger-BDeOM6rc.js";import"./CompositeItem-C0afETt6.js";import"./ToolbarRootContext-B_pkS0jH.js";import"./getDisabledMountTransitionStyles-DbKz4kaQ.js";import"./getPseudoElementBounds-FFlb83uV.js";import"./chevron-down-Dgi1lUDW.js";import"./index-Dp_8qpaL.js";import"./error-CPk-KRIB.js";import"./BaseCbacBanner-9tAX29-P.js";import"./makeExternalStore-DP7fUFlc.js";import"./Tooltip-CRHJdF88.js";import"./isObject-BjXVlsmF.js";import"./debounce-BLKiEPm1.js";import"./useOsdkClient-CsHMVj33.js";import"./tick-BpxRmUp6.js";import"./DropdownField-DARaJilg.js";import"./isEqual-BODadTDI.js";import"./_baseIsEqual-CQEQ0Dmr.js";import"./withOsdkMetrics-Sswq0Wu_.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
