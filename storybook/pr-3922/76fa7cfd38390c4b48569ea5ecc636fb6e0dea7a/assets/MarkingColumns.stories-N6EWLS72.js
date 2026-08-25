import{f as p,j as e}from"./iframe-wRPSG4iB.js";import{O as i}from"./object-table-8Y1JwUz1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D848Ncme.js";import"./Table-0RQ3UVz4.js";import"./index-C8OWKbFz.js";import"./Dialog-HZy4ZPWl.js";import"./cross-CfaXio25.js";import"./svgIconContainer-D1tLpFWt.js";import"./useBaseUiId-SdltLqrh.js";import"./InternalBackdrop--tZLnzRh.js";import"./composite-DX6SXiPb.js";import"./index-DhSyQl07.js";import"./index-B7phL-s1.js";import"./index-B4-wl6ZX.js";import"./useEventCallback-CoPD8ert.js";import"./SkeletonBar-B6ZmtqXs.js";import"./LoadingCell-L2LhDV1f.js";import"./ColumnConfigDialog-DTp_0s94.js";import"./DraggableList-vhKE0lgH.js";import"./search-CQw0whIQ.js";import"./Input-DLUURi2W.js";import"./useControlled-Djv6iTti.js";import"./Button-DRSm3Zzs.js";import"./small-cross-BRd1V0oR.js";import"./ActionButton-Dc0JF2bX.js";import"./Checkbox-qB2r4ZEQ.js";import"./useValueChanged-BNL2zG0A.js";import"./CollapsiblePanel-DGJUMUDB.js";import"./MultiColumnSortDialog-BaJaZMYS.js";import"./MenuTrigger-DPSwAITp.js";import"./CompositeItem-T6bJ2JFd.js";import"./ToolbarRootContext-CvxpTeNo.js";import"./getDisabledMountTransitionStyles-CufHlIlT.js";import"./getPseudoElementBounds-BSmrwkT6.js";import"./chevron-down-DU-ii_Gy.js";import"./index-nYnrFckb.js";import"./error-jxE8jp2D.js";import"./BaseCbacBanner-BvtKjglS.js";import"./makeExternalStore-D9SKqMSw.js";import"./Tooltip-DHSBoY2T.js";import"./PopoverPopup-DKA0gpdC.js";import"./debounce-Bz2p_KJg.js";import"./useOsdkClient-QwNKQOaX.js";import"./tick-14QjOe4v.js";import"./DropdownField-kBSF9J4x.js";import"./isEqual-MwdxP9OB.js";import"./withOsdkMetrics-Duzkh8Hp.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
