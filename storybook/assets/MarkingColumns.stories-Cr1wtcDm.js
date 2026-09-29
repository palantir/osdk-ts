import{f as p,j as e}from"./iframe-Cu9w7jcH.js";import{O as i}from"./object-table-Bn0AzQbY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CWqMgw5D.js";import"./index-CISo5zfR.js";import"./Dialog-DdDrC9tX.js";import"./cross-B8KHmrzZ.js";import"./svgIconContainer-Dw0CoQx7.js";import"./useBaseUiId-BjT3tUdU.js";import"./InternalBackdrop-DDT8m1IB.js";import"./composite-CQfO24RT.js";import"./index-D8iZ8WU_.js";import"./index-DiQpPnIR.js";import"./index-DqpMoyiI.js";import"./useEventCallback-BWcmln1Y.js";import"./SkeletonBar-DdY3k6U9.js";import"./LoadingCell-COlUHupL.js";import"./ColumnConfigDialog-03GqgHqt.js";import"./DraggableList-DYftbGXA.js";import"./search-BN3GL8EC.js";import"./Input-B4v38P0N.js";import"./useControlled-8gLzMwC4.js";import"./Button-D273o8ES.js";import"./small-cross-D6DQ7NJv.js";import"./ActionButton-CjgGx4Lw.js";import"./Checkbox-Ii7m0dCL.js";import"./useValueChanged-Be9YjO8J.js";import"./CollapsiblePanel-BGK9MEKX.js";import"./MultiColumnSortDialog-DaU2lZLl.js";import"./MenuTrigger-DYsls7wD.js";import"./CompositeItem-kmbcRbAD.js";import"./ToolbarRootContext-TnMpdXUN.js";import"./getDisabledMountTransitionStyles-BqP1cavL.js";import"./getPseudoElementBounds-BT81kHqt.js";import"./chevron-down-C5muOK6K.js";import"./index-DkVw3DhA.js";import"./error-DCGe0X_V.js";import"./BaseCbacBanner-CITuvEvV.js";import"./makeExternalStore-ChDoBLQb.js";import"./Tooltip-B-4lupYo.js";import"./PopoverPopup-BD-mSjSu.js";import"./debounce-Bt8yXtd0.js";import"./useOsdkClient-DUbXAUGd.js";import"./tick-Blb6T-l7.js";import"./DropdownField-CxinIrMS.js";import"./isEqual-CvVjxDCI.js";import"./withOsdkMetrics-DguEd9bl.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
