import{f as p,j as e}from"./iframe-j16wUfsG.js";import{O as i}from"./object-table-BCkM1bv0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B5KNJanK.js";import"./Table-DUtbUPZe.js";import"./index-PZXuwR22.js";import"./Dialog-Ba90sm6K.js";import"./cross-hlLbslg_.js";import"./svgIconContainer-DyYG3yIN.js";import"./useBaseUiId-BT4BDOeF.js";import"./InternalBackdrop-CDEbkKEG.js";import"./composite-B2eetiSQ.js";import"./index-BBXEyrHX.js";import"./index-BKBAw2oy.js";import"./index-DTWb0ngO.js";import"./useEventCallback-ryqefgdq.js";import"./SkeletonBar-D7pRmDQH.js";import"./LoadingCell-CHsb-nzQ.js";import"./ColumnConfigDialog-ERHE9gvP.js";import"./DraggableList-cVSW0vVW.js";import"./search-BeO1HXe9.js";import"./Input-ChvjdPlR.js";import"./useControlled-DFdkoakd.js";import"./Button-BsHl7luh.js";import"./small-cross-C0ihpIaZ.js";import"./ActionButton-DswyMU6B.js";import"./Checkbox-wSboXymt.js";import"./useValueChanged-CO-asJqE.js";import"./CollapsiblePanel-Cmv4sQtD.js";import"./MultiColumnSortDialog-C8l1RJoW.js";import"./MenuTrigger-BEOUTCDD.js";import"./CompositeItem-BYEj7bp3.js";import"./ToolbarRootContext-DOjYoz5M.js";import"./getDisabledMountTransitionStyles-_4E5aWO0.js";import"./getPseudoElementBounds-qqBqkqSW.js";import"./chevron-down-CPDFF9dW.js";import"./index-Soy9Caj3.js";import"./error-DyJKKGYF.js";import"./BaseCbacBanner-DW3GIQns.js";import"./makeExternalStore-CIGBfPKm.js";import"./Tooltip-CmOBTmaj.js";import"./PopoverPopup-CtZcaNrD.js";import"./debounce-BCylpfiq.js";import"./useOsdkClient-CHpRljBm.js";import"./tick-BvU0208f.js";import"./DropdownField-CtNMPrH-.js";import"./isEqual-D44AHoS1.js";import"./withOsdkMetrics-DopDBPQL.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
