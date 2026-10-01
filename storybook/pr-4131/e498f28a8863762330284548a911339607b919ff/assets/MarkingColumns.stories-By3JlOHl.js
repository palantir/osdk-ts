import{f as p,j as e}from"./iframe-Cq4acRIY.js";import{O as i}from"./object-table-DuMafEqP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-MAyNwQdY.js";import"./Table-Do8VfApl.js";import"./index-6eoOxZ40.js";import"./Dialog-OrHvj4CR.js";import"./cross-DLXEiws_.js";import"./svgIconContainer-BeKF9m8R.js";import"./useBaseUiId-Bjm3kLfn.js";import"./InternalBackdrop-ZRlsvZtW.js";import"./composite-Bn47_cTN.js";import"./index-DrCCi1us.js";import"./index-Dc9EpWSo.js";import"./index-B7t6srrF.js";import"./useEventCallback-CADbmtD_.js";import"./SkeletonBar-C0SjzaHH.js";import"./LoadingCell-BfDvBYY_.js";import"./ColumnConfigDialog-CJEry8HR.js";import"./DraggableList-CAPWhBBo.js";import"./search-CRBn2Ssp.js";import"./Input-X1xzUJ9h.js";import"./useControlled-BhrnnSyx.js";import"./Button-w2RzDLnC.js";import"./small-cross-wqGzzNw8.js";import"./ActionButton-_1SeHqVp.js";import"./Checkbox-CoM_pVH5.js";import"./useValueChanged-C3a9CBJ-.js";import"./CollapsiblePanel-CikQJlXN.js";import"./MultiColumnSortDialog-BWH4pc3f.js";import"./MenuTrigger-fgadhFvO.js";import"./CompositeItem-C3jCGG7J.js";import"./ToolbarRootContext-sZwDlHkO.js";import"./getDisabledMountTransitionStyles-BpVDf7Q-.js";import"./getPseudoElementBounds-ChlKB1vb.js";import"./chevron-down-CdL9km5b.js";import"./index-BZTiDrQp.js";import"./error-CIJkAMmO.js";import"./BaseCbacBanner-C7IyRrIS.js";import"./makeExternalStore-dDHEgDbO.js";import"./Tooltip-DDRhmX6J.js";import"./PopoverPopup-D_YXiba0.js";import"./debounce-h0anxrhI.js";import"./useOsdkClient-B_yscWOF.js";import"./tick-BjD_cp-Z.js";import"./DropdownField-Dr1qUQl2.js";import"./isEqual-BWalVZoe.js";import"./withOsdkMetrics-DB5TXya2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
