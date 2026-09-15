import{f as p,j as e}from"./iframe-BrWV3VGg.js";import{O as i}from"./object-table-CrendqfR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D6ZQDyfK.js";import"./Table-DYCqxzSX.js";import"./index-DYvdPCiw.js";import"./Dialog-DvKX2myG.js";import"./cross-BVo6wQKR.js";import"./svgIconContainer-BUmNfWM-.js";import"./useBaseUiId-C6P9jJC8.js";import"./InternalBackdrop-D1UeMOCj.js";import"./composite-CPJHb2Y2.js";import"./index-D9RcQQYw.js";import"./index-BNPYibjQ.js";import"./index-C83r31cI.js";import"./useEventCallback-S146GLX7.js";import"./SkeletonBar-rvURuLEV.js";import"./LoadingCell-BxwZLFGg.js";import"./ColumnConfigDialog-WuaK5VlN.js";import"./DraggableList-CSZ48Bvc.js";import"./search-Bx9ioHBB.js";import"./Input-CDM3tu-K.js";import"./useControlled-DP9gX7Yn.js";import"./Button-DQPjTYox.js";import"./small-cross-CSnrRgMJ.js";import"./ActionButton-BL72bfc_.js";import"./Checkbox-BvA02otE.js";import"./useValueChanged-BenORVWn.js";import"./CollapsiblePanel-CaX-I3uU.js";import"./MultiColumnSortDialog-DHvIDNS9.js";import"./MenuTrigger-BlICw_Sh.js";import"./CompositeItem-gO6CPQln.js";import"./ToolbarRootContext-C9pKuHkV.js";import"./getDisabledMountTransitionStyles-n4up3zHU.js";import"./getPseudoElementBounds-Dt0T_qF0.js";import"./chevron-down-hd2kSFPo.js";import"./index-BT_S32QN.js";import"./error-DAF972ng.js";import"./BaseCbacBanner-B8_ZpeGS.js";import"./makeExternalStore-mRetLKqP.js";import"./Tooltip-DI2aqz32.js";import"./PopoverPopup-CrFMP63L.js";import"./debounce-CK3d8RX5.js";import"./useOsdkClient-BN__21fG.js";import"./tick-CFOMyABR.js";import"./DropdownField-srPoQHQr.js";import"./isEqual-D6AHDfRS.js";import"./withOsdkMetrics-CQ4mIL1e.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
