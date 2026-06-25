import{f as n,j as t}from"./iframe-hIgURMlN.js";import{O as p}from"./object-table-CFu67Tn_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CrZaRzSu.js";import"./Table-3W2_dcAS.js";import"./index-WlboL6Ni.js";import"./Dialog-WnYyUkAz.js";import"./cross-C5gJLEnh.js";import"./svgIconContainer-BSI-hZ6-.js";import"./useBaseUiId-Bm3ASROm.js";import"./InternalBackdrop-B8AXgKBg.js";import"./composite-BBcySdDw.js";import"./index-CZOGoaWT.js";import"./index-EjvkxV0b.js";import"./index-BElh4Fjg.js";import"./useEventCallback-Wv5M5MrP.js";import"./SkeletonBar-9qMKfnsp.js";import"./LoadingCell-COrs3KOL.js";import"./ColumnConfigDialog-M7Nnx8WZ.js";import"./DraggableList-D5rX7m1J.js";import"./Input-DYvVvwao.js";import"./useControlled-BCgvb0ZF.js";import"./Button-CWg67LVz.js";import"./small-cross-C8X8o65a.js";import"./ActionButton-CT6WWe2v.js";import"./Checkbox-CWSK9WsC.js";import"./minus-BFLljM6Y.js";import"./useValueChanged-Cc0D8o9O.js";import"./caret-down-jkA1J1dW.js";import"./CollapsiblePanel-DPzyMydD.js";import"./MultiColumnSortDialog-Bg-zzZ46.js";import"./MenuTrigger-DKL3ZQ54.js";import"./CompositeItem-DzX83qzh.js";import"./ToolbarRootContext-B0QL5giX.js";import"./getDisabledMountTransitionStyles-Ci1g1IL4.js";import"./getPseudoElementBounds-CMBSoDoM.js";import"./chevron-down-DxM3frYt.js";import"./index-DL5aBkyj.js";import"./error-Oit-5_k-.js";import"./BaseCbacBanner-yjOL11PN.js";import"./makeExternalStore-CwaAxuYB.js";import"./Tooltip-BqdF3W_7.js";import"./PopoverPopup-CqNRIvJV.js";import"./toNumber-My5Fda42.js";import"./useOsdkClient-BS76_OOg.js";import"./DropdownField-hWyB2ee7.js";import"./withOsdkMetrics-BAYJv57S.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
