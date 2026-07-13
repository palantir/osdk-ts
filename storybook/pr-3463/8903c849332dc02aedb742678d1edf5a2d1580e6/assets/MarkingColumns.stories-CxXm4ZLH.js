import{f as n,j as t}from"./iframe-CPyJpJV3.js";import{O as p}from"./object-table-DaTov1VA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BvTlYPt-.js";import"./Table-BW5Gfq_6.js";import"./index-CCBRf6K7.js";import"./Dialog-DINtI5iy.js";import"./cross-YpKbhgG7.js";import"./svgIconContainer-BVg4uZ_a.js";import"./useBaseUiId-BE1FwJpN.js";import"./InternalBackdrop-D3Y8t6K0.js";import"./composite-CxH0eoEz.js";import"./index-Ds70Lr5a.js";import"./index-CcX6hWx6.js";import"./index-CZqI40TL.js";import"./useEventCallback-BcjJIdZL.js";import"./SkeletonBar-B_rmO7CU.js";import"./LoadingCell-DvMH1bNi.js";import"./ColumnConfigDialog-DAW7Vr9b.js";import"./DraggableList-CfsP9DV2.js";import"./search-C_SizRhc.js";import"./Input-DmeWRyym.js";import"./useControlled-B21cgT_m.js";import"./Button-CMM3K_74.js";import"./small-cross-DadSzmt5.js";import"./ActionButton-CyC5RjST.js";import"./Checkbox-jETR2T8J.js";import"./useValueChanged-ChG8kRbK.js";import"./CollapsiblePanel-DsxFLKKu.js";import"./MultiColumnSortDialog-B5LPJ1uN.js";import"./MenuTrigger-BPwRTJnH.js";import"./CompositeItem-aCyuzOz7.js";import"./ToolbarRootContext-lu3yZz9D.js";import"./getDisabledMountTransitionStyles-Bgb8GtSw.js";import"./getPseudoElementBounds-Q92BQcBU.js";import"./chevron-down-fZFgM6nc.js";import"./index-B0OCIQRa.js";import"./error-unHp6fXd.js";import"./BaseCbacBanner-DFDMj4mk.js";import"./makeExternalStore-CWLDTFqJ.js";import"./Tooltip-BR_mAU-7.js";import"./PopoverPopup-CzPhkEDU.js";import"./toNumber-ZA_0HHSR.js";import"./useOsdkClient-CjsatSHW.js";import"./tick-8PKVsUmx.js";import"./DropdownField-DpZtQO0f.js";import"./withOsdkMetrics-BuMST-fT.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
