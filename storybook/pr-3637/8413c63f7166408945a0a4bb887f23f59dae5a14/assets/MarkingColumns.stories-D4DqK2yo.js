import{f as n,j as t}from"./iframe-B7S14Aos.js";import{O as p}from"./object-table-Bas1-Y3d.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bf135Psp.js";import"./Table-BRAOivps.js";import"./index-C_IgEdkh.js";import"./Dialog-DyyYQcdv.js";import"./cross-DeAJXrbb.js";import"./svgIconContainer-KG3nrgaK.js";import"./useBaseUiId-DGUZpTmw.js";import"./InternalBackdrop-vFlxKACl.js";import"./composite-5kjVXJgI.js";import"./index-D3yCgQZI.js";import"./index-D3qSs-3e.js";import"./index-DVNFYOiN.js";import"./useEventCallback-Cv9Xvt3H.js";import"./SkeletonBar-BOADw8hK.js";import"./LoadingCell-Ciq5vjxt.js";import"./ColumnConfigDialog-DcSSx8Eq.js";import"./DraggableList-Dzn5mSYk.js";import"./search-obVquwt6.js";import"./Input-CmzlYaiR.js";import"./useControlled-BsU2p9K-.js";import"./Button-pGW4ihbJ.js";import"./small-cross-D3zspu0U.js";import"./ActionButton-CkUqIHoZ.js";import"./Checkbox-8keTPBvD.js";import"./useValueChanged-CoUsxyn0.js";import"./CollapsiblePanel-CLth_m82.js";import"./MultiColumnSortDialog-C66UK7LJ.js";import"./MenuTrigger-CpYltefy.js";import"./CompositeItem-C7J9saNp.js";import"./ToolbarRootContext-DsZj3SiA.js";import"./getDisabledMountTransitionStyles-DjR9dHL-.js";import"./getPseudoElementBounds-BEY2Q3IX.js";import"./chevron-down-C1prn_ux.js";import"./index-ByLKhVd-.js";import"./error-BixB69Os.js";import"./BaseCbacBanner-iIiY9lu0.js";import"./makeExternalStore-CVq6FjZk.js";import"./Tooltip-CkCqYz5d.js";import"./PopoverPopup-Dsaurex7.js";import"./toNumber-CCseGJvo.js";import"./useOsdkClient-D7eQ2myk.js";import"./tick-Dbz9S8jy.js";import"./DropdownField-C-zfV3g_.js";import"./withOsdkMetrics-mIC10yq-.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
