import{f as n,j as t}from"./iframe-C0mJUu02.js";import{O as p}from"./object-table-D2cdIFzH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DoryacO7.js";import"./index-BgwdINoS.js";import"./Dialog-tP3X38Yx.js";import"./cross-DPybMDd2.js";import"./svgIconContainer-yhd967y-.js";import"./useBaseUiId-BXPJ6r5s.js";import"./InternalBackdrop-eV_wPgn6.js";import"./composite-CB0JAGdL.js";import"./index-B2I4cR14.js";import"./index-DL4f1cc2.js";import"./index-DfMLpjjw.js";import"./useEventCallback-Go0TpDk5.js";import"./SkeletonBar-Cwj6yEmN.js";import"./LoadingCell-DB4P3gjt.js";import"./ColumnConfigDialog-DCN35aA4.js";import"./DraggableList-BLMJj-GZ.js";import"./search-ChZtyXnw.js";import"./Input-BJLSSZ1M.js";import"./useControlled-Duq1LKsB.js";import"./Button-HM7yt_S2.js";import"./small-cross-DGjfl0CA.js";import"./ActionButton-UXEDUDgA.js";import"./Checkbox-Bay8w4Q5.js";import"./useValueChanged-E55TGlmx.js";import"./CollapsiblePanel-Puvnaw0n.js";import"./MultiColumnSortDialog-DqOI8I1U.js";import"./MenuTrigger-B0ZVbhVt.js";import"./CompositeItem-C1iJEhPv.js";import"./ToolbarRootContext-B3CoPmT-.js";import"./getDisabledMountTransitionStyles-BcnwoO2Y.js";import"./getPseudoElementBounds-DDWeSkyh.js";import"./chevron-down-C8QI49Qk.js";import"./index-Bn8nuryg.js";import"./error-Bl2kJhtX.js";import"./BaseCbacBanner-D4-iRmww.js";import"./makeExternalStore-D0DchU2u.js";import"./Tooltip-iAzktKwE.js";import"./PopoverPopup-BHh_CyIv.js";import"./toNumber-BOeMspUR.js";import"./useOsdkClient-DVIB83SB.js";import"./tick-BG3TNuWf.js";import"./DropdownField-CTKYY4zi.js";import"./withOsdkMetrics-CpF1vmZL.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
