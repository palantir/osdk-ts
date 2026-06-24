import{f as n,j as t}from"./iframe-BQgTT6N0.js";import{O as p}from"./object-table-B0GnKAYr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BffpQyeb.js";import"./Table-BR-itL3w.js";import"./index-HnAdOqsd.js";import"./Dialog-DDMIxoav.js";import"./cross-BCyUgecY.js";import"./svgIconContainer-BOCAU5k6.js";import"./useBaseUiId-D_XYE6j1.js";import"./InternalBackdrop-CDClToXf.js";import"./composite-kuLapxZy.js";import"./index-PRpzADiJ.js";import"./index-F5P1QzXV.js";import"./index-BE_z2Id5.js";import"./useEventCallback-DqAL830l.js";import"./SkeletonBar-C6xtdF_S.js";import"./LoadingCell-BPSJPBH1.js";import"./ColumnConfigDialog-DgBqj7rX.js";import"./DraggableList-B15jO3xQ.js";import"./Input-LIwQJJUk.js";import"./useControlled-jjLK3_9U.js";import"./Button-CnGfZPyI.js";import"./small-cross-DFZpvzxm.js";import"./ActionButton-BTMEgFZN.js";import"./Checkbox-B8T65RKO.js";import"./minus-Cw8PulDc.js";import"./useValueChanged-BreTCqXv.js";import"./caret-down-DPGd20w2.js";import"./CollapsiblePanel-BaDVwP4B.js";import"./MultiColumnSortDialog-D14x-upC.js";import"./MenuTrigger-BNQuz1hA.js";import"./CompositeItem-DT371y7B.js";import"./ToolbarRootContext-Ces_NeE2.js";import"./getDisabledMountTransitionStyles-BqaVPoi9.js";import"./getPseudoElementBounds-BRaKW5XV.js";import"./chevron-down-O2cjp07V.js";import"./index-CNpFCfpQ.js";import"./error-j2UvKzh8.js";import"./BaseCbacBanner-k3zzdka-.js";import"./makeExternalStore-CSl6TaXk.js";import"./Tooltip-CvBly9hT.js";import"./PopoverPopup-CnlF41eZ.js";import"./toNumber-fIrv_YGy.js";import"./useOsdkClient-C2PE8493.js";import"./DropdownField-DZKYXnP-.js";import"./withOsdkMetrics-LSZgh3q5.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
