import{f as p,j as e}from"./iframe-C-VQV1kk.js";import{O as i}from"./object-table-CxH1WG92.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DAFvkMcS.js";import"./Table-BxJIg6as.js";import"./index-Br3mcMRO.js";import"./Dialog-BcS09eX8.js";import"./cross-B26OHCdD.js";import"./svgIconContainer-CJnwzucZ.js";import"./useBaseUiId-CDIBpZbW.js";import"./InternalBackdrop-CrKl0Qys.js";import"./composite-GjU-j0CL.js";import"./index-BAOIGUAP.js";import"./index-DPEqsBnM.js";import"./index-C81NLsPb.js";import"./useEventCallback-CrzZq1A8.js";import"./SkeletonBar-BkJDoVVR.js";import"./LoadingCell-DidOQItD.js";import"./ColumnConfigDialog-DQEeQvz7.js";import"./DraggableList-qga-VF-f.js";import"./search-D0wtlqkl.js";import"./Input-C1vD7nT2.js";import"./useControlled-BadNojnw.js";import"./Button-BLvWajsq.js";import"./small-cross-DQKRtPL4.js";import"./ActionButton-BbdrlCMk.js";import"./Checkbox-1Rigo1b4.js";import"./useValueChanged-CTLWVytN.js";import"./CollapsiblePanel-DF08KEFn.js";import"./MultiColumnSortDialog-W8LwXs3d.js";import"./MenuTrigger-E2JdOber.js";import"./CompositeItem-CceR4qkm.js";import"./ToolbarRootContext-m881A_zR.js";import"./getDisabledMountTransitionStyles-lRegSDO5.js";import"./getPseudoElementBounds-CaioDmeF.js";import"./chevron-down-CPUFW1cF.js";import"./index-BFFBOJxl.js";import"./error-5dXKQyhU.js";import"./BaseCbacBanner-C1hA4dbq.js";import"./makeExternalStore-BIjV_Sjd.js";import"./Tooltip-yfSghmxo.js";import"./isObject-IGANmsxM.js";import"./debounce-BgKrWPP2.js";import"./useOsdkClient-fG21vCjJ.js";import"./tick-CGn7jNwS.js";import"./DropdownField-Gr8cO_hh.js";import"./isEqual-D3Uy-qVH.js";import"./_baseIsEqual-ApqE7jKt.js";import"./withOsdkMetrics-c7bdsNh3.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
