import{f as p,j as e}from"./iframe-B6vHMBGp.js";import{O as i}from"./object-table-hplHVgdX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cp58PBL8.js";import"./Table-Cbkm2869.js";import"./index-CJzsmVv3.js";import"./Dialog-DO1kXGDu.js";import"./cross-9x5JmZ4A.js";import"./svgIconContainer-wg0Lc9CR.js";import"./useBaseUiId-h3pAp7nr.js";import"./InternalBackdrop-CCFcfiJW.js";import"./composite-DWtkffoP.js";import"./index-CujXwWwq.js";import"./index-i--ASWRG.js";import"./index-CT_nyNsS.js";import"./useEventCallback-B4FnW4FK.js";import"./SkeletonBar-D9zmYxM0.js";import"./LoadingCell-BrDuqTHC.js";import"./ColumnConfigDialog-CTMC6TNx.js";import"./DraggableList-B-bZaqE6.js";import"./search-DfKXJtDr.js";import"./Input-B7KllzPA.js";import"./useControlled-BVsysqHb.js";import"./Button-DGAYYgZ-.js";import"./small-cross-cIP7Vben.js";import"./ActionButton-C1eM3Km_.js";import"./Checkbox-wr-Xfc3W.js";import"./useValueChanged-BjmzSrQM.js";import"./CollapsiblePanel-DyJhoXcY.js";import"./MultiColumnSortDialog-Cx1QNkZS.js";import"./MenuTrigger-D1Xe-7_v.js";import"./CompositeItem-DDQHWJ0b.js";import"./ToolbarRootContext-7AQ420yY.js";import"./getDisabledMountTransitionStyles-sssYHGVb.js";import"./getPseudoElementBounds-Dsjz6vCL.js";import"./chevron-down-6pFsTB_r.js";import"./index-CzbMhBIL.js";import"./error-BqGkptHP.js";import"./BaseCbacBanner-Cc4gB5EG.js";import"./makeExternalStore-Blbdey5m.js";import"./Tooltip-tywS1TT8.js";import"./PopoverPopup-TsRJnCd_.js";import"./debounce-DW_YRCCu.js";import"./useOsdkClient-BpgI32Ud.js";import"./tick-CoPn3U77.js";import"./DropdownField-DpvuVLRh.js";import"./isEqual-BwEsvaE9.js";import"./withOsdkMetrics-CL6kHg8G.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
