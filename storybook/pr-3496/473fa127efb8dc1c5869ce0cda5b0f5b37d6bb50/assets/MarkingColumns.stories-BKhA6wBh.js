import{f as n,j as t}from"./iframe-D5W2pBc5.js";import{O as p}from"./object-table-B_nCPmIg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C03qLVRK.js";import"./Table-atMY8VV7.js";import"./index-x281GiPa.js";import"./Dialog-BPWNl1aX.js";import"./cross-Bnq7XFIj.js";import"./svgIconContainer-BUckVbS-.js";import"./useBaseUiId-BC865lvb.js";import"./InternalBackdrop-DCRAUkGf.js";import"./composite-DudV4RlL.js";import"./index-DlZWaj5F.js";import"./index-DxwZMEhY.js";import"./index-BnONTiN3.js";import"./useEventCallback-DRr2Qih1.js";import"./SkeletonBar-BViISlSW.js";import"./LoadingCell-CZ9FwRSI.js";import"./ColumnConfigDialog-COX9F8oJ.js";import"./DraggableList-CB91LxbQ.js";import"./Input-Iun8yeL_.js";import"./useControlled-p9XyKTk5.js";import"./Button-BDJ-nsd9.js";import"./small-cross-BldKOlhU.js";import"./ActionButton-WxZZBmqq.js";import"./Checkbox-D1XRIUU0.js";import"./minus-DRltfjaR.js";import"./useValueChanged-CaAqXxFf.js";import"./caret-down-DtJyVmgU.js";import"./CollapsiblePanel-Blp-C1bh.js";import"./MultiColumnSortDialog-CvdSmLtl.js";import"./MenuTrigger-D0UWcC1N.js";import"./CompositeItem-Ip8fd80v.js";import"./ToolbarRootContext-Dq0g5AR3.js";import"./getDisabledMountTransitionStyles-3RjIha-w.js";import"./getPseudoElementBounds-BmZWMovb.js";import"./chevron-down-BIxUIl1s.js";import"./index-ssIasGVN.js";import"./error-BNRnot36.js";import"./BaseCbacBanner-DovY4I8V.js";import"./makeExternalStore-BLuy7qER.js";import"./Tooltip-6GBv9y-H.js";import"./PopoverPopup-fLfsASwy.js";import"./toNumber-DnUZBJFE.js";import"./useOsdkClient-BT03dxC1.js";import"./DropdownField-DuRAe0yE.js";import"./withOsdkMetrics-DZF9zv5W.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
