import{f as p,j as e}from"./iframe-TTTmSYHm.js";import{O as i}from"./object-table-Br4ipIAQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ClYOkReB.js";import"./Table-B2Fm57Ri.js";import"./index-MsEGuD0o.js";import"./Dialog-DELJOsWQ.js";import"./cross-DqugLD6r.js";import"./svgIconContainer-DU6hcGdL.js";import"./useBaseUiId-DzbI9-Sb.js";import"./InternalBackdrop-mImnYcgQ.js";import"./composite-BPJ0g_Cp.js";import"./index-CF7SEcu1.js";import"./index-Cqp_2UpH.js";import"./index-B9nxHhHn.js";import"./useEventCallback-BjYhRPw3.js";import"./SkeletonBar-Bu7s4m6h.js";import"./LoadingCell-BHnTaYLh.js";import"./ColumnConfigDialog-BL2ky_X9.js";import"./DraggableList-BdnVzN0F.js";import"./search-CpIo6FKV.js";import"./Input-B2lkln1U.js";import"./useControlled-bG7LsTar.js";import"./Button-D_Pqa9bY.js";import"./small-cross-CNQD1rAJ.js";import"./ActionButton-kMMiGbeY.js";import"./Checkbox-Bl7Mxayg.js";import"./useValueChanged-BXWrU09i.js";import"./CollapsiblePanel-ExecBSLk.js";import"./MultiColumnSortDialog--EIsLxx4.js";import"./MenuTrigger-BKoeXidj.js";import"./CompositeItem-DOKaGOjC.js";import"./ToolbarRootContext-Da-vX-iu.js";import"./getDisabledMountTransitionStyles-DvLD3XZY.js";import"./getPseudoElementBounds-C3b80VkD.js";import"./chevron-down-BWZ8_fkX.js";import"./index-DKumu57d.js";import"./error-BU0mbQfC.js";import"./BaseCbacBanner-Ct-Zyv71.js";import"./makeExternalStore-BiPnQfDm.js";import"./Tooltip-Dz8LBLaM.js";import"./PopoverPopup-Ezl5Gloz.js";import"./debounce-COnGppqi.js";import"./useOsdkClient-ATs7aeG_.js";import"./tick-F9zQ07Eh.js";import"./DropdownField-Cmj70H5z.js";import"./isEqual-YNXKjBKf.js";import"./withOsdkMetrics-C1xKtNKq.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
