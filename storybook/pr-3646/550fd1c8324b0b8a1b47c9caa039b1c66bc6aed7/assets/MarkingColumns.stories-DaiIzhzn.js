import{f as n,j as t}from"./iframe-DazX2iSj.js";import{O as p}from"./object-table-C61qEVSf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BQj2RB6w.js";import"./Table-CKkTx5o7.js";import"./index-CDe8Airk.js";import"./Dialog-aQtMGrDs.js";import"./cross-DBbbVcUs.js";import"./svgIconContainer-IZ6aTSVB.js";import"./useBaseUiId-DcvCc8hF.js";import"./InternalBackdrop-CHzRDyRW.js";import"./composite-Bh82b6Z9.js";import"./index-D880Zpm5.js";import"./index-CODLa_2t.js";import"./index-BQlvjghf.js";import"./useEventCallback-BeE5Wk9E.js";import"./SkeletonBar-DTsWs8mD.js";import"./LoadingCell-ChT_uQzl.js";import"./ColumnConfigDialog-D4f69uOT.js";import"./DraggableList-C2xsqcGW.js";import"./search-uLpHYC-4.js";import"./Input-BvwUdBbd.js";import"./useControlled-zrW5hJkq.js";import"./Button-W2HxoTOs.js";import"./small-cross-BW4DD8Cz.js";import"./ActionButton-nDjVZJoj.js";import"./Checkbox-Ba1t_l3e.js";import"./useValueChanged-C1EhYu_-.js";import"./CollapsiblePanel-BeZrWOtA.js";import"./MultiColumnSortDialog-FMTDEO3b.js";import"./MenuTrigger-1AsBlKVy.js";import"./CompositeItem-BnbXYNh_.js";import"./ToolbarRootContext-J4IsI2WD.js";import"./getDisabledMountTransitionStyles-CNfo9T6n.js";import"./getPseudoElementBounds-4XypOKCT.js";import"./chevron-down-CaX2isKX.js";import"./index-HMgowsEz.js";import"./error-yHN1UHFP.js";import"./BaseCbacBanner-CqE-jUAa.js";import"./makeExternalStore-BtQGZHIP.js";import"./Tooltip-ByGnsZwA.js";import"./PopoverPopup-BqgOruf_.js";import"./toNumber-D9UIqd5p.js";import"./useOsdkClient-CKSqLkxu.js";import"./tick-BtuKu_8s.js";import"./DropdownField-yWOtf7jY.js";import"./withOsdkMetrics-4Ee4AkuS.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
