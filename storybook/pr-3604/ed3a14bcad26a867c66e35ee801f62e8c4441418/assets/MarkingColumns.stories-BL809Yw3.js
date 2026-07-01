import{f as n,j as t}from"./iframe-DG6cRYaM.js";import{O as p}from"./object-table-BhowxCFr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ClUSx8-4.js";import"./Table-B1sLZAEk.js";import"./index-C804Ldbo.js";import"./Dialog-DaQN500U.js";import"./cross-hkUnUAaY.js";import"./svgIconContainer-C2bwKny8.js";import"./useBaseUiId-CKjHcJfl.js";import"./InternalBackdrop-CRKDgsWT.js";import"./composite-DoPO_86w.js";import"./index-C5l-7pVR.js";import"./index-9K3AdnqX.js";import"./index-BVglTwq4.js";import"./useEventCallback-Bfet1UtT.js";import"./SkeletonBar-mo7Cj_HQ.js";import"./LoadingCell-DGiLXLnL.js";import"./ColumnConfigDialog-BV2wiZdX.js";import"./DraggableList-C7705Wf_.js";import"./search-DbgJzrKA.js";import"./Input-tm7ZpwZm.js";import"./useControlled-DqYaKqHA.js";import"./Button-CihwDe7p.js";import"./small-cross-2wapIK0_.js";import"./ActionButton-DfMnHwqL.js";import"./Checkbox-BXB5Zp_t.js";import"./minus-A8jz_bS4.js";import"./tick-BX6vVxM_.js";import"./useValueChanged-D-1BZjCe.js";import"./caret-down-BsjTuKVb.js";import"./CollapsiblePanel-Ds_LoglZ.js";import"./MultiColumnSortDialog-CeVn0vJr.js";import"./MenuTrigger-DFDSAhdO.js";import"./CompositeItem-BImjti7u.js";import"./ToolbarRootContext-DsCp619J.js";import"./getDisabledMountTransitionStyles-DGBj8-OI.js";import"./getPseudoElementBounds-VOn6kIki.js";import"./chevron-down-C0uqVz-l.js";import"./index-pcoRf41n.js";import"./error-vOwQsFJ7.js";import"./BaseCbacBanner-6y1GK5zF.js";import"./makeExternalStore-DBNQ8xM4.js";import"./Tooltip-yBGlR9Yd.js";import"./PopoverPopup-DlQgYJRN.js";import"./toNumber-CCVB5zkG.js";import"./useOsdkClient-COtQ5KrF.js";import"./DropdownField--zQdaX80.js";import"./withOsdkMetrics-Bux00-k2.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
