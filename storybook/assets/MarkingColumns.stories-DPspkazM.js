import{f as p,j as e}from"./iframe-qEFPpghE.js";import{O as i}from"./object-table-BHJ3czxR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C4yL4Qmh.js";import"./index-BH9ELRZv.js";import"./Dialog-dWZ9u7DQ.js";import"./cross-CrQI27cl.js";import"./svgIconContainer-CQknLjCX.js";import"./useBaseUiId-v_A1mAU8.js";import"./InternalBackdrop-D5rmKUjx.js";import"./composite-DEeYGE6i.js";import"./index-BYmDYJlP.js";import"./index-DW-XX4vU.js";import"./index-Dz-dXwVN.js";import"./useEventCallback-BYQDS9uj.js";import"./SkeletonBar-yJWTc5ft.js";import"./LoadingCell-B42bnXLv.js";import"./ColumnConfigDialog-CChypS3K.js";import"./DraggableList-CsnH7LBp.js";import"./search-D09RX6LY.js";import"./Input-BablyCOK.js";import"./useControlled-CzEkdiJb.js";import"./Button--WxUXUTJ.js";import"./small-cross-D0luzVMu.js";import"./ActionButton-Di4a-gre.js";import"./Checkbox-CawO4u45.js";import"./useValueChanged-hy1rwhTW.js";import"./CollapsiblePanel-D3XrjZdW.js";import"./MultiColumnSortDialog-Dj5WqPTW.js";import"./MenuTrigger-CSyK8zi4.js";import"./CompositeItem-HOTCeKr0.js";import"./ToolbarRootContext-mJyuSkMG.js";import"./getDisabledMountTransitionStyles-TORQ_bbl.js";import"./getPseudoElementBounds-D1gaCrRx.js";import"./chevron-down-BYYCeXTI.js";import"./index-BoodJoCF.js";import"./error-AR1tV96Q.js";import"./BaseCbacBanner-TLh3mHe1.js";import"./makeExternalStore-AlhYZ7re.js";import"./Tooltip-0QhHY8T6.js";import"./PopoverPopup-Cb7HfMf8.js";import"./Select-DLArSuaB.js";import"./useOsdkClient-Aa7m3fKW.js";import"./tick-DmViAXqM.js";import"./DropdownField-SZD2xT-o.js";import"./useDebouncedCallback-CLudjFmJ.js";import"./isEqual-hnu1wVCK.js";import"./_baseIsEqual-CsbRecuA.js";import"./stableSerialize-CmHN0ptm.js";import"./withOsdkMetrics-Ch_Qi-aF.js";const ar={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ar as default};
