import{f as p,j as e}from"./iframe-Dk0apQWL.js";import{O as i}from"./object-table-OvSt47Oa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DM8aWAfN.js";import"./index-BB76_vsP.js";import"./Dialog-CzgePr_x.js";import"./cross-mMEGpaf9.js";import"./svgIconContainer-BwfkG_x4.js";import"./useBaseUiId-DQQ7To9Z.js";import"./InternalBackdrop-BUdWMD8m.js";import"./composite-Cbj8LV8T.js";import"./index-Dw8JwmE5.js";import"./index-D4wGw7f5.js";import"./index-QtJ8ftv1.js";import"./useEventCallback-BqQVBoQ2.js";import"./SkeletonBar-Dk0v_u2l.js";import"./LoadingCell-PxmI2QJk.js";import"./ColumnConfigDialog-D2Y1ErhZ.js";import"./DraggableList-BnzrvLxt.js";import"./search-DeE9hnrl.js";import"./Input-BWvGoQIW.js";import"./useControlled-BoHpDSdR.js";import"./Button-cnivFiIY.js";import"./small-cross-CylaTMSl.js";import"./ActionButton-Dz0C2N0K.js";import"./Checkbox-B20ccMkC.js";import"./useValueChanged-D0eJODMY.js";import"./CollapsiblePanel-BM1L2j_O.js";import"./MultiColumnSortDialog-PTPh2Y5W.js";import"./MenuTrigger-ItmFwYXE.js";import"./CompositeItem-C2KsOfaA.js";import"./ToolbarRootContext-Cfg54QU-.js";import"./getDisabledMountTransitionStyles-ByloQe2_.js";import"./getPseudoElementBounds-Bat3eBC6.js";import"./chevron-down-BDsXaIBN.js";import"./index-C72SMcb2.js";import"./error-gPnUZGMu.js";import"./BaseCbacBanner-q8B9Ars3.js";import"./makeExternalStore-hT_U_1se.js";import"./Tooltip-DbhzqFNA.js";import"./PopoverPopup-GacXe4V2.js";import"./debounce-Bisu8SDu.js";import"./useOsdkClient-vEcJQf38.js";import"./tick-DMn6pr7G.js";import"./DropdownField-SyLzUpD6.js";import"./isEqual-BCqbvt43.js";import"./withOsdkMetrics-Bwt22oAD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
