import{f as n,j as t}from"./iframe-BXTBckj4.js";import{O as p}from"./object-table-C9ouP1kY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-OEshUzXa.js";import"./Table-BM3dx56I.js";import"./index-B7qC8qa2.js";import"./Dialog-CkyN1Cq2.js";import"./cross-CDJbKg2x.js";import"./svgIconContainer-MOVoJIGV.js";import"./useBaseUiId-BK7ZDxqU.js";import"./InternalBackdrop-CGryO1fr.js";import"./composite--58kAkxe.js";import"./index-CmuTEpoL.js";import"./index-Dmw_GRR5.js";import"./index-BoLHkXmd.js";import"./useEventCallback-Cd4rmeq7.js";import"./SkeletonBar-BllVRjhq.js";import"./LoadingCell-CMvENp9M.js";import"./ColumnConfigDialog-B7Ujt6fi.js";import"./DraggableList-Bl2WEETo.js";import"./search-BKI0fima.js";import"./Input-C0ed5el1.js";import"./useControlled-BhUU6tD1.js";import"./Button-JQlrvaVF.js";import"./small-cross-BfmIElrf.js";import"./ActionButton-DnKJw9pV.js";import"./Checkbox-BMzr2L5j.js";import"./minus-CdfOrsdS.js";import"./tick-I_H2PqsJ.js";import"./useValueChanged-oNkOGlx3.js";import"./caret-down-CTQBBHDX.js";import"./CollapsiblePanel-27wB-5U3.js";import"./MultiColumnSortDialog-BNQc0V2U.js";import"./MenuTrigger-BxrP4D6e.js";import"./CompositeItem-CH6tW51C.js";import"./ToolbarRootContext-iT_XxTtv.js";import"./getDisabledMountTransitionStyles-XZK_Wr9I.js";import"./getPseudoElementBounds-DhSC8j9Q.js";import"./chevron-down-BLbNGkV7.js";import"./index-j-0-4QOm.js";import"./error-CyyUFRto.js";import"./BaseCbacBanner-DCgIEUsA.js";import"./makeExternalStore-Bi3zoSd9.js";import"./Tooltip-DC_aC2pD.js";import"./PopoverPopup-CjeTgYS3.js";import"./toNumber-bCok-hGr.js";import"./useOsdkClient-CxPX_x8j.js";import"./DropdownField-DfMOm9T5.js";import"./withOsdkMetrics-DXjU2jzK.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
