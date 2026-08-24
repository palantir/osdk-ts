import{f as p,j as e}from"./iframe-Cp-OZSnu.js";import{O as i}from"./object-table-CfyXoB90.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D0TF71Jy.js";import"./Table-CiWJGaSH.js";import"./index-CkF9JaVm.js";import"./Dialog-B4l2mtAg.js";import"./cross-B5c-VWRK.js";import"./svgIconContainer-CxRnbkUR.js";import"./useBaseUiId-IikVfOCL.js";import"./InternalBackdrop-vW5OBAT0.js";import"./composite-D2o-jxlM.js";import"./index-JtC5fr_f.js";import"./index-XQPE0BXO.js";import"./index-DwAKCp0R.js";import"./useEventCallback-DfdH9uyV.js";import"./SkeletonBar-5PqapGnZ.js";import"./LoadingCell-BScpMvgF.js";import"./ColumnConfigDialog-B57JUt_x.js";import"./DraggableList-C5K3BPEc.js";import"./search-BXFPe1aS.js";import"./Input-BS6nNy2e.js";import"./useControlled-IGbL1OgU.js";import"./Button-10bMmHGl.js";import"./small-cross-Bs17Z7ts.js";import"./ActionButton-zOvyMBGx.js";import"./Checkbox-B8Husi45.js";import"./useValueChanged-BU4ePFF5.js";import"./CollapsiblePanel-CbpCiDEW.js";import"./MultiColumnSortDialog-By7JDjRb.js";import"./MenuTrigger-BVMeq6Rj.js";import"./CompositeItem-7Cd8Z46E.js";import"./ToolbarRootContext-DfeiVioE.js";import"./getDisabledMountTransitionStyles-D4MlkAs5.js";import"./getPseudoElementBounds-CUEq49CO.js";import"./chevron-down-CqsW6wc2.js";import"./index-C46CdtdM.js";import"./error-o2ED4R93.js";import"./BaseCbacBanner-DWZMW_NS.js";import"./makeExternalStore-D9rplt6T.js";import"./Tooltip-BG7Ajslr.js";import"./PopoverPopup-BOe11Gw9.js";import"./debounce-DdIQASxO.js";import"./useOsdkClient-BOP-wcoz.js";import"./tick-D0gf4TUf.js";import"./DropdownField-DvuC2_FB.js";import"./isEqual-pN97cfTT.js";import"./withOsdkMetrics-DSHyV5CB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
