import{f as p,j as e}from"./iframe-8LpzfSDn.js";import{O as i}from"./object-table--A9nr_D6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DtRM003F.js";import"./Table-CoO7Txsa.js";import"./index-BUf0-n6f.js";import"./Dialog-DOQ8osnu.js";import"./cross-CCb0fI9c.js";import"./svgIconContainer-BKZgIvjb.js";import"./useBaseUiId-4wN8rdaw.js";import"./InternalBackdrop-S-BNADSf.js";import"./composite-2A5pk4b0.js";import"./index-RVyoUJfW.js";import"./index-BjrAvEhr.js";import"./index-CCORHeEv.js";import"./useEventCallback-D7bgDq2J.js";import"./SkeletonBar-C1CeiyuW.js";import"./LoadingCell-BHuaTwQ0.js";import"./ColumnConfigDialog-DqOLvEq8.js";import"./DraggableList-C9tzjVp6.js";import"./search-zhneh-KF.js";import"./Input-Dv-by0TU.js";import"./useControlled-CoRLjGHB.js";import"./Button-BApq-zP_.js";import"./small-cross-Cd-SXCdz.js";import"./ActionButton-Bxy-NTOO.js";import"./Checkbox-D-mCQp5x.js";import"./useValueChanged-BozjWAfd.js";import"./CollapsiblePanel-DTSInNYa.js";import"./MultiColumnSortDialog-DI3n5Vct.js";import"./MenuTrigger-PruXJXos.js";import"./CompositeItem-CnGxkne-.js";import"./ToolbarRootContext-40dyuA6p.js";import"./getDisabledMountTransitionStyles-Mf_ToGG9.js";import"./getPseudoElementBounds-DU8qDaFN.js";import"./chevron-down-DsREyE6f.js";import"./index-BPBF2E68.js";import"./error-B-6NO-zU.js";import"./BaseCbacBanner-_Gsb0Wun.js";import"./makeExternalStore-DEN8pBF9.js";import"./Tooltip-hbbCevp2.js";import"./PopoverPopup-2AhTF_FP.js";import"./debounce-IDNd93md.js";import"./useOsdkClient-CNaHcQUk.js";import"./tick-C-vIWgEC.js";import"./DropdownField-64H1OXM1.js";import"./isEqual-B3eItCfo.js";import"./withOsdkMetrics-eiA9ax16.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
