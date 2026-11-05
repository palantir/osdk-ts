import{f as p,j as e}from"./iframe-BGZow3KJ.js";import{O as i}from"./object-table-Dy50goam.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CV0-5wxc.js";import"./Table-DA1FfOaK.js";import"./index-BDJbf4mz.js";import"./Dialog-B1qY-5Ke.js";import"./cross-Dn--TE22.js";import"./svgIconContainer-GlJoQzna.js";import"./useBaseUiId-BlZeP_kj.js";import"./InternalBackdrop-B_sB-beZ.js";import"./composite-CN_PLOWp.js";import"./index-BuHLiRGy.js";import"./index-C3aV2ZJb.js";import"./index-DEaxfkN8.js";import"./useEventCallback-mWSDmhwd.js";import"./SkeletonBar-DU-7laho.js";import"./LoadingCell-BY7lFPHu.js";import"./ColumnConfigDialog-BzmNhDRK.js";import"./DraggableList-BWanF9g_.js";import"./search-xttomfsG.js";import"./Input-BSDEuHVc.js";import"./useControlled-C-Ujr0_X.js";import"./Button-B8_EYdXY.js";import"./small-cross-DO6-UyiL.js";import"./ActionButton-BWeIxwPs.js";import"./Checkbox-D68JXFmj.js";import"./useValueChanged-Bau6PUUH.js";import"./CollapsiblePanel-CwHNwtms.js";import"./MultiColumnSortDialog-CN1uErBY.js";import"./MenuTrigger--QqhK-w2.js";import"./CompositeItem-BUIK-kSM.js";import"./ToolbarRootContext-CqO-yoJp.js";import"./getDisabledMountTransitionStyles-BTYArxOj.js";import"./getPseudoElementBounds-D5IsxrGd.js";import"./chevron-down-4eRxImwL.js";import"./index-D9ncN4SR.js";import"./error-C57Ogh7g.js";import"./BaseCbacBanner-COW4ued-.js";import"./makeExternalStore-C3raoZ1p.js";import"./Tooltip-BRxp8-5A.js";import"./PopoverPopup-CUF3E2YZ.js";import"./debounce-B9ghShVf.js";import"./useOsdkClient-hMBV3ED4.js";import"./tick-Du4Lzmue.js";import"./DropdownField-CnC7UHHW.js";import"./isEqual-CLKX9Iv1.js";import"./withOsdkMetrics-D6t-dwVR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
