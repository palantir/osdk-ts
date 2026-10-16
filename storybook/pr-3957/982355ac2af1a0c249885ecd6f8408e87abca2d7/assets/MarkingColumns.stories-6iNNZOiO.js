import{f as p,j as e}from"./iframe-Ce3jEZMI.js";import{O as i}from"./object-table-fxytz55c.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-zFlo1Ag_.js";import"./Table-BL5ga0ku.js";import"./index-BWRu0lVk.js";import"./Dialog-Be9HqrM_.js";import"./cross-BA6yBz5j.js";import"./svgIconContainer-C7wsxhu-.js";import"./useBaseUiId-QnL0ah19.js";import"./InternalBackdrop-CQpmpxtx.js";import"./composite-ow-DJQ4K.js";import"./index-BVVmi8IY.js";import"./index-BJoSdgxJ.js";import"./index-Cmpp0QHi.js";import"./useEventCallback-D_jfiLDi.js";import"./SkeletonBar-BQO0I3KZ.js";import"./LoadingCell-DAN027-W.js";import"./ColumnConfigDialog-DEvO2VXc.js";import"./DraggableList-kylZrf2H.js";import"./search-BNuIHYDK.js";import"./Input-k1XluRBB.js";import"./useControlled-CEIiJDdv.js";import"./Button-DAGPL7mA.js";import"./small-cross-CoufPZre.js";import"./ActionButton-BAsQofvL.js";import"./Checkbox-D4dNDvZA.js";import"./useValueChanged-a2NTFDpp.js";import"./CollapsiblePanel-ouQWdY0B.js";import"./MultiColumnSortDialog-Cq5hMlx5.js";import"./MenuTrigger-BJ0rypDg.js";import"./CompositeItem-MWi5EakA.js";import"./ToolbarRootContext-DrlyoX7_.js";import"./getDisabledMountTransitionStyles-Cul5wQT3.js";import"./getPseudoElementBounds-fhRNsuua.js";import"./chevron-down-BQlmJQrq.js";import"./index-NRrcQACQ.js";import"./error-C6zcgIRz.js";import"./BaseCbacBanner-9vIl52yc.js";import"./makeExternalStore-B7_0KDnK.js";import"./Tooltip-CeExzR4W.js";import"./PopoverPopup-BwxLotjv.js";import"./debounce-peDMT9hw.js";import"./useOsdkClient-DI2ZXji8.js";import"./tick-KK5E1r3y.js";import"./DropdownField-Di-ezqK8.js";import"./isEqual-w7HhHM5e.js";import"./withOsdkMetrics-Lf7fiJQ5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
