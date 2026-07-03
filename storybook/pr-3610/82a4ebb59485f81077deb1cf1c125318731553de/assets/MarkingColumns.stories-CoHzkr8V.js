import{f as n,j as t}from"./iframe-BpTTav6E.js";import{O as p}from"./object-table-DRVdEb4U.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Df5e5mO9.js";import"./Table-BIiK8SRu.js";import"./index-DnNqScuN.js";import"./Dialog-dLWt1ini.js";import"./cross-M_pIfQOv.js";import"./svgIconContainer-xDffmDyE.js";import"./useBaseUiId-C1P880zF.js";import"./InternalBackdrop-DBAtMQSu.js";import"./composite-B5LqX7jj.js";import"./index-BrWuRadK.js";import"./index-DEB-hcmS.js";import"./index-B8InaBxB.js";import"./useEventCallback-BV4P0Sc7.js";import"./SkeletonBar-CcfUrAoO.js";import"./LoadingCell-DrmgfQa8.js";import"./ColumnConfigDialog-BP1ngZWy.js";import"./DraggableList-CXkv_3UD.js";import"./search-DRXiIi1S.js";import"./Input-D-Jo2YKE.js";import"./useControlled-DS6Fb4ZV.js";import"./Button-BuaxEZSl.js";import"./small-cross-BRdAVj1E.js";import"./ActionButton-5vCfzh5a.js";import"./Checkbox-BFv6NsZZ.js";import"./useValueChanged-BZ7qLHIN.js";import"./CollapsiblePanel-BehvXp2N.js";import"./MultiColumnSortDialog-KYpzWeTM.js";import"./MenuTrigger-REDUdJxd.js";import"./CompositeItem-D0nFRiE2.js";import"./ToolbarRootContext-B02kdYfC.js";import"./getDisabledMountTransitionStyles--aTmfuDm.js";import"./getPseudoElementBounds-CXfE86aC.js";import"./chevron-down-DP6F4-Rl.js";import"./index-mRA8IDTq.js";import"./error-C7YY6FkK.js";import"./BaseCbacBanner-3my90RS_.js";import"./makeExternalStore-B07NB1OM.js";import"./Tooltip-U5io4pC-.js";import"./PopoverPopup-D8QZcr-b.js";import"./toNumber-DsnIt_UJ.js";import"./useOsdkClient-Du9lO27I.js";import"./tick-CqPUcabn.js";import"./DropdownField-BKj4i4Vr.js";import"./withOsdkMetrics-B5wLpKbu.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
