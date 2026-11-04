import{f as p,j as e}from"./iframe-CsKQ3MiN.js";import{O as i}from"./object-table-DbjAOYXB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DGKcnXHD.js";import"./Table-DQgdshTQ.js";import"./index-Dr6q-Sfz.js";import"./Dialog-COWppfPD.js";import"./cross-D0wLRLht.js";import"./svgIconContainer-CEz_OqiJ.js";import"./useBaseUiId-BzoXUnOl.js";import"./InternalBackdrop-DYA_vqeP.js";import"./composite-CoD6tMpx.js";import"./index-BeHm_BzD.js";import"./index-snnTh06i.js";import"./index-D49_UwOT.js";import"./useEventCallback-80Se1kif.js";import"./SkeletonBar-CizJ11uq.js";import"./LoadingCell-AXHz_OI3.js";import"./ColumnConfigDialog-5baoLeO5.js";import"./DraggableList-Da1XT_Ho.js";import"./search-cTPZqcQC.js";import"./Input-D9JW6ixL.js";import"./useControlled-Cob_C-Qn.js";import"./Button-BEOltIVE.js";import"./small-cross-BsRRrEs9.js";import"./ActionButton-CmQru8bY.js";import"./Checkbox-Bjl-uhI0.js";import"./useValueChanged-DQRkdvZ7.js";import"./CollapsiblePanel-BdBOmqTc.js";import"./MultiColumnSortDialog-DPR6eIVq.js";import"./MenuTrigger-BVwdiBa0.js";import"./CompositeItem-DZkfIwKg.js";import"./ToolbarRootContext-BNxut5tp.js";import"./getDisabledMountTransitionStyles-IbEufsWa.js";import"./getPseudoElementBounds-CFuQFtK_.js";import"./chevron-down-BCi4kbBt.js";import"./index-DoTKq459.js";import"./error-C-bxu3dO.js";import"./BaseCbacBanner-Br0T5VCO.js";import"./makeExternalStore-Czb1TAUA.js";import"./Tooltip-5SCwZ_pU.js";import"./PopoverPopup-849UqFyk.js";import"./debounce-XpKSqWNs.js";import"./useOsdkClient-DDQMFRik.js";import"./tick-Cn3xvEup.js";import"./DropdownField-KxlPBtr2.js";import"./isEqual-CIQzSvqq.js";import"./withOsdkMetrics-z1U7tMx_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
