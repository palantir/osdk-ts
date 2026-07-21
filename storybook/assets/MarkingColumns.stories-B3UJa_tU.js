import{f as p,j as e}from"./iframe-BzkjJtXX.js";import{O as i}from"./object-table-C34YPm-e.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-otwjQeG6.js";import"./index-AuwQf2bm.js";import"./Dialog-vGTNuQIQ.js";import"./cross-DrbLepVL.js";import"./svgIconContainer-D1C1D5iR.js";import"./useBaseUiId-DFOZAV_i.js";import"./InternalBackdrop-Bt1t2-5U.js";import"./composite-EGYekfRG.js";import"./index-BVEHUPlm.js";import"./index-BVKF6jay.js";import"./index-Bng2xcY4.js";import"./useEventCallback-B9d71zv_.js";import"./SkeletonBar-BmmM3tek.js";import"./LoadingCell-BRJLmxq8.js";import"./ColumnConfigDialog-UgVoePJ8.js";import"./DraggableList-D9mbEhLe.js";import"./search-dvqk96LM.js";import"./Input-G4QBYjm1.js";import"./useControlled-OeVvUN90.js";import"./isEqual-BSecCrkU.js";import"./isObject-D9XjGjbN.js";import"./Button-eI1UM5MA.js";import"./ActionButton-9MyT-BkO.js";import"./Checkbox-mLfyN_qf.js";import"./useValueChanged-BIRddzli.js";import"./CollapsiblePanel-s7ZvalNX.js";import"./MultiColumnSortDialog-BQ0QB-st.js";import"./MenuTrigger-DpZLBqwD.js";import"./CompositeItem-B3mclHbn.js";import"./ToolbarRootContext-Dknw64cA.js";import"./getDisabledMountTransitionStyles-C64a5tjk.js";import"./getPseudoElementBounds-CUiCQllx.js";import"./chevron-down-dI6_cRca.js";import"./index-D9E1JzZD.js";import"./error-BEAWV2A7.js";import"./BaseCbacBanner-CZpUzBWP.js";import"./makeExternalStore-GNMsIj7m.js";import"./Tooltip-K9nFB85H.js";import"./PopoverPopup-REEP2FUv.js";import"./toNumber-B-o3dmGR.js";import"./useOsdkClient-Dd0jG-yj.js";import"./tick-BHwlIi_X.js";import"./DropdownField-DDFzCe0Q.js";import"./withOsdkMetrics-BbYAXndz.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
