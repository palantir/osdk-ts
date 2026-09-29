import{f as p,j as e}from"./iframe-BLyAG4qt.js";import{O as i}from"./object-table-NGNiskNG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-X2unNE1v.js";import"./Table-DBOtVTAg.js";import"./index-DRHjeWhY.js";import"./Dialog-Dc4tpC3L.js";import"./cross-zpmkdN3j.js";import"./svgIconContainer-BYhpNXbV.js";import"./useBaseUiId-BsqYTkrj.js";import"./InternalBackdrop-CwfcL7hz.js";import"./composite-DXp5HadG.js";import"./index-DSTh4XEz.js";import"./index-DfIb261n.js";import"./index-C9NYWSwp.js";import"./useEventCallback-6AhhLJg7.js";import"./SkeletonBar-DPmC_kej.js";import"./LoadingCell-D5DjHMWy.js";import"./ColumnConfigDialog-BC61SSau.js";import"./DraggableList-CDR_hlvX.js";import"./search-BnzIM1pO.js";import"./Input-COYDi8CV.js";import"./useControlled-vEPHT0r_.js";import"./Button-C4LVX8xd.js";import"./small-cross-D36GncLx.js";import"./ActionButton-CDA8eLMX.js";import"./Checkbox-CKtWNbzg.js";import"./useValueChanged-Csg5b8FM.js";import"./CollapsiblePanel-BMZ6E2uP.js";import"./MultiColumnSortDialog-DvjlzBJu.js";import"./MenuTrigger-D91NXJa0.js";import"./CompositeItem-DKNH-seI.js";import"./ToolbarRootContext-t3Sav1_0.js";import"./getDisabledMountTransitionStyles-DigoJAfC.js";import"./getPseudoElementBounds-CmuMJUdB.js";import"./chevron-down-Dl_PyCCQ.js";import"./index-D1BfEv3K.js";import"./error-CALDIyj0.js";import"./BaseCbacBanner-C0XhL7L-.js";import"./makeExternalStore-B6gSjutd.js";import"./Tooltip-BCO_7oJW.js";import"./PopoverPopup-B6km_FCr.js";import"./debounce-oQzszjOg.js";import"./useOsdkClient-BX4YSqf_.js";import"./tick-Mv4hM8lK.js";import"./DropdownField-BLxC4wsP.js";import"./isEqual-Djmdr7nK.js";import"./withOsdkMetrics-hrd9pp_O.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
