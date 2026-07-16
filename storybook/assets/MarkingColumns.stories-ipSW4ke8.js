import{f as n,j as t}from"./iframe-CP6cTA_F.js";import{O as p}from"./object-table-iH_nDn0i.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DPvmA7Zq.js";import"./index-ExTRoT-S.js";import"./Dialog-n5PLBCLP.js";import"./cross-CWv2CgwP.js";import"./svgIconContainer-CiUu7uLs.js";import"./useBaseUiId-D0sIK9VN.js";import"./InternalBackdrop-DTsLPRoT.js";import"./composite-CPmAS2e0.js";import"./index-92g2yr3h.js";import"./index-DfQvziz6.js";import"./index-gOwupRTS.js";import"./useEventCallback-g_-UBx9H.js";import"./SkeletonBar-DJB-DfH-.js";import"./LoadingCell-a0CHDbBj.js";import"./ColumnConfigDialog-eB2ic_kG.js";import"./DraggableList-Pvn_pOlX.js";import"./search-DPugjmQj.js";import"./Input-FpAyHSwM.js";import"./useControlled-dbis8QU3.js";import"./Button-tMP7gYE9.js";import"./small-cross-COTRJ0DV.js";import"./ActionButton-DY_8vflj.js";import"./Checkbox-NIl7cDeZ.js";import"./useValueChanged-CvyM_SOX.js";import"./CollapsiblePanel-BuiAZoAU.js";import"./MultiColumnSortDialog-DXgAkDjI.js";import"./MenuTrigger-DVDTnihL.js";import"./CompositeItem-CrH2QCUe.js";import"./ToolbarRootContext-DpI_4HJ8.js";import"./getDisabledMountTransitionStyles-B7weFR4t.js";import"./getPseudoElementBounds-ts0aGaOY.js";import"./chevron-down-CiprR_Xm.js";import"./index-CjtUux1o.js";import"./error-DGSliNR_.js";import"./BaseCbacBanner-CZRiFsMH.js";import"./makeExternalStore-CdnPWcvL.js";import"./Tooltip-Tcw1lOsZ.js";import"./PopoverPopup-BR_L2OtC.js";import"./toNumber-DCSdLbGB.js";import"./useOsdkClient-C3uE13JX.js";import"./tick-BlzG5F_2.js";import"./DropdownField-D1EmK9h6.js";import"./withOsdkMetrics-39RZR2Ts.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
