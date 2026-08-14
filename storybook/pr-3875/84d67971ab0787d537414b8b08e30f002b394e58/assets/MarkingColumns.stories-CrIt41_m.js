import{f as p,j as e}from"./iframe-Bf5y3yuv.js";import{O as i}from"./object-table-o3fW6O_1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-M85ITnzL.js";import"./Table-CEgm66mY.js";import"./index-C4oFc8fT.js";import"./Dialog-qNiPAhSf.js";import"./cross-DxmUAvZu.js";import"./svgIconContainer-CVN7uHeY.js";import"./useBaseUiId-DRtCxjKI.js";import"./InternalBackdrop-CfpA2xj_.js";import"./composite-CgQiA1Oi.js";import"./index-7NakAMlJ.js";import"./index-BPFo9kvt.js";import"./index-BuryNxwZ.js";import"./useEventCallback-DSTs8mUv.js";import"./SkeletonBar-dr-6BVoY.js";import"./LoadingCell-D9U_T-mC.js";import"./ColumnConfigDialog-DPnBwTbo.js";import"./DraggableList-TUEm6KRa.js";import"./search-DTQlzK8C.js";import"./Input-Cld-FXxr.js";import"./useControlled-BhduwF_8.js";import"./Button-C7r4XXrU.js";import"./small-cross-C2Orfn7g.js";import"./ActionButton-BaQtH1dx.js";import"./Checkbox-DK7gyUqH.js";import"./useValueChanged-MJfmbFHj.js";import"./CollapsiblePanel-PwbspAK8.js";import"./MultiColumnSortDialog-CnwrRsPJ.js";import"./MenuTrigger-CK11EHjB.js";import"./CompositeItem-ComoR2X-.js";import"./ToolbarRootContext-C57pzsjm.js";import"./getDisabledMountTransitionStyles-DrojxNJY.js";import"./getPseudoElementBounds-DDEzy1Cb.js";import"./chevron-down-Ax9eqJiN.js";import"./index-CQQhRiBl.js";import"./error-CLHz_uFS.js";import"./BaseCbacBanner-DYAvFjdX.js";import"./makeExternalStore-ZObW_I0b.js";import"./Tooltip-ZHBJR7Og.js";import"./PopoverPopup-pwUuDPTa.js";import"./debounce-CC8UUzvo.js";import"./useOsdkClient-DjcJEL1f.js";import"./tick-C1fNgrEf.js";import"./DropdownField-CggY-cK5.js";import"./isEqual-DJatYdkR.js";import"./withOsdkMetrics-y8Y3XJDn.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
