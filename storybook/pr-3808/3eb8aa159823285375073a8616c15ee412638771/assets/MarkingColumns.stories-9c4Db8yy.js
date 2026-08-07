import{f as p,j as e}from"./iframe-CPz4EE4b.js";import{O as i}from"./object-table-Bpb6cItY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BF9ZU9L2.js";import"./Table-DWzIvv-t.js";import"./index-DPQnz2kY.js";import"./Dialog-DC1UFKx2.js";import"./cross-B6wcH7NV.js";import"./svgIconContainer-DvQDx7ps.js";import"./useBaseUiId-DA8N-Cu-.js";import"./InternalBackdrop-e3bdAVp_.js";import"./composite-DC2iaAhD.js";import"./index-YkFTybZ5.js";import"./index-CJDK8JNQ.js";import"./index-B58hFV_H.js";import"./useEventCallback-B7Q5VopY.js";import"./SkeletonBar-C5i76X_E.js";import"./LoadingCell-M2C2qZG3.js";import"./ColumnConfigDialog-Byl7XMyX.js";import"./DraggableList-CD4BIzfT.js";import"./search-CXWbO0Ru.js";import"./Input-BPvVCqJh.js";import"./useControlled-CcD5XhNi.js";import"./isEqual-Bcuklsmv.js";import"./isObject-BYf5ICrk.js";import"./Button-C0KwGN38.js";import"./ActionButton-uEQ50Sca.js";import"./Checkbox-DUfZ5CUi.js";import"./useValueChanged-DRK6-_yq.js";import"./CollapsiblePanel-CYdZ8nbz.js";import"./MultiColumnSortDialog-VpgOvgtI.js";import"./MenuTrigger-DGvICw92.js";import"./CompositeItem-DCP0DZpD.js";import"./ToolbarRootContext-BXV7NB_D.js";import"./getDisabledMountTransitionStyles-DVGMUieh.js";import"./getPseudoElementBounds-D8m_aFdX.js";import"./chevron-down-BgJNP9vx.js";import"./index-8dkGhFzU.js";import"./error-CgKzZzah.js";import"./BaseCbacBanner-BAvvwpCO.js";import"./makeExternalStore-CPJA5Zb3.js";import"./Tooltip-CiRczL5H.js";import"./PopoverPopup-BMq3Yh3-.js";import"./toNumber-CkzBscM2.js";import"./useOsdkClient-4vxdzy5u.js";import"./tick-BagwPZ-4.js";import"./DropdownField-B0L3JmJr.js";import"./withOsdkMetrics-CPx-A9BJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
