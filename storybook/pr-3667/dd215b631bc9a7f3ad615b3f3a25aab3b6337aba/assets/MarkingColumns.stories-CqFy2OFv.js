import{f as n,j as t}from"./iframe-DTte42TN.js";import{O as p}from"./object-table-DJkEhDlq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BNV0JvnW.js";import"./Table-tI0r9-0l.js";import"./index-DaKu6MNl.js";import"./Dialog-BUW69iu4.js";import"./cross-B2IlTQte.js";import"./svgIconContainer-fTXZBWb-.js";import"./useBaseUiId-DKVf16mW.js";import"./InternalBackdrop-DVoq-_Zn.js";import"./composite-Cd-uAhso.js";import"./index-DPZg1C5E.js";import"./index-DmoGEWEu.js";import"./index-BEAuoIAP.js";import"./useEventCallback-tN2bsIrp.js";import"./SkeletonBar-p8x0jzfQ.js";import"./LoadingCell-_qlvRcxC.js";import"./ColumnConfigDialog-CgjroUeZ.js";import"./DraggableList-DnK3Cepv.js";import"./Input-DBVHNcNB.js";import"./useControlled-BeMzZ5ZS.js";import"./Button-iZRfGawq.js";import"./small-cross-DtTsUIJe.js";import"./ActionButton-Be4zGV8-.js";import"./Checkbox-BYkTIww6.js";import"./minus-Dj8ghmf7.js";import"./useValueChanged-C1FKFgGe.js";import"./caret-down-DZZvMwkt.js";import"./CollapsiblePanel-B40Sb4d6.js";import"./MultiColumnSortDialog-0jkBDGvQ.js";import"./MenuTrigger-BzqLpL3b.js";import"./CompositeItem-DMisq4Ng.js";import"./ToolbarRootContext-SRY981j9.js";import"./getDisabledMountTransitionStyles-Uh9_fHa8.js";import"./getPseudoElementBounds-gScCzFWp.js";import"./chevron-down-1rjhnzJt.js";import"./index-Bt72SKOe.js";import"./error-B9jorsxS.js";import"./BaseCbacBanner-CPV7qxX_.js";import"./makeExternalStore-BkAk1cHv.js";import"./Tooltip-B2fHexry.js";import"./PopoverPopup-iCd_OonO.js";import"./toNumber-B6E0sZow.js";import"./useOsdkClient-D-w_LDM7.js";import"./DropdownField-B9jCxOry.js";import"./withOsdkMetrics-DLRxvEB6.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
