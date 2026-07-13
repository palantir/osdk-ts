import{f as n,j as t}from"./iframe-BxCJPCse.js";import{O as p}from"./object-table-kByRJ2VX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CTY9PlfL.js";import"./index-bqr75Rsj.js";import"./Dialog-m6Ftn1l8.js";import"./cross-DbAZfv-E.js";import"./svgIconContainer-DgI3jQUV.js";import"./useBaseUiId-CutF0j3G.js";import"./InternalBackdrop-B0ZUyLYZ.js";import"./composite-D6lyqV-H.js";import"./index-CgYvsxZG.js";import"./index-C3PJ5sQB.js";import"./index-BH_nQqc7.js";import"./useEventCallback-jMijy4-s.js";import"./SkeletonBar-RdpANhkJ.js";import"./LoadingCell-Bh_qUKZE.js";import"./ColumnConfigDialog-wU_1SuhU.js";import"./DraggableList-XfnGajmb.js";import"./search-CW9DG48n.js";import"./Input-DVjajTyj.js";import"./useControlled-cr8WJ7fY.js";import"./Button-BwE-cHBr.js";import"./small-cross-Cjdq_Ew9.js";import"./ActionButton-CFm2_hjg.js";import"./Checkbox-B3XHh-Tm.js";import"./useValueChanged-TVvy7eDO.js";import"./CollapsiblePanel-BP7LJMic.js";import"./MultiColumnSortDialog-CWVBMsRF.js";import"./MenuTrigger-D1pL1Y85.js";import"./CompositeItem-BvA_CVeT.js";import"./ToolbarRootContext-CKb6Hebz.js";import"./getDisabledMountTransitionStyles-_7QNzyvR.js";import"./getPseudoElementBounds-gBxVerhe.js";import"./chevron-down-HCT0fjSD.js";import"./index-BiWWXAC7.js";import"./error-C43AB1o9.js";import"./BaseCbacBanner-BUvNrLAv.js";import"./makeExternalStore-BxoVsaDo.js";import"./Tooltip-9hAbYyl_.js";import"./PopoverPopup-BCMvESGl.js";import"./toNumber-Cp6qC6UK.js";import"./useOsdkClient-CYA8bj2p.js";import"./tick-BnK6gp3Z.js";import"./DropdownField-CpF4SZBp.js";import"./withOsdkMetrics-BW629DVv.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
