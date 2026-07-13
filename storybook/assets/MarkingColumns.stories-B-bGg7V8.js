import{f as n,j as t}from"./iframe-D-vJADny.js";import{O as p}from"./object-table-bhnBre63.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BCPJELEV.js";import"./index-D6zNih19.js";import"./Dialog-DQNgRb-J.js";import"./cross-CQkRXXZl.js";import"./svgIconContainer-CNVqQtje.js";import"./useBaseUiId-BOmqltJu.js";import"./InternalBackdrop-BGY_IGPH.js";import"./composite-BX4tgxEW.js";import"./index-CBBofzM5.js";import"./index-Db6_a7US.js";import"./index-BDIFZcCw.js";import"./useEventCallback-CTTmfvUS.js";import"./SkeletonBar-BySHo2d-.js";import"./LoadingCell-RLwRE8i_.js";import"./ColumnConfigDialog-25rAHevr.js";import"./DraggableList-B4u779QE.js";import"./search-vkRSIpAk.js";import"./Input-CL5QGsed.js";import"./useControlled-6SEEGD6Y.js";import"./Button-Cc8Xpdrl.js";import"./small-cross-BfA1e0mR.js";import"./ActionButton-BOFLKSgs.js";import"./Checkbox-BSjCIHA_.js";import"./useValueChanged-eZrjkccd.js";import"./CollapsiblePanel-CI8vrQ0_.js";import"./MultiColumnSortDialog-BBJf0vCj.js";import"./MenuTrigger-CJ14s5oG.js";import"./CompositeItem-Dj06UvpI.js";import"./ToolbarRootContext-BMrSVW5k.js";import"./getDisabledMountTransitionStyles-DlosQld3.js";import"./getPseudoElementBounds-BCGmCFiq.js";import"./chevron-down-DwypxkGn.js";import"./index-M-7s9Nwy.js";import"./error-CTBpOwuu.js";import"./BaseCbacBanner-aMDKl--S.js";import"./makeExternalStore-CsmGKW88.js";import"./Tooltip--07_Q299.js";import"./PopoverPopup-BPlcivNs.js";import"./toNumber-B6MPVqUB.js";import"./useOsdkClient-CtJenOtr.js";import"./tick-DRa7qJ-B.js";import"./DropdownField-DNBiqyE6.js";import"./withOsdkMetrics-D95MYznD.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
