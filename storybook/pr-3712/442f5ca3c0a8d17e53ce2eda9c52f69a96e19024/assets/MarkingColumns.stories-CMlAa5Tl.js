import{f as p,j as e}from"./iframe-DVuzAlfH.js";import{O as i}from"./object-table-BqMAGc9Z.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-VSftk98X.js";import"./Table-BtXXLShl.js";import"./index-G2Ae4Loa.js";import"./Dialog-eW1A1XHI.js";import"./cross-BfvpiQsM.js";import"./svgIconContainer-rlD9uYrP.js";import"./useBaseUiId-DCUs709h.js";import"./InternalBackdrop-DFzVfBjP.js";import"./composite-CFbRDSTc.js";import"./index-r_JxIcz1.js";import"./index-DN-x1yEJ.js";import"./index-D_MWv_15.js";import"./useEventCallback-3MOKJsOu.js";import"./SkeletonBar-DvvZZr34.js";import"./LoadingCell-ClCRGLny.js";import"./ColumnConfigDialog-KPSAbm_p.js";import"./DraggableList-_l-1ct_Q.js";import"./search-DF2gxwRx.js";import"./Input-BqYFFuO4.js";import"./useControlled-D-j9SdN7.js";import"./isEqual-s31p7ET5.js";import"./isObject-Dv5AOHe5.js";import"./Button-CKoJEZvW.js";import"./ActionButton-CpYCnTE2.js";import"./Checkbox-WP8iade2.js";import"./useValueChanged-CHHYK2fR.js";import"./CollapsiblePanel-siDfeqM1.js";import"./MultiColumnSortDialog-DsEnuCmd.js";import"./MenuTrigger-CMr2vMfM.js";import"./CompositeItem-CVRxwOF2.js";import"./ToolbarRootContext-sNDE-Hwv.js";import"./getDisabledMountTransitionStyles-CNqyO0ik.js";import"./getPseudoElementBounds-DXhjce3n.js";import"./chevron-down-7OzRGjeM.js";import"./index-Sj7yOGyv.js";import"./error-DiX46IHw.js";import"./BaseCbacBanner-Di4Z1xN1.js";import"./makeExternalStore-BTG-ldQg.js";import"./Tooltip-CFETiADe.js";import"./PopoverPopup-C_Zh2GEJ.js";import"./toNumber-BIb_RzLV.js";import"./useOsdkClient-DDiRZTIo.js";import"./tick-DbIm9rQh.js";import"./DropdownField-BcawetJU.js";import"./withOsdkMetrics-SWW3I-lj.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
