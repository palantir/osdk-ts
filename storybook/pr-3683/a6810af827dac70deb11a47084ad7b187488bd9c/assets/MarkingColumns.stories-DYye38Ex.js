import{f as n,j as t}from"./iframe-COW6NcsI.js";import{O as p}from"./object-table-BfgBOtHU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-G8EPqEJh.js";import"./Table-DpwM4rNZ.js";import"./index-CW-e6r9a.js";import"./Dialog--IyjsjXu.js";import"./cross-Bqug0Vp6.js";import"./svgIconContainer-CVdrdWap.js";import"./useBaseUiId-CPuvuul4.js";import"./InternalBackdrop-IT_hKb9F.js";import"./composite-IDuh3utY.js";import"./index-C1kQCTH3.js";import"./index-BsKm97c0.js";import"./index-CpcaMGCW.js";import"./useEventCallback-C1dx29nH.js";import"./SkeletonBar-0S75luhh.js";import"./LoadingCell-C63UHMbe.js";import"./ColumnConfigDialog-BZmZ20dN.js";import"./DraggableList-qy_43Z0m.js";import"./search-a4gMSdv_.js";import"./Input-BbbO03ue.js";import"./useControlled-C4fThFcC.js";import"./Button-DApRJW5A.js";import"./small-cross-Ro5zF2FT.js";import"./ActionButton-DxqkdKWX.js";import"./Checkbox-CU9smyt5.js";import"./useValueChanged-ieAnHWLP.js";import"./CollapsiblePanel-BrvSzF3_.js";import"./MultiColumnSortDialog-CKaxtAWg.js";import"./MenuTrigger-B92JS_WI.js";import"./CompositeItem-ClwhSYZE.js";import"./ToolbarRootContext-e7slT4RT.js";import"./getDisabledMountTransitionStyles-DPLFcf4i.js";import"./getPseudoElementBounds-Bgi4-PRF.js";import"./chevron-down-BjwdaKHx.js";import"./index-CujUeAc2.js";import"./error-CnMxWdUA.js";import"./BaseCbacBanner-Df2lB1Ha.js";import"./makeExternalStore-VD_YYeJk.js";import"./Tooltip-Fs_-j-j_.js";import"./PopoverPopup-Ce8AFJXp.js";import"./toNumber-BbCZDfZl.js";import"./useOsdkClient-YwrQJoKl.js";import"./tick-B3tXVK5Z.js";import"./DropdownField-BKUsf6Ns.js";import"./withOsdkMetrics-oXBpH5el.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
