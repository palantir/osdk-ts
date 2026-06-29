import{f as n,j as t}from"./iframe-BFXaAbMi.js";import{O as p}from"./object-table-BeDacRgi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BMwoJTCs.js";import"./Table-BQZE2u70.js";import"./index-BuWbQMrM.js";import"./Dialog-BS27ms-N.js";import"./cross-CAFFJ4_C.js";import"./svgIconContainer-Bh0Nq4SG.js";import"./useBaseUiId-Bn5xxBMD.js";import"./InternalBackdrop-Ccb0LpAb.js";import"./composite-BXOLT3kb.js";import"./index-jh4ljTMC.js";import"./index-DzedeEFd.js";import"./index-8iHI4BiL.js";import"./useEventCallback-BxxkS4QL.js";import"./SkeletonBar-BV4fPVaD.js";import"./LoadingCell-DC0pBSAl.js";import"./ColumnConfigDialog-BWr63aHd.js";import"./DraggableList-Cd0qKp6_.js";import"./search-B98iV6aJ.js";import"./Input-CxdS1BnJ.js";import"./useControlled-Fbf28rFc.js";import"./Button-BnaQ_oXM.js";import"./small-cross-CVg4kuK3.js";import"./ActionButton-BOLBDvYq.js";import"./Checkbox-D9apXlf7.js";import"./minus-jtu1F2Dp.js";import"./tick-CSF7vSTC.js";import"./useValueChanged-BBQ6LcOp.js";import"./caret-down-C0ZBJoBq.js";import"./CollapsiblePanel-QcvJA0eg.js";import"./MultiColumnSortDialog-DyVHFNVd.js";import"./MenuTrigger-BcWjFIgc.js";import"./CompositeItem-C15X9b4C.js";import"./ToolbarRootContext-CDfXkfnW.js";import"./getDisabledMountTransitionStyles-Bz_yAVAr.js";import"./getPseudoElementBounds-_bBXU7TS.js";import"./chevron-down-B7GAy4Pf.js";import"./index-CMMWwlwk.js";import"./error-BcfPn1iY.js";import"./BaseCbacBanner-Dx3XHu_v.js";import"./makeExternalStore-BwbXy1eZ.js";import"./Tooltip-COyMPSeY.js";import"./PopoverPopup-DzSafZQB.js";import"./toNumber-DmsFq3A2.js";import"./useOsdkClient-BbhAvtvR.js";import"./DropdownField-OYwgC9k-.js";import"./withOsdkMetrics-M-3ZhO9h.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
