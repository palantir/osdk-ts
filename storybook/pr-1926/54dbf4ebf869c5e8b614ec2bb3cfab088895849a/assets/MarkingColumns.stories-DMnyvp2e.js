import{f as p,j as e}from"./iframe-BwOWKgX_.js";import{O as i}from"./object-table-BDiSc7pz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CPR62PUH.js";import"./Table-B2T1TGhc.js";import"./index-Cy1m0zFQ.js";import"./Dialog-COivJ3cu.js";import"./cross-CCQqgwU7.js";import"./svgIconContainer-BN-frImW.js";import"./useBaseUiId-CC40NyPk.js";import"./InternalBackdrop-B9JpRZ3R.js";import"./composite-5HVBLMjf.js";import"./index-QbVRyvTG.js";import"./index-Br-OMOFz.js";import"./index-BVlZlI2O.js";import"./useEventCallback-DrINjghl.js";import"./SkeletonBar-Dc2AA-f6.js";import"./LoadingCell-BO8avGLS.js";import"./ColumnConfigDialog-CNw5FP0h.js";import"./DraggableList-D9a5axqX.js";import"./search-veFLhVSL.js";import"./Input-C4nObfin.js";import"./useControlled-DtkYswSw.js";import"./Button-DB73z_31.js";import"./small-cross-BlP1jvir.js";import"./ActionButton-DkAR9cLt.js";import"./Checkbox-CKZq5Fzs.js";import"./useValueChanged-C1Mc10OI.js";import"./CollapsiblePanel-BudykPig.js";import"./MultiColumnSortDialog-C47aFgL8.js";import"./MenuTrigger-CvVag832.js";import"./CompositeItem-yrOlfAbz.js";import"./ToolbarRootContext-NPZeJvMR.js";import"./getDisabledMountTransitionStyles-B_SgiG18.js";import"./getPseudoElementBounds-Bb0h12GR.js";import"./chevron-down-C0sr0dH5.js";import"./index-M1eOB7Dy.js";import"./error-CH6xRFVZ.js";import"./BaseCbacBanner-Df1nef6R.js";import"./makeExternalStore-CfZpatI5.js";import"./Tooltip-BE9jXJb8.js";import"./PopoverPopup-BaDiWd_V.js";import"./debounce-CszU7kTQ.js";import"./useOsdkClient-C11OYUU2.js";import"./tick-CkNrFL8X.js";import"./DropdownField-_qdVV4Xj.js";import"./isEqual-BAAFAqmK.js";import"./withOsdkMetrics-B3eY7UZj.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
