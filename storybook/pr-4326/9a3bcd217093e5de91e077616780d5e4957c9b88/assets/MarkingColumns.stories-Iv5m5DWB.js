import{f as p,j as e}from"./iframe-BSBY3PjJ.js";import{O as i}from"./object-table-by3GvYNO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DpSdlFS8.js";import"./Table-DyL3FyVA.js";import"./index-DK106w7q.js";import"./Dialog-D-VCZ-Xj.js";import"./cross-ChnkwhQq.js";import"./svgIconContainer-CVR7Tkh3.js";import"./useBaseUiId-BWCrzuEr.js";import"./InternalBackdrop-BAAE8sPY.js";import"./composite-iYZqsZLy.js";import"./index-DVvqS1th.js";import"./index-CKbXy3Dj.js";import"./index-tq3mLcAa.js";import"./useEventCallback-Cz9YIY33.js";import"./SkeletonBar-C6FAa51I.js";import"./LoadingCell-B1hHHivN.js";import"./ColumnConfigDialog-xZIDScDz.js";import"./DraggableList-BayLOggI.js";import"./search-D4Uipsbf.js";import"./Input-DLFn8nXq.js";import"./useControlled-Ki3OxTZR.js";import"./Button-DyRQe702.js";import"./small-cross-DYeQuCck.js";import"./ActionButton-C4rmndSw.js";import"./Checkbox-C0f3x1KO.js";import"./useValueChanged-srC6xFPd.js";import"./CollapsiblePanel-BIFNkFs4.js";import"./MultiColumnSortDialog-DhGJANiF.js";import"./MenuTrigger-C6BZNbBa.js";import"./CompositeItem-B9uKrben.js";import"./ToolbarRootContext-5qjYeV0P.js";import"./getDisabledMountTransitionStyles-CnzqGvPD.js";import"./getPseudoElementBounds-B4FwyunF.js";import"./chevron-down-BHUr8iy5.js";import"./index-YAOpnUoq.js";import"./error-iycxY9-l.js";import"./BaseCbacBanner-CPgeKTE0.js";import"./makeExternalStore-DU_ddruH.js";import"./Tooltip-BAR8Dcp7.js";import"./PopoverPopup-B_rMzGeU.js";import"./debounce-0JtHt6-L.js";import"./useOsdkClient-COaUlzkH.js";import"./tick-CwHYlOtH.js";import"./DropdownField-DL8lskl1.js";import"./isEqual-C70Oa3sU.js";import"./withOsdkMetrics-C3TRqwn-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
