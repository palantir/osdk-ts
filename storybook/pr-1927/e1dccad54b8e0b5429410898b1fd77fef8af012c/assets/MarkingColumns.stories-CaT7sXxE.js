import{f as n,j as t}from"./iframe-BBBCzyKr.js";import{O as p}from"./object-table-DFsGkH9h.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-PBkUGRDh.js";import"./Table-D5ibojEC.js";import"./index-Cf_U35RW.js";import"./Dialog-BHMoGnv5.js";import"./cross-B7WcIwGk.js";import"./svgIconContainer-Fi69oV8u.js";import"./useBaseUiId-BjQTmyke.js";import"./InternalBackdrop-CbASjKww.js";import"./composite-Cm-fpeXk.js";import"./index-DjlV6oip.js";import"./index-BCkNIaBq.js";import"./index-t5sI_S5C.js";import"./useEventCallback-C6iQL87D.js";import"./SkeletonBar-DoUXbzgU.js";import"./LoadingCell-LAlHWLE0.js";import"./ColumnConfigDialog-CCnYKi3P.js";import"./DraggableList-BsIMAtJU.js";import"./search-Dc-RSriz.js";import"./Input-DYutMpSn.js";import"./useControlled-lzjiPErA.js";import"./Button-Cn3U8m6Z.js";import"./small-cross-DSHbpnHE.js";import"./ActionButton-CekAmzF6.js";import"./Checkbox-C2zGuRbf.js";import"./useValueChanged-CwmtvSz8.js";import"./CollapsiblePanel-DM00gRs7.js";import"./MultiColumnSortDialog-Bt09b0se.js";import"./MenuTrigger-BDrW6lZj.js";import"./CompositeItem-DPAKkgbw.js";import"./ToolbarRootContext-BFRaCZFF.js";import"./getDisabledMountTransitionStyles-C-DleoOP.js";import"./getPseudoElementBounds-BxkGVf1y.js";import"./chevron-down-umuhLM4H.js";import"./index-BtTMuNtg.js";import"./error-DZRukdZI.js";import"./BaseCbacBanner-DoiPT6cw.js";import"./makeExternalStore-C5rNYMe7.js";import"./Tooltip-DL6s0_Pv.js";import"./PopoverPopup-UFlt-KC9.js";import"./toNumber-kfqIfRmc.js";import"./useOsdkClient-CKMTXs6A.js";import"./tick-BMQMKur5.js";import"./DropdownField-DGqoDq0R.js";import"./withOsdkMetrics-C0DyKEA7.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
