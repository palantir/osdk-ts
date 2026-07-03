import{f as n,j as t}from"./iframe-BYiHt7Yx.js";import{O as p}from"./object-table-3VWTIrNX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cg-Qahjf.js";import"./Table-BE8szX-c.js";import"./index-BxgnQNzz.js";import"./Dialog-bNjve1sv.js";import"./cross-C5MZKfQn.js";import"./svgIconContainer-DdKf9FwK.js";import"./useBaseUiId-B-6563bh.js";import"./InternalBackdrop-Ybo7T2HP.js";import"./composite-CzYUoSki.js";import"./index-DF7ZFgpi.js";import"./index-Dbye0IN8.js";import"./index-DBtzADlH.js";import"./useEventCallback-D-ACE0rz.js";import"./SkeletonBar-Bjb0rd5J.js";import"./LoadingCell-BsQ-4oz8.js";import"./ColumnConfigDialog-DHlHFV99.js";import"./DraggableList-CkzOS9dF.js";import"./search-BTo56nkz.js";import"./Input-CTAeT0FB.js";import"./useControlled-W_DxegSv.js";import"./Button-CFENmCqX.js";import"./small-cross-BfMomdZd.js";import"./ActionButton-BQmo4Ak8.js";import"./Checkbox-CePw19Vk.js";import"./minus-gwu3U-hb.js";import"./tick-t6bUroMn.js";import"./useValueChanged-CbyfWArl.js";import"./caret-down-BXburls8.js";import"./CollapsiblePanel-B9rpdzqz.js";import"./MultiColumnSortDialog-JfM-_X_-.js";import"./MenuTrigger-BPYrTw9t.js";import"./CompositeItem-CKpX90zr.js";import"./ToolbarRootContext-CRm7m06b.js";import"./getDisabledMountTransitionStyles-BYYk2Qix.js";import"./getPseudoElementBounds-CyPtDbrv.js";import"./chevron-down-0qpSsMok.js";import"./index-A8C_3FIg.js";import"./error-BztkUCs6.js";import"./BaseCbacBanner-0DruWpBT.js";import"./makeExternalStore-B88I9ii1.js";import"./Tooltip-DQfeOZaF.js";import"./PopoverPopup-DO1jbY0T.js";import"./toNumber-C0CN-Bap.js";import"./useOsdkClient-jjFKNa9D.js";import"./DropdownField-CcBQOYFC.js";import"./withOsdkMetrics-Dn9qlUhE.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
