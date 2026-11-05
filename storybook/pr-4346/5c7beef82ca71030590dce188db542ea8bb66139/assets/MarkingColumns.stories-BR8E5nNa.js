import{f as p,j as e}from"./iframe-NpRIbPdx.js";import{O as i}from"./object-table-BHfrYftR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-OSq5jQkX.js";import"./Table-CF5s51ja.js";import"./index-CY16uySw.js";import"./Dialog-BDhuSFkv.js";import"./cross-D_KA-OEe.js";import"./svgIconContainer-D56q5fZV.js";import"./useBaseUiId-B58WCAya.js";import"./InternalBackdrop-CyQ0qo1z.js";import"./composite-BuQ8bNLj.js";import"./index-BeW67UVI.js";import"./index-Bhk4lf9n.js";import"./index-Btpa_jjb.js";import"./useEventCallback-BQn_UK38.js";import"./SkeletonBar-fAm3YbtB.js";import"./LoadingCell-cH6j09za.js";import"./ColumnConfigDialog-B6YIquQg.js";import"./DraggableList-CzYvzisU.js";import"./search-BQKjluR2.js";import"./Input-geD0QmM7.js";import"./useControlled-C_x2TKVp.js";import"./Button-B7hLTnAe.js";import"./small-cross-DnJ4w8jW.js";import"./ActionButton-Dz0ucYQ4.js";import"./Checkbox-C7f6nBhb.js";import"./useValueChanged-Bju82j-V.js";import"./CollapsiblePanel-Uw9lqt-L.js";import"./MultiColumnSortDialog-uWtN7dz7.js";import"./MenuTrigger-Da_E-lAo.js";import"./CompositeItem-9iq6yCgJ.js";import"./ToolbarRootContext-zUNFbjuY.js";import"./getDisabledMountTransitionStyles-B_lO8q9e.js";import"./getPseudoElementBounds-Ix_nmD-p.js";import"./chevron-down-BnVBaJX5.js";import"./index-DdBpKYEV.js";import"./error-B8p2hdA4.js";import"./BaseCbacBanner-BmsZwYA9.js";import"./makeExternalStore-he_3GqFk.js";import"./Tooltip-DVLHEN3u.js";import"./PopoverPopup-pjnshs8Z.js";import"./debounce-BHEHv-OY.js";import"./useOsdkClient-yMbsmr2e.js";import"./tick-DOsn7mMx.js";import"./DropdownField-3vS_OVvb.js";import"./isEqual-D8HIEQ-D.js";import"./withOsdkMetrics-RYSsSWu2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
