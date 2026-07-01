import{f as n,j as t}from"./iframe-Cxvam0C5.js";import{O as p}from"./object-table-DoacJMIq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cg7_K448.js";import"./Table-Bb2nxMVL.js";import"./index-C2gRybHp.js";import"./Dialog-CCFFFLru.js";import"./cross-D_Gwc5hO.js";import"./svgIconContainer-D3zv1LcV.js";import"./useBaseUiId-Cjlu4K-G.js";import"./InternalBackdrop-DZHbzqcK.js";import"./composite-ByR5A3kp.js";import"./index-BgBRz9_h.js";import"./index-BmpxsyXZ.js";import"./index-D_71ddDA.js";import"./useEventCallback-BwePvl8o.js";import"./SkeletonBar-djl9UANY.js";import"./LoadingCell-BPSXRyPM.js";import"./ColumnConfigDialog-CS_5fJHx.js";import"./DraggableList-KDx7QYLo.js";import"./search-jdB6_71l.js";import"./Input-pSgyxzxr.js";import"./useControlled-BxPCKOxM.js";import"./Button-DzaMyFaf.js";import"./small-cross-Cibcdu2r.js";import"./ActionButton-OrS1_0wO.js";import"./Checkbox-DQYUW8CW.js";import"./minus-CKWGH5R7.js";import"./tick-Dg11Y2uZ.js";import"./useValueChanged-Dc1EaNRz.js";import"./caret-down-CuyuJZMH.js";import"./CollapsiblePanel-Bnu8XCqV.js";import"./MultiColumnSortDialog-DxCSnqvM.js";import"./MenuTrigger-CgqZUaYM.js";import"./CompositeItem-CibJohdN.js";import"./ToolbarRootContext-Cgqy4FZi.js";import"./getDisabledMountTransitionStyles-QFNix51w.js";import"./getPseudoElementBounds-Dhq_xigk.js";import"./chevron-down-CKaY6Jum.js";import"./index-DosNoob4.js";import"./error-W3xJRcOo.js";import"./BaseCbacBanner-Dm17axAK.js";import"./makeExternalStore-IfU_uMXx.js";import"./Tooltip-DQWxI82v.js";import"./PopoverPopup-9QiI1qN4.js";import"./toNumber-Cb9dCvPq.js";import"./useOsdkClient-D8hoZj5W.js";import"./DropdownField-DlRTsDZI.js";import"./withOsdkMetrics-D7_Oig26.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
