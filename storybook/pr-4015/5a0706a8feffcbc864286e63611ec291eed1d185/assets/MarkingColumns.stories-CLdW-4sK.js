import{f as p,j as e}from"./iframe-CvtjOOTU.js";import{O as i}from"./object-table-UmQroVW1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-YYdL2GVs.js";import"./Table-mcEGYA07.js";import"./index-CO5W4Pg7.js";import"./Dialog-BofS88Np.js";import"./cross-BpzF3zqH.js";import"./svgIconContainer-lpqUMm2E.js";import"./useBaseUiId-3JVt3VnJ.js";import"./InternalBackdrop-Be9B27zu.js";import"./composite-po6w4N65.js";import"./index-DzATK-9N.js";import"./index-B4MsJewH.js";import"./index-CKTvbjkc.js";import"./useEventCallback-D1uiA1rY.js";import"./SkeletonBar-CafwHPpr.js";import"./LoadingCell-BICRbQzu.js";import"./ColumnConfigDialog-BKG3t0Fj.js";import"./DraggableList-DmZ9RDUA.js";import"./search-B0EmnwB3.js";import"./Input-LvpeWry1.js";import"./useControlled-TIKyE_eU.js";import"./Button-CirHg6K_.js";import"./small-cross-CEHkrMeL.js";import"./ActionButton-DyVOLyNI.js";import"./Checkbox-YuFQnrBu.js";import"./useValueChanged-Dx7gNUOP.js";import"./CollapsiblePanel-BWOQg1wv.js";import"./MultiColumnSortDialog-B0IJsnrx.js";import"./MenuTrigger-Dku5_OQr.js";import"./CompositeItem-B90xhnGL.js";import"./ToolbarRootContext-XjPDKw4l.js";import"./getDisabledMountTransitionStyles-CKrI2rr8.js";import"./getPseudoElementBounds-BFiPvh4n.js";import"./chevron-down-DEPGbWzo.js";import"./index-CebCVI2l.js";import"./error-CdHEMgDN.js";import"./BaseCbacBanner-D7S9BlO8.js";import"./makeExternalStore-BmjUzr6O.js";import"./Tooltip-9ewxrDzq.js";import"./PopoverPopup-CgxcL0ZR.js";import"./debounce-DcZETNZe.js";import"./useOsdkClient-BXT2chcO.js";import"./tick-cNgeLKWA.js";import"./DropdownField-ClAk7Vc2.js";import"./isEqual-CKUGC3M-.js";import"./withOsdkMetrics-DL5qkExK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
