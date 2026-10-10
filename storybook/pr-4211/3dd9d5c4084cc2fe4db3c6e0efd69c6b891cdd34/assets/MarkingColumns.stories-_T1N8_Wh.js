import{f as p,j as e}from"./iframe-5u9ZtrJt.js";import{O as i}from"./object-table-CN_KK_hh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CuQanuSU.js";import"./Table-BHoyzQ-v.js";import"./index-DavgBEP1.js";import"./Dialog-D7Qi8d0N.js";import"./cross-BpzwhQi5.js";import"./svgIconContainer-jQAOa3hY.js";import"./useBaseUiId-CQYNNsxK.js";import"./InternalBackdrop-B3-fNuIA.js";import"./composite-CGw-Ihls.js";import"./index-DMFEApmF.js";import"./index-C7XPHJ8o.js";import"./index-CtwWL3Ux.js";import"./useEventCallback-CX8B3d2_.js";import"./SkeletonBar-Kv76IGDP.js";import"./LoadingCell-DBmjNbby.js";import"./ColumnConfigDialog-Bmw7WTKl.js";import"./DraggableList-7jhILcdd.js";import"./search-JNpB3WRd.js";import"./Input-D8eW-et_.js";import"./useControlled-B5brBFEZ.js";import"./Button-ChR8k8XV.js";import"./small-cross-AuWZbj58.js";import"./ActionButton-2ZAcI0x_.js";import"./Checkbox-ySxrIpA4.js";import"./useValueChanged-BuQNO87J.js";import"./CollapsiblePanel-D47Xkn4l.js";import"./MultiColumnSortDialog-BwZ0CHfV.js";import"./MenuTrigger-DlhSOFK6.js";import"./CompositeItem-DF5M0Q62.js";import"./ToolbarRootContext-BdaDw2wr.js";import"./getDisabledMountTransitionStyles-v5M4alGV.js";import"./getPseudoElementBounds-vB1bflfw.js";import"./chevron-down-B3Fv0w50.js";import"./index-vMKc9Vfa.js";import"./error-CQ8cV0Cv.js";import"./BaseCbacBanner-Do26j3g0.js";import"./makeExternalStore-DT_DHHwN.js";import"./Tooltip-CTZfgpQD.js";import"./PopoverPopup-DeaoiWel.js";import"./debounce-C_5CcOwA.js";import"./useOsdkClient-PPOhTHxO.js";import"./tick-CScWJoZM.js";import"./DropdownField-DBfFz7s7.js";import"./isEqual-C4H2ETAO.js";import"./withOsdkMetrics-evZV6vNo.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
