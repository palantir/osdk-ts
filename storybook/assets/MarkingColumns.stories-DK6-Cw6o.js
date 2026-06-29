import{f as n,j as t}from"./iframe-CT-1jnja.js";import{O as p}from"./object-table-BaAeSv8y.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-fmbwXZXk.js";import"./index-Dp1Xu9AX.js";import"./Dialog--6b_ZbNF.js";import"./cross-B1mq_08r.js";import"./svgIconContainer-BJs--o3z.js";import"./useBaseUiId-o5kNe8pZ.js";import"./InternalBackdrop-DDXQjZOx.js";import"./composite-BhEXYnty.js";import"./index-BJDjJ5Dv.js";import"./index-DAfTNcRo.js";import"./index-LxLSEELg.js";import"./useEventCallback-jA5anQnx.js";import"./SkeletonBar-BfJ8klFy.js";import"./LoadingCell-CeYsinIR.js";import"./ColumnConfigDialog-BZMGdIMl.js";import"./DraggableList-C9sfvP0A.js";import"./search-khumesqG.js";import"./Input-ONhZnySG.js";import"./useControlled-CfwEeH2c.js";import"./Button-BuPvUCGG.js";import"./small-cross-BvjSCIsY.js";import"./ActionButton-CON5KtLD.js";import"./Checkbox-jDxiLczv.js";import"./minus-DEaqRHBD.js";import"./tick-CDE-Ff5D.js";import"./useValueChanged-BA2Lu0hR.js";import"./caret-down-DAeDvFNl.js";import"./CollapsiblePanel-OYG70osH.js";import"./MultiColumnSortDialog-DlRiCi-_.js";import"./MenuTrigger-CZj3_ebr.js";import"./CompositeItem-DkyKhTZD.js";import"./ToolbarRootContext-DJ0L3jkE.js";import"./getDisabledMountTransitionStyles-DYYOAXDV.js";import"./getPseudoElementBounds-DoHLI3u9.js";import"./chevron-down-DyhuSJxa.js";import"./index-BXZ6zT4r.js";import"./error-Dz57Ovxk.js";import"./BaseCbacBanner-CaS3nDhT.js";import"./makeExternalStore-B8xcQUMo.js";import"./Tooltip-DoaWo_w_.js";import"./PopoverPopup-BAoXillR.js";import"./toNumber-BTELJemj.js";import"./useOsdkClient-DYD1tLip.js";import"./DropdownField-Ca_IyL6R.js";import"./withOsdkMetrics-CuyI_rrJ.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
