import{f as n,j as t}from"./iframe-CBvkRIUU.js";import{O as p}from"./object-table-DjJEIe1D.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BKwUe3Dd.js";import"./index-BXsr_sd3.js";import"./Dialog-BYuCFtdD.js";import"./cross-BxPDeTaw.js";import"./svgIconContainer-zaihLJKE.js";import"./useBaseUiId-BdW6Vxcf.js";import"./InternalBackdrop-CqjPCfaJ.js";import"./composite-BLiKDWOD.js";import"./index-B_L9fJPx.js";import"./index-D29htoGr.js";import"./index-XeJsW83y.js";import"./useEventCallback-CXgYI6E5.js";import"./SkeletonBar-D2juOLOP.js";import"./LoadingCell-DZdojMxK.js";import"./ColumnConfigDialog-Cy6K3PQS.js";import"./DraggableList-BiUj-QL2.js";import"./Input-9gwG8ZaL.js";import"./useControlled-QfZe7zcM.js";import"./Button-DxtLqo2r.js";import"./small-cross-C0cO4Bbx.js";import"./ActionButton-TdeY79V7.js";import"./Checkbox-BRACUj3a.js";import"./minus-COWa7Y3n.js";import"./useValueChanged-DlFv6qTT.js";import"./caret-down-C4islEbu.js";import"./CollapsiblePanel-Wb4B_wKh.js";import"./MultiColumnSortDialog-CfuPylkL.js";import"./MenuTrigger-WqeMhozR.js";import"./CompositeItem-k5WYGXUX.js";import"./ToolbarRootContext-dVElv13J.js";import"./getDisabledMountTransitionStyles-B6eLmWj9.js";import"./getPseudoElementBounds-BOD8iCkY.js";import"./chevron-down-qbUtIyXP.js";import"./index-DTxr7HiL.js";import"./error-BgsnFA5h.js";import"./BaseCbacBanner-WLXaLtt6.js";import"./makeExternalStore-00dFAMnb.js";import"./Tooltip-B9MuMLE4.js";import"./PopoverPopup-C0aVXXHt.js";import"./toNumber-CMLVUMKq.js";import"./useOsdkClient-DnULp0wc.js";import"./DropdownField-wofgt-HJ.js";import"./withOsdkMetrics-DHEBZEMj.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
