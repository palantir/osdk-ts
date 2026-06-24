import{f as n,j as t}from"./iframe-Cs9ADBvD.js";import{O as p}from"./object-table-H6JcWgCU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-fp8RqZsU.js";import"./Table-BKFpuQsD.js";import"./index-BZvVFqB_.js";import"./Dialog-B1V0ui7B.js";import"./cross-DxeY-V2I.js";import"./svgIconContainer-CS8ujTgu.js";import"./useBaseUiId-fO_qfTxo.js";import"./InternalBackdrop-C9GU9k0q.js";import"./composite-DRqzyhfc.js";import"./index-CwiHwblg.js";import"./index-Dg3zvo-k.js";import"./index-DCGeh5GT.js";import"./useEventCallback-CGxD9o8a.js";import"./SkeletonBar-Bjjg8hBy.js";import"./LoadingCell-9Wdjicij.js";import"./ColumnConfigDialog-CPGznege.js";import"./DraggableList-Dl7klTpS.js";import"./Input-DscsSbrZ.js";import"./useControlled-CN6pV-iU.js";import"./Button-DqsJRI1g.js";import"./small-cross-UiC5TZK8.js";import"./ActionButton-BHnK1Vze.js";import"./Checkbox-fXA1fE3p.js";import"./minus-DnAtc9J2.js";import"./useValueChanged-CwG9TEjL.js";import"./caret-down-D83imvGl.js";import"./CollapsiblePanel-DadihUuK.js";import"./MultiColumnSortDialog-Co3laFNN.js";import"./MenuTrigger-sja-2Ev6.js";import"./CompositeItem-BQPjEBfp.js";import"./ToolbarRootContext-tZHFCkP2.js";import"./getDisabledMountTransitionStyles-DV_4krVB.js";import"./getPseudoElementBounds-BcoGSqP1.js";import"./chevron-down-DvUAHv_E.js";import"./index-DsLecxgw.js";import"./error-BWgFwG0e.js";import"./BaseCbacBanner-Bfs7O1Cc.js";import"./makeExternalStore-DqH_udeO.js";import"./Tooltip-93E9zDaF.js";import"./PopoverPopup-Jc1gR3rn.js";import"./toNumber-fnt1pQNJ.js";import"./useOsdkClient-C3_dyGaV.js";import"./DropdownField-BmWrs2my.js";import"./withOsdkMetrics-B8hZUnEJ.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
