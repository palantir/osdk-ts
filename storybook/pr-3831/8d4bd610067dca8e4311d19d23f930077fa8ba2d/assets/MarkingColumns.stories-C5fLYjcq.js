import{f as p,j as e}from"./iframe-QSknsibA.js";import{O as i}from"./object-table-DLsBAGD5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B3LrgdxU.js";import"./Table-BsAnMen_.js";import"./index-B_OK08DX.js";import"./Dialog-B_zFcXLg.js";import"./cross-mnCq1uQ2.js";import"./svgIconContainer-De7GUSo3.js";import"./useBaseUiId-56xqlUOA.js";import"./InternalBackdrop-DLNy9f8e.js";import"./composite-rTqajcpw.js";import"./index-Cf49gatU.js";import"./index-DchscfH7.js";import"./index-CsRUh4p0.js";import"./useEventCallback-BNFo9jqT.js";import"./SkeletonBar-U8s5a4eZ.js";import"./LoadingCell-CFl1Ne9K.js";import"./ColumnConfigDialog-DToErAYq.js";import"./DraggableList-BduB1LxV.js";import"./search-D5SBe6yO.js";import"./Input-DSWKb0xV.js";import"./useControlled-DGsWq6rv.js";import"./isEqual-DOlanfjM.js";import"./isObject-KrdndNs4.js";import"./Button-Bl3RvClX.js";import"./ActionButton-CK5g_2j-.js";import"./Checkbox-ByXXs2vR.js";import"./useValueChanged-Cc7DEmXa.js";import"./CollapsiblePanel-D10wD81P.js";import"./MultiColumnSortDialog-BWQjojtp.js";import"./MenuTrigger-madZLcXv.js";import"./CompositeItem-DQqMAMfP.js";import"./ToolbarRootContext-D15HbZ6L.js";import"./getDisabledMountTransitionStyles-DLDAhr3d.js";import"./getPseudoElementBounds-CO-qv3XB.js";import"./chevron-down-CmOKY8Hu.js";import"./index-DRj4Fndf.js";import"./error-C_PHjA_A.js";import"./BaseCbacBanner-B7GtJmuI.js";import"./makeExternalStore-ClhVK885.js";import"./Tooltip-C03NNvk7.js";import"./PopoverPopup-DR9rKf_2.js";import"./toNumber-D_d6GRXM.js";import"./useOsdkClient-CDT1l2-s.js";import"./tick-CXORmvZn.js";import"./DropdownField-aW2MkhBu.js";import"./withOsdkMetrics-CLccy0f7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
