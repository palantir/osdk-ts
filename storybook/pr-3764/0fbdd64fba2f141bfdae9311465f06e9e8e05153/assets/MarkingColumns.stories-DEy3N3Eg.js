import{f as p,j as e}from"./iframe-EWNiSOlz.js";import{O as i}from"./object-table-Uipb07KI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DINoBAyp.js";import"./Table-QoAP4mmD.js";import"./index-J8uMkFcT.js";import"./Dialog-CipO93Rx.js";import"./cross-D8UDZUVl.js";import"./svgIconContainer-i8Q-3NvR.js";import"./useBaseUiId-CbA5EQtD.js";import"./InternalBackdrop-DRn4jQWF.js";import"./composite-PBGFU2UH.js";import"./index-9MkXRS7h.js";import"./index-D-TWmAa9.js";import"./index-CZ5IyMT1.js";import"./useEventCallback-CRVVwfhq.js";import"./SkeletonBar-BCrT0Owt.js";import"./LoadingCell-C0h5XXfB.js";import"./ColumnConfigDialog-C2TZXtEN.js";import"./DraggableList-Dh_a88iA.js";import"./search-Ct4Cy4Cw.js";import"./Input-BLbu68-y.js";import"./useControlled-D0-X3QeL.js";import"./isEqual-B3gSTOQa.js";import"./isObject-DeF9seGk.js";import"./Button-NJGcULYm.js";import"./ActionButton-bhd-S6xZ.js";import"./Checkbox-D33aXMhq.js";import"./useValueChanged-CnR3ZXJ1.js";import"./CollapsiblePanel-DAnd43Yl.js";import"./MultiColumnSortDialog-XUB96F1J.js";import"./MenuTrigger-ita0ycJf.js";import"./CompositeItem-BxLQcrHq.js";import"./ToolbarRootContext-E7FpR2J5.js";import"./getDisabledMountTransitionStyles-qQlhRRpu.js";import"./getPseudoElementBounds-Bzj5pAC2.js";import"./chevron-down-B_x7olCL.js";import"./index-K2vh5oUT.js";import"./error-Bm5OuOKZ.js";import"./BaseCbacBanner-BRxxkIA1.js";import"./makeExternalStore-C-uT0tmI.js";import"./Tooltip-D8N1BZrp.js";import"./PopoverPopup-CUaaYVQa.js";import"./toNumber-CWbAo7JW.js";import"./useOsdkClient-DCWWGmw4.js";import"./tick-C3V4rDEB.js";import"./DropdownField-8TAGjNxo.js";import"./withOsdkMetrics-CgmzOPIb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
