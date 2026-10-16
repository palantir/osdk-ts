import{f as p,j as e}from"./iframe-CY1bley7.js";import{O as i}from"./object-table-A9mWQwEa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D3osyoeZ.js";import"./Table-D2T9VBKl.js";import"./index-rh2lseoR.js";import"./Dialog-Kvxxr7Fa.js";import"./cross-cJ3Efo1g.js";import"./svgIconContainer-CzZrnJM2.js";import"./useBaseUiId-DVcIvI44.js";import"./InternalBackdrop-XcwLG7Wl.js";import"./composite-CiwpWFDy.js";import"./index-Bn4JMmGr.js";import"./index-gS5-xXe0.js";import"./index-Cql1DwPR.js";import"./useEventCallback-0BkCCq-P.js";import"./SkeletonBar-DwIeclcD.js";import"./LoadingCell-C8KQ1Jim.js";import"./ColumnConfigDialog-B_LOG-aU.js";import"./DraggableList-BJQ1Cebx.js";import"./search-146DDh_k.js";import"./Input-DEo9NwDI.js";import"./useControlled-fFwZP0Ap.js";import"./Button-B5JcIIcB.js";import"./small-cross-C-dRKbNY.js";import"./ActionButton-DZcKNYBj.js";import"./Checkbox-Bmhg2B2y.js";import"./useValueChanged-L5FNnMzO.js";import"./CollapsiblePanel-DpxhAw9o.js";import"./MultiColumnSortDialog-vIHLXOvG.js";import"./MenuTrigger-Bgl9RjP3.js";import"./CompositeItem-BpiTOIyl.js";import"./ToolbarRootContext-rjSxP1dE.js";import"./getDisabledMountTransitionStyles-yZsKNqSB.js";import"./getPseudoElementBounds-FXB-giXH.js";import"./chevron-down-BiDqtejG.js";import"./index-DlXpweC6.js";import"./error-B6HE4awo.js";import"./BaseCbacBanner-CyYnHXV7.js";import"./makeExternalStore-Hj73T8jD.js";import"./Tooltip-CKa7DR8P.js";import"./PopoverPopup-CFM-iRBs.js";import"./debounce-DWtsOSeV.js";import"./useOsdkClient-hIZdaTDT.js";import"./tick-fClSJcEW.js";import"./DropdownField-BaFSMd8X.js";import"./isEqual-DoT9v07x.js";import"./withOsdkMetrics-Y9b7QhtM.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
