import{f as n,j as t}from"./iframe-xXjK4u40.js";import{O as p}from"./object-table-O-3jQ9um.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BqE7-R_N.js";import"./Table-BbJlRSa6.js";import"./index-ClEtxyXp.js";import"./Dialog-DXAgbWWw.js";import"./cross-CYYIgRmS.js";import"./svgIconContainer-BFEw6mWP.js";import"./useBaseUiId-CYVPPn0B.js";import"./InternalBackdrop-DVk6VTtd.js";import"./composite-DvPYbg5V.js";import"./index-CLDg91iN.js";import"./index-_a-wUnXx.js";import"./index-DBt9FaTm.js";import"./useEventCallback-B9wksxZ5.js";import"./SkeletonBar-Dm-ma8v4.js";import"./LoadingCell-CD6b9iFl.js";import"./ColumnConfigDialog-Cf6fmwoq.js";import"./DraggableList-BnKMxPa0.js";import"./search-D-e0QOGp.js";import"./Input-DveW8qZb.js";import"./useControlled-2wc3LkSU.js";import"./Button-DlW9kU4X.js";import"./small-cross-FairzApE.js";import"./ActionButton-D1qtdWgf.js";import"./Checkbox-D6L_9qOp.js";import"./useValueChanged-B-337LZo.js";import"./CollapsiblePanel-C6Hymyfr.js";import"./MultiColumnSortDialog-BjqOmsIO.js";import"./MenuTrigger-TQnQLNwI.js";import"./CompositeItem-CT7o0f18.js";import"./ToolbarRootContext-BnchmzSb.js";import"./getDisabledMountTransitionStyles-9zy1v25V.js";import"./getPseudoElementBounds-Br9-teKs.js";import"./chevron-down-Bos-P3hL.js";import"./index-C7m05fpg.js";import"./error-BBBAnrZj.js";import"./BaseCbacBanner-DIsImwfz.js";import"./makeExternalStore-BLknL1Vk.js";import"./Tooltip-BOetRXH_.js";import"./PopoverPopup-1GndBLr2.js";import"./toNumber-BoN6sGo0.js";import"./useOsdkClient-BNT7N4NH.js";import"./tick-CC5Rf4Pc.js";import"./DropdownField-DY2W29ys.js";import"./withOsdkMetrics-DG9fGxL-.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
