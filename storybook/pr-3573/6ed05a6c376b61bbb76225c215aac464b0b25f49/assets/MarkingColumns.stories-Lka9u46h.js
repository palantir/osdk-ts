import{f as n,j as t}from"./iframe-B-D95LRj.js";import{O as p}from"./object-table-vgTxKEUH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BoEJDNF1.js";import"./Table-CHjsojUw.js";import"./index-CZmdfbMD.js";import"./Dialog-BDmubPjU.js";import"./cross-CDoBuNMo.js";import"./svgIconContainer-DSIDTLuJ.js";import"./useBaseUiId-CyUKqdii.js";import"./InternalBackdrop-Cwyyxe_9.js";import"./composite-CNZxyVvo.js";import"./index-Caiqsi6O.js";import"./index-B6t0VlCk.js";import"./index-QuBFmrZv.js";import"./useEventCallback-X27FQCjr.js";import"./SkeletonBar-DQLDCJHk.js";import"./LoadingCell-CWLDA0uQ.js";import"./ColumnConfigDialog-BqNpiBhN.js";import"./DraggableList-C0KRP2vA.js";import"./search-mc9mHvRi.js";import"./Input-DFuPwYjW.js";import"./useControlled-DCqqZ002.js";import"./Button-NjnlIlL7.js";import"./small-cross-DoE0_MqA.js";import"./ActionButton-Buu4UKk2.js";import"./Checkbox-Ba-AwDrk.js";import"./useValueChanged-D0CLMOdE.js";import"./CollapsiblePanel-bP-rEUM8.js";import"./MultiColumnSortDialog-CQkDWIgx.js";import"./MenuTrigger-BIBZkMjs.js";import"./CompositeItem-DfaEvMdb.js";import"./ToolbarRootContext-BZ-d1uKy.js";import"./getDisabledMountTransitionStyles-BiHTCELV.js";import"./getPseudoElementBounds-BxhHc1xi.js";import"./chevron-down-BPh3aBWY.js";import"./index-CWRJWss2.js";import"./error-DHWiYCtJ.js";import"./BaseCbacBanner-w2U4cE-d.js";import"./makeExternalStore-CzDg85gr.js";import"./Tooltip-DZwiqtTt.js";import"./PopoverPopup-C0acQRSQ.js";import"./toNumber-BwfRh5Pd.js";import"./useOsdkClient-DzpfH5tF.js";import"./tick-CgV5gKMw.js";import"./DropdownField-BBhX19Pf.js";import"./withOsdkMetrics-Bq0B2bvT.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
