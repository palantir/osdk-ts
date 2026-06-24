import{f as n,j as t}from"./iframe-LVnbb6Yu.js";import{O as p}from"./object-table-CTKNavmE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BdTZQcq6.js";import"./Table-DjofoQMv.js";import"./index-ByrFKAK-.js";import"./Dialog-DK5wTPYV.js";import"./cross-BN3_-kpD.js";import"./svgIconContainer-DqMgfdJG.js";import"./useBaseUiId-BjBFgHQh.js";import"./InternalBackdrop-BnDYXNXM.js";import"./composite-Bs8-dffJ.js";import"./index-DG5xEZOi.js";import"./index-orS0P2VL.js";import"./index-DO1g99YV.js";import"./useEventCallback-CG1dzVAp.js";import"./SkeletonBar-Bhx7s2O5.js";import"./LoadingCell-xq6pbYDC.js";import"./ColumnConfigDialog-xCj8Z0wo.js";import"./DraggableList-CPy3FLxT.js";import"./Input-BTYk3oi8.js";import"./useControlled-CjVFkVn8.js";import"./Button-BgPfuiQU.js";import"./small-cross--Gt3sC0I.js";import"./ActionButton-BH7y4Wry.js";import"./Checkbox-iiP5v_yz.js";import"./minus-vdfCLTTY.js";import"./useValueChanged-BC-R1SZV.js";import"./caret-down-CkPFz3xD.js";import"./CollapsiblePanel-crZF3kg1.js";import"./MultiColumnSortDialog-BjWw6WNt.js";import"./MenuTrigger-BWwIKkSl.js";import"./CompositeItem-5S0YSEs4.js";import"./ToolbarRootContext-DDxyGzI7.js";import"./getDisabledMountTransitionStyles-DaKxaezY.js";import"./getPseudoElementBounds-C8L4KA4F.js";import"./chevron-down-C4B2Be0U.js";import"./index-QT18j1TZ.js";import"./error-DGCLxLy2.js";import"./BaseCbacBanner-Bqzx28vL.js";import"./makeExternalStore-DRpUo2C3.js";import"./Tooltip--ZkTNnAp.js";import"./PopoverPopup-BSUjksmi.js";import"./toNumber-Gk2MJ447.js";import"./useOsdkClient-8KJBM5-2.js";import"./DropdownField-D8VG2S1g.js";import"./useStableShapeDefinition-D6Y_CBcI.js";import"./withOsdkMetrics-mjZ2gtnN.js";const er={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,er as default};
