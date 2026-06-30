import{f as n,j as t}from"./iframe-DmXsd3Hy.js";import{O as p}from"./object-table-BL5HvBSY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-FNg-Yap0.js";import"./Table-ClX1TeDa.js";import"./index-BcT1_xRU.js";import"./Dialog-DQArQXW0.js";import"./cross-DWZebUpD.js";import"./svgIconContainer-DChaNhbi.js";import"./useBaseUiId-IvYDDYe8.js";import"./InternalBackdrop-BtW8Za31.js";import"./composite-C7fLhrOp.js";import"./index-BTiZdA37.js";import"./index-L17C4Vht.js";import"./index-CpbEq2HZ.js";import"./useEventCallback-4I6hq5VR.js";import"./SkeletonBar-Ef7SSF2e.js";import"./LoadingCell-DF-ukrCN.js";import"./ColumnConfigDialog-BSwh9KKm.js";import"./DraggableList-BW-WOX0L.js";import"./search-DuP8Iaqo.js";import"./Input-b6E9FUto.js";import"./useControlled-CF4bRWRe.js";import"./Button-xwJUzizH.js";import"./small-cross-iMf19qPb.js";import"./ActionButton-C-h_C9vc.js";import"./Checkbox-CrBCZs5M.js";import"./minus-oMUCuRiH.js";import"./tick-BrsEhxF-.js";import"./useValueChanged-poj32B0G.js";import"./caret-down-BUIqC63v.js";import"./CollapsiblePanel-BIRHjn7A.js";import"./MultiColumnSortDialog-B5kIDf_s.js";import"./MenuTrigger-BuIpmkh0.js";import"./CompositeItem-BhQuDj8k.js";import"./ToolbarRootContext-CuP0sp6C.js";import"./getDisabledMountTransitionStyles-FA238Yft.js";import"./getPseudoElementBounds-BtSbhkax.js";import"./chevron-down-DXt9ZLno.js";import"./index-R6Tv6HZ9.js";import"./error-BRk3uUov.js";import"./BaseCbacBanner-C4HnJj3a.js";import"./makeExternalStore-XBJJThK7.js";import"./Tooltip-DFgaGTvM.js";import"./PopoverPopup-Do1fTpIZ.js";import"./toNumber-hCFj_9FW.js";import"./useOsdkClient-gOeO2O2i.js";import"./DropdownField-BqQNkOSo.js";import"./withOsdkMetrics-C8ZLawBP.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
