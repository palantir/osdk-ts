import{f as n,j as t}from"./iframe-rpiRS41X.js";import{O as p}from"./object-table-CoN1LoJ3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BvYsjbK4.js";import"./Table-DvnpUIWs.js";import"./index-CSoWGyET.js";import"./Dialog-BsvFNM1c.js";import"./cross-CLzmU9Xm.js";import"./svgIconContainer-uaJooQm8.js";import"./useBaseUiId-Bd1dL16r.js";import"./InternalBackdrop-nQumKVYd.js";import"./composite-qK7plUwA.js";import"./index-Dgik_YNF.js";import"./index-7vAJQfTB.js";import"./index-D6D5lYh1.js";import"./useEventCallback-BpAFBe_X.js";import"./SkeletonBar-CEa74v1l.js";import"./LoadingCell-DcsHrHEJ.js";import"./ColumnConfigDialog-GceLMoJr.js";import"./DraggableList-Dh3kCLWc.js";import"./search-DnKtf28R.js";import"./Input-Bj4aWrFM.js";import"./useControlled-Xnox6_xR.js";import"./Button-BrmkJS1t.js";import"./small-cross-DU9Lru_v.js";import"./ActionButton-reUg4GHm.js";import"./Checkbox-DkCApIm1.js";import"./useValueChanged-CJBC_TOU.js";import"./CollapsiblePanel-CNELGnh2.js";import"./MultiColumnSortDialog-jIkEGva8.js";import"./MenuTrigger-BbUHnRZE.js";import"./CompositeItem-VxTtFFWC.js";import"./ToolbarRootContext-D4NJqCgE.js";import"./getDisabledMountTransitionStyles-DieJUG5A.js";import"./getPseudoElementBounds-e6aQggM3.js";import"./chevron-down-56wpOY_8.js";import"./index-R9wSA61c.js";import"./error-B8hmh_oU.js";import"./BaseCbacBanner-D2YAUgxG.js";import"./makeExternalStore-BBVbVeXR.js";import"./Tooltip-CGl3PX6o.js";import"./PopoverPopup-DAnQbYV-.js";import"./toNumber-BgsiBCkj.js";import"./useOsdkClient-B0ED5w3g.js";import"./tick-Drmi5daS.js";import"./DropdownField-C_sMEF1g.js";import"./withOsdkMetrics-BXqTPon6.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
