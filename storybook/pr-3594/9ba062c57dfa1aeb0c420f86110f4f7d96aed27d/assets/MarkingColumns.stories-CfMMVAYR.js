import{f as n,j as t}from"./iframe-DDx_hlPk.js";import{O as p}from"./object-table-DZjao0O7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CQ52MQVW.js";import"./Table-Cu98SK94.js";import"./index-B4s0gChR.js";import"./Dialog-Dj1zKCFP.js";import"./cross-DpfFZzYJ.js";import"./svgIconContainer-BGQv8xjx.js";import"./useBaseUiId-CduWqZHU.js";import"./InternalBackdrop-B4FPAhUM.js";import"./composite-DgQBI1ty.js";import"./index-DMxbBDvp.js";import"./index-DYSMImXi.js";import"./index-BLoH_DDk.js";import"./useEventCallback-CbEjovy8.js";import"./SkeletonBar-bj2kDFb_.js";import"./LoadingCell-BTIUEscn.js";import"./ColumnConfigDialog-DxDQ7UBW.js";import"./DraggableList-D6L-46jT.js";import"./search-B7xA9GeZ.js";import"./Input-D7efLwrT.js";import"./useControlled-BwjRINvz.js";import"./Button-O007gZS-.js";import"./small-cross-Bqik9n1C.js";import"./ActionButton-C_WEv-MD.js";import"./Checkbox-DAxvB34B.js";import"./minus-Ctt9PYTw.js";import"./tick-CwJu2LTK.js";import"./useValueChanged-DyNXlhqf.js";import"./caret-down-hxiQHVca.js";import"./CollapsiblePanel-Dat7vcQy.js";import"./MultiColumnSortDialog-fjlPi4FK.js";import"./MenuTrigger-C5dBGy2i.js";import"./CompositeItem-B5AEHnd_.js";import"./ToolbarRootContext-DWG9U5Or.js";import"./getDisabledMountTransitionStyles-B1co7UG1.js";import"./getPseudoElementBounds-DyVk-eGu.js";import"./chevron-down-DpqAF9h-.js";import"./index-CaGRleJC.js";import"./error-C9a23hTL.js";import"./BaseCbacBanner-BQibjgba.js";import"./makeExternalStore-SLV7h6Du.js";import"./Tooltip-ofj1b-IT.js";import"./PopoverPopup-vbQUhe0Y.js";import"./toNumber-CkWf7U-g.js";import"./useOsdkClient-B5GXVt16.js";import"./DropdownField-B06iodSe.js";import"./withOsdkMetrics-D01IaqkZ.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
