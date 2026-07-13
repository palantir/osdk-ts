import{f as n,j as t}from"./iframe-CzmEyu7G.js";import{O as p}from"./object-table-C9qciGvi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DecrOcLq.js";import"./Table-Bn1_j4bK.js";import"./index-BbBaxdbV.js";import"./Dialog-DV_CNPOv.js";import"./cross-DrmyAQxN.js";import"./svgIconContainer-6eJu9o0G.js";import"./useBaseUiId-Bft1ngn8.js";import"./InternalBackdrop-DlfwudfQ.js";import"./composite-CcStSYJQ.js";import"./index-BkoNt8qx.js";import"./index-15j0Pfyt.js";import"./index-DXPeKfWw.js";import"./useEventCallback-xydu-k9-.js";import"./SkeletonBar-2eBGWBZU.js";import"./LoadingCell-Bb-4DO_g.js";import"./ColumnConfigDialog-BrNvVsuh.js";import"./DraggableList-C3LxvBcn.js";import"./search-B0DKZ6GP.js";import"./Input-1boXHLUv.js";import"./useControlled-CJz5npX-.js";import"./Button-BjdaHQGQ.js";import"./small-cross-DmdqHuHi.js";import"./ActionButton-DbA_ZTHg.js";import"./Checkbox-BgT5n_LP.js";import"./useValueChanged-BwdQVFl5.js";import"./CollapsiblePanel-Bt0ULZQm.js";import"./MultiColumnSortDialog-316mjarO.js";import"./MenuTrigger-DBpmBrAf.js";import"./CompositeItem-CHujYx5L.js";import"./ToolbarRootContext-ydnR1ibb.js";import"./getDisabledMountTransitionStyles-nG3ljsZy.js";import"./getPseudoElementBounds-Y6UPpOzg.js";import"./chevron-down-PphKRlo8.js";import"./index-CHsrx0Un.js";import"./error-B_jnp-Yv.js";import"./BaseCbacBanner-37TBICqp.js";import"./makeExternalStore-D4GI9pLL.js";import"./Tooltip-l9fscW_U.js";import"./PopoverPopup-BKI1af_U.js";import"./toNumber-ESmULOiQ.js";import"./useOsdkClient-6YoTrE10.js";import"./tick-7YfJf4Iu.js";import"./DropdownField-Bm22x0dC.js";import"./withOsdkMetrics-DqWt2DA4.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
