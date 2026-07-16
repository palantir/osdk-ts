import{f as n,j as t}from"./iframe-DsROQhfc.js";import{O as p}from"./object-table-bPRQKbOi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DxBIW_8v.js";import"./Table-DBvbtVZI.js";import"./index-BIXNysy_.js";import"./Dialog-DcrlOsHi.js";import"./cross-B0m__ea-.js";import"./svgIconContainer-BTibiieO.js";import"./useBaseUiId-CrcNeHF_.js";import"./InternalBackdrop-DeCsCWzC.js";import"./composite-4W_Eccup.js";import"./index-Bn6b70ni.js";import"./index-DAffi9fl.js";import"./index-BRCXCW61.js";import"./useEventCallback-HgQ2IoSf.js";import"./SkeletonBar-DJBNsVb2.js";import"./LoadingCell-CNOVcPEC.js";import"./ColumnConfigDialog-BVGgq8Uo.js";import"./DraggableList-CdvvRj23.js";import"./search-D1ImDZfx.js";import"./Input-gJoMs5d_.js";import"./useControlled-DMsIR7MQ.js";import"./Button-B8bKnUK4.js";import"./small-cross-VLZ8RsEr.js";import"./ActionButton-C6q70xBC.js";import"./Checkbox-DDylrYRB.js";import"./useValueChanged-DbRjnM2P.js";import"./CollapsiblePanel-B_foOnbH.js";import"./MultiColumnSortDialog-DaOLIos1.js";import"./MenuTrigger-COpQHCev.js";import"./CompositeItem-amjK_EwN.js";import"./ToolbarRootContext-JbUSN2gn.js";import"./getDisabledMountTransitionStyles-DfHW-lTJ.js";import"./getPseudoElementBounds-C-iQE8uJ.js";import"./chevron-down-c60nfWzK.js";import"./index-CVsL7sp0.js";import"./error-CeiSikDQ.js";import"./BaseCbacBanner-Cg-ohbnT.js";import"./makeExternalStore-CztNP472.js";import"./Tooltip-zETSkbyV.js";import"./PopoverPopup-D1xVOir3.js";import"./toNumber-Dx31cKSs.js";import"./useOsdkClient-CXXuiEMy.js";import"./tick-zjVvN5Bn.js";import"./DropdownField-BBbZ26Oy.js";import"./withOsdkMetrics-DdKqlAm-.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
