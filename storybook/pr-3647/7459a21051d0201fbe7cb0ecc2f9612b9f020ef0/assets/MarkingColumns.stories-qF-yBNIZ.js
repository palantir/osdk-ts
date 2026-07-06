import{f as n,j as t}from"./iframe-CNV_mt9P.js";import{O as p}from"./object-table-C1dRRkw-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DPBWnJ9k.js";import"./Table-FnznKnLN.js";import"./index-DzriBWGJ.js";import"./Dialog-B-xBaM23.js";import"./cross-CGS8iaCg.js";import"./svgIconContainer-n40nNhhk.js";import"./useBaseUiId-B507lKEX.js";import"./InternalBackdrop-CKtKxcdr.js";import"./composite-B4NSNRpR.js";import"./index-B9VnD0S9.js";import"./index-ZYGXogZ6.js";import"./index-CzbTPEgE.js";import"./useEventCallback-DxTsRCaa.js";import"./SkeletonBar-COlwnnaz.js";import"./LoadingCell-DYhv04kp.js";import"./ColumnConfigDialog-Bh_oEUiJ.js";import"./DraggableList-zwUOfuKZ.js";import"./search-5x3fK1oz.js";import"./Input-CcPOuoOy.js";import"./useControlled-BA63sYCw.js";import"./Button-DORSk1qY.js";import"./small-cross-DoyZJ6hM.js";import"./ActionButton-BleGjXJ_.js";import"./Checkbox-D2gO97Le.js";import"./useValueChanged-COmNVvAD.js";import"./CollapsiblePanel-Ba4zooS-.js";import"./MultiColumnSortDialog-DxSQxiCJ.js";import"./MenuTrigger-CAJuGKmn.js";import"./CompositeItem-DepW6j4m.js";import"./ToolbarRootContext-Bsc3Vu1l.js";import"./getDisabledMountTransitionStyles-DAmik8DG.js";import"./getPseudoElementBounds-C3Pa6viQ.js";import"./chevron-down-B2dQJpMF.js";import"./index-BNr1IhPY.js";import"./error-DFQlG2-a.js";import"./BaseCbacBanner-CJj81aQU.js";import"./makeExternalStore-DZlboohS.js";import"./Tooltip-BCybMNMs.js";import"./PopoverPopup-ULbncdfb.js";import"./toNumber-D4bWLfqW.js";import"./useOsdkClient-DhpNi0Pe.js";import"./tick-DRl5zB2Y.js";import"./DropdownField-BFL8fZSJ.js";import"./withOsdkMetrics-DX_ODbXs.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
