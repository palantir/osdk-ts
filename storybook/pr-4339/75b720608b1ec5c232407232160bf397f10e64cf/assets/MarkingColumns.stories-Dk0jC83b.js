import{f as p,j as e}from"./iframe-DMbRIuDb.js";import{O as i}from"./object-table-B0Csi-L9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-sYBSF0kM.js";import"./Table-JZQclb11.js";import"./index-Bu-1yS3f.js";import"./Dialog-ofYSW6ZV.js";import"./cross-D-Gd3Z1L.js";import"./svgIconContainer-DRmK9U-I.js";import"./useBaseUiId-Ud_ZuwhE.js";import"./InternalBackdrop-D0_D0B89.js";import"./composite-BbcTHbJw.js";import"./index-BqPJnSgL.js";import"./index-DYfyQJ7D.js";import"./index-Bw2xP442.js";import"./useEventCallback-B5DihS4I.js";import"./SkeletonBar-CSxcwHsY.js";import"./LoadingCell-CSgKfeTm.js";import"./ColumnConfigDialog-C6UvhfFS.js";import"./DraggableList-gU76DxBG.js";import"./search-0CHVsg6w.js";import"./Input-D-dAAgmX.js";import"./useControlled-CIwMJypC.js";import"./Button-CD6kVtUc.js";import"./small-cross-Bl_8sGCy.js";import"./ActionButton-BuZQ80QL.js";import"./Checkbox-BiDq78AM.js";import"./useValueChanged-6Z_1Wu5g.js";import"./CollapsiblePanel-BRC6_1mg.js";import"./MultiColumnSortDialog-C31dFqGE.js";import"./MenuTrigger-D71lz07f.js";import"./CompositeItem-C_Zv4JbC.js";import"./ToolbarRootContext-CnFMRhrV.js";import"./getDisabledMountTransitionStyles-XoIoWCwu.js";import"./getPseudoElementBounds-DP-4v2Ps.js";import"./chevron-down-_C5sbwkb.js";import"./index-dCYLjsWC.js";import"./error-D_c53g1g.js";import"./BaseCbacBanner-CZaw_ege.js";import"./makeExternalStore-H1BAkO0H.js";import"./Tooltip-BwMVZzeJ.js";import"./PopoverPopup-LtTxVH8V.js";import"./debounce-IZu9ANTR.js";import"./useOsdkClient-CfV6cdO_.js";import"./tick-D2Wm6MFc.js";import"./DropdownField-Dmp4Hyee.js";import"./isEqual-Dl3fPPvK.js";import"./withOsdkMetrics-CiT1Znwa.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
