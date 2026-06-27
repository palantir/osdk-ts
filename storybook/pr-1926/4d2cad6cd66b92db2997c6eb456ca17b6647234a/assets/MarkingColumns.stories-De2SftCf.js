import{f as n,j as t}from"./iframe-DRQbuWSS.js";import{O as p}from"./object-table-Cne0o2pS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BCULYioV.js";import"./Table-BBnPKprx.js";import"./index-HtiMarMp.js";import"./Dialog-DRCKHd9J.js";import"./cross-CKfMKyM1.js";import"./svgIconContainer-DLwfGwbU.js";import"./useBaseUiId-DUa3o3xz.js";import"./InternalBackdrop-DIWhklV0.js";import"./composite-B9XfsfgZ.js";import"./index-CAXzKFcJ.js";import"./index-DUz8mwtP.js";import"./index-MQTlreiz.js";import"./useEventCallback-IMUMZvfe.js";import"./SkeletonBar-4TeVnYZa.js";import"./LoadingCell-BUGB5ZM8.js";import"./ColumnConfigDialog-CKDoX0bm.js";import"./DraggableList-D9t47oRn.js";import"./search-DW1JGNDR.js";import"./Input-DRi-o083.js";import"./useControlled-OzUH7HOT.js";import"./Button-G-FNaIS-.js";import"./small-cross-D5uGCNjk.js";import"./ActionButton-5mQ8WnG0.js";import"./Checkbox-BNnCga9m.js";import"./minus-DzazGIXC.js";import"./tick-CEPsIeWp.js";import"./useValueChanged-C5p9yqv7.js";import"./caret-down-Ckg_oghr.js";import"./CollapsiblePanel-CaicZ-qh.js";import"./MultiColumnSortDialog-CLrGHfR_.js";import"./MenuTrigger-CBi34kF3.js";import"./CompositeItem-D4OBRrKb.js";import"./ToolbarRootContext-CQBMomMx.js";import"./getDisabledMountTransitionStyles-BTMOEpKn.js";import"./getPseudoElementBounds-CKbIbQjr.js";import"./chevron-down-B_cwpV0X.js";import"./index-nf8Aj80m.js";import"./error-DGIoZa85.js";import"./BaseCbacBanner-CYm5VRkS.js";import"./makeExternalStore-D5RvM6rg.js";import"./Tooltip-90yJj2ry.js";import"./PopoverPopup-BoS1GHFO.js";import"./toNumber-B9NafC8F.js";import"./useOsdkClient-B-nKwTMn.js";import"./DropdownField-tlX0shCe.js";import"./withOsdkMetrics-DremVCLc.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
