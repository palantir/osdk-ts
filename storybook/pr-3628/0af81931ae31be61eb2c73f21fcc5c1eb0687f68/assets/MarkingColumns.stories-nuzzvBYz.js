import{f as n,j as t}from"./iframe-YLVYuxq8.js";import{O as p}from"./object-table-Bt2VyKq-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CZYe282M.js";import"./Table-CJ4nPMTp.js";import"./index-DY_dJJUl.js";import"./Dialog-DEY3pjgU.js";import"./cross-Cy_GZ1mj.js";import"./svgIconContainer-DXsK1PD8.js";import"./useBaseUiId-3iJUSLaS.js";import"./InternalBackdrop-BFxnkKWH.js";import"./composite-BMtoOrB4.js";import"./index-CJ0167O5.js";import"./index-DXgeTFVX.js";import"./index-BasXsKcN.js";import"./useEventCallback-BW4i7tTw.js";import"./SkeletonBar-BfbVk1ew.js";import"./LoadingCell-GVmaySJp.js";import"./ColumnConfigDialog-DX6nYRpg.js";import"./DraggableList-CFFwJex0.js";import"./search-CWtYIIQK.js";import"./Input-BInpNgkE.js";import"./useControlled-DBv4Redr.js";import"./Button-Hm75H09p.js";import"./small-cross-B3ufJdSy.js";import"./ActionButton-D0G7FESy.js";import"./Checkbox-DBEgVyod.js";import"./useValueChanged-BEsA4ZjU.js";import"./CollapsiblePanel-CxxlZKyf.js";import"./MultiColumnSortDialog-DMOuNYGf.js";import"./MenuTrigger-BxVh72J6.js";import"./CompositeItem-YtlzwsY_.js";import"./ToolbarRootContext-M6GN99cc.js";import"./getDisabledMountTransitionStyles-DXYaHwPx.js";import"./getPseudoElementBounds-qLw5kyJL.js";import"./chevron-down-BRPm4oUM.js";import"./index-C9YxjGxI.js";import"./error-JbD-MfdK.js";import"./BaseCbacBanner-D8A-WeR9.js";import"./makeExternalStore-CD3PSPFW.js";import"./Tooltip-CW5jDJxa.js";import"./PopoverPopup-D_TgKOJN.js";import"./toNumber-ByhmC_8v.js";import"./useOsdkClient-Cs6ANNxt.js";import"./tick-B-tPV8A4.js";import"./DropdownField-DjZspwN3.js";import"./withOsdkMetrics-jluIddj1.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
