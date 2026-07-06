import{f as n,j as t}from"./iframe-CBxhM9az.js";import{O as p}from"./object-table-Dqc-yaY8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DW-KK_rZ.js";import"./Table-h9j7fqNs.js";import"./index-Cgf7pLo9.js";import"./Dialog-vDqqWy59.js";import"./cross-BDcYPaOo.js";import"./svgIconContainer-WdQ-lJI-.js";import"./useBaseUiId-9_EpMwZF.js";import"./InternalBackdrop-DFHVwMDy.js";import"./composite-Df1dJCMi.js";import"./index-CPiaO5lB.js";import"./index-CjaqmYPA.js";import"./index-BnHvkb-H.js";import"./useEventCallback-D0YTnVY1.js";import"./SkeletonBar-hKhSmt65.js";import"./LoadingCell-DYFx8LwX.js";import"./ColumnConfigDialog-_oNp4WYj.js";import"./DraggableList-BD3C8s30.js";import"./search-tBoCo39o.js";import"./Input-o8_LFGDR.js";import"./useControlled-B5r768gp.js";import"./Button-DOTPNZAD.js";import"./small-cross-BtqLy4Vr.js";import"./ActionButton-CeMk40mk.js";import"./Checkbox-CQqV4nx6.js";import"./useValueChanged-2h2EAomj.js";import"./CollapsiblePanel-cJDxiIST.js";import"./MultiColumnSortDialog-BfUv5TQQ.js";import"./MenuTrigger-B4-8S0Eq.js";import"./CompositeItem-DtegFXlt.js";import"./ToolbarRootContext-BeYMA7gL.js";import"./getDisabledMountTransitionStyles-C7U8KGpP.js";import"./getPseudoElementBounds-D2qAH0kG.js";import"./chevron-down-BXLYq3p8.js";import"./index-CYxWdSim.js";import"./error-B8LoRf1p.js";import"./BaseCbacBanner-CiwlVJdo.js";import"./makeExternalStore-CB_ai3M6.js";import"./Tooltip-0JLvYQYD.js";import"./PopoverPopup-DIw4j-98.js";import"./toNumber-BKA5rWdK.js";import"./useOsdkClient-BPZix_Hb.js";import"./tick-Bmc5daqv.js";import"./DropdownField-CD_fb-Uu.js";import"./withOsdkMetrics-DZvydXoo.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
