import{f as p,j as e}from"./iframe-BBQqV7U9.js";import{O as i}from"./object-table-D7u15GeV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CVQ1baRe.js";import"./Table-CnsNBf97.js";import"./index-Ccu1K6sd.js";import"./Dialog-q_v5Xg8F.js";import"./cross-CLzE3-U3.js";import"./svgIconContainer-CRTQuoXb.js";import"./useBaseUiId-Dsfw9F53.js";import"./InternalBackdrop-BIv1AHkl.js";import"./composite-DPcfFrpY.js";import"./index-ZnEAsqFI.js";import"./index-ClxSTfiH.js";import"./index-DqaWGGCa.js";import"./useEventCallback-uKTkkZyA.js";import"./SkeletonBar-HBi6e13b.js";import"./LoadingCell-B6A2BqYe.js";import"./ColumnConfigDialog-DrTKXHFL.js";import"./DraggableList-yTg1mUHX.js";import"./search-BdhLBc1_.js";import"./Input-CA-eUSvn.js";import"./useControlled-DUvtrOZ4.js";import"./isEqual-B7PpS1xT.js";import"./isObject-DfWIbGg2.js";import"./Button-B4yyWPOD.js";import"./ActionButton-BU_vTHaY.js";import"./Checkbox-DJ4dHMDU.js";import"./useValueChanged-DA7v_8S6.js";import"./CollapsiblePanel-C93hoIT6.js";import"./MultiColumnSortDialog-OI1nJRIk.js";import"./MenuTrigger-B1C32Uw-.js";import"./CompositeItem-CLHj5IXS.js";import"./ToolbarRootContext-DYDg93Tz.js";import"./getDisabledMountTransitionStyles-Gx5EPjB-.js";import"./getPseudoElementBounds-CGcJJbuE.js";import"./chevron-down-BJIBE26H.js";import"./index-DMl_Vf4z.js";import"./error-DEwCksyH.js";import"./BaseCbacBanner-DPS344tB.js";import"./makeExternalStore-bluMvUON.js";import"./Tooltip-BtQm_rU4.js";import"./PopoverPopup-C0fZFnMd.js";import"./toNumber-DMwC3zyd.js";import"./useOsdkClient-C5jZZ8Yd.js";import"./tick-DV02YD3e.js";import"./DropdownField-B4_BYITd.js";import"./withOsdkMetrics-C6vhPq3k.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
