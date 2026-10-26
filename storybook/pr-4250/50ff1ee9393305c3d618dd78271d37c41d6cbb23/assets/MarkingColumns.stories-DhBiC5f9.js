import{f as p,j as e}from"./iframe-DLqxDfy6.js";import{O as i}from"./object-table-DCiMN1GF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CR03nPFs.js";import"./Table-Blng5lgm.js";import"./index-DvJ5FsVz.js";import"./Dialog-DLaQBa3e.js";import"./cross-_XB01iuh.js";import"./svgIconContainer-siAEGujy.js";import"./useBaseUiId-FG2DzWS6.js";import"./InternalBackdrop-BdVK5n-m.js";import"./composite-Bp3q5gsu.js";import"./index-DDPWTNxY.js";import"./index-CN3BhaNE.js";import"./index-B5UrRZWQ.js";import"./useEventCallback-CkXPCxJ3.js";import"./SkeletonBar-BDVOGHkd.js";import"./LoadingCell-BxA-A9Y0.js";import"./ColumnConfigDialog-BTMHdW5b.js";import"./DraggableList-BMCBjTOK.js";import"./search-GkSvXq-b.js";import"./Input-CWq-CC7y.js";import"./useControlled-DTSmocRM.js";import"./Button-X3mSZ2fF.js";import"./small-cross-RqoJ2JIq.js";import"./ActionButton-DBD5MXXU.js";import"./Checkbox-DTAknTmW.js";import"./useValueChanged-Dtu8G-Bz.js";import"./CollapsiblePanel-DqOXsBJw.js";import"./MultiColumnSortDialog-DAA0NyF0.js";import"./MenuTrigger-m8V75G0u.js";import"./CompositeItem-B4qptw8k.js";import"./ToolbarRootContext-DcKYwC3S.js";import"./getDisabledMountTransitionStyles-DNfc66vB.js";import"./getPseudoElementBounds-DQ39nn50.js";import"./chevron-down-D8Abc2XY.js";import"./index-Bx9TpkCr.js";import"./error-D8ORw_lv.js";import"./BaseCbacBanner-CJQgdRO8.js";import"./makeExternalStore-B-39pyxw.js";import"./Tooltip-DQ-6PpWV.js";import"./PopoverPopup-DxKG4t8k.js";import"./debounce-Dr-1fVLW.js";import"./useOsdkClient-BijjMken.js";import"./tick-CV4p6HDo.js";import"./DropdownField-B5dfcEAD.js";import"./isEqual-CZWeAwCV.js";import"./withOsdkMetrics-DR4XRGWA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
