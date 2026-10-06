import{f as p,j as e}from"./iframe-DWfCOAQu.js";import{O as i}from"./object-table-DGxdXP_y.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-AetNKwh5.js";import"./Table-Cl1-pmbH.js";import"./index-CqJhMuS2.js";import"./Dialog-CI2QPSy8.js";import"./cross-B_xAvT3d.js";import"./svgIconContainer-Q7lczhdT.js";import"./useBaseUiId-BKma_f4b.js";import"./InternalBackdrop-gdbKvKDa.js";import"./composite-DNxX4Nkb.js";import"./index-CrNU2B9N.js";import"./index-WpqqJaJk.js";import"./index-CpM3OnKB.js";import"./useEventCallback-C6ACKCKc.js";import"./SkeletonBar-EPFSLYlJ.js";import"./LoadingCell-DPL5De6J.js";import"./ColumnConfigDialog-TWURoNNE.js";import"./DraggableList-CSn5_Vvj.js";import"./search-BgPhvmky.js";import"./Input-B5DqZdR7.js";import"./useControlled-CnSP5Uy7.js";import"./Button-C6vZxzg6.js";import"./small-cross-BqKc-LeJ.js";import"./ActionButton-DAgVBgto.js";import"./Checkbox-BnDfvXBF.js";import"./useValueChanged-CLfvSLZ_.js";import"./CollapsiblePanel-BpxVECEg.js";import"./MultiColumnSortDialog-Ccvt5nJf.js";import"./MenuTrigger-D7NPcArM.js";import"./CompositeItem-CfFTNcKF.js";import"./ToolbarRootContext-BnN-yS54.js";import"./getDisabledMountTransitionStyles-BXtKCsRk.js";import"./getPseudoElementBounds-CK6ToQgj.js";import"./chevron-down-Dt5AdPlw.js";import"./index-Dcv9F_CZ.js";import"./error-D0MXudnr.js";import"./BaseCbacBanner-B9L4VrrW.js";import"./makeExternalStore-CS1-iCYk.js";import"./Tooltip-BDvqRvi5.js";import"./PopoverPopup-BN0RPWQk.js";import"./debounce-0ot9PSoS.js";import"./useOsdkClient-C6t9DPq1.js";import"./tick-DxeMA9RK.js";import"./DropdownField-B_3NuYm-.js";import"./isEqual-CkOQk0og.js";import"./withOsdkMetrics-Dn5f43wd.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
