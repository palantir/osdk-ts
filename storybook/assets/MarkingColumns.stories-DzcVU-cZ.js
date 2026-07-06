import{f as n,j as t}from"./iframe-BAW7vXay.js";import{O as p}from"./object-table-ERtO9Xhv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BPV6Q2vR.js";import"./index-B8RWdOx-.js";import"./Dialog-D41e8RL3.js";import"./cross-DHOyAakK.js";import"./svgIconContainer-BVolSJqG.js";import"./useBaseUiId-C3l-PwSI.js";import"./InternalBackdrop-CFAfi4Pr.js";import"./composite-B7SxjydQ.js";import"./index-Bj-wP-Eo.js";import"./index-Atbj0Gex.js";import"./index-CFB2-dKR.js";import"./useEventCallback-BrGh8ZoM.js";import"./SkeletonBar-JCLfNefd.js";import"./LoadingCell-K60o5KoY.js";import"./ColumnConfigDialog-D3Q93wKN.js";import"./DraggableList-ClINcL22.js";import"./search-C55N5NUt.js";import"./Input-C8_-njYr.js";import"./useControlled-BhxV9zjl.js";import"./Button-BFKYn7Lz.js";import"./small-cross-164AWh9U.js";import"./ActionButton-B34IBcE7.js";import"./Checkbox-BhWUllOo.js";import"./useValueChanged-Dh_BkcnU.js";import"./CollapsiblePanel-BsITdzNl.js";import"./MultiColumnSortDialog-Q2ENAP5x.js";import"./MenuTrigger-C3v7xMby.js";import"./CompositeItem-B9VsICI7.js";import"./ToolbarRootContext-C2zkoTCW.js";import"./getDisabledMountTransitionStyles-DZr1dcLA.js";import"./getPseudoElementBounds-DqwrfuCe.js";import"./chevron-down-DCiygYyB.js";import"./index-rP3vuihS.js";import"./error-DpmjAd6Q.js";import"./BaseCbacBanner-B5AM2Tmr.js";import"./makeExternalStore-C7FVilaF.js";import"./Tooltip-BKDABVt1.js";import"./PopoverPopup-BPGonxf6.js";import"./toNumber-pQ7xWnll.js";import"./useOsdkClient-Cyy90p-s.js";import"./tick-Bd_qT-Q-.js";import"./DropdownField-DSopWp5F.js";import"./withOsdkMetrics-CmPPvpfI.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
