import{f as n,j as t}from"./iframe-C4XKYgE5.js";import{O as p}from"./object-table-CZ03pUlz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ByMIrFv4.js";import"./Table-DKcmSoqo.js";import"./index-CiCimGv7.js";import"./Dialog-BKmu38yz.js";import"./cross-SskXVoXQ.js";import"./svgIconContainer-DWB9uWsU.js";import"./useBaseUiId-1dUFch-_.js";import"./InternalBackdrop-BLraMyaY.js";import"./composite-C9QZRf1q.js";import"./index-DIw1VLAV.js";import"./index-s5F2T_aq.js";import"./index-Dgr0kwEF.js";import"./useEventCallback-DibdWFDh.js";import"./SkeletonBar-BbDDJqdp.js";import"./LoadingCell-C1ve-hP-.js";import"./ColumnConfigDialog-BEHZpgeP.js";import"./DraggableList-BN0dagGx.js";import"./search-CBdJRNZZ.js";import"./Input-BTVpid4G.js";import"./useControlled-CPx5Hc84.js";import"./Button-C_YGALk9.js";import"./small-cross-BsZGEctz.js";import"./ActionButton-Ct8MwInR.js";import"./Checkbox-DSJBvFKy.js";import"./useValueChanged-tGRf_k0H.js";import"./CollapsiblePanel-nmgkiqGG.js";import"./MultiColumnSortDialog-CKnGnWqQ.js";import"./MenuTrigger-CPqfywKk.js";import"./CompositeItem-NtgMCdQI.js";import"./ToolbarRootContext-K6EaIDzn.js";import"./getDisabledMountTransitionStyles-B0J_e8fM.js";import"./getPseudoElementBounds-_7nbV4I2.js";import"./chevron-down-C0TNa5Vz.js";import"./index-DkzcJ2Zz.js";import"./error-RTaYQnfW.js";import"./BaseCbacBanner-B3Ippbe0.js";import"./makeExternalStore-BDrjJ8SL.js";import"./Tooltip-rmETp1RY.js";import"./PopoverPopup-WNMvBNDv.js";import"./toNumber-BXJsXI4s.js";import"./useOsdkClient-BTf1Bhjc.js";import"./tick-Vn2fBXRa.js";import"./DropdownField-CJtwJHPN.js";import"./withOsdkMetrics-CrDec_YM.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
