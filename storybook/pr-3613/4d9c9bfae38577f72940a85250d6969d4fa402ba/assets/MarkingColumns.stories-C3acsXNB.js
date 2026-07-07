import{f as n,j as t}from"./iframe-DfaOXHY8.js";import{O as p}from"./object-table-CIh7vEbT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-_Gg8458t.js";import"./Table-B_edVsAL.js";import"./index-Bjxj1tkO.js";import"./Dialog-DYjiwuNf.js";import"./cross-RBJjUkQM.js";import"./svgIconContainer-C3cwmkoL.js";import"./useBaseUiId-CsvoVm3N.js";import"./InternalBackdrop-jhhmaowy.js";import"./composite-BlIxJPzT.js";import"./index-GdTA9zcE.js";import"./index-51x_2MVZ.js";import"./index-j-zme0We.js";import"./useEventCallback-DtILcXaY.js";import"./SkeletonBar-Cdw8wxr6.js";import"./LoadingCell-GabvdZLw.js";import"./ColumnConfigDialog-COh7HFqE.js";import"./DraggableList-DS_Zp6Ag.js";import"./search-DTwcP5yV.js";import"./Input-BkSb-_GL.js";import"./useControlled-D2gXgYy-.js";import"./Button-Cw7UjT1Z.js";import"./small-cross-4gCPI6yi.js";import"./ActionButton-IQJyRs0c.js";import"./Checkbox-CkOchb-V.js";import"./useValueChanged-_ToZIiIG.js";import"./CollapsiblePanel-DVxKhx-h.js";import"./MultiColumnSortDialog-DtGohjNE.js";import"./MenuTrigger-kb58NzTE.js";import"./CompositeItem-CUcdxzEq.js";import"./ToolbarRootContext-QVqQbnOh.js";import"./getDisabledMountTransitionStyles-uHdkQAl8.js";import"./getPseudoElementBounds-Dv0_NgPn.js";import"./chevron-down-Dt8PXYmB.js";import"./index-DmcNtB5d.js";import"./error-P3ErUBgd.js";import"./BaseCbacBanner-CyIoZTVW.js";import"./makeExternalStore-D015M79r.js";import"./Tooltip-C5Y-otud.js";import"./PopoverPopup-Ch8NJDUt.js";import"./toNumber-CbIXAMVL.js";import"./useOsdkClient-18WXVUpg.js";import"./tick-Cq5U0qBU.js";import"./DropdownField-D2F-uXk7.js";import"./withOsdkMetrics-CCwtJm1e.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
