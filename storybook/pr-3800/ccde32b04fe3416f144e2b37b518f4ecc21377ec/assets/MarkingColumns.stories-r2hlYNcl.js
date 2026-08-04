import{f as p,j as e}from"./iframe-C-MKJZyK.js";import{O as i}from"./object-table-DrMkrKLc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CU_HtoHz.js";import"./Table-BQy4tVWI.js";import"./index-CPYi5p-M.js";import"./Dialog-DJMsLC6L.js";import"./cross-DNu1Vd5q.js";import"./svgIconContainer-FX4i3D7t.js";import"./useBaseUiId-CgtQyAp-.js";import"./InternalBackdrop-BTkXGX7m.js";import"./composite-2YGSxd1T.js";import"./index-sYzrVFPx.js";import"./index-wyiBeFpI.js";import"./index-DNZsHthF.js";import"./useEventCallback-CJrcjSKs.js";import"./SkeletonBar-DpIoDv_h.js";import"./LoadingCell-DJ2Ze2g2.js";import"./ColumnConfigDialog-Bh63K-cl.js";import"./DraggableList-BGYaEGvL.js";import"./search-UvEU4G0v.js";import"./Input-CLo1MrIB.js";import"./useControlled-NSu5zz5s.js";import"./isEqual-mBn6qCrn.js";import"./isObject-DT-aOAxT.js";import"./Button-CKxl37fU.js";import"./ActionButton-oNGywivn.js";import"./Checkbox-WG_nfQTt.js";import"./useValueChanged-mZNolY1C.js";import"./CollapsiblePanel-4q0oe3Zb.js";import"./MultiColumnSortDialog-Dlu_R13e.js";import"./MenuTrigger-BFE-_QDU.js";import"./CompositeItem-tHPXjfot.js";import"./ToolbarRootContext-D9y6oWor.js";import"./getDisabledMountTransitionStyles-DKxxzprT.js";import"./getPseudoElementBounds-ZljCXn7t.js";import"./chevron-down-71ryCxKg.js";import"./index-DQWYziCS.js";import"./error-CYtlGVxq.js";import"./BaseCbacBanner-CjxggRhb.js";import"./makeExternalStore-DiOUMjBT.js";import"./Tooltip-BD5qq4Vm.js";import"./PopoverPopup-J7D5jMka.js";import"./toNumber-BoP5826v.js";import"./useOsdkClient-ByMbO7oV.js";import"./tick-BuCzEOZ7.js";import"./DropdownField-hKngkWwm.js";import"./withOsdkMetrics-BixqoA9K.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
