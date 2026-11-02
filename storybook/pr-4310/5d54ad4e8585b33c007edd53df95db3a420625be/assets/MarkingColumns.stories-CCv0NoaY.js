import{f as p,j as e}from"./iframe-C51H6UNa.js";import{O as i}from"./object-table-CMCoP_er.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DPRquFXQ.js";import"./Table-CqaXJVut.js";import"./index-XgCK3bCN.js";import"./Dialog-wpYTwm5C.js";import"./cross-Da8aR7tr.js";import"./svgIconContainer-BcKhCUV6.js";import"./useBaseUiId-BO3VYUv8.js";import"./InternalBackdrop-D_glzBrd.js";import"./composite-BT7MKZYR.js";import"./index-DJOOHoWw.js";import"./index-Cf0yVo51.js";import"./index-DJa5-hKe.js";import"./useEventCallback-Dyoji95Y.js";import"./SkeletonBar-DSiG1Rwc.js";import"./LoadingCell-D4zJkyLc.js";import"./ColumnConfigDialog-DChNbv3p.js";import"./DraggableList-D-wOIbeh.js";import"./search-CUjniAIx.js";import"./Input-578UpJoR.js";import"./useControlled-CDSAxchT.js";import"./Button-BbdKgphf.js";import"./small-cross-Wl991iyC.js";import"./ActionButton-BFr5UQ2Z.js";import"./Checkbox-DFJuyNl9.js";import"./useValueChanged-BXBXo6ad.js";import"./CollapsiblePanel-C3NDAcsc.js";import"./MultiColumnSortDialog-BVUzWBvq.js";import"./MenuTrigger-BLAXBnUV.js";import"./CompositeItem-B83sK6r-.js";import"./ToolbarRootContext-Dquj6J6i.js";import"./getDisabledMountTransitionStyles-Cq4DahQq.js";import"./getPseudoElementBounds-CE1EUuF6.js";import"./chevron-down-CiXp0wUf.js";import"./index-BbCxoF0B.js";import"./error-BabcdKAa.js";import"./BaseCbacBanner-BPOTHcmy.js";import"./makeExternalStore-DINTZeIb.js";import"./Tooltip-BMyMoL9M.js";import"./PopoverPopup-CZx3Vhv9.js";import"./debounce-DxRcBaI1.js";import"./useOsdkClient-D8E3YhRa.js";import"./tick-obAEPBey.js";import"./DropdownField-BbfVhW4P.js";import"./isEqual-qdM32Mai.js";import"./withOsdkMetrics-55ZGkUds.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
