import{f as p,j as e}from"./iframe-aV2EncWj.js";import{O as i}from"./object-table-C7sU_pMg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BEXd_GfO.js";import"./Table-CQynln8M.js";import"./index-DAg7UqCb.js";import"./Dialog-DlVOlxsL.js";import"./cross-dxy14_5g.js";import"./svgIconContainer-BCVXBQ-1.js";import"./useBaseUiId-C7CCsH5x.js";import"./InternalBackdrop-kh4mgNPa.js";import"./composite-Dq2CI2j-.js";import"./index-hA2PEeQp.js";import"./index-BfjZxAF2.js";import"./index-DFQXRJJ6.js";import"./useEventCallback-D6xgPZYQ.js";import"./SkeletonBar-jVQq-MBX.js";import"./LoadingCell-_OHgwT2O.js";import"./ColumnConfigDialog-BEWGhcWr.js";import"./DraggableList-Bu6HBV3-.js";import"./search-eiqCYccO.js";import"./Input-DvwYRcaH.js";import"./useControlled-hdV7mmig.js";import"./Button-D_vltk0m.js";import"./small-cross-DA-oeMpB.js";import"./ActionButton-B1GQvJHP.js";import"./Checkbox-Dk_n3UR_.js";import"./useValueChanged-DvDRB8wM.js";import"./CollapsiblePanel-k7ZGWOLV.js";import"./MultiColumnSortDialog-CeHy5r4C.js";import"./MenuTrigger-CXD8O-es.js";import"./CompositeItem-DvEec9Z1.js";import"./ToolbarRootContext-C9SuiabC.js";import"./getDisabledMountTransitionStyles-bBx198Lm.js";import"./getPseudoElementBounds-DNc-4NGF.js";import"./chevron-down-ZHnmZ23u.js";import"./index-C659o23F.js";import"./error-Bsy631Mv.js";import"./BaseCbacBanner-DKBdpqXI.js";import"./makeExternalStore-DG-eMtQv.js";import"./Tooltip-DgN0O71v.js";import"./PopoverPopup-frampLhw.js";import"./debounce-NzCavBVE.js";import"./useOsdkClient-D27FNOXw.js";import"./tick-3h3QxDrA.js";import"./DropdownField-Colx8jAu.js";import"./isEqual-WzC3eRgn.js";import"./withOsdkMetrics-DJdEIIDz.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
