import{f as n,j as t}from"./iframe-2FtRoCm-.js";import{O as p}from"./object-table-DUE0SvLx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BhzVSXjW.js";import"./Table-CxdGf-GJ.js";import"./index-Da7siqh-.js";import"./Dialog-BiARsvnU.js";import"./cross-B1Xjn_VB.js";import"./svgIconContainer-DhU75ccq.js";import"./useBaseUiId-B3gkp78u.js";import"./InternalBackdrop-BqbhI6jp.js";import"./composite-BL9wbhp1.js";import"./index-D4lFKTfl.js";import"./index-B5U2wva-.js";import"./index-CKFTgPjr.js";import"./useEventCallback-IZIF3CGv.js";import"./SkeletonBar-FGDVh-Gb.js";import"./LoadingCell-CfT6Tn4m.js";import"./ColumnConfigDialog-FVY3rRw1.js";import"./DraggableList-CXPgjGZ2.js";import"./search-CCqtvudN.js";import"./Input-CSUhteg3.js";import"./useControlled-Mh588vXg.js";import"./Button-DGPB3oJL.js";import"./small-cross-rDFvUp6B.js";import"./ActionButton-DT--tyOd.js";import"./Checkbox-C4fsPbTo.js";import"./useValueChanged-KwlPdaaw.js";import"./CollapsiblePanel-DAxx5umH.js";import"./MultiColumnSortDialog-C3YFQqDH.js";import"./MenuTrigger-Bt6czfNN.js";import"./CompositeItem-DToWODL-.js";import"./ToolbarRootContext-DGtLvIqC.js";import"./getDisabledMountTransitionStyles-CSSpJu3x.js";import"./getPseudoElementBounds-DSoEBrp_.js";import"./chevron-down-B5tEMHAE.js";import"./index-CBD_J4tU.js";import"./error-DeeTjjpj.js";import"./BaseCbacBanner-mR85rRbk.js";import"./makeExternalStore-D7cFXXBV.js";import"./Tooltip-CAsv4_4r.js";import"./PopoverPopup-CGuT8uz7.js";import"./toNumber-Bt9afoxP.js";import"./useOsdkClient-s9jkapNE.js";import"./tick-BvHIA5_0.js";import"./DropdownField-Cx2cLFKl.js";import"./withOsdkMetrics-QIp6HO9f.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
