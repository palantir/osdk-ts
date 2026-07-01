import{f as n,j as t}from"./iframe-D0cQ1eSr.js";import{O as p}from"./object-table-B29kaiXn.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-8p1ODNIo.js";import"./Table-Bf6XwFS-.js";import"./index-BdPIEzYw.js";import"./Dialog-BVP1baMb.js";import"./cross-C3ZUVARE.js";import"./svgIconContainer-Dgml8VCW.js";import"./useBaseUiId-C7tJIDCt.js";import"./InternalBackdrop-DTBPrXJW.js";import"./composite-uDxssXD9.js";import"./index-DQ00X8fb.js";import"./index-C-OmQGL8.js";import"./index-CE05mfN6.js";import"./useEventCallback-CrQec2DC.js";import"./SkeletonBar-Bq5iqTaq.js";import"./LoadingCell-C6W61uVN.js";import"./ColumnConfigDialog-DlA9uCOJ.js";import"./DraggableList-DtHL5Pcz.js";import"./search-B7w-MVhD.js";import"./Input-B1SOPRep.js";import"./useControlled-CdPWtduu.js";import"./Button-DxZ4MDs1.js";import"./small-cross-DPVCZkO5.js";import"./ActionButton-B1iAz46R.js";import"./Checkbox-C_wJXX2X.js";import"./minus-C_8-_ghW.js";import"./tick-BZ6aL2Qw.js";import"./useValueChanged-Ct1EbnNf.js";import"./caret-down-DPGoBPIC.js";import"./CollapsiblePanel-_7UxYXfB.js";import"./MultiColumnSortDialog-CG0p2yyb.js";import"./MenuTrigger-Bv4fNYIL.js";import"./CompositeItem-CcFW3oCd.js";import"./ToolbarRootContext-ByWYeUkS.js";import"./getDisabledMountTransitionStyles-Dkoz9M_P.js";import"./getPseudoElementBounds-CHByhHix.js";import"./chevron-down-B8r9vnNM.js";import"./index-BglnIyNL.js";import"./error-dknaGxzi.js";import"./BaseCbacBanner-BCd7x_Lo.js";import"./makeExternalStore-C3TBwPQp.js";import"./Tooltip-C32ThDQp.js";import"./PopoverPopup-Bw2XA-6K.js";import"./toNumber-CDC6VFSc.js";import"./useOsdkClient-Bum2HBLe.js";import"./DropdownField-aNqVK5C7.js";import"./withOsdkMetrics-Cd32WcJG.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
