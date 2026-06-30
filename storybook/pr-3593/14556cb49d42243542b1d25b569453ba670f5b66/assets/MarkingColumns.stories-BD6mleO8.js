import{f as n,j as t}from"./iframe-CwsA9WhF.js";import{O as p}from"./object-table-6b2s6iiV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-FMqlHbWX.js";import"./Table-Tkh_i72a.js";import"./index-BApRn_8J.js";import"./Dialog--Y8H5fwN.js";import"./cross-CPIFBwIX.js";import"./svgIconContainer-COq7IPBQ.js";import"./useBaseUiId-B5Wq6qzZ.js";import"./InternalBackdrop-BBOS8aiL.js";import"./composite-BCMCXmgH.js";import"./index-CPLqiGi4.js";import"./index-BIIgFgfQ.js";import"./index-CzYG-ZSX.js";import"./useEventCallback-BUt56z-w.js";import"./SkeletonBar-Br-8wOa8.js";import"./LoadingCell-Q61nKZa6.js";import"./ColumnConfigDialog-BF2FOstJ.js";import"./DraggableList-BkGP6wUy.js";import"./search-CkRU7pdV.js";import"./Input-BuqsXWMB.js";import"./useControlled-S0xXrVrA.js";import"./Button-B0hMRWi-.js";import"./small-cross-DNuEWf48.js";import"./ActionButton-CqW7L_-2.js";import"./Checkbox-CXHfR-3t.js";import"./minus-C58qIprR.js";import"./tick-C9UL3luL.js";import"./useValueChanged-Dzq9jtA8.js";import"./caret-down-A_5iaUsD.js";import"./CollapsiblePanel-DDRVVIAB.js";import"./MultiColumnSortDialog-CNnuMjdo.js";import"./MenuTrigger-BTttg7I3.js";import"./CompositeItem-Uy1lPxRz.js";import"./ToolbarRootContext-C6W0RCW5.js";import"./getDisabledMountTransitionStyles-BE5rBXLK.js";import"./getPseudoElementBounds-DbNgHT2N.js";import"./chevron-down-TlX399xp.js";import"./index-CMaCIwSE.js";import"./error-Dd4Lrqlk.js";import"./BaseCbacBanner-DLhmqNQ4.js";import"./makeExternalStore-BKGGRq7R.js";import"./Tooltip-BIhN-Eme.js";import"./PopoverPopup-DNylfvdt.js";import"./toNumber-C0j_OQ5G.js";import"./useOsdkClient-BtxAVcUY.js";import"./DropdownField-B3DX1qD8.js";import"./withOsdkMetrics-C9-dkcIE.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
