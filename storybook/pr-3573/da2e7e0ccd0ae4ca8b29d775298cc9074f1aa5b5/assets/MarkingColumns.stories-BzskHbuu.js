import{f as n,j as t}from"./iframe-C_1Lo6vx.js";import{O as p}from"./object-table-D6QjISsQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BJeu9M3_.js";import"./Table-LMIbvqp5.js";import"./index-CiIER5WL.js";import"./Dialog-COl4OOdw.js";import"./cross-BgQvhrmk.js";import"./svgIconContainer-Dx58van2.js";import"./useBaseUiId-DNGH9vxz.js";import"./InternalBackdrop-q-Nlysil.js";import"./composite-Dd8NyeIp.js";import"./index-DFn5EXXq.js";import"./index-ySNa2Pv6.js";import"./index-enARCyiw.js";import"./useEventCallback-DI7Le9j2.js";import"./SkeletonBar-DNUmjhYc.js";import"./LoadingCell-RSewebfU.js";import"./ColumnConfigDialog-CMxs-niW.js";import"./DraggableList-mKcAQWfW.js";import"./search-K4efN6Zt.js";import"./Input-CdvyZo2L.js";import"./useControlled-BSDavnra.js";import"./Button-B2neH2r7.js";import"./small-cross-DNr9EVfw.js";import"./ActionButton-hNoTiocM.js";import"./Checkbox-CrI-dS_-.js";import"./minus-BoD3E1-B.js";import"./tick-WP4J0Ov_.js";import"./useValueChanged-BtNlftbq.js";import"./caret-down-BiTy7nvM.js";import"./CollapsiblePanel-CRJLTk7L.js";import"./MultiColumnSortDialog-DJaKwyp6.js";import"./MenuTrigger-C2de-8o3.js";import"./CompositeItem-DQ-k6_Qh.js";import"./ToolbarRootContext-DbBADNWY.js";import"./getDisabledMountTransitionStyles-CZNvlzQk.js";import"./getPseudoElementBounds-BlzbHmSb.js";import"./chevron-down-De4ww-L7.js";import"./index-CMeVHhZD.js";import"./error-CWqG0RB_.js";import"./BaseCbacBanner-CFzL73DG.js";import"./makeExternalStore-B7Os3AUy.js";import"./Tooltip-r72caGq6.js";import"./PopoverPopup-CmGKZUUy.js";import"./toNumber-CvyZePBs.js";import"./useOsdkClient-ZpbQPJmM.js";import"./DropdownField-BONjIu88.js";import"./withOsdkMetrics-CgaJOJjb.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
