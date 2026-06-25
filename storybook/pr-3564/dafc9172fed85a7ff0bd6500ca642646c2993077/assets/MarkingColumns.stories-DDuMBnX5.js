import{f as n,j as t}from"./iframe-V6i4bT8x.js";import{O as p}from"./object-table-DSTeRHQQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CmldX7sB.js";import"./Table-DPaC2Tbc.js";import"./index-Beds6yTA.js";import"./Dialog-B5AOQW4O.js";import"./cross-DDT71ccu.js";import"./svgIconContainer-aK674JUy.js";import"./useBaseUiId-Bj0YWIgW.js";import"./InternalBackdrop-bOabf4C7.js";import"./composite-CKYi_Tru.js";import"./index-CveQVLJL.js";import"./index-BWb5Ixk2.js";import"./index-BZYQi9Q4.js";import"./useEventCallback-BAcjBYrK.js";import"./SkeletonBar-CfjteiFP.js";import"./LoadingCell-uc1WABoi.js";import"./ColumnConfigDialog-DDOcNaun.js";import"./DraggableList-d1YhO3nK.js";import"./Input-Cx-yIF6Y.js";import"./useControlled-BlAInmFY.js";import"./Button-D0ll5qNd.js";import"./small-cross-DqRFfbcB.js";import"./ActionButton-xJtwLp5g.js";import"./Checkbox-boR1D0w0.js";import"./minus-BKBavqvO.js";import"./useValueChanged-BBefqv6y.js";import"./caret-down-BLZQ3si5.js";import"./CollapsiblePanel-De4_09r-.js";import"./MultiColumnSortDialog-iI8yez0p.js";import"./MenuTrigger-zJfeJRop.js";import"./CompositeItem-CABo2SFk.js";import"./ToolbarRootContext-KVPUKj7I.js";import"./getDisabledMountTransitionStyles-CIi_AY6w.js";import"./getPseudoElementBounds-By8xw9mt.js";import"./chevron-down-CclV5GtX.js";import"./index-BAspgGrR.js";import"./error-i_as8ABS.js";import"./BaseCbacBanner-CzSOd2jX.js";import"./makeExternalStore-DESvwURl.js";import"./Tooltip-rS_DcyFx.js";import"./PopoverPopup-CIk9VAJ9.js";import"./toNumber-COMGl6p4.js";import"./useOsdkClient-DoXoOyKj.js";import"./DropdownField-DvvdBB5M.js";import"./withOsdkMetrics-DgdhCmRn.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
