import{f as n,j as t}from"./iframe-sCg-x-0e.js";import{O as p}from"./object-table-BX8EU3OZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CrHR8OZb.js";import"./Table-XSYUKy0L.js";import"./index-BOZGu8jc.js";import"./Dialog-DcgY1rsx.js";import"./cross-BJXO8uQi.js";import"./svgIconContainer-Bz9LWwHW.js";import"./useBaseUiId-4dAni9Iz.js";import"./InternalBackdrop-BVOBKBAQ.js";import"./composite-BVDa5-ly.js";import"./index-LiLFEgZ-.js";import"./index-CrWYFlhm.js";import"./index-CGP6ehY7.js";import"./useEventCallback-CNSbNAYm.js";import"./SkeletonBar-BIgwvp1N.js";import"./LoadingCell-Dp7HbmGT.js";import"./ColumnConfigDialog-551t91Au.js";import"./DraggableList-Bd7_vgZQ.js";import"./search-BPEAhxRZ.js";import"./Input-tPBEPRbS.js";import"./useControlled-B79JWrmu.js";import"./Button-fnOjxPjt.js";import"./small-cross-0tZgzABZ.js";import"./ActionButton-BEYjTfRp.js";import"./Checkbox-DDjNMsZD.js";import"./useValueChanged-BC0e0lCK.js";import"./CollapsiblePanel-FsEtU7cP.js";import"./MultiColumnSortDialog-CgnVK0jo.js";import"./MenuTrigger-CbB8pxfE.js";import"./CompositeItem-Cf49LIHZ.js";import"./ToolbarRootContext-DaKAs0Iq.js";import"./getDisabledMountTransitionStyles-ktk2ef4e.js";import"./getPseudoElementBounds-3vHyrTXV.js";import"./chevron-down-BkzKMfVC.js";import"./index-CvyMTgef.js";import"./error-CMgoEmBB.js";import"./BaseCbacBanner-xCr7J2OL.js";import"./makeExternalStore-BNXnsqiG.js";import"./Tooltip-TD1OkRvp.js";import"./PopoverPopup-CdQkkK4P.js";import"./toNumber-DFY91DEW.js";import"./useOsdkClient-7ENmS5iO.js";import"./tick-RhwEwZL-.js";import"./DropdownField-DcC4oRKv.js";import"./withOsdkMetrics-CJrtQZxu.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
