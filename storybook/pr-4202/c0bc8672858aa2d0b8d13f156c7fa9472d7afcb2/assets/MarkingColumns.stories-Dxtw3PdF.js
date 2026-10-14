import{f as p,j as e}from"./iframe-DIE5EIel.js";import{O as i}from"./object-table-CaoiWXaB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CcEYMKBV.js";import"./Table-D9AdOswb.js";import"./index-gAWb2dR9.js";import"./Dialog-BP0ffE7w.js";import"./cross-siN9VgW1.js";import"./svgIconContainer-Rj0rqZar.js";import"./useBaseUiId-DU3L5eHE.js";import"./InternalBackdrop-bmHbSXL3.js";import"./composite-DJfb-Teu.js";import"./index-C3GNYR7s.js";import"./index-DMxLJ88X.js";import"./index-BZq84Z7C.js";import"./useEventCallback-B0bLIt0P.js";import"./SkeletonBar-D76bwfQy.js";import"./LoadingCell-B6b6ghEr.js";import"./ColumnConfigDialog-B6ZffT4C.js";import"./DraggableList-DI8sydkc.js";import"./search-UnQR1AsU.js";import"./Input-Co7zI1L-.js";import"./useControlled-ddG6ulVP.js";import"./Button-DGriahwu.js";import"./small-cross-lJu3Ep8h.js";import"./ActionButton-8CkxKFOD.js";import"./Checkbox-BJkvdg_F.js";import"./useValueChanged-DM4JlENq.js";import"./CollapsiblePanel-DQyn2L9g.js";import"./MultiColumnSortDialog-CqpZOBHM.js";import"./MenuTrigger-C2K-9tUf.js";import"./CompositeItem-Crvs63Hb.js";import"./ToolbarRootContext-DFNBF5NL.js";import"./getDisabledMountTransitionStyles-CwBqMOC1.js";import"./getPseudoElementBounds-Bwg4v7rW.js";import"./chevron-down-CUqhLbkD.js";import"./index-CPNhCNUx.js";import"./error-aWHvmhUp.js";import"./BaseCbacBanner-CDjIDA9k.js";import"./makeExternalStore-DI81UbPt.js";import"./Tooltip-Cned3Nwd.js";import"./PopoverPopup-CLAGuQ7U.js";import"./debounce-DepqpmZg.js";import"./useOsdkClient-DwzaMKsX.js";import"./tick-C7X7rsGG.js";import"./DropdownField-C-mwMtZa.js";import"./isEqual-CABNp4vG.js";import"./withOsdkMetrics-BWchHor7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
