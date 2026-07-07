import{f as n,j as t}from"./iframe-3TvHAs4c.js";import{O as p}from"./object-table-Dws1he6u.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DpyMUS3_.js";import"./Table-BYnkphee.js";import"./index-el2AxoGR.js";import"./Dialog-lLB35Van.js";import"./cross-Cuk-Fy3m.js";import"./svgIconContainer-BFDK97Ko.js";import"./useBaseUiId-BETBQmwg.js";import"./InternalBackdrop-DL_-f3eo.js";import"./composite-feS10yYs.js";import"./index-ByPKh7Yl.js";import"./index-B3J93Pkv.js";import"./index-OTRL6Tqi.js";import"./useEventCallback-BWpz69ZY.js";import"./SkeletonBar-CqBOPE6_.js";import"./LoadingCell-DYmcG9El.js";import"./ColumnConfigDialog-DXkguTuz.js";import"./DraggableList-CQ4bi_gV.js";import"./search-C3SJSWRH.js";import"./Input-DMbJE11S.js";import"./useControlled-C5N00eW4.js";import"./Button-plhH8piR.js";import"./small-cross-lUQdMtSs.js";import"./ActionButton-Bcxzb0LQ.js";import"./Checkbox-BHFYwiTR.js";import"./useValueChanged-DfCiCCsl.js";import"./CollapsiblePanel-DlwvbYQ4.js";import"./MultiColumnSortDialog-DddPAdXM.js";import"./MenuTrigger-BeXBNX6s.js";import"./CompositeItem-DJK2bU2c.js";import"./ToolbarRootContext-B8HhfBqU.js";import"./getDisabledMountTransitionStyles-tA24vcJ2.js";import"./getPseudoElementBounds-Bg2IEbXi.js";import"./chevron-down-BCuah4uX.js";import"./index-CigjtaUC.js";import"./error-CcYbNb79.js";import"./BaseCbacBanner-BWthU3zq.js";import"./makeExternalStore-zFIIfO9K.js";import"./Tooltip-Dp6LuyP1.js";import"./PopoverPopup-DF5xkk9w.js";import"./toNumber-CJ7d8lkQ.js";import"./useOsdkClient-D4RU1LK6.js";import"./tick-DI4HEy5Q.js";import"./DropdownField-B7EFQ1ZW.js";import"./withOsdkMetrics-CGOAGNGX.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
