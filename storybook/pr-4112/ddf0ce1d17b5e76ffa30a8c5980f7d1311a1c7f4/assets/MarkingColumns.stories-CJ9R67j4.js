import{f as p,j as e}from"./iframe-D8QP41pb.js";import{O as i}from"./object-table-BYrGksL1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-rYx5aepV.js";import"./Table-BxriQm8K.js";import"./index-ptxv2enP.js";import"./Dialog-BqcUisPw.js";import"./cross-C4B55KNt.js";import"./svgIconContainer-CRypdVCt.js";import"./useBaseUiId-BoqMbBaF.js";import"./InternalBackdrop-CKHEvFzx.js";import"./composite-sgwSF-wx.js";import"./index-Cgw2ueis.js";import"./index-Dng6rJam.js";import"./index-CNNBeMhh.js";import"./useEventCallback-DdNo-ccX.js";import"./SkeletonBar-Csa-9swL.js";import"./LoadingCell-D_i2XUNr.js";import"./ColumnConfigDialog-Cd26VZI3.js";import"./DraggableList-NlKXxKYZ.js";import"./search-C3wepv5K.js";import"./Input-lEEPXcpp.js";import"./useControlled-G3ngQ_8d.js";import"./Button-CyBwq7g0.js";import"./small-cross-BtPSf5__.js";import"./ActionButton-Bvgk-75l.js";import"./Checkbox-EtH8CkIm.js";import"./useValueChanged-9pWqBbjF.js";import"./CollapsiblePanel-Cxlgd4Ev.js";import"./MultiColumnSortDialog-ZgWNUGdf.js";import"./MenuTrigger-BJGTKCX4.js";import"./CompositeItem-nSbVFhm7.js";import"./ToolbarRootContext-DDihycVp.js";import"./getDisabledMountTransitionStyles-EIaHnfB3.js";import"./getPseudoElementBounds-DtmmKYOt.js";import"./chevron-down-7YXmtC0t.js";import"./index-BOgqeeRL.js";import"./error-D-e6D9Uk.js";import"./BaseCbacBanner-BwQAputt.js";import"./makeExternalStore-DKTVVSUo.js";import"./Tooltip-oiN_I4PZ.js";import"./PopoverPopup-CzD111vI.js";import"./debounce-tZf_e5M0.js";import"./useOsdkClient-DsLeguWM.js";import"./tick-DIslqI7R.js";import"./DropdownField-BxbakFzB.js";import"./isEqual-DlOUWIw3.js";import"./withOsdkMetrics-nBhke6l1.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
