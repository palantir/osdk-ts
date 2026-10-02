import{f as p,j as e}from"./iframe-BwJP8SAz.js";import{O as i}from"./object-table-CrHQBWum.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C__v2HQV.js";import"./Table-C49xgZr-.js";import"./index-B1xmU5ac.js";import"./Dialog-CZd0Ulal.js";import"./cross-DiTZc7QM.js";import"./svgIconContainer-DMpafcgu.js";import"./useBaseUiId-C34DKKh6.js";import"./InternalBackdrop-KutqEmqy.js";import"./composite-a2q1QDdA.js";import"./index-C-xvBHp4.js";import"./index-Bx66jA38.js";import"./index-B0qPlz_Q.js";import"./useEventCallback-BFud_X33.js";import"./SkeletonBar-CizSDGiZ.js";import"./LoadingCell-DPQpBa5j.js";import"./ColumnConfigDialog-oa1RhDZt.js";import"./DraggableList-k-HxCwCD.js";import"./search-CesJa2BL.js";import"./Input-Biv1kBRN.js";import"./useControlled-ZLl_p6JX.js";import"./Button-C4Q4ezlI.js";import"./small-cross-C6anClUq.js";import"./ActionButton-DMCSebnl.js";import"./Checkbox-SS-r8qqb.js";import"./useValueChanged-o1Jhr7NX.js";import"./CollapsiblePanel-Xr396GTI.js";import"./MultiColumnSortDialog-7vlTQGgu.js";import"./MenuTrigger-DxJqJO4e.js";import"./CompositeItem-BsMyIE9-.js";import"./ToolbarRootContext-CBbcQ6qS.js";import"./getDisabledMountTransitionStyles-DUZGhC9n.js";import"./getPseudoElementBounds-B49v7X00.js";import"./chevron-down-DSU29Yd7.js";import"./index-Qo_wZuR8.js";import"./error-DWAlVBAx.js";import"./BaseCbacBanner-AL6lb7ES.js";import"./makeExternalStore-BWpOLj7v.js";import"./Tooltip-Crxsicsv.js";import"./PopoverPopup-Bi4N4TLm.js";import"./debounce-4RuFCHX-.js";import"./useOsdkClient-DNt2UGx3.js";import"./tick-DOgiNo6k.js";import"./DropdownField-Bgmj7boA.js";import"./isEqual-CYfrdvqG.js";import"./withOsdkMetrics-CHhNGKv-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
