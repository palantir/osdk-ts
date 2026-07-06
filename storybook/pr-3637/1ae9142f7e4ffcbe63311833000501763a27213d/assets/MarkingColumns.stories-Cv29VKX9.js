import{f as n,j as t}from"./iframe-BwUhzK2k.js";import{O as p}from"./object-table-DPsgSZIo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-uUx3RRbN.js";import"./Table-TUOw4-WL.js";import"./index-Ba16A1za.js";import"./Dialog-DZ8ZaaJX.js";import"./cross-CBynaPz7.js";import"./svgIconContainer-VI87NXz9.js";import"./useBaseUiId-DineJbLN.js";import"./InternalBackdrop-jJxEQc35.js";import"./composite-S9q_D-rs.js";import"./index-CQks9Ta9.js";import"./index-CoqzvABQ.js";import"./index-B_gTZOwG.js";import"./useEventCallback-DbusbfSs.js";import"./SkeletonBar-S5dF_A2n.js";import"./LoadingCell-CNx-LB_T.js";import"./ColumnConfigDialog-CMcvjtYT.js";import"./DraggableList-CQyuuh14.js";import"./search-BYjYe9mk.js";import"./Input-DP59Qchy.js";import"./useControlled-45iVGC9D.js";import"./Button-DwfxyI9K.js";import"./small-cross-ByAtqu5b.js";import"./ActionButton-CqAatWg7.js";import"./Checkbox-Bgl259bu.js";import"./useValueChanged-CxxXDLVl.js";import"./CollapsiblePanel-B4ds7sYX.js";import"./MultiColumnSortDialog-FHPlNFte.js";import"./MenuTrigger-pDedIerP.js";import"./CompositeItem-elb8_lc7.js";import"./ToolbarRootContext-rNb_ILvC.js";import"./getDisabledMountTransitionStyles-CbbI388h.js";import"./getPseudoElementBounds-ByIorp1L.js";import"./chevron-down-pY0ux560.js";import"./index-Bikbo-cd.js";import"./error-Cb3O1HD7.js";import"./BaseCbacBanner-CtgqNqzv.js";import"./makeExternalStore-YPGJ8BYC.js";import"./Tooltip-DNw31w9R.js";import"./PopoverPopup-B_mLxrhX.js";import"./toNumber-BM0UCm71.js";import"./useOsdkClient-B59N1H9e.js";import"./tick-CnuC5cP2.js";import"./DropdownField-DosbbLNz.js";import"./withOsdkMetrics-DQFQSEx0.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
