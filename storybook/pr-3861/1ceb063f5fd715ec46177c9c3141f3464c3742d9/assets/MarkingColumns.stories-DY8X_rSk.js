import{f as p,j as e}from"./iframe-RR2p5XOS.js";import{O as i}from"./object-table-D8uwa7sc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BOhV1rHy.js";import"./Table-B0X7SQKG.js";import"./index-DnsNcod6.js";import"./Dialog-Cd3otJRW.js";import"./cross-CR4LSxOQ.js";import"./svgIconContainer-u0oJjKFx.js";import"./useBaseUiId-C9ZH8_C_.js";import"./InternalBackdrop-BxeUUCts.js";import"./composite-p_UpWlex.js";import"./index-HN-AhAeO.js";import"./index-DKLD7YVV.js";import"./index-DgWiLO56.js";import"./useEventCallback-DUUjHCf-.js";import"./SkeletonBar-DK4NsRE-.js";import"./LoadingCell-BwzFXe23.js";import"./ColumnConfigDialog-Dqq4KIN7.js";import"./DraggableList-CQMYobPR.js";import"./search-DcbJPUOn.js";import"./Input-e_TaAvAj.js";import"./useControlled-CigCjjeU.js";import"./Button-Fi5pU_nf.js";import"./small-cross-BtGjVAe0.js";import"./ActionButton-BmrzLlcQ.js";import"./Checkbox-mL6rgYpq.js";import"./useValueChanged-CGaBoYZG.js";import"./CollapsiblePanel-lZY_ExWV.js";import"./MultiColumnSortDialog-BldHHC_p.js";import"./MenuTrigger-CnGvgINL.js";import"./CompositeItem-suN-dd_e.js";import"./ToolbarRootContext-BDIbARai.js";import"./getDisabledMountTransitionStyles-BCr5Qv_S.js";import"./getPseudoElementBounds-uKSjW76O.js";import"./chevron-down-CB1UmGgK.js";import"./index-s6aMoLTN.js";import"./error-CMBIrR-E.js";import"./BaseCbacBanner-CwjtUuLJ.js";import"./makeExternalStore-CT6Maj4O.js";import"./Tooltip-YxXLOr_X.js";import"./PopoverPopup-DAEl5eG3.js";import"./debounce-C5ix3ZOK.js";import"./useOsdkClient-BpUTBA14.js";import"./tick-CcC4crvR.js";import"./DropdownField-BhQ_noy4.js";import"./isEqual-D1FwFfsC.js";import"./withOsdkMetrics-DRbYLGlL.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
