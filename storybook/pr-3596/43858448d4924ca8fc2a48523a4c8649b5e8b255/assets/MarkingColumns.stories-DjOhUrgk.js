import{f as n,j as t}from"./iframe-WWcmvqiu.js";import{O as p}from"./object-table-BoMT-pWI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-6lpbQ_Yz.js";import"./Table-CeZa_Rc4.js";import"./index-CLVZwInH.js";import"./Dialog-CFBGw5bX.js";import"./cross-DPuzysrq.js";import"./svgIconContainer-N046IirC.js";import"./useBaseUiId-DIvdlw1S.js";import"./InternalBackdrop-8txsGHyw.js";import"./composite-c37m3I42.js";import"./index-DvoSzKby.js";import"./index-DLSGt4F_.js";import"./index-Cb86qpMa.js";import"./useEventCallback-C-2CJVpx.js";import"./SkeletonBar-B_pwy9FB.js";import"./LoadingCell-WtYdwtMb.js";import"./ColumnConfigDialog-CwYNpKBb.js";import"./DraggableList-N5rLmA6e.js";import"./search-iDRFWGaU.js";import"./Input-CKlNMRNq.js";import"./useControlled-CFqWouEI.js";import"./Button-BRoc34E1.js";import"./small-cross-CEXn-_H4.js";import"./ActionButton-B_PJgjX8.js";import"./Checkbox-gyOJgqQf.js";import"./minus-DJDFdmrB.js";import"./tick-YOudjxq2.js";import"./useValueChanged-BZFZIz-g.js";import"./caret-down-mmlflN6n.js";import"./CollapsiblePanel-DpdRRTvY.js";import"./MultiColumnSortDialog-CNjJICNX.js";import"./MenuTrigger-BX9q8oSY.js";import"./CompositeItem-fgctEpjA.js";import"./ToolbarRootContext-Dg_rti3q.js";import"./getDisabledMountTransitionStyles-CbDTtdpy.js";import"./getPseudoElementBounds-1ZG8lAYx.js";import"./chevron-down--DNxYT0r.js";import"./index-BjGhVYSu.js";import"./error-BE4IHC40.js";import"./BaseCbacBanner-DDLjBqy3.js";import"./makeExternalStore-CsiWC8Tw.js";import"./Tooltip-wJ6SE1lT.js";import"./PopoverPopup-WjVM6qF0.js";import"./toNumber-3eqnSsHh.js";import"./useOsdkClient-UwQgJVLC.js";import"./DropdownField-ULdZz9J0.js";import"./withOsdkMetrics-DIBCOMnp.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
