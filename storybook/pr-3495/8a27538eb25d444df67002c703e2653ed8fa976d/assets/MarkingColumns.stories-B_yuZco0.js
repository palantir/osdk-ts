import{f as n,j as t}from"./iframe-D-iWThNV.js";import{O as p}from"./object-table-DC2tFwcQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CZXj2uM0.js";import"./Table-DU9JKxMC.js";import"./index-gGbSxhwF.js";import"./Dialog-DtunR9QN.js";import"./cross-CFDHK57O.js";import"./svgIconContainer-V5szaWK6.js";import"./useBaseUiId-CZhkWLWA.js";import"./InternalBackdrop-BnvuD4yk.js";import"./composite-DnSBOCeb.js";import"./index-C4cr2ngO.js";import"./index-CUPx_mOY.js";import"./index-B0pZkpRL.js";import"./useEventCallback-h9nHADCG.js";import"./SkeletonBar-Bk41b8zs.js";import"./LoadingCell-DslhFSYl.js";import"./ColumnConfigDialog-D_V-64W1.js";import"./DraggableList-BV5FDXU9.js";import"./Input-B4f6vWS9.js";import"./useControlled-eUnggN9S.js";import"./Button-CVoWvLM8.js";import"./small-cross-C3RtIQAo.js";import"./ActionButton-B0EPWfBf.js";import"./Checkbox-CCDp3UTN.js";import"./minus-C8xbbM4J.js";import"./useValueChanged-hdpvUcH-.js";import"./caret-down-DlvW5ya8.js";import"./CollapsiblePanel-DS2BZf-X.js";import"./MultiColumnSortDialog-BIXvIgQG.js";import"./MenuTrigger-B4-iJtfk.js";import"./CompositeItem-8PmyqGXy.js";import"./ToolbarRootContext-BNtYaxn_.js";import"./getDisabledMountTransitionStyles-DG5K1GCm.js";import"./getPseudoElementBounds-D_6Im5Yi.js";import"./chevron-down-aMrdXvTd.js";import"./index-Cjm1kFt1.js";import"./error-jH37spc-.js";import"./BaseCbacBanner-DqPsNK0T.js";import"./makeExternalStore-CeT6cdoW.js";import"./Tooltip-BnvVhONU.js";import"./PopoverPopup-x-YW2keb.js";import"./toNumber-DdWOMVl4.js";import"./useOsdkClient-cprLdjbo.js";import"./DropdownField-Bh0oAJ7b.js";import"./withOsdkMetrics-wtEBZo76.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
