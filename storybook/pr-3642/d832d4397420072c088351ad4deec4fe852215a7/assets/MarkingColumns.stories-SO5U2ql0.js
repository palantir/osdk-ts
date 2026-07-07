import{f as n,j as t}from"./iframe-B9KQ9d_Q.js";import{O as p}from"./object-table-DqaTrbMk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DeuuX8Pw.js";import"./Table-DOYY4qcj.js";import"./index-DjGmCvwN.js";import"./Dialog-CYyi-44k.js";import"./cross-CYACTAyc.js";import"./svgIconContainer-Dkipw4BE.js";import"./useBaseUiId-CACmZoDt.js";import"./InternalBackdrop-OOq8jdLP.js";import"./composite-Dkfcd9K6.js";import"./index-DeQVC1y1.js";import"./index-abmL8mI0.js";import"./index-DKOGf7iK.js";import"./useEventCallback-Cd4OTTOk.js";import"./SkeletonBar-atgdfo4P.js";import"./LoadingCell-CucVNeOI.js";import"./ColumnConfigDialog-C7qfhNEC.js";import"./DraggableList-P4LEG0x_.js";import"./search-CLgwBxIh.js";import"./Input-3YBkK_9B.js";import"./useControlled-7mPXTkWJ.js";import"./Button-CsNzNUJM.js";import"./small-cross-BYgKAIfM.js";import"./ActionButton-DjuxRTRi.js";import"./Checkbox-DN2XN2fh.js";import"./useValueChanged-Cz_ZJD7e.js";import"./CollapsiblePanel-BmB-jOoE.js";import"./MultiColumnSortDialog-RNmGD8qK.js";import"./MenuTrigger-BejjvYj7.js";import"./CompositeItem-lvWGvgnE.js";import"./ToolbarRootContext-CDRb2CiM.js";import"./getDisabledMountTransitionStyles-bdhvM1oO.js";import"./getPseudoElementBounds-BQaZMSHF.js";import"./chevron-down-C-NtZAg2.js";import"./index-C7_CeCDa.js";import"./error-aMms0fQH.js";import"./BaseCbacBanner-BtCiqxx6.js";import"./makeExternalStore-foZLPFy5.js";import"./Tooltip-RtLjcY2v.js";import"./PopoverPopup-Ddll_-Gc.js";import"./toNumber-C2lagFO-.js";import"./useOsdkClient-DFf46QMV.js";import"./tick-Cw2UPp6W.js";import"./DropdownField-BuIeHmzL.js";import"./withOsdkMetrics-B8cbL6XT.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
