import{f as n,j as t}from"./iframe-1zlKUcSc.js";import{O as p}from"./object-table-0zGasvWZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CTkLWgF6.js";import"./Table-qa_QPh6R.js";import"./index-DiPEpNnl.js";import"./Dialog-Dv1LegWm.js";import"./cross-BuIFoaJh.js";import"./svgIconContainer-C8IZLkS0.js";import"./useBaseUiId-6JzTpPfQ.js";import"./InternalBackdrop-DLdRs8Q_.js";import"./composite-DWazgZ7T.js";import"./index-HXc49RyK.js";import"./index-BcuLOOrQ.js";import"./index-YAqT93Eu.js";import"./useEventCallback-DogtZdFU.js";import"./SkeletonBar-BdjjM6wz.js";import"./LoadingCell-BwTv40Ii.js";import"./ColumnConfigDialog-Sq7J_f_J.js";import"./DraggableList-DkLb-DCG.js";import"./search-Dv_yGgK4.js";import"./Input-HecR9wga.js";import"./useControlled-FW3ZNM_t.js";import"./Button-CY55YNlH.js";import"./small-cross-ClgWOj27.js";import"./ActionButton-C1Q6FCZj.js";import"./Checkbox-B3qwtiI8.js";import"./useValueChanged-DiFtdmMU.js";import"./CollapsiblePanel-Du9x8fCY.js";import"./MultiColumnSortDialog-Dbs6a56B.js";import"./MenuTrigger-DePITIk0.js";import"./CompositeItem-D-oGgt8S.js";import"./ToolbarRootContext-CB0hAZMy.js";import"./getDisabledMountTransitionStyles-DsJe-dBa.js";import"./getPseudoElementBounds-DLWZSL_K.js";import"./chevron-down-Bey2Po21.js";import"./index-h_0uM_IG.js";import"./error-DfNGl4TZ.js";import"./BaseCbacBanner-DtgjtSCa.js";import"./makeExternalStore-BSSkPAFY.js";import"./Tooltip-CTaReriA.js";import"./PopoverPopup-D3-jGPJC.js";import"./toNumber-Cdp4tCLf.js";import"./useOsdkClient-tRRl3zj7.js";import"./tick-D7CXLxix.js";import"./DropdownField-BNqwN1Kc.js";import"./withOsdkMetrics-CJWuisvC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
