import{f as n,j as t}from"./iframe-CQ07y5HK.js";import{O as p}from"./object-table-B36cW1gQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CDHTh53I.js";import"./Table-iv07m6PN.js";import"./index-DxWybDqD.js";import"./Dialog-qxQRSnGI.js";import"./cross-DHMoEpkG.js";import"./svgIconContainer-D37-ELxb.js";import"./useBaseUiId-BdgViNgb.js";import"./InternalBackdrop-CnBZ840d.js";import"./composite-B4Wonh6-.js";import"./index-CHm7PYgv.js";import"./index-CRheeQCA.js";import"./index-DYYfYFe5.js";import"./useEventCallback-CUUCajjt.js";import"./SkeletonBar-CvTYH2tv.js";import"./LoadingCell-BWfBG5Bb.js";import"./ColumnConfigDialog-DtFSbakd.js";import"./DraggableList-Ct28hUTR.js";import"./search-DEgh1F1B.js";import"./Input-BqSL4yqL.js";import"./useControlled-XwgekNzY.js";import"./Button-ByCBlqJ0.js";import"./small-cross-BkNofC3e.js";import"./ActionButton-Df6Thahi.js";import"./Checkbox-BacfBdS3.js";import"./minus-DgS6J_iF.js";import"./tick-n1KcddeW.js";import"./useValueChanged-BJfnCJDA.js";import"./caret-down-BAr4CFnk.js";import"./CollapsiblePanel-D1_KSZiK.js";import"./MultiColumnSortDialog-Bi3bUN9u.js";import"./MenuTrigger-BUiCR9g5.js";import"./CompositeItem-C5VffWzZ.js";import"./ToolbarRootContext-D6sTxHtK.js";import"./getDisabledMountTransitionStyles-D_BxafsQ.js";import"./getPseudoElementBounds-BAtTXg8F.js";import"./chevron-down-WOZLPJsd.js";import"./index-DVpeScFJ.js";import"./error-Dx5xs3Ao.js";import"./BaseCbacBanner-CbsVlRo-.js";import"./makeExternalStore-Bhb5VAZy.js";import"./Tooltip-CtmO9X3-.js";import"./PopoverPopup-BMELKHuo.js";import"./toNumber-C_lLGmS6.js";import"./useOsdkClient-BNUl6C1k.js";import"./DropdownField-Bzu5N2Jh.js";import"./withOsdkMetrics-CdHds5Aj.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
