import{f as p,j as e}from"./iframe-BjMPQmdZ.js";import{O as i}from"./object-table-52MAir1D.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B8Ak4a51.js";import"./Table-CyWrmmW1.js";import"./index-oZX62iJS.js";import"./Dialog-BjRNm7TP.js";import"./cross-JpXN3sJS.js";import"./svgIconContainer-Dwz9d1MN.js";import"./useBaseUiId-D8cmXz0j.js";import"./InternalBackdrop-8oVqxHi8.js";import"./composite-CSAWSVfE.js";import"./index-D9GWSad1.js";import"./index-DtER7TIS.js";import"./index-NlopW1lK.js";import"./useEventCallback-DPBscyoY.js";import"./SkeletonBar-2PecOG9Y.js";import"./LoadingCell-DzLTK-4l.js";import"./ColumnConfigDialog-CQElBG8e.js";import"./DraggableList-BdgMwfNX.js";import"./search-D6_fqh0V.js";import"./Input-D7HYNJJj.js";import"./useControlled-DmP1tMz2.js";import"./Button-CZzc-gIr.js";import"./small-cross-Bu27Obc4.js";import"./ActionButton-DdGak1A0.js";import"./Checkbox-Bj8NpVU0.js";import"./useValueChanged-BruLlZZe.js";import"./CollapsiblePanel-CO_htu_q.js";import"./MultiColumnSortDialog-I0_RtTxG.js";import"./MenuTrigger-DTmliU1n.js";import"./CompositeItem-ejF_MhIC.js";import"./ToolbarRootContext-BJ3LM2Fu.js";import"./getDisabledMountTransitionStyles-DYlb6B2g.js";import"./getPseudoElementBounds-BEZQ3U0s.js";import"./chevron-down-IIBkH-oY.js";import"./index-4XbIxfFx.js";import"./error-BP2V_PLi.js";import"./BaseCbacBanner-DK26JmqY.js";import"./makeExternalStore-B8EVnW0L.js";import"./Tooltip-DQ9zqIRE.js";import"./PopoverPopup-z3RJyiP2.js";import"./debounce-B--2yBpk.js";import"./useOsdkClient-qEswp40d.js";import"./tick-CODMTGal.js";import"./DropdownField-DR1RPbxl.js";import"./isEqual-BY0uKEbW.js";import"./withOsdkMetrics-DcvRTKGS.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
