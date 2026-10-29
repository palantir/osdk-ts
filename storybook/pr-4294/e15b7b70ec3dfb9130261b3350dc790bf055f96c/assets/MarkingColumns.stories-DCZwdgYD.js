import{f as p,j as e}from"./iframe-DvwH42FA.js";import{O as i}from"./object-table-Jb6gGdnE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DEybsrDJ.js";import"./Table-DGDNG_pz.js";import"./index-J26QqFGl.js";import"./Dialog-DI_hpK08.js";import"./cross-BN0lcpY0.js";import"./svgIconContainer-BNUkj3Pd.js";import"./useBaseUiId-tOAOUQiJ.js";import"./InternalBackdrop-C9rZ6hh4.js";import"./composite-D2TyNObR.js";import"./index-BdNMK7Gf.js";import"./index-B7x2aIOS.js";import"./index-BMcLikr0.js";import"./useEventCallback-jKMhLcqs.js";import"./SkeletonBar-BmJJEjRs.js";import"./LoadingCell-Dy5tHWdn.js";import"./ColumnConfigDialog-Dwjj2Hie.js";import"./DraggableList-DOZz2szn.js";import"./search-Cl4hDVdp.js";import"./Input-CtJ7UKD6.js";import"./useControlled-BhMAv1ps.js";import"./Button-C8MB2pGs.js";import"./small-cross-DfjEbz9b.js";import"./ActionButton-BHPoqNul.js";import"./Checkbox-02j38gX7.js";import"./useValueChanged-BDGiJFuk.js";import"./CollapsiblePanel-gRNf6Seh.js";import"./MultiColumnSortDialog-BPtc_2lX.js";import"./MenuTrigger-D77A_xbF.js";import"./CompositeItem-DeFaZgPZ.js";import"./ToolbarRootContext-BV3Ciak4.js";import"./getDisabledMountTransitionStyles-QU60JeOn.js";import"./getPseudoElementBounds-Dr6gOvy1.js";import"./chevron-down-DclS5GqO.js";import"./index-BuEbl4ZZ.js";import"./error-yeSVRC55.js";import"./BaseCbacBanner-B_4eGMAs.js";import"./makeExternalStore-CKGyOq0N.js";import"./Tooltip-D2_zsHn4.js";import"./PopoverPopup-Dz8cYHRU.js";import"./debounce-Ca-_00LJ.js";import"./useOsdkClient-D8ctbvIl.js";import"./tick-BjZRSTbc.js";import"./DropdownField-B2W4HxFF.js";import"./isEqual-Dme2tnBF.js";import"./withOsdkMetrics-B8wi7VI0.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
