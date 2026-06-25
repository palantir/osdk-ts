import{f as n,j as t}from"./iframe-CQFAi6ne.js";import{O as p}from"./object-table-CRR2iZFY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-COehVcqV.js";import"./Table-C0gypTKm.js";import"./index-BEDh_jSa.js";import"./Dialog-5GqeEOEQ.js";import"./cross-i2bEYK5F.js";import"./svgIconContainer-D7ru5lR_.js";import"./useBaseUiId-CLWW2EHx.js";import"./InternalBackdrop-LQHyj1a7.js";import"./composite-BRGHW-yy.js";import"./index-BzgZFvoN.js";import"./index-CSHQIC00.js";import"./index-CU7bPWi0.js";import"./useEventCallback-CbeWuQQy.js";import"./SkeletonBar-yXKFSwZk.js";import"./LoadingCell-BcXkPhWH.js";import"./ColumnConfigDialog-ifupP1ph.js";import"./DraggableList-gBbVh-1M.js";import"./Input-CcxBrAvH.js";import"./useControlled-HD68msFu.js";import"./Button-fvci5wdi.js";import"./small-cross-DWPGJR99.js";import"./ActionButton-BW2M0FGe.js";import"./Checkbox-DhVsEifu.js";import"./minus-CPEdEk00.js";import"./useValueChanged-LVRnkHVK.js";import"./caret-down-Cl361krV.js";import"./CollapsiblePanel-BetL3eQv.js";import"./MultiColumnSortDialog-DMymww7r.js";import"./MenuTrigger-ChGjPb58.js";import"./CompositeItem-n5CzRG8J.js";import"./ToolbarRootContext-CeKgIlXp.js";import"./getDisabledMountTransitionStyles-B7FtIJEP.js";import"./getPseudoElementBounds-DcjEg9FF.js";import"./chevron-down-BABL6D55.js";import"./index-DnVRqorK.js";import"./error-1lVI_4Hp.js";import"./BaseCbacBanner-BA7cz8vR.js";import"./makeExternalStore-DBg3mFCv.js";import"./Tooltip-D8abhO4s.js";import"./PopoverPopup-BytmgdNv.js";import"./toNumber-nWKwP22_.js";import"./useOsdkClient-DBb1LfxU.js";import"./DropdownField-BEarunZL.js";import"./withOsdkMetrics-aFA4KXfR.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
