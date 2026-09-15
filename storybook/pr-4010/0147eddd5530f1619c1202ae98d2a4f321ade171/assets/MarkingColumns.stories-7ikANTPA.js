import{f as p,j as e}from"./iframe-B2s0ilwM.js";import{O as i}from"./object-table-Df0SPqQE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-MMy8iX7M.js";import"./Table-C9FeGHfK.js";import"./index-DUMP_Qp6.js";import"./Dialog-CM61Fugd.js";import"./cross-DZSba9zk.js";import"./svgIconContainer-DRCF-NHW.js";import"./useBaseUiId-BVH4GIbN.js";import"./InternalBackdrop-B-Ja5_xj.js";import"./composite-DFa6zY9f.js";import"./index-mYTbhKt1.js";import"./index-DdqPMtaM.js";import"./index-D509LBW8.js";import"./useEventCallback-CUt-4jCY.js";import"./SkeletonBar-DIroCERZ.js";import"./LoadingCell-B_iM1kY5.js";import"./ColumnConfigDialog-CBcQ7LV-.js";import"./DraggableList-CEuKva_i.js";import"./search-De6MFVaz.js";import"./Input-CjCyxjsG.js";import"./useControlled-C3oDg3XB.js";import"./Button-Bnx37qOJ.js";import"./small-cross-DUrl-Gxm.js";import"./ActionButton-COeBFnf1.js";import"./Checkbox-ybshHhz7.js";import"./useValueChanged-B7ZJE4yn.js";import"./CollapsiblePanel-D6thvhNc.js";import"./MultiColumnSortDialog-D-ae3yca.js";import"./MenuTrigger-om7rzqwZ.js";import"./CompositeItem-DNqREtRU.js";import"./ToolbarRootContext-DDaNMj4N.js";import"./getDisabledMountTransitionStyles-Dmi_83d2.js";import"./getPseudoElementBounds-DXFFzy9T.js";import"./chevron-down-CW4_yRhZ.js";import"./index-ClsdzwAW.js";import"./error-DeXC2vVV.js";import"./BaseCbacBanner-DslKMIMd.js";import"./makeExternalStore-D_KS_COu.js";import"./Tooltip-CntzDWe4.js";import"./PopoverPopup-CCpYUP6e.js";import"./debounce-CmkkVxIz.js";import"./useOsdkClient-leyOYd9w.js";import"./tick-Bjc9CW2e.js";import"./DropdownField-95SM7q8x.js";import"./isEqual-B8qzt1pj.js";import"./withOsdkMetrics-B_SFwrj7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
