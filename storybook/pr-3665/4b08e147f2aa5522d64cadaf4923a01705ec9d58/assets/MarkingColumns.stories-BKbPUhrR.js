import{f as n,j as t}from"./iframe-CMkXY9vq.js";import{O as p}from"./object-table-D50hm4v-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CRC_Gkn6.js";import"./Table-CSlub9kl.js";import"./index-C89y38Jp.js";import"./Dialog-BCCwjr7c.js";import"./cross-m3IENhwq.js";import"./svgIconContainer-_wsKauUL.js";import"./useBaseUiId-dEHi8snl.js";import"./InternalBackdrop-BsCFMz0s.js";import"./composite-DzQ4L13Q.js";import"./index-C3-XDJLb.js";import"./index-CZ7_YZIP.js";import"./index-CJ-YESpP.js";import"./useEventCallback-QZ1IolRn.js";import"./SkeletonBar-BD8Bflim.js";import"./LoadingCell-DrbtEgwn.js";import"./ColumnConfigDialog-CfOzNWBr.js";import"./DraggableList-I4dbCzxj.js";import"./search-C9uRQAua.js";import"./Input-p0BLi9h8.js";import"./useControlled-CrasA_u-.js";import"./Button-ve1uziVE.js";import"./small-cross-BMK3pf_F.js";import"./ActionButton-6Hy9Hthl.js";import"./Checkbox-_hyqjQgX.js";import"./useValueChanged-DuUFXIRX.js";import"./CollapsiblePanel-mYKmsQNS.js";import"./MultiColumnSortDialog-z3dVumF9.js";import"./MenuTrigger-Br82d0PS.js";import"./CompositeItem-CPQyUgzp.js";import"./ToolbarRootContext-DNuP58yv.js";import"./getDisabledMountTransitionStyles-BdvFdV8e.js";import"./getPseudoElementBounds-DpYGpbey.js";import"./chevron-down-FOpVA2s6.js";import"./index-DWJXRN0q.js";import"./error-B1g86qG0.js";import"./BaseCbacBanner-Ci6x8QBf.js";import"./makeExternalStore-A283sC7o.js";import"./Tooltip-CO2hqCEf.js";import"./PopoverPopup-Dci4o2cY.js";import"./toNumber-BZt0Xown.js";import"./useOsdkClient-B9ZacZ4H.js";import"./tick-CLWS7J_D.js";import"./DropdownField-CM96JSu8.js";import"./withOsdkMetrics-B_uy_PA8.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
