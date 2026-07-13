import{f as n,j as t}from"./iframe-DncJSr5p.js";import{O as p}from"./object-table-pwcfr6xZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DROBlN7A.js";import"./Table-tpFZGtgF.js";import"./index-DnUlBG1A.js";import"./Dialog-BfvWJPmy.js";import"./cross-i5acO9JW.js";import"./svgIconContainer-op2ccpZF.js";import"./useBaseUiId-BSt68QBR.js";import"./InternalBackdrop-CbuWxTPN.js";import"./composite-pUmE0otM.js";import"./index-PUclW51s.js";import"./index-BjEAtvSg.js";import"./index-x75sYHfn.js";import"./useEventCallback-D-MlSqqX.js";import"./SkeletonBar-CiiJToyn.js";import"./LoadingCell-D1XTyO1r.js";import"./ColumnConfigDialog-Bf1LW8JF.js";import"./DraggableList-BGSDvL-T.js";import"./search-Dkd-n0Ml.js";import"./Input-BQdi7hpx.js";import"./useControlled-DyIxNgjv.js";import"./Button-AiULEb3a.js";import"./small-cross-C0E1LHkM.js";import"./ActionButton-Cxe_mufu.js";import"./Checkbox-DvnyR4N5.js";import"./useValueChanged-izoM9PyT.js";import"./CollapsiblePanel--eN-o2u_.js";import"./MultiColumnSortDialog-KAAFNr5w.js";import"./MenuTrigger-06X1jaZQ.js";import"./CompositeItem-jMDKTU8M.js";import"./ToolbarRootContext-C0UeEYZg.js";import"./getDisabledMountTransitionStyles-DSSGAiR5.js";import"./getPseudoElementBounds-BfAHvDVP.js";import"./chevron-down-D7W3sjBX.js";import"./index-Cgz4I0It.js";import"./error-BtXBxITc.js";import"./BaseCbacBanner-B6zNtBbE.js";import"./makeExternalStore-D1-pUQGc.js";import"./Tooltip-tjNCn-yC.js";import"./PopoverPopup-BSLnjdOS.js";import"./toNumber-8pp_RvoU.js";import"./useOsdkClient-WJgei-8U.js";import"./tick-Wx9VZKGf.js";import"./DropdownField-B9Oqc9Op.js";import"./withOsdkMetrics-Bm5xwXi6.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
