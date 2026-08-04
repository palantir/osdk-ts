import{f as p,j as e}from"./iframe-1PpanLKH.js";import{O as i}from"./object-table-DKLmPO6t.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-KbEEj-xI.js";import"./Table-CNbx3zhx.js";import"./index-DutAlB9I.js";import"./Dialog-BtbAVd1C.js";import"./cross-B81yz6Sm.js";import"./svgIconContainer-BTfz0b1A.js";import"./useBaseUiId-BGjDyvEb.js";import"./InternalBackdrop-DCSqCRIy.js";import"./composite-mNL3yU55.js";import"./index-CZZk-Abr.js";import"./index-Cl3lKny9.js";import"./index-CjyX8nll.js";import"./useEventCallback-DGpaXIwz.js";import"./SkeletonBar-CScL0kpZ.js";import"./LoadingCell-CZD1du6C.js";import"./ColumnConfigDialog-BWKbz7wm.js";import"./DraggableList-BJCgs_DS.js";import"./search-BQm_FR5T.js";import"./Input-BTGhw7E0.js";import"./useControlled-CZ2Sf3a4.js";import"./isEqual-MQGefaUb.js";import"./isObject-Cphu3l9r.js";import"./Button-ClnJ7iaU.js";import"./ActionButton-aEm9ZF7b.js";import"./Checkbox-HsVbNP3G.js";import"./useValueChanged-CSWge7ov.js";import"./CollapsiblePanel-D64JSrE9.js";import"./MultiColumnSortDialog-Y8vhGMI3.js";import"./MenuTrigger-DvTL38-U.js";import"./CompositeItem-C1t_VxXC.js";import"./ToolbarRootContext-BraDwkQj.js";import"./getDisabledMountTransitionStyles-m9FIhcWY.js";import"./getPseudoElementBounds-CgCq7XrE.js";import"./chevron-down-D52zl500.js";import"./index-C5a1k7X-.js";import"./error-Dg_355wt.js";import"./BaseCbacBanner-DV8glVk7.js";import"./makeExternalStore-DGwHvp7m.js";import"./Tooltip-BG6es-kZ.js";import"./PopoverPopup-B5dFMJZn.js";import"./toNumber-1xMJb8Nd.js";import"./useOsdkClient-DGV6rCBM.js";import"./tick-Cl67SPEm.js";import"./DropdownField-RPOil0nl.js";import"./withOsdkMetrics-D0Tce0be.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
