import{f as p,j as e}from"./iframe-BJzVVo3C.js";import{O as i}from"./object-table-iloeXTiv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BGo6yCWR.js";import"./Table-Q7vMfUTJ.js";import"./index-jYeXRVJt.js";import"./Dialog-Cat5-d5T.js";import"./cross-BODoIHG7.js";import"./svgIconContainer-BafRnCSe.js";import"./useBaseUiId-aWvq-Ojy.js";import"./InternalBackdrop-LaTt__SN.js";import"./composite-DVXx00LN.js";import"./index-Cu3TSrS7.js";import"./index-DY-H4zuh.js";import"./index-CGlZ0CTP.js";import"./useEventCallback-CPVPsHDE.js";import"./SkeletonBar-CmmIOnV3.js";import"./LoadingCell-u13Tws5Z.js";import"./ColumnConfigDialog-DzZb_NDG.js";import"./DraggableList-BnBPKCgQ.js";import"./search-CNzRQSLi.js";import"./Input-D8VZz3qg.js";import"./useControlled-BU_ZAQ-v.js";import"./Button-CtA29Am0.js";import"./small-cross-CIrD0bDh.js";import"./ActionButton-DNcn8P02.js";import"./Checkbox-D7r-WuhL.js";import"./useValueChanged-CnANt21_.js";import"./CollapsiblePanel-BbVSWDIY.js";import"./MultiColumnSortDialog-bPERNjQE.js";import"./MenuTrigger-C0sRySoL.js";import"./CompositeItem-UocH3YCc.js";import"./ToolbarRootContext-BS8U1N_y.js";import"./getDisabledMountTransitionStyles-DruUCqOL.js";import"./getPseudoElementBounds-BuOaNQX4.js";import"./chevron-down-GN6eodao.js";import"./index-C038wilx.js";import"./error-B0Rx4D9Q.js";import"./BaseCbacBanner--Vy8vTm4.js";import"./makeExternalStore-c77j8ZZC.js";import"./Tooltip-DwG0NqTz.js";import"./PopoverPopup-CbiEHiO_.js";import"./debounce-DqxAIWi9.js";import"./useOsdkClient-C7mnWl4M.js";import"./tick-C1AZecKl.js";import"./DropdownField-C9P6RcpY.js";import"./isEqual-DffZPRyo.js";import"./withOsdkMetrics-BD3BFsPk.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
