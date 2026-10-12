import{f as p,j as e}from"./iframe-BLtbB9yL.js";import{O as i}from"./object-table-BMOcHco8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-NY6L4APl.js";import"./Table-BcF0PcB9.js";import"./index-Dzu4b_IB.js";import"./Dialog-Cl6rHvFZ.js";import"./cross-C7Pfqsgy.js";import"./svgIconContainer-cTxegse7.js";import"./useBaseUiId-DmOmCKZO.js";import"./InternalBackdrop-DMzDeexZ.js";import"./composite-Cypvm6OB.js";import"./index-Dq2eIlq8.js";import"./index-u2zPfote.js";import"./index-SyXOuBxU.js";import"./useEventCallback-Iu0smDrU.js";import"./SkeletonBar-Gao4JZhU.js";import"./LoadingCell-CuZwbcdJ.js";import"./ColumnConfigDialog-bCiOL-fS.js";import"./DraggableList-DoyHD0VZ.js";import"./search-1AInKOFa.js";import"./Input-BiA-3KH_.js";import"./useControlled-WQcnYS8e.js";import"./Button-B6pZtsky.js";import"./small-cross-8u8HOGrz.js";import"./ActionButton-CFQJm7v4.js";import"./Checkbox-CmQMT6Zx.js";import"./useValueChanged-BZ3-3RtY.js";import"./CollapsiblePanel-PGaxeolw.js";import"./MultiColumnSortDialog-D-y_hAG-.js";import"./MenuTrigger-Br0ibyRy.js";import"./CompositeItem-DNKgQIaZ.js";import"./ToolbarRootContext-DdGg-Lfa.js";import"./getDisabledMountTransitionStyles-KNC7oIQb.js";import"./getPseudoElementBounds-DaOCuufP.js";import"./chevron-down-BhpG0rg7.js";import"./index-DcUVdUbh.js";import"./error-BGqP2VaS.js";import"./BaseCbacBanner-R2Kh6ldg.js";import"./makeExternalStore-Bw178tiK.js";import"./Tooltip-BEj70Lhq.js";import"./PopoverPopup-DUjFzwE3.js";import"./debounce-DSB8VkTp.js";import"./useOsdkClient-kJp2DoWV.js";import"./tick-3ZiA6yfA.js";import"./DropdownField-DbhYDUVf.js";import"./isEqual-RjjK8BdL.js";import"./withOsdkMetrics-CFSyk5hC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
