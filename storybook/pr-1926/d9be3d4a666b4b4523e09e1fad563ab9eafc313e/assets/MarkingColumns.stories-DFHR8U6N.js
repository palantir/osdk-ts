import{f as p,j as e}from"./iframe-CPzX1uSk.js";import{O as i}from"./object-table-BLYmji7X.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BV_2dDRe.js";import"./Table-DiecgVVT.js";import"./index-COJJFOT5.js";import"./Dialog-DpOd0WRd.js";import"./cross-CrQPe3Ah.js";import"./svgIconContainer-BUGQNNP_.js";import"./useBaseUiId-Dlz6RJMI.js";import"./InternalBackdrop-ICDvYA-3.js";import"./composite-BpWI7eGy.js";import"./index-bgG3RNaT.js";import"./index-Ce1oZCaV.js";import"./index-BFdAxWey.js";import"./useEventCallback-_Omzy9f1.js";import"./SkeletonBar-DscMDxVg.js";import"./LoadingCell-C_0EDqol.js";import"./ColumnConfigDialog-xTF2dYRe.js";import"./DraggableList-Bg8CiRyW.js";import"./search-DbyDvw8l.js";import"./Input-BcH8rlzt.js";import"./useControlled-C6jvEykx.js";import"./Button-Bp9aDI8N.js";import"./small-cross-7guhEJxW.js";import"./ActionButton-ZZbDa446.js";import"./Checkbox-DMURKGRH.js";import"./useValueChanged-BdmTJ_Td.js";import"./CollapsiblePanel-1OBlzHqi.js";import"./MultiColumnSortDialog-DGwUDAAJ.js";import"./MenuTrigger-BOhlA6os.js";import"./CompositeItem-BddFvRMc.js";import"./ToolbarRootContext-ddrpupWn.js";import"./getDisabledMountTransitionStyles-B_mC_X_B.js";import"./getPseudoElementBounds-Czhjand4.js";import"./chevron-down-C8Owk0H7.js";import"./index-Cz0_03bE.js";import"./error-DwSWgrLn.js";import"./BaseCbacBanner-1Sh0I2-t.js";import"./makeExternalStore-DLgjxXB4.js";import"./Tooltip-DbjgG31A.js";import"./PopoverPopup-DsbqH6LM.js";import"./debounce-DokDeayM.js";import"./useOsdkClient-C9BVIZ8E.js";import"./tick-DiJrDoSw.js";import"./DropdownField-CDKK8b_W.js";import"./isEqual-D0b9prfR.js";import"./withOsdkMetrics-XJdj0BYd.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
