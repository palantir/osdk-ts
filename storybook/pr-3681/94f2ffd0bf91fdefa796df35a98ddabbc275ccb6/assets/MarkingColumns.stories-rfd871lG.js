import{f as n,j as t}from"./iframe-tF3hD-So.js";import{O as p}from"./object-table-DqPmkF3f.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CafC6HMh.js";import"./Table-BDqLkiex.js";import"./index-GBcOF-F_.js";import"./Dialog-DPjvkajg.js";import"./cross-Dfz4JsMi.js";import"./svgIconContainer-DtEF31st.js";import"./useBaseUiId-C4YmZA-c.js";import"./InternalBackdrop-BiJIV7kn.js";import"./composite-DQK6XbxI.js";import"./index-DCiez3-w.js";import"./index-Dfo0_ggV.js";import"./index-ICMR9kgk.js";import"./useEventCallback-DIqQcreM.js";import"./SkeletonBar-BtTO9p7X.js";import"./LoadingCell-DXUgDVQJ.js";import"./ColumnConfigDialog-DhinHt0E.js";import"./DraggableList-DpusRPqL.js";import"./search-73ENE7ac.js";import"./Input-C9BW0kGM.js";import"./useControlled-Bb3lODqh.js";import"./Button-Cz1tYGk1.js";import"./small-cross-BmDB5kIU.js";import"./ActionButton-I7OBl1t3.js";import"./Checkbox-Da5BHWLn.js";import"./useValueChanged-D_xqhibr.js";import"./CollapsiblePanel-MzBZUOzC.js";import"./MultiColumnSortDialog-BxIlmlDW.js";import"./MenuTrigger-CprxW0UP.js";import"./CompositeItem-DQyGAZQU.js";import"./ToolbarRootContext-COnfOXzK.js";import"./getDisabledMountTransitionStyles-CqDm8NHZ.js";import"./getPseudoElementBounds-ChiRAd9i.js";import"./chevron-down-E6cNQwIo.js";import"./index-B3qB2-5S.js";import"./error-CJjrzN0-.js";import"./BaseCbacBanner-B_nTdS1u.js";import"./makeExternalStore-B9Ehzq0f.js";import"./Tooltip-CjfxmRft.js";import"./PopoverPopup-BekicD9T.js";import"./toNumber-i3NduiA2.js";import"./useOsdkClient-C3YwpvQX.js";import"./tick-vUt-W7Xf.js";import"./DropdownField-D8XWj2l5.js";import"./withOsdkMetrics-CLQK8lew.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
