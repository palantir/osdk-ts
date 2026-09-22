import{f as p,j as e}from"./iframe-X-VSGX-m.js";import{O as i}from"./object-table-B2d0hZTW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BSxm0T4I.js";import"./Table-CNIiGJ4k.js";import"./index-CGDH48tf.js";import"./Dialog-tDFf3QqW.js";import"./cross-CrghqoWd.js";import"./svgIconContainer-BdGqJkEg.js";import"./useBaseUiId-BBsjPzS0.js";import"./InternalBackdrop-CcwzaUSK.js";import"./composite-BZ7oE03c.js";import"./index-DSvAdAem.js";import"./index-C6OnhXV1.js";import"./index-CsJagvQr.js";import"./useEventCallback-BQT_oghC.js";import"./SkeletonBar-BmODE2fF.js";import"./LoadingCell-cVz6RH1p.js";import"./ColumnConfigDialog-D0NNCoU5.js";import"./DraggableList-DF-Zow-U.js";import"./search-CzcR_jWd.js";import"./Input-CjGosPl8.js";import"./useControlled-CS7Ud3A1.js";import"./Button-BvYXLNva.js";import"./small-cross-uFhshZcJ.js";import"./ActionButton-6IO1Kg5J.js";import"./Checkbox-eVoBaSOe.js";import"./useValueChanged-D6DhfqaH.js";import"./CollapsiblePanel-Bg9eBIxx.js";import"./MultiColumnSortDialog-BASSaWaa.js";import"./MenuTrigger-bMq7gUJg.js";import"./CompositeItem-Dt-41Y4b.js";import"./ToolbarRootContext-CAbB3DSY.js";import"./getDisabledMountTransitionStyles-C88V7r9e.js";import"./getPseudoElementBounds-BMlsPGB0.js";import"./chevron-down-Z8wpnP0p.js";import"./index-Daq_EkrJ.js";import"./error-D6m_rkvI.js";import"./BaseCbacBanner-CByeRFhZ.js";import"./makeExternalStore-CDBEj4Yx.js";import"./Tooltip-DQt_Cnav.js";import"./PopoverPopup-CiCOaPLV.js";import"./debounce-Bzn4rKQW.js";import"./useOsdkClient-BeU_8fLS.js";import"./tick-BYWClfY9.js";import"./DropdownField-C4WdNJVH.js";import"./isEqual-Z7jCKQSG.js";import"./withOsdkMetrics-hcsSE1Yl.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
