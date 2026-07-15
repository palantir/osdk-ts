import{f as n,j as t}from"./iframe-C0YRWbnk.js";import{O as p}from"./object-table-AmQb__dw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DJm-S9xr.js";import"./Table-CVU5LB2q.js";import"./index-D-GnFbFW.js";import"./Dialog-DRjVCbeZ.js";import"./cross-CtvSxEum.js";import"./svgIconContainer-Bv3t7ToX.js";import"./useBaseUiId-9LAdo2XB.js";import"./InternalBackdrop-CjwNw09K.js";import"./composite-DCtqrRFQ.js";import"./index-C_1SSvBg.js";import"./index-2U3G7mDw.js";import"./index-CZufCJZg.js";import"./useEventCallback-CEIb15fu.js";import"./SkeletonBar-DUZZjN8L.js";import"./LoadingCell-wLzRPnjf.js";import"./ColumnConfigDialog-BZyHzZki.js";import"./DraggableList-Co-YfEbA.js";import"./search-BPkPp-4N.js";import"./Input-Dn7f8cPG.js";import"./useControlled-C38K3gha.js";import"./Button-8q1iQczr.js";import"./small-cross-CLMWf_d1.js";import"./ActionButton-BoR70zkC.js";import"./Checkbox-cfIefF3r.js";import"./useValueChanged-9EgBHqKW.js";import"./CollapsiblePanel-CmN-x7VT.js";import"./MultiColumnSortDialog-DQC_kCF9.js";import"./MenuTrigger-g5OjvY9M.js";import"./CompositeItem-BSQSWm01.js";import"./ToolbarRootContext-BLdmsZs5.js";import"./getDisabledMountTransitionStyles-COzR0vnM.js";import"./getPseudoElementBounds-BU2acqT4.js";import"./chevron-down-DJVFIxzo.js";import"./index-BqSO3L2_.js";import"./error-BU7Rjf2b.js";import"./BaseCbacBanner-D-0C2zeU.js";import"./makeExternalStore-gx_YSkq8.js";import"./Tooltip-DsWQPGgC.js";import"./PopoverPopup-BSfpGeN5.js";import"./toNumber-BSrtxBPW.js";import"./useOsdkClient-C6OZedtw.js";import"./tick-Cz9uYA9f.js";import"./DropdownField-CdKDbdJt.js";import"./withOsdkMetrics-DI8dqYrl.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
