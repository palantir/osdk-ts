import{f as p,j as e}from"./iframe-Cuknj9ph.js";import{O as i}from"./object-table-B2ghSWFR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DA49r888.js";import"./Table-24VKP0uk.js";import"./index-DUVMLmA5.js";import"./Dialog-jgyVThR1.js";import"./cross-9NrnDCFm.js";import"./svgIconContainer-Bxolnsq9.js";import"./useBaseUiId-ksC6H-yy.js";import"./InternalBackdrop-CBDaXKFL.js";import"./composite-CUDt05Vv.js";import"./index-B7AWjemI.js";import"./index-BPGm0MAa.js";import"./index-I722fGzW.js";import"./useEventCallback-BzkQL_AG.js";import"./SkeletonBar-BbxNu6H8.js";import"./LoadingCell-CDPlzg1b.js";import"./ColumnConfigDialog-CZyIFPTb.js";import"./DraggableList-BCAJmaDs.js";import"./search-BJhgCNFy.js";import"./Input-BEJtrH8a.js";import"./useControlled-D1P2IuRq.js";import"./Button-fi3zZM83.js";import"./small-cross-CInH2-yh.js";import"./ActionButton-DhNYUSlb.js";import"./Checkbox-DSUd8a7Y.js";import"./useValueChanged-BljXNw8x.js";import"./CollapsiblePanel-C2GTiw59.js";import"./MultiColumnSortDialog-BKIS72x4.js";import"./MenuTrigger-C8JhPNog.js";import"./CompositeItem-CyTGoO_U.js";import"./ToolbarRootContext-BMS0iTVE.js";import"./getDisabledMountTransitionStyles-BYU-ducs.js";import"./getPseudoElementBounds-BDhodCIt.js";import"./chevron-down-DYalT47P.js";import"./index-C1B0s3j1.js";import"./error-CYI1ELi7.js";import"./BaseCbacBanner-DQQ-tpgC.js";import"./makeExternalStore-VBmH-lGu.js";import"./Tooltip-DHjKu8cE.js";import"./PopoverPopup-ZZbgTqgr.js";import"./debounce-BbAyHLdF.js";import"./useOsdkClient-CB7r24bA.js";import"./tick-D_CF6UIY.js";import"./DropdownField-CJScNr2p.js";import"./isEqual-CLLsedGk.js";import"./withOsdkMetrics-BEbRkfCK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
