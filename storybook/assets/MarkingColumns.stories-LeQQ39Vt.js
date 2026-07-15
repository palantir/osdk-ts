import{f as n,j as t}from"./iframe-D7EP2Nl4.js";import{O as p}from"./object-table-BbawvEZ2.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DGp1GxPx.js";import"./index-CC1Ji25o.js";import"./Dialog-CiAPc1OW.js";import"./cross-Bd_LA7d4.js";import"./svgIconContainer-BVa7fkHt.js";import"./useBaseUiId-BPX1mDbY.js";import"./InternalBackdrop-BjZYZ8-5.js";import"./composite-CN81rFgf.js";import"./index-BoXrHjI8.js";import"./index-DaUDeee-.js";import"./index-BpxNkiJ7.js";import"./useEventCallback-BpN4KZqz.js";import"./SkeletonBar-4tD_PAtX.js";import"./LoadingCell-DykYKaqP.js";import"./ColumnConfigDialog-vyWEWVZZ.js";import"./DraggableList-CYp5yap6.js";import"./search-CItYFCQV.js";import"./Input-By5ea0ub.js";import"./useControlled-Cx80D7ZN.js";import"./Button-CWzN916h.js";import"./small-cross-BySHyRL5.js";import"./ActionButton-C0w-HZ9k.js";import"./Checkbox-BOTynsga.js";import"./useValueChanged-B0Aqx_aX.js";import"./CollapsiblePanel-DkDsKuJp.js";import"./MultiColumnSortDialog-dqYNQnKA.js";import"./MenuTrigger-BL4pM7Gq.js";import"./CompositeItem-BaAUR1L8.js";import"./ToolbarRootContext-BHBnS7Gi.js";import"./getDisabledMountTransitionStyles-BNUqHqSi.js";import"./getPseudoElementBounds-BdWdzVxW.js";import"./chevron-down-mApNF1vq.js";import"./index-D14mafS5.js";import"./error-BlJKnuYG.js";import"./BaseCbacBanner-nMnHkLbx.js";import"./makeExternalStore-DHgoa7Q2.js";import"./Tooltip-wl5Aqqfp.js";import"./PopoverPopup-YinXfpmo.js";import"./toNumber-Bd-OxSt-.js";import"./useOsdkClient-BQPoIU2S.js";import"./tick-aH4y9Uq0.js";import"./DropdownField-UqovQjlW.js";import"./withOsdkMetrics-Bvo4bxXX.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
