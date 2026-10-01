import{f as p,j as e}from"./iframe-B30VXZ-6.js";import{O as i}from"./object-table-DH_gUMto.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ChWHhmMQ.js";import"./Table-BoQribm-.js";import"./index-C8WN5xda.js";import"./Dialog-D_6IT7W5.js";import"./cross-q0dJk3Qv.js";import"./svgIconContainer-CDJpdA9T.js";import"./useBaseUiId-N1dQpqNi.js";import"./InternalBackdrop-g2UdgSpr.js";import"./composite-CL2Urpfy.js";import"./index-BPP2HBPd.js";import"./index-G14MjZBl.js";import"./index-DR-P8k5n.js";import"./useEventCallback-Dd-rW-bH.js";import"./SkeletonBar-CoNjpQ5V.js";import"./LoadingCell-Cq17MdUI.js";import"./ColumnConfigDialog-C1sWO9u3.js";import"./DraggableList-D3HI0B0s.js";import"./search-Mz2TVtVf.js";import"./Input-CUQ6PF3-.js";import"./useControlled-jMDaMrsG.js";import"./Button-Fs0rdLv2.js";import"./small-cross-CV5I4AiV.js";import"./ActionButton-4fvGoYw3.js";import"./Checkbox-DR-GfH3U.js";import"./useValueChanged-3Pjfz6XN.js";import"./CollapsiblePanel-DTqM16KR.js";import"./MultiColumnSortDialog-DQYaLkK-.js";import"./MenuTrigger-CxX-_HAH.js";import"./CompositeItem-DXi528OA.js";import"./ToolbarRootContext-Dshg5ZnG.js";import"./getDisabledMountTransitionStyles-fWLm1dIh.js";import"./getPseudoElementBounds-DqAHYrF9.js";import"./chevron-down-DiQ4Q7Kd.js";import"./index-D6kqTvDq.js";import"./error-Cc1FQeFa.js";import"./BaseCbacBanner-eN234pk2.js";import"./makeExternalStore-nH4o41kb.js";import"./Tooltip-DH7dVDCh.js";import"./PopoverPopup-CE8H8wc4.js";import"./debounce-jCNBE6lD.js";import"./useOsdkClient-CuQp5EFx.js";import"./tick-C3_-7A_u.js";import"./DropdownField-C7LGxFH_.js";import"./isEqual-CMlUKjD_.js";import"./withOsdkMetrics-DEl0Ng20.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
