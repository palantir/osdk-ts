import{f as n,j as t}from"./iframe-B3--SWXh.js";import{O as p}from"./object-table-DwSQDkDk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DbC-e6ij.js";import"./Table-BOxDgHun.js";import"./index-COk_zlCt.js";import"./Dialog-BlHDAPNu.js";import"./cross-CgmvkO1B.js";import"./svgIconContainer-CZ-MqUJE.js";import"./useBaseUiId-unxoeY_a.js";import"./InternalBackdrop-B__o5AWh.js";import"./composite-BGS0ODQ2.js";import"./index-BgSZhSEQ.js";import"./index-zyXz2MZS.js";import"./index-COvE_MKU.js";import"./useEventCallback-DcEFlSv0.js";import"./SkeletonBar-B5XZ7NBd.js";import"./LoadingCell-abMpKQSw.js";import"./ColumnConfigDialog-69IsMT36.js";import"./DraggableList-BcXW1_ME.js";import"./Input-C13vaZFn.js";import"./useControlled-CSj0MddA.js";import"./Button-BjF4Tn_i.js";import"./small-cross-CeQ6jTlB.js";import"./ActionButton-BV2J17JR.js";import"./Checkbox-DCmZOLRJ.js";import"./minus-CU6mo5-V.js";import"./useValueChanged-BUplCMtl.js";import"./caret-down-CTE-lYwS.js";import"./CollapsiblePanel-WyHhnCBf.js";import"./MultiColumnSortDialog-U5kWtT6_.js";import"./MenuTrigger-BjeFwV-t.js";import"./CompositeItem-BjuMxKOc.js";import"./ToolbarRootContext-C0ro7PA0.js";import"./getDisabledMountTransitionStyles-MdJKV5_C.js";import"./getPseudoElementBounds-8rodhleB.js";import"./chevron-down-DhSqywVB.js";import"./index-C5JyokLV.js";import"./error-Bps8jrjC.js";import"./BaseCbacBanner-y_pF5Ytp.js";import"./makeExternalStore-D54BXTfz.js";import"./Tooltip-DovQ5GwH.js";import"./PopoverPopup-DZZO3JSW.js";import"./toNumber-C6bWzmr5.js";import"./useOsdkClient-bVJKNro-.js";import"./DropdownField-D_1exK6s.js";import"./withOsdkMetrics-C9hxi18Q.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
