import{f as p,j as e}from"./iframe-C5mCK2PO.js";import{O as i}from"./object-table-Csnyr5o0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B71-F3-E.js";import"./Table-CAoCD-r3.js";import"./index-x2FMdUXO.js";import"./Dialog-BUKOY0Bm.js";import"./cross-C2KqS3Pb.js";import"./svgIconContainer-jCGuJEaw.js";import"./useBaseUiId-CRwAptA4.js";import"./InternalBackdrop-CiAJU9Y9.js";import"./composite-DhwPvOlp.js";import"./index-CXO1mTHj.js";import"./index-DqURmoPO.js";import"./index-DFhuUbBY.js";import"./useEventCallback-DyFcPFjY.js";import"./SkeletonBar-PJRGOQI5.js";import"./LoadingCell-CQE0kFzu.js";import"./ColumnConfigDialog-DC8fdFoU.js";import"./DraggableList-C6E2mjha.js";import"./search-QRaPLFIx.js";import"./Input-ClKT9i6x.js";import"./useControlled-B76SscLe.js";import"./Button-QzVHZwrk.js";import"./small-cross-CFmTQ2DK.js";import"./ActionButton-BXbp-XTu.js";import"./Checkbox-Byyu80XK.js";import"./useValueChanged-a0LJAptk.js";import"./CollapsiblePanel-CvCqtl8y.js";import"./MultiColumnSortDialog-9GFPfOFK.js";import"./MenuTrigger-CDg2Tml1.js";import"./CompositeItem-CcgiUeN1.js";import"./ToolbarRootContext-Bjoxw1BG.js";import"./getDisabledMountTransitionStyles-Bgm3-BfC.js";import"./getPseudoElementBounds-BP73-JGK.js";import"./chevron-down-DkRHA-R2.js";import"./index-BYdvbw5G.js";import"./error-9wJAHEot.js";import"./BaseCbacBanner-CCanzxJR.js";import"./makeExternalStore-Dpr3oewV.js";import"./Tooltip-JfIAa3Wv.js";import"./PopoverPopup-C9KSsLOP.js";import"./debounce-CypeZyyS.js";import"./useOsdkClient-BLLliW7s.js";import"./tick-uKXRfO2h.js";import"./DropdownField-B_zeyfsK.js";import"./isEqual-DmC_VlXk.js";import"./withOsdkMetrics-Cx5_Zqh1.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
