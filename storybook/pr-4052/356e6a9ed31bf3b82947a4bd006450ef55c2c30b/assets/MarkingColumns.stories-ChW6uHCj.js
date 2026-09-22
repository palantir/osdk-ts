import{f as p,j as e}from"./iframe-BJw8xZnq.js";import{O as i}from"./object-table-CV9CfMOU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C2M64jAW.js";import"./Table--X2vlNvm.js";import"./index-OZdfTJJN.js";import"./Dialog-C6bZdgnl.js";import"./cross-ayN7c-y5.js";import"./svgIconContainer-BD36YhX4.js";import"./useBaseUiId-DWHIjuQg.js";import"./InternalBackdrop-7aYdMSzr.js";import"./composite-BmKPsG7H.js";import"./index-HEHrx6Vm.js";import"./index-CIQ7NXi0.js";import"./index-DwCLziCf.js";import"./useEventCallback-BUxi4iJJ.js";import"./SkeletonBar-C_Mx4TPl.js";import"./LoadingCell-Gi2iLYRu.js";import"./ColumnConfigDialog-B2iCppyX.js";import"./DraggableList-CmCo9PIT.js";import"./search-DuV2mZJ_.js";import"./Input-DNqdhRno.js";import"./useControlled-CmyWRfbd.js";import"./Button-DER1yH7e.js";import"./small-cross-BczxdS3W.js";import"./ActionButton-CPTKvkGq.js";import"./Checkbox-BTlV08fZ.js";import"./useValueChanged-XcNypFDC.js";import"./CollapsiblePanel-DCUNFkEE.js";import"./MultiColumnSortDialog-BnQFcJMo.js";import"./MenuTrigger-DBEWtO6_.js";import"./CompositeItem-DURcqFyw.js";import"./ToolbarRootContext-CQeuoYdu.js";import"./getDisabledMountTransitionStyles-CS4l_9WU.js";import"./getPseudoElementBounds-aUPqgKrY.js";import"./chevron-down-DDWnpoJ_.js";import"./index-nvfKD9w9.js";import"./error-DreCvNNp.js";import"./BaseCbacBanner-eIucyAuW.js";import"./makeExternalStore-BEcA8UuC.js";import"./Tooltip-Dm91FxLr.js";import"./PopoverPopup-DyJ-hgtR.js";import"./debounce-B2aA8tZ4.js";import"./useOsdkClient-5xfZ-Z4n.js";import"./tick-DNZxoz-8.js";import"./DropdownField-y9HzYpWx.js";import"./isEqual-CbDouTcU.js";import"./withOsdkMetrics-BnQETS83.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
