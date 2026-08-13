import{f as p,j as e}from"./iframe-Ctqv_q3b.js";import{O as i}from"./object-table-D1q_GFkq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CQZuIYGg.js";import"./Table-DX8cooS5.js";import"./index-COouxyZO.js";import"./Dialog-CZBtpFpH.js";import"./cross-Cwp0jMM_.js";import"./svgIconContainer-CpTpThnP.js";import"./useBaseUiId-DZHr37Fe.js";import"./InternalBackdrop-DhznBDyD.js";import"./composite-CWKR683w.js";import"./index-YZLh4MO8.js";import"./index-KwZ8xn8U.js";import"./index-Hhv0iI_J.js";import"./useEventCallback-CmV8vQyW.js";import"./SkeletonBar-Cgbm4U0J.js";import"./LoadingCell-DstG4qeG.js";import"./ColumnConfigDialog-Cs6V6saO.js";import"./DraggableList-CF1TbWHs.js";import"./search-qo74ErBn.js";import"./Input-cHlxiCnh.js";import"./useControlled-rzg3Zo0J.js";import"./Button-BQ9Vn2Zh.js";import"./small-cross-DD8H8p1F.js";import"./ActionButton-jqwciMN5.js";import"./Checkbox-DM5hF1QA.js";import"./useValueChanged-C9Jd57kb.js";import"./CollapsiblePanel-C9F3DUe5.js";import"./MultiColumnSortDialog-BWtpvuXM.js";import"./MenuTrigger-D1TGRnu9.js";import"./CompositeItem-CT2tdkFE.js";import"./ToolbarRootContext-CGZ73ibv.js";import"./getDisabledMountTransitionStyles-du4TooiD.js";import"./getPseudoElementBounds-IKL9M1m3.js";import"./chevron-down-BZmTuAF0.js";import"./index-qzd4Xvj_.js";import"./error-TI6uq-Zv.js";import"./BaseCbacBanner-DnwjE2KC.js";import"./makeExternalStore-BVIKqe7o.js";import"./Tooltip-CUxuce_-.js";import"./PopoverPopup-Dq--FcNp.js";import"./debounce-BeN_6MIh.js";import"./useOsdkClient-B_wBAAwl.js";import"./tick-C4tZR6co.js";import"./DropdownField-Cj9q5oOl.js";import"./isEqual-CBw6myZ4.js";import"./withOsdkMetrics-CpCINEs8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
