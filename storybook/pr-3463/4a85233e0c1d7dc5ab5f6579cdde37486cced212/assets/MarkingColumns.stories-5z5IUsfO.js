import{f as n,j as t}from"./iframe-pvo5mNRI.js";import{O as p}from"./object-table-BNexrZvx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CUspSaqE.js";import"./Table-hb_lHma7.js";import"./index-qcIymPYI.js";import"./Dialog-CymeLvdJ.js";import"./cross-4FGUS6WK.js";import"./svgIconContainer-BxJfLChJ.js";import"./useBaseUiId-eF9vQNIb.js";import"./InternalBackdrop-DCDCacSU.js";import"./composite-DIc_-7tC.js";import"./index-cpl35BgU.js";import"./index-CinOj92A.js";import"./index-DuarChLa.js";import"./useEventCallback-DIaODPmf.js";import"./SkeletonBar-cIn9-LHa.js";import"./LoadingCell-BKTj3-EE.js";import"./ColumnConfigDialog-CPlqjtYO.js";import"./DraggableList-B7R87A5v.js";import"./search-Cu0ZfvZ2.js";import"./Input-D75p9GRe.js";import"./useControlled-PdT34XRG.js";import"./Button-Df62z_9f.js";import"./small-cross-IqcNSDR6.js";import"./ActionButton-DJFHn5aq.js";import"./Checkbox-78DV608f.js";import"./useValueChanged-C39KMRgc.js";import"./CollapsiblePanel-B5Kthy9Z.js";import"./MultiColumnSortDialog-DCI9_9YJ.js";import"./MenuTrigger-_Hv5703t.js";import"./CompositeItem-DGqjJsoS.js";import"./ToolbarRootContext-Dl9FxZ6i.js";import"./getDisabledMountTransitionStyles-CezgsNNq.js";import"./getPseudoElementBounds-Cmc5VraW.js";import"./chevron-down-BrEbPX66.js";import"./index-BbN4gMj-.js";import"./error-btC3ZvGx.js";import"./BaseCbacBanner-CU13u5J1.js";import"./makeExternalStore-6UMapRdl.js";import"./Tooltip-Dle0cage.js";import"./PopoverPopup-CZ-XHKfW.js";import"./toNumber-DnUiLlb4.js";import"./useOsdkClient-DL-yQIgQ.js";import"./tick-BlMtSqzz.js";import"./DropdownField-C_GBS5m4.js";import"./withOsdkMetrics-C01UvrpP.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
