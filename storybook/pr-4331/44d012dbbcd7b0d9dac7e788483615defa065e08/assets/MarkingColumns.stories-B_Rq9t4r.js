import{f as p,j as e}from"./iframe-NfexZY9x.js";import{O as i}from"./object-table-5hrx1AIT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CLTJrXfR.js";import"./Table-I8E0mLIT.js";import"./index-DHazzmu_.js";import"./Dialog-DfKhixPu.js";import"./cross-BPxlVDyK.js";import"./svgIconContainer-p6aEe31f.js";import"./useBaseUiId-C16bF6M9.js";import"./InternalBackdrop-8mGv6jNv.js";import"./composite-BGUozWMo.js";import"./index-DaRojdGd.js";import"./index-Dp-u7LeB.js";import"./index-BnBOcHOT.js";import"./useEventCallback-DTK6M9zp.js";import"./SkeletonBar-_pY-LFxw.js";import"./LoadingCell-B5QQ7dT1.js";import"./ColumnConfigDialog-Bo-hV8UH.js";import"./DraggableList-CI_hj_Rq.js";import"./search-CmlPMAF4.js";import"./Input-CPs1rDr1.js";import"./useControlled-qgEamnCT.js";import"./Button-DY6lym1F.js";import"./small-cross-BjgiVUVX.js";import"./ActionButton-BT8WXcBI.js";import"./Checkbox-uVVxQ-wM.js";import"./useValueChanged-CYgXq6N-.js";import"./CollapsiblePanel-izSDW4TN.js";import"./MultiColumnSortDialog-D4m8m0GD.js";import"./MenuTrigger-CFx5IQyW.js";import"./CompositeItem-CHYMHjt2.js";import"./ToolbarRootContext-BdUx3mSp.js";import"./getDisabledMountTransitionStyles-C9b0y1iT.js";import"./getPseudoElementBounds-LhciNlN1.js";import"./chevron-down-ZCZOaNcj.js";import"./index-C7mnTzRF.js";import"./error-CIC9WqgE.js";import"./BaseCbacBanner-CIauo2y7.js";import"./makeExternalStore-C62gR5VT.js";import"./Tooltip-BQGbUuSo.js";import"./isObject-CQ_LajrM.js";import"./debounce-ChoeoRSR.js";import"./useOsdkClient-Bp3-RDM4.js";import"./tick-BpZziSjB.js";import"./DropdownField-CcTDIp1R.js";import"./isEqual-D9nxHocX.js";import"./_baseIsEqual-B9eMrTO6.js";import"./withOsdkMetrics-DSmb0LrF.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
