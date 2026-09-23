import{f as p,j as e}from"./iframe-CWxH_eja.js";import{O as i}from"./object-table-BXJTuTfq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BGM-FNNL.js";import"./Table-BSJcDQrS.js";import"./index-rukiLk-t.js";import"./Dialog-D-VrWhQ3.js";import"./cross-BUnzug5D.js";import"./svgIconContainer-BVjwrQj6.js";import"./useBaseUiId-DjXwJ_4A.js";import"./InternalBackdrop-CCMfb0Ir.js";import"./composite--3W2QfLD.js";import"./index-CCBaaayX.js";import"./index-VZEG51bO.js";import"./index-BuFABUNN.js";import"./useEventCallback-CM0vLoXJ.js";import"./SkeletonBar-C3fCQI88.js";import"./LoadingCell-CzHVmTho.js";import"./ColumnConfigDialog-0wXw9w_v.js";import"./DraggableList-ClyJT_sb.js";import"./search-CCiYcsoJ.js";import"./Input-CalfVJQO.js";import"./useControlled-CaUffLu_.js";import"./Button-xLQbkIr8.js";import"./small-cross-C5TdUP9V.js";import"./ActionButton-BHfyzR_2.js";import"./Checkbox-CKMSR4-K.js";import"./useValueChanged-CNmcYNNi.js";import"./CollapsiblePanel-ZhX5L-lI.js";import"./MultiColumnSortDialog-OLhPs4uo.js";import"./MenuTrigger-C4RGeAR7.js";import"./CompositeItem-ClK4GwxV.js";import"./ToolbarRootContext-BeUcIWq0.js";import"./getDisabledMountTransitionStyles-BTSpAzLB.js";import"./getPseudoElementBounds-D46R6mk6.js";import"./chevron-down-CtewQHTT.js";import"./index-91nsioHy.js";import"./error-4ibjlhF7.js";import"./BaseCbacBanner-IKOUH4Um.js";import"./makeExternalStore-MGpOOWzr.js";import"./Tooltip-D1DLlEu4.js";import"./PopoverPopup-B2PZtKL4.js";import"./debounce-CKUoy-ZY.js";import"./useOsdkClient-BEBx1G06.js";import"./tick-Bb30Qkcj.js";import"./DropdownField-BqLWLDk5.js";import"./isEqual-RnyrL87f.js";import"./withOsdkMetrics-BxqDWVVo.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
