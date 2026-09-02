import{f as p,j as e}from"./iframe-DTTRhbjz.js";import{O as i}from"./object-table-CSCzKFD6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DZ8L_H7u.js";import"./Table-CpecjfT5.js";import"./index-CUoqkEXP.js";import"./Dialog-BfK58nrJ.js";import"./cross-DxV9JdK2.js";import"./svgIconContainer-B_ocSrmO.js";import"./useBaseUiId-BmoDTCf9.js";import"./InternalBackdrop-rtSS2ycu.js";import"./composite-oJZ0BVll.js";import"./index-zn7h2p8a.js";import"./index-V6cd4RX1.js";import"./index-Dcu6sCXm.js";import"./useEventCallback-BtfkEBd9.js";import"./SkeletonBar-DXkSeF2t.js";import"./LoadingCell-y1Zb8CB1.js";import"./ColumnConfigDialog-FvnOSS5M.js";import"./DraggableList-DPKzfUhR.js";import"./search-B7jXOPcp.js";import"./Input-qArtebK8.js";import"./useControlled-hxzK8_TE.js";import"./Button-C9Wmar6u.js";import"./small-cross-DLGahr5f.js";import"./ActionButton-B-CndYNu.js";import"./Checkbox-Ci3x7wul.js";import"./useValueChanged-DtuqEhdD.js";import"./CollapsiblePanel-CUxqdNXN.js";import"./MultiColumnSortDialog-BiM6tuW7.js";import"./MenuTrigger-BNlJoVy-.js";import"./CompositeItem-CyxD93o0.js";import"./ToolbarRootContext-C0tIZT9m.js";import"./getDisabledMountTransitionStyles-B_CQ4ePe.js";import"./getPseudoElementBounds-CTJoaJ_q.js";import"./chevron-down-tY3lDuMM.js";import"./index-VjiLdOhj.js";import"./error-DVsJjH4l.js";import"./BaseCbacBanner-D6FC6U4k.js";import"./makeExternalStore-DSiAtSgU.js";import"./Tooltip-F2Jve4L0.js";import"./PopoverPopup-CYgRzRPM.js";import"./debounce-Cx_WnQAf.js";import"./useOsdkClient-DbJUAzjP.js";import"./tick-CM5fRMiT.js";import"./DropdownField-ZTNTLS3m.js";import"./isEqual-BSqo0_8f.js";import"./withOsdkMetrics-Bai-2IUn.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
