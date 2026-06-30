import{f as n,j as t}from"./iframe-hA54k6Ra.js";import{O as p}from"./object-table-DATbYPk9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B2ctPuK5.js";import"./Table-C6Le93p0.js";import"./index-CuWY2XwM.js";import"./Dialog-DshM5ho7.js";import"./cross-DT1vpwrk.js";import"./svgIconContainer-Bt5A1ZM1.js";import"./useBaseUiId-D7evU5vy.js";import"./InternalBackdrop-BOlZyT-O.js";import"./composite-CgGAQ8DQ.js";import"./index-CDT2pjS0.js";import"./index-BXS422Xk.js";import"./index-D8IXKVGJ.js";import"./useEventCallback-BC5x1cCq.js";import"./SkeletonBar-BAIGvG-Z.js";import"./LoadingCell-CHGMl8FX.js";import"./ColumnConfigDialog-DhEwez2r.js";import"./DraggableList-CexeqMm-.js";import"./search-DyXrHlWh.js";import"./Input-3RHKQlOe.js";import"./useControlled-CLK-WO_f.js";import"./Button-C0ZpVY7M.js";import"./small-cross-v7HF920m.js";import"./ActionButton-DZgI6ocs.js";import"./Checkbox-D3EYRL2O.js";import"./minus-Dr_q24S2.js";import"./tick-DNiFu8m0.js";import"./useValueChanged-BR8fXQcj.js";import"./caret-down-BN8v1Kvq.js";import"./CollapsiblePanel-ft0E0y03.js";import"./MultiColumnSortDialog-BHsGQef1.js";import"./MenuTrigger-kTMLfRVu.js";import"./CompositeItem-fKFw6KEZ.js";import"./ToolbarRootContext-CxUD8pdl.js";import"./getDisabledMountTransitionStyles-DH3VZr7b.js";import"./getPseudoElementBounds-CfZ-O487.js";import"./chevron-down--kw9M12S.js";import"./index-CGP2Zvg-.js";import"./error-Bt_KfG7R.js";import"./BaseCbacBanner-C7v8m2hS.js";import"./makeExternalStore-CNH7TiNm.js";import"./Tooltip-B7OcSX8I.js";import"./PopoverPopup-DoTgReHM.js";import"./toNumber-C2vgQYhv.js";import"./useOsdkClient-WG7fWoyT.js";import"./DropdownField-C8lw1oO5.js";import"./withOsdkMetrics-BYUsJTYh.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
