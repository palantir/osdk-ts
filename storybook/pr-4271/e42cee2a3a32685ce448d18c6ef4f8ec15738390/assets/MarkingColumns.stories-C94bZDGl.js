import{f as p,j as e}from"./iframe-CEC11uQP.js";import{O as i}from"./object-table-DuMgzKLf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DVVUuTHt.js";import"./Table-Be2vb7Zf.js";import"./index-PEoHNwfg.js";import"./Dialog-L3YbwTo_.js";import"./cross-D6kuzFqN.js";import"./svgIconContainer-CbD2_3IP.js";import"./useBaseUiId-BjpGd3DR.js";import"./InternalBackdrop-CwSZ3wqn.js";import"./composite-CmpMqd5k.js";import"./index-DrOphgIM.js";import"./index-B-Y9FXdo.js";import"./index-D7YNV7up.js";import"./useEventCallback-KH16WOxt.js";import"./SkeletonBar-CrVBs6Vj.js";import"./LoadingCell-DXUfmLgb.js";import"./ColumnConfigDialog-D6xjtDrO.js";import"./DraggableList-CIWCgkjr.js";import"./search-3jERTaIF.js";import"./Input-DBrhN4gs.js";import"./useControlled-DZwN9m8e.js";import"./Button-BJ7HsXYN.js";import"./small-cross-vfExAlhb.js";import"./ActionButton-D1g9DkB7.js";import"./Checkbox-CkA-twbz.js";import"./useValueChanged-DHCnr_zs.js";import"./CollapsiblePanel-DZwBeyX6.js";import"./MultiColumnSortDialog-rOt7hj7e.js";import"./MenuTrigger-CllGpCQB.js";import"./CompositeItem-Aj4qkjGh.js";import"./ToolbarRootContext-DUQNKsvO.js";import"./getDisabledMountTransitionStyles-jPjQ6amA.js";import"./getPseudoElementBounds-BITuD01w.js";import"./chevron-down-6kcuRK_B.js";import"./index-pK9n0EOx.js";import"./error-BC-ullpf.js";import"./BaseCbacBanner-BBrLfPZM.js";import"./makeExternalStore-BiM7hkBW.js";import"./Tooltip-CErMPFwN.js";import"./PopoverPopup-B-89m5SN.js";import"./debounce-DRRXJPFm.js";import"./useOsdkClient-_hJ9ISKZ.js";import"./tick-CrTzZGEG.js";import"./DropdownField-D7RrB7x7.js";import"./isEqual-BW6LqVFQ.js";import"./withOsdkMetrics-CHiNkmki.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
