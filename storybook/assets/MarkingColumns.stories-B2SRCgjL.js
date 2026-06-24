import{f as n,j as t}from"./iframe-CaDUiDpH.js";import{O as p}from"./object-table-BJwF3s6K.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Cx3jnAaT.js";import"./index-MuJhHTtf.js";import"./Dialog-CsfpybyZ.js";import"./cross-DF6kM1f3.js";import"./svgIconContainer-Cw3X9CKz.js";import"./useBaseUiId-BKo_HpD6.js";import"./InternalBackdrop-DQNtE5xE.js";import"./composite-BwQRUn28.js";import"./index-BGWGzkWY.js";import"./index-CXadg3tD.js";import"./index-DL0ObBdG.js";import"./useEventCallback-xuRAC36_.js";import"./SkeletonBar-oJEPGzCl.js";import"./LoadingCell-B2MvGN9G.js";import"./ColumnConfigDialog-Cy2EWrVf.js";import"./DraggableList-CzKOi4jq.js";import"./Input-BbFz-q8u.js";import"./useControlled-CLUHwCf9.js";import"./Button-WEWRVaSe.js";import"./small-cross-Dm1nAcWD.js";import"./ActionButton-BTPSyOjV.js";import"./Checkbox-D-S31Woz.js";import"./minus-BCispyF-.js";import"./useValueChanged-Oc2MHuTo.js";import"./caret-down-D896W2wH.js";import"./CollapsiblePanel-B3EDHwlV.js";import"./MultiColumnSortDialog-B0LExIEF.js";import"./MenuTrigger-CFEBQixK.js";import"./CompositeItem-BMNtg4rr.js";import"./ToolbarRootContext-naKORRKd.js";import"./getDisabledMountTransitionStyles-cT1HZu31.js";import"./getPseudoElementBounds-CrNYx-X9.js";import"./chevron-down-Cb9Hg-wG.js";import"./index-C0IcmitN.js";import"./error-ds7oVFYZ.js";import"./BaseCbacBanner-DF3YFnLm.js";import"./makeExternalStore-Bsf5R0_k.js";import"./Tooltip-BzhslWmp.js";import"./PopoverPopup-BEZyxco5.js";import"./toNumber-BzltfZyA.js";import"./useOsdkClient-CBa7ZvPJ.js";import"./DropdownField-BTnkDyID.js";import"./withOsdkMetrics-BTbIrze-.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
