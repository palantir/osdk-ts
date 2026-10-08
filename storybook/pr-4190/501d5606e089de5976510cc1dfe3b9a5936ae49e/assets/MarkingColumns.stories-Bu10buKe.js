import{f as p,j as e}from"./iframe-BaqisVl-.js";import{O as i}from"./object-table-N9TioOP6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BNi0jLvn.js";import"./Table-CmYmfT6c.js";import"./index-DsJxcxuD.js";import"./Dialog-EoiXNhL7.js";import"./cross-NcNTP23a.js";import"./svgIconContainer-TSbWa_lF.js";import"./useBaseUiId-CZNOvWOX.js";import"./InternalBackdrop-up968Klp.js";import"./composite-DaM8qI8D.js";import"./index-DVQ_HGj7.js";import"./index-Dku8OroJ.js";import"./index-A62OeQPQ.js";import"./useEventCallback-DY-p_fZ5.js";import"./SkeletonBar-fHefpQx1.js";import"./LoadingCell-CZn5d-3r.js";import"./ColumnConfigDialog-mI5vm6MR.js";import"./DraggableList-CT2mXdMy.js";import"./search-xoA6p7gs.js";import"./Input-CegZe646.js";import"./useControlled-CryTPf8E.js";import"./Button-BTfyWfru.js";import"./small-cross-BYjsDC9b.js";import"./ActionButton-Cn9rIuq9.js";import"./Checkbox-xYsvmbaU.js";import"./useValueChanged-CZOqhP_j.js";import"./CollapsiblePanel-D6lMZr7T.js";import"./MultiColumnSortDialog-q0IiDNWX.js";import"./MenuTrigger-Cu7J25is.js";import"./CompositeItem-oqc0csOw.js";import"./ToolbarRootContext-DvsCcilH.js";import"./getDisabledMountTransitionStyles-CHGeqOic.js";import"./getPseudoElementBounds-BGR3l_iX.js";import"./chevron-down-DUYAtgkB.js";import"./index-fm-M8VrQ.js";import"./error-USmwsDsu.js";import"./BaseCbacBanner-CUsDT1Gr.js";import"./makeExternalStore-DaHYiupK.js";import"./Tooltip-Cy4Rx_YN.js";import"./PopoverPopup-BpgX9bSu.js";import"./debounce-BYezYolD.js";import"./useOsdkClient-D7dXXw4f.js";import"./tick-Sp8vA4eE.js";import"./DropdownField-S_mE2t2D.js";import"./isEqual-eVn1E-7x.js";import"./withOsdkMetrics-CQLdSUZI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
