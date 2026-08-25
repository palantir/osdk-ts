import{f as p,j as e}from"./iframe-Li1-lWs7.js";import{O as i}from"./object-table-CjDY3c5S.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CGmo2FMo.js";import"./Table-DNTTlJ15.js";import"./index-DoD8b1_q.js";import"./Dialog-clI1gzeX.js";import"./cross-DMmA-RfG.js";import"./svgIconContainer-CVRufNNl.js";import"./useBaseUiId-Br9Ryls1.js";import"./InternalBackdrop-D9X1KC0Z.js";import"./composite-JV6W8eaJ.js";import"./index-B_W4EPm5.js";import"./index-7QzYiAri.js";import"./index-D8Tk9Xkv.js";import"./useEventCallback-CkXzoATD.js";import"./SkeletonBar-KeXvglh_.js";import"./LoadingCell-CQgaEp-a.js";import"./ColumnConfigDialog-D6bJWZ62.js";import"./DraggableList-CcrcGGcJ.js";import"./search-DMt9s_ci.js";import"./Input-DM_Alj7t.js";import"./useControlled-CCuESsXx.js";import"./Button-8SX-EUR0.js";import"./small-cross-DXbOoBXF.js";import"./ActionButton-CEMN0Zdb.js";import"./Checkbox-DEiq_oH5.js";import"./useValueChanged-DilJhcWz.js";import"./CollapsiblePanel-C1kmCMJF.js";import"./MultiColumnSortDialog-BeKEe_uK.js";import"./MenuTrigger-DZnftTrY.js";import"./CompositeItem-BwUkyu_e.js";import"./ToolbarRootContext-DsnXZPtT.js";import"./getDisabledMountTransitionStyles-BQJYWB5I.js";import"./getPseudoElementBounds-Ppn7heVn.js";import"./chevron-down-BDBeFFgf.js";import"./index-BjEz7scL.js";import"./error-BiqjEWby.js";import"./BaseCbacBanner-DTvtqYPX.js";import"./makeExternalStore-CWQvlKnh.js";import"./Tooltip-DTKsc1QU.js";import"./PopoverPopup-CqHFde_Q.js";import"./debounce-CxboYieA.js";import"./useOsdkClient-B91Jh8bD.js";import"./tick-DR1AzeWG.js";import"./DropdownField-6i2nL-Zb.js";import"./isEqual-CK2JvR_Y.js";import"./withOsdkMetrics-_pRQ_AuF.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
